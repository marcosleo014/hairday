import {form, hoursInputs, dateInput, nameClientInput} from './inputs';
import { newAppointment, getAppointments } from '../api/api-operations.js'
import { addAppointment, dateSelectInput } from '../appointmentOperations/addAppointment.js';
import dayjs from 'dayjs';

form.onsubmit = async (event) => {
    event.preventDefault();
    const hourInput = document.querySelector('input[type="radio"]:checked');
    const appointment = {
        id: Date.now().toString(),
        client: nameClientInput.value,
        date: dateInput.value,
        hour: hourInput.value
    };
    console.log('Agendamento:', appointment);
    await newAppointment(appointment);
    await getAppointments();
    hourInput.disabled = true;
    form.reset();
    dateInput.value = appointment.date;
    addAppointment(dateSelectInput.value);
}