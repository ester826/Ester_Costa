const ask = require("readline-sync")

let num1 = Number(ask.question("Escolha um numero."))
let num2 = Number(ask.question("Escolha um numero."))
let resuldado 

let calculadoraFuncionando = true

while(calculadoraFuncionando){ 
  let menu = ask.question(`Escolha
    1 para somar os numeros 
    2 para subtrair os numero
    3 para dividir os numeros
    4 para multiplicacao
    5 para resto
    6 para sair
    7 para trocar de numero.`) 

  switch(menu){ 

    case '1' : 
        resuldado = num1 + num2 
        console.log(`resuldado somado eh ${resuldado}`) 
        break

    case '2' : 
        resuldado = num1 - num2 
        console.log(`resuldado subtraido eh ${resuldado}`) 
        break

    case '3':
        resuldado = num1 / num2 
        console.log(`resuldado dividido eh ${resuldado}`) 
         break

    case '4':
        resuldado = num1 * num2
        console.log(`resuldado multiplicado eh ${resuldado}`) 
         break
    
    case'5':
        resuldado = num1 % num2 
        console.log(`resuldado do resto eh ${resuldado}`) 
        break

    case '6':
        calculadoraFuncionando = false 
        break

    case '7':
       num1 = Number(ask.question("Escolha um numero."))
       num2 = Number(ask.question("Escolha um numero."))
       menu = ask.question(`Escolha: 
        1 para somar os numeros 
        2 para subtrair os numero 
        3 para dividir os numeros
        4 para multiplicacao 
        5 para resto 
        6 para sair
        7 para trocar de numero.`) 

        console.log('seu resuldado eh', resuldado)
        break 

    default: 
        console.log("opcao invalida")
         break 
} 
ask.question('aperte enter para continuar.') 
console.clear()
} 

