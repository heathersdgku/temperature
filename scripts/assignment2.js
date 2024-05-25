function convertToF(){
    var temperature = Number(prompt("Enter a temperature in Celsius: "));
    Fahrenheit = (temperature*9/5)+32;

    console.log(Fahrenheit.toFixed(2));

}