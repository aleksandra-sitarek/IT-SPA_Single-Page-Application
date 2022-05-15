import { Button } from "../common/Button";
import { Rooms } from "./Rooms";

export function RoomDetails(id) {

    const section = document.createElement('section');

    const navigateTo = (component) => {
        const navigateEvent = new CustomEvent('navigate', {
            detail: component
        });

        document.body.dispatchEvent(navigateEvent);
    };

    section.innerHTML = `
    <div class="divRoomDetail">
    <h2>Informacje o pokoju</h2>
        <p>Loading...</p>
        </div>
    `;

    fetch(`http://localhost:3000/rooms/${id}`)
        .then(response => response.json())
        .then(room => {
            const article = document.createElement('article');

            article.innerHTML = `
                <h3>${room.name}</h3>
                <p>🛏️ ${room.beds}</p>
                <p>Maksymalna liczba gości: ${room.guests}</p>
                <p>
                    <strong>${room.price.toFixed(2)} PLN</strong>
                </p>
            `;

            const backButton = Button({
                text: 'Cofnij',
                callback: () => {
                    navigateTo(Rooms);
                }
            });
            backButton.classList.add('buttonBack');
            section.querySelector('p').remove();
            section.append(article, backButton);
        });



    return section;
}
