// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
const validateCred = (card) => {

    //Copying the original array of card numbers
    let cardCopy = [...card];

    //Removing the last digit from the array and saving it
    const checkDigit = cardCopy.pop();

    //Reversing the array
    cardCopy.reverse()

    //Looping through the numbers
    let sumOfDigits = 0;
    for (let i = 0; i < cardCopy.length; i++) {

        let digit = cardCopy[i];
        if (i % 2 !== 0) {
            sumOfDigits += digit;
        } else {
            digit *= 2;
            if (digit > 9) {
                sumOfDigits += digit - 9;
            } else {
                sumOfDigits += digit;
            }
        }
    }
    return ((sumOfDigits + checkDigit) % 10 === 0);
}

const findInvalidCards = (arrayOfCards) => {
    const arrayOfInvalidCards = arrayOfCards.filter(card => !validateCred(card))
    return arrayOfInvalidCards;
}

const idInvalidCardCompanies = (arrayOfCards) => {
    let companies = [];

    arrayOfCards.forEach(card => {
        if (card[0] === 3 && companies.indexOf('Amex (American Express)') === -1) {
            return companies.push('Amex (American Express)')
        } else if (card[0] === 4 && companies.indexOf('Visa') === -1) {
            return companies.push('Visa');
        } else if (card[0] === 5 && companies.indexOf('Mastercard') === -1) {
            return companies.push('Mastercard');
        } else if (card[0] === 6 && companies.indexOf('Discover') === -1) {
            return companies.push('Discover');
        } else if (companies.indexOf('Company not found') === -1) {
            return companies.push('Company not found');
        }
    })

    return companies;
}

