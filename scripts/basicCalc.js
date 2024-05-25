//Ask the user to enter the first number.
//Ask the user to enter the second number.
//Present a menu allowing the user to select the operation (addition, subtraction, //multiplication, division).
//Perform the selected operation using variables and display the result in the console.

//Enter the first number: 5
//Enter the second number: 3
//Select the operation:
//1. Addition
//2. Subtraction
//3. Multiplication
//4. Division
//Enter the number corresponding to the desired operation: 1
//Result: 8

function basicCalculator(){
    let num1=Number(prompt("Enter the first number: "));
    let num2=Number(prompt("Enter the second number: "));

    let select=(prompt("Select the operation: 1. Addition 2. Subtraction 3. Multiplication 4. Division Enter the number corresponding to the desired operation: "));

    if(select==1){
        console.log("Result: "+ (num1+num2));
    }else if(select==2){
        console.log("Result: "+ (num1-num2));
    }else if(select==3){
        console.log("Result: "+ (num1*num2));
    }else if(select==4){
        console.log("Result: "+ (num1/num2));
    }
}