import { validationHours, avaliableHours } from './form/validationInputsHours.js';
import { addAppointment, dateSelectInput } from './appointmentOperations/addAppointment.js';

window.addEventListener('load', (event) =>{
    validationHours();
    avaliableHours();
    addAppointment(dateSelectInput.value);
});