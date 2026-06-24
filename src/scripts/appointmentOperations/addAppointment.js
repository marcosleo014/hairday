import { getAppointments } from '../api/api-operations.js';
import dayjs from 'dayjs';
import { addEventBtnDelete } from './deleteAppointment.js';
import { toastMsg } from '../toast-notification.js';

export const dateSelectInput = document.querySelector('#date-select');
const listMorning = document.querySelector('.list-morning');
const listAfternoon = document.querySelector('.list-afternoon');
const listNight = document.querySelector('.list-night');

dateSelectInput.onchange = (event) => {
    try {
        addAppointment(event.target.value);
    } catch(error) {
        toastMsg('Erro ao carregar agendamentos!');
    }
}

dateSelectInput.value = dayjs().format('YYYY-MM-DD');

export async function addAppointment(date) {
    clearAppointmentDOM();
    const appointments = await getAppointments(date);
    console.log(appointments)
    // ordenação dos agendamentos com base na propriedade hour
    appointments.sort((appointmentA, appointmentB) => appointmentA.hour > appointmentB.hour ? 1 : -1);
    console.log(appointments)
    appointments.forEach(item => {
        addAppointmentDOM(item);
    });
    addEventBtnDelete();
    checkMsgEMpty();
};

function addAppointmentDOM(appointment) {
    const li = document.createElement('li');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const btnDelete = document.createElement('button');
    const hour = appointment.hour;
    
    btnDelete.dataset.id = appointment.id;
    btnDelete.classList.add('btnDelete');
    p1.innerText = hour;
    p2.innerText = appointment.client;
    li.append(p1, p2, btnDelete);

    const numberHour = Number(hour.slice(0,2));
    if (numberHour < 13) {
        listMorning.append(li);
    } else if (numberHour > 18) {
        listNight.append(li);
    } else {
        listAfternoon.append(li);
    };
}

function clearAppointmentDOM() {
    listMorning.replaceChildren();
    listNight.replaceChildren();
    listAfternoon.replaceChildren();
}

function checkMsgEMpty() {
    checkAppointmentLists(listMorning);
    checkAppointmentLists(listNight);
    checkAppointmentLists(listAfternoon);
};

function checkAppointmentLists(list) {
    if (list.children.length) {
        list.previousElementSibling.hidden = true;
        list.style.padding = '20px';
    } else {
        list.previousElementSibling.hidden = false;
        list.style.padding = '0px';
    };
};