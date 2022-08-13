function fruit(product, grams, pricePerKg) {
    console.log(`I need $${((grams/1000)*pricePerKg).toFixed(2)} to buy ${(grams/1000).toFixed(2)} kilograms ${product}.`);
}
//---Test---
fruit('orange', 2500, 1.80)

/* Result
I need $4.50 to buy 2.50 kilograms orange.
*/