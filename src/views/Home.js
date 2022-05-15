// import jquery from "jquery";
// import axios from 'axios';

export function Home() {
    const section = document.createElement('section');


    section.innerHTML = `
    <header>
    <div class="bgcHotel"></div></header>
        <h2 class="greeting">Witaj w IT SPA</h2> 
        <div class="text"> 
        <p>Pięciogwiazdkowe IT SPA to prawdziwa enklawa relaksu, miejsce gwarantujące pielęgnację ciała i odpoczynek umysłu w atmosferze
        spokoju i harmonii. Oferujemy odprężające rytuały opierające się na technikach masażu zaczerpniętych z filozofii dalekiego wschodu 
        oraz naturalnych składnikach.</p>
        </div>
        <div class="ofert">
        <p>U nas możesz skorzystać z usług wyszkolonych masażystów, skorzystać z zabiegów SPA&Wellnes. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    `;

    return section;
}

// export default Home;