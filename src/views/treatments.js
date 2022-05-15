import { TreatmentDetails } from "./TreatmentDetails";
import { Button } from "../common/Button";
import { cartManager } from "../cart/cart-manager";

export function Treatments() {
    const section = document.createElement('section');

    section.innerHTML = `
    <div class="divTreatments">
    <h2>Poznaj SPA</h2>
    <p>Loading...</p>
    </div>
    <ul></ul>
`;



    fetch('http://localhost:3000/treatments')
        .then(response => response.json())
        .then(Treatments => {
            const lis = Treatments.map(treatment => {
                const li = document.createElement('li');
                li.innerHTML = `
                <h4>${treatment.name}</h4>
                <p>${treatment.price.toFixed(2)} PLN</p>
                <footer></footer>
            `;

                const seeMoreButton = Button({
                    text: 'Dowiedz się więcej',
                    callback: () => {
                        const navigateEvent = new CustomEvent('navigate', {
                            detail: () => TreatmentDetails(treatment.id)
                        });

                        document.body.dispatchEvent(navigateEvent);
                    }
                });

                const addToCartButton = Button({
                    text: 'Dodaj do koszyka',
                    callback: () => {
                        cartManager.addItem(treatment);
                    }
                });

                // footer jest ostatnim dzieckiem elementu li
                li.lastElementChild.append(seeMoreButton, addToCartButton);

                li.classList.add('liTreatments');
                return li;
            });

            section.querySelector('p').remove();
            section.lastElementChild.append(...lis);
        });

    return section;
}



