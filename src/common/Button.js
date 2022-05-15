export function Button(options) {
    // lub skorzystaj z destrukturyzacji obiektu options
    // const { text, callback } = options;

    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('btn');
    button.innerText = options.text;
    button.addEventListener('click', options.callback);

    return button;
}
