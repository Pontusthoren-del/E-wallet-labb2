import { createSlice } from "@reduxjs/toolkit";

// Cards är en array för att vi ska samla alla våra kort där, oavsett
// hur många man lägger till. Varje kort är ett helt objekt i listan,
// så vi kan lätt lägga till fler med .push() och visa alla med .map().

// activeCardId sparar bara ID:t på det aktiva kortet, inte hela objektet.
// Man vill bara peka på det aktiva kortet, inte hela objektet - annars
// blir det svårt att jämföra vilket kort som är aktivt i listan
// (=== jämför inte innehåll på objekt, bara om det är exakt samma objekt).

// formData i CardForm.jsx ligger INTE i Redux, utan i vanlig useState.
// Det är bara CardForm som bryr sig om vad man skriver innan man sparar,
// ingen annan del av appen behöver veta det - så det känns onödigt att
// lägga det i Redux också.

const initialState = {
    cards: [
        {
            id: "1",
            cardNumber: "1234 5678 9876 1234",
            cardHolder: "Pontus Thoren",
            expiry: "02/28",
            vendor: "bitcoin",
        },
        {
            id: "2",
            cardNumber: "9999 9999 8888 8888",
            cardHolder: "Noel Thoren",
            expiry: "11/28",
            vendor: "ninja",
        },
        {
            id: "3",
            cardNumber: "9876 8888 1111 3421",
            cardHolder: "Elliott Thoren",
            expiry: "02/30",
            vendor: "evil",
        },
        {
            id: "4",
            cardNumber: "4321 6758 9876 9999",
            cardHolder: "Amanda Hallén",
            expiry: "07/28",
            vendor: "blockchain",
        },
    ],
    activeCardId: "1",
};

const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        addCard: (state, action) => {
            state.cards.push(action.payload);
        },
        setActiveCard: (state, action) => {
            state.activeCardId = action.payload;
        },
        removeActiveCard: (state) => {
            state.cards = state.cards.filter(
                (card) => card.id !== state.activeCardId,
            );
            state.activeCardId = state.cards[0]?.id ?? null;
        },
    },
});

export const { addCard, setActiveCard, removeActiveCard } = cardsSlice.actions;
export default cardsSlice.reducer;
