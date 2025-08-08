let firstNumber = Number(prompt("Digite o primeiro número"));
let secondNumber = Number(prompt("Digite o segundo número"));
let operand = prompt("Digite o operando (+, -, * ou /)");
let result;

if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
    switch (operand) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
        default:
            result = "Erro: operando desconhecido";
    }
} else {
    result = "Erro: pelo menos um dos valores inseridos não é um número";
}
alert(result);
let contacts = [{
    name: "João",
    phone: "123456789"
}, {
    name: "Maria",
    phone: "987654321"
}, {
    name: "Pedro",
    phone: "456789123"
}]