import dayjs from 'dayjs';
import {form, dateInput, hoursInputs, nameClientInput} from './inputs';

const dateNow = dayjs();
const dateNowFormat = dateNow.format('YYYY-MM-DD');

// determina o valor mínimo e atual do input date
dateInput.value = dateNowFormat;
dateInput.min = dateNowFormat;

validationHours();
dateInput.onchange = () => {
    validationHours();
    clearInputsRadio();
};

function validationHours() {
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

function clearInputsRadio() {
    hoursInputs.forEach(input => input.checked = false);
};