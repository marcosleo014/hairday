import {form, hoursInputs, dateInput, nameClientInput} from './inputs';
import { newAppointment, getAppointments } from '../api/api-operations.js'
import { addAppointment, dateSelectInput } from '../appointmentOperations/addAppointment.js';
import dayjs from 'dayjs';
import { toastMsg } from '../toast-notification.js';

form.onsubmit = async (event) => {
    event.preventDefault();
    const hourInput = document.querySelector('input[type="radio"]:checked');
    if (!hourInput){
        return toastMsg('Escolha um horário para agendamento!')
    }
    const name = nameClientInput.value.trim();
    if (!name) {
        return toastMsg('Informe o nome do cliente!')
    }
    const appointment = {
        id: Date.now().toString(),
        client: name,
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