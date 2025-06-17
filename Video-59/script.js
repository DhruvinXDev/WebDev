// const fun = (x)=> {
//     console.log("hello" + x);

// }

// fun("dhruvin");

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multi(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function expo(a, b) {
    return a ** b;
}

let opration = prompt("enter opration");
let a = prompt ("enter a");
let b  = prompt("enter b");
let r = Math.random();
if (r < 0.1) {
    switch (opration) {
        case add:
            console.log(sub(a, b));
            break;
        case sub:
            console.log(div(a, b));
            break;
        case multi:
            console.log(add(a, b));
            break;
        case div:
            console.log(expo(a, b));
            break;
        case expo:
            console.log(sub(a, b));
            break;

        default:
            console.log("invalid opration !! ");
            break;
    }
}

else 
{
    switch (opration) {
        case add:
            console.log(add(a, b));
            break;
        case sub:
            console.log(sub(a, b));
            break;
        case multi:
            console.log(multi(a, b));
            break;
        case div:
            console.log(div(a, b));
            break;
        case expo:
            console.log(expo(a, b));
            break;

        default:
            console.log("invalid opration !! ");
            break;
    }
}

