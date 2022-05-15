import { cartManager } from "../cart/cart-manager"; 
import { Button } from "../common/Button";

export function Cart() {

    const section = document.createElement('section');

    const navigateTo = (component) => {
        const navigateEvent = new CustomEvent('navigate', {
            detail: component
        });

        document.body.dispatchEvent(navigateEvent);
    };


    section.innerHTML = `
    <div class="divCart"> 
    <h2>Twój koszyk</h2>
    </div>
    `;

    const table = document.createElement('table');
    table.classList.add('table');

    table.innerHTML = `
        <tr>
            <td>Usługa</td>
            <td>Cena</td>
            <td></td>
        </tr>
    `;

    const allItems = cartManager.getAllItems();

    let price = 0;
    const tableRows = allItems.map((item) => {


        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)} PLN</td>
            <td></td>
        `;



        const removeCartItemButton = Button({
            text: 'Usuń',
            callback: () => {
                cartManager.removeItem(item);
                tr.remove();
                price = price - item.price;
                navigateTo(Cart);

            }
        });
        tr.lastElementChild.append(removeCartItemButton);
        return tr;
    });

    allItems.map(item => {
        price = price + item.price;
    })
    const summary = document.createElement('summary');
    summary.innerHTML = `<div class="divSummary">
        <h2>Podsumowanie</h2>
        <p>Cena: ${price} PLN</p>
        </div>
    `;


    table.append(...tableRows);
    section.append(table);
    section.append(summary);

    return section;

}
