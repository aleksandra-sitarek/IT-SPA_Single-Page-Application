import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';

import { Home } from './views/Home';
import { Rooms } from './views/Rooms';
import { Nav } from './navigation/Nav';
import { Treatments } from './views/treatments';
import { Calendar } from './views/Calendar';


const main = document.querySelector('main');

// wstawiamy nawigacje przed elementem `main`
main.before(Nav());

// main.append( Home('John') );
main.append(Home(''));


document.body.addEventListener('navigate', (event) => {
    // przechowuje komponent, czyli funkcje ktora zwroci jakis HTML
    const component = event.detail;

    main.innerHTML = '';
    main.append(component());
});
