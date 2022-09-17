function deckOfCards(cards) {
    let result = [];

    for (const card of cards) {
        const face = card.slice(0, -1);
        const suit = card.slice(-1);

        try {
            const newCard = playingCards(face, suit);
            result.push(newCard);

        } catch (err) {
            result = ['Invalid card: ' + card]
        }
    }
    console.log(result.join(' '));

    function playingCards(face, suit) {

        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        }

        if (faces.indexOf(face) === -1) {
            throw new RangeError('Invalid face: ' + face)
        }
        if (suits[suit] === undefined) {
            throw new RangeError('Invalid suit: ' + suit)
        }




        const result = {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit
            }
        }
        return result

    }

}
deckOfCards(['5S', '3D', 'QD', '1C']);
deckOfCards(['AS', '10D', 'KH', '2C']);