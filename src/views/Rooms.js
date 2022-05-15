import { Button } from "../common/Button";
import { RoomDetails } from "./RoomDetails";
import { cartManager } from '../cart/cart-manager';

export function Rooms() {

    const section = document.createElement('section');

    section.innerHTML = `
       <div class="divRooms">
       <h2>Dostępne pokoje</h2>
        <p>Loading...</p>
        </div> 
        <ul></ul>
    `;

    fetch('http://localhost:3000/rooms')
        .then(response => response.json())
        .then(rooms => {
            const lis = rooms.map(room => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <h4>${room.name}</h4>
                    <p>${room.price.toFixed(2)} PLN</p>
                    <footer></footer>
                `;

                const seeMoreButton = Button({
                    text: 'Dowiedz się więcej',
                    callback: () => {
                        const navigateEvent = new CustomEvent('navigate', {
                            detail: () => RoomDetails(room.id)
                        });

                        document.body.dispatchEvent(navigateEvent);
                    }
                });

                const addToCartButton = Button({
                    text: 'Dodaj do koszyka',
                    callback: () => {
                        cartManager.addItem(room);
                    }
                });

                // const removeCartItemButton = Button({
                //     text: 'Usuń',
                //     callback: () => {
                //         cartManager.removeItem(room);
                //     }
                // });

                // footer jest ostatnim dzieckiem elementu li
                li.lastElementChild.append(seeMoreButton, addToCartButton); //removeCartItemButton
                li.classList.add('liRooms');
                return li;
            });

            section.querySelector('p').remove();
            section.lastElementChild.append(...lis);
        });

    return section;
}
