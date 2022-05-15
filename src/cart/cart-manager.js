
const key = 'IT_SPA_CART';

export const cartManager = {

    addItem: (item) => {
        // serializacja --> zamiana na ciag znakow
        const cart = localStorage.getItem(key);

        if (cart === null) {
            const serializedItem = JSON.stringify( [item] );
            localStorage.setItem(key, serializedItem);
        } else {
            // zamieniamy ciag znakow na tablice
            const parsedCart = JSON.parse(cart);
            // dodajemy nowy produkt do tablicy
            parsedCart.push(item);
            // zamieniamy tablice na ciag znakow
            const serializedCart = JSON.stringify(parsedCart);
            // zapisujemy go do local storage
            localStorage.setItem(key, serializedCart);
        }
    },

    removeItem: (item) => {
        const cart = localStorage.getItem(key);

        if (cart !== null) {
            const parsedCart = JSON.parse(cart);

            const filteredItems = parsedCart.filter(cartItem => {
                return cartItem.id !== item.id;
            });

            const serializedItems = JSON.stringify(filteredItems);
            localStorage.setItem(key, serializedItems);
        }
    },

    getAllItems: () => {
        const cart = localStorage.getItem(key);

        if (cart === null) {
            return [];
        } else {
            const parsedCart = JSON.parse(cart);
            return parsedCart;
            // LUB krocej
            // return JSON.parse(cart);
        }
    }

};
