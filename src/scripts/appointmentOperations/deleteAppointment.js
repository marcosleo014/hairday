import { deleteAppointment } from '../api/api-operations.js'
import { dateInput, hoursInputs } from '../form/inputs.js'
import { validationHours } from '../form/validationInputsHours.js';
import { addAppointment, dateSelectInput } from './addAppointment.js';


// função de adicionar evento para deletar o agendamento é executada no momneto em que os agendamentos são carregados na tela
export function addEventBtnDelete() {

    const btnDeteleList = document.querySelectorAll('.btnDelete');

    btnDeteleList.forEach(btn => btn.onclick = async () => {
        const id = btn.dataset.id;
        await deleteAppointment(id);
        addAppointment(dateSelectInput.value);
        validationHours();
        
         testInputHourDisable(btn)


    });
}

// descobre se tem ou não que reativar o input hour
function testInputHourDisable(btn) {
    const hour = btn.previousElementSibling.previousElementSibling.innerText;
    if(dateInput.value === dateSelectInput.value) {
        hoursInputs.forEach(inputRadio => {
            if(inputRadio.closest('label').innerText === hour) {
                inputRadio.disabled = false;
                console.log(inputRadio)
            };
        })
    }
}