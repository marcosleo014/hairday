import { apiConfig } from './api-config.js';
import { toastMsg } from '../toast-notification.js'

// Inserir novo agendamento no servidor
export async function newAppointment(appointment) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/appointments`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(appointment)
        });
        toastMsg('Agendamento realizado!')
    } catch (error) {
        console.log("Deu ruim demais:", error)
        toastMsg('Erro ao realizar agendamento!')
    }
}

// Obter todos os agendamentos realidados ou em uma data específica
export async function getAppointments(date) { //argumento opcional
    try {
        const response = await fetch(`${apiConfig.baseURL}/appointments`);
        let data = await response.json();
        if (date) {
            data = data.filter(appointment => {
                return appointment.date === date;
            });
        }
        return data
    } catch (error) {
        console.log("Deu ruim demais:", error);
    }
}

// remoção de um agendamento
export async function deleteAppointment(id) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/appointments/${id}`, {
            method: 'DELETE'
        });
        toastMsg('Agendamento cancelado!');
    } catch (error) {
        console.log('Deu ruim:'), error;
        toastMsg('Erro ao cancelar agendamento');
    }
}