function cookingByNumbers(...params) {
    let number = Number(params.shift());

    for (const operation of params) {

        switch (operation) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number)
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3
                break;
            case 'fillet':
                number *= 0.8;
                number = number.toFixed(1);
                number = Number(number);
                break;
        }
        console.log(number);
    }
}
//---Test---
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')

/* Result
16
8
4
2
1
*/

//---Test---
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')

/* Result
3
4
2
6
4.8
*/