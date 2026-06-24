import { validationHours, avaliableHours } from './form/validationInputsHours.js';
import { addAppointment, dateSelectInput } from './appointmentOperations/addAppointment.js';
import { toastMsg } from './toast-notification.js';

const btnSubmit = document.querySelector('#btn-create-appointment');

window.addEventListener('load', async (event) =>{
    try {
        validationHours();
        avaliableHours();
        await addAppointment(dateSelectInput.value);
        btnSubmit.disabled = false;
    } catch (error) {
        toastMsg('Erro ao carregar agendamentos!');
    }
});