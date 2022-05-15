import { Home } from '../views/Home';
import { Rooms } from '../views/Rooms';
import { Button } from '../common/Button';
import { Cart } from '../views/Cart';
import { Treatments } from '../views/treatments';
import { Calendar } from '../views/Calendar';


const navigateTo = (component) => {
    const navigateEvent = new CustomEvent('navigate', {
        detail: component
    });

    document.body.dispatchEvent(navigateEvent);
};

const navItems = [
    { text: 'O nas', component: Home },
    { text: 'Pokoje', component: Rooms },
    { text: 'Zabiegi', component: Treatments },
    { text: 'Zarezerwuj', component: Calendar },
    { text: '🛒', component: Cart },
];

export function Nav() {
    const nav = document.createElement('nav');

    const buttons = navItems.map(navItem => {
        return Button({
            text: navItem.text,
            callback: () => {
                navigateTo(navItem.component);
            }
        });
    });

    const burger = document.querySelector(".burger");

    const iconBurger = document.querySelector(".bar");
    const iconX = document.querySelector(".close");
    const wrapper = document.querySelector(".wrapper");


    burger.addEventListener("click", function () {
        iconBurger.classList.toggle("show");
        iconX.classList.toggle("show");
        burger.classList.toggle("active");
        wrapper.classList.toggle("show");
    });


    nav.append(...buttons);

    return nav;
}
