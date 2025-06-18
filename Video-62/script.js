function Adjectives(r) {
    if (r < 0.33) {
        return "Crazy";
    } else if (r > 0.33 && r < 0.66) {
        return "Amazing";
    } else {
        return "Fire";
    }
}

function ShopName(r) {
    if (r < 0.33) {
        return "Engine";
    } else if (r > 0.33 && r < 0.66) {
        return "Foods";
    } else {
        return "Garments";
    }
}

function AnotherWord(r) {
    if (r < 0.33) {
        return "Bros";
    } else if (r > 0.33 && r < 0.66) {
        return "Limited";
    } else {
        return "Hub";
    }
}
let ad = Adjectives(Math.random());
let sh = ShopName(Math.random());
let an = AnotherWord(Math.random());
// console.log(ad + sh + an);
alert(`${ad} ${sh} ${an}`);
