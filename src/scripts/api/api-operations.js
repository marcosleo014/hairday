import { apiConfig } from './api-config.js';

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
        console.log("Agendamento criado com sucesso:", response)
    } catch (error) {
        console.log("Deu ruim demais:", error)
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
        console.log("Deu ruim demais:", error)
    }
}

// remoção de um agendamento
export async function deleteAppointment(id) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/appointments/${id}`, {
            method: 'DELETE'
        });
        console.log('Agendamento cancelado:', response);
    } catch (error) {
        console.log('Deu ruim:'), error;
    }
}