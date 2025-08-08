let n = 0;
while (n < 10) {
    console.log(n);
    n += 10;
}
let counter = 1;
while(isOver != true){
    let continueLoop = prompt("Deseja continuar? (s/n)");
    isOver = continueLoop === true ? false : true;
    counter = counter + 1;
}
let isOver;
do{
    isOver = !confirm(`[${counter++}] - Deseja continuar?`);
}while (!isOver);
