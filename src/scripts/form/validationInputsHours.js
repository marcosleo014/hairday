import dayjs from 'dayjs';
import {form, dateInput, hoursInputs, nameClientInput} from './inputs';
import { getAppointments } from '../api/api-operations.js';

const dateNow = dayjs();
const dateNowFormat = dateNow.format('YYYY-MM-DD');

// determina o valor mínimo e atual do input date
dateInput.value = dateNowFormat;
dateInput.min = dateNowFormat;

dateInput.onchange = () => {
    validationHours();
    clearInputsRadio();
    avaliableHours();
};

export function validationHours() {
    console.log('função validationHours executada')
    const dateInputFormat = dateInput.value;
    if (dateNowFormat === dateInputFormat){
        hoursInputs.forEach((input) => {
            const numberHourNow = Number(dateNow.format('HH'));
            const numberHour = Number(input.closest('label').innerText.slice(0, 2));
            if(numberHourNow >= numberHour) {
                input.disabled = true;
            };
        });
    } else {
        hoursInputs.forEach((input) => {
            input.disabled = false
        });
    };
};

// desativa os inputs hours de acordo com a presença dos agendamentos no servidor
export async function avaliableHours() {
    const appointmentsToday = await getAppointments(dateInput.value);
    appointmentsToday.forEach(item => {
        document.querySelector(`input[type='radio'][value='${item.hour}']`).disabled = true;
    })
}

function clearInputsRadio() {
    hoursInputs.forEach(input => input.checked = false);
};
