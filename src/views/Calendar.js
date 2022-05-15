import { Rooms } from "./Rooms";
import { Button } from "../common/Button";

export function Calendar() {
    const section = document.createElement('section');
    var today = new Date().toISOString().slice(0, 10);
    const navigateTo = (component) => {
        const navigateEvent = new CustomEvent('navigate', {
            detail: component
        });

        document.body.dispatchEvent(navigateEvent);
    };


    section.innerHTML = ` <div class="divCalendarText"> <h2>Zarezerwuj pobyt w naszym hotelu</h2>
    </div>
    <div class="divCalendar">
    <label>
    Data przyjazdu: <input type="date" id="arrivalDate" min=${today} >
    Data wyjazu: <input type="date" id="departureDate" >
    </label>
    </div>`;



    const confButton = Button({
        text: 'Potwierdź',
        callback: () => {

            const y = document.getElementById("arrivalDate").value;
            document.getElementById("departureDate").setAttribute("min", y)
            document.getElementById("departureDate").value = y;
            // navigateTo(Rooms);
        }
    });

    const searchButton = Button({
        text: 'Wyszukaj',
        callback: () => {
            if (document.getElementById("departureDate").value >= document.getElementById("arrivalDate").value && document.getElementById("departureDate").value != 0) {
                navigateTo(Rooms);
            }
            else {
                alert("Potwierdź datę przyjazdu. Data wyjazdu nie może być wcześniejsza niż data przyjazdu!")
            }
        }
    });

    searchButton.classList.add('buttonNav');
    confButton.classList.add('confirmButton');
    section.append(confButton, searchButton);
    return section;
}

