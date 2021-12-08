"use strict";
const calculator = (a, b, op) => {
    switch (op) {
        case 'multiply':
            return a * b;
        case 'add':
            return a + b;
        case 'subtraction':
            return a - b;
    }
};
