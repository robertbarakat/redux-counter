export const increase = (counter) => ({
    type: 'ADD',
    counter
});

export const decrease = (counter) => ({
    type: 'REMOVE',
    counter
});

export const reset = (counter) => ({
    type: 'RESET',
    counter
});

export const plusten = (counter) => ({
    type: 'PLUSTEN',
    counter
});

export const minusten = (counter) => ({
    type: 'MINUSTEN',
    counter
});