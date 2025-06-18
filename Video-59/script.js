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
let a = Number(prompt("Enter a:"));
let b = Number(prompt("Enter b:"));
let r = Math.random();
if (r < 0.1) {
    switch (opration) {
        case "add":
            alert(`Result is ${sub(a, b)}`);
            break;
        case "sub":
            alert(`Result is ${div(a, b)}`);
            break;
        case "multi":
            alert(`Result is ${add(a, b)}`);
            break;
        case "div":
            alert(`Result is ${expo(a, b)}`);
            break;
        case "expo":
            alert(`Result is ${div(a, b)}`);
            break;

        default:
            console.log("invalid opration !! ");
            break;
    }
}

else 
{
    switch (opration) {
        case "add":
            alert(`Result is ${add(a, b)}`);
            break;
        case "sub":
            alert(`Result is ${sub(a, b)}`);
            break;
        case "multi":
            alert(`Result is ${multi(a, b)}`);
            break;
        case "div":
            alert(`Result is ${div(a, b)}`);
            break;
        case "expo":
            alert(`Result is ${expo(a, b)}`);
            break;

        default:
            console.log("invalid opration !! ");
            break;
    }
}

