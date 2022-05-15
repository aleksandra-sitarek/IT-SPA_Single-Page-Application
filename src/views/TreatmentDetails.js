import { Button } from "../common/Button";
import { Treatments } from "./treatments";

export function TreatmentDetails(id) {

    const section = document.createElement('section');

    const navigateTo = (component) => {
        const navigateEvent = new CustomEvent('navigate', {
            detail: component
        });

        document.body.dispatchEvent(navigateEvent);
    };

    section.innerHTML = `
        <div class="divTreatmentDetails">
        <h2>Informacja o zabiegu</h2>
        <p>Loading...</p>
        </div>
    `;

    fetch(`http://localhost:3000/treatments/${id}`)
        .then(response => response.json())
        .then(treatment => {
            const article = document.createElement('article');

            article.innerHTML = `
                <h3>${treatment.name}</h3>
                <p>partia ciała: ${treatment.area}</p>
                <p>⏱ ${treatment.time} min</p>
                <p>
                    <strong>${treatment.price.toFixed(2)} PLN</strong>
                </p>
            `;

            const backButton2 = Button({
                text: 'Cofnij',
                callback: () => {
                    navigateTo(Treatments);
                }
            });
            backButton2.classList.add('backButton2');
            section.querySelector('p').remove();
            section.append(article, backButton2);
        });

    return section;
}