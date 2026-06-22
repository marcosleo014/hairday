import {form, hoursInputs, dateInput, nameClientInput} from './inputs';

form.onsubmit = (event) => {
    event.preventDefault();
    const hourInput = document.querySelector('input[type="radio"]:checked');
    const appointment = {
        client: nameClientInput.value,
        date: dateInput.value,
        hour: hourInput.value
    }
    console.log(appointment)
}