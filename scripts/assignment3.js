function convertTemperature(){
    let temp = Number(prompt("Enter the temperature: "));
    let scale = prompt("Enter temperature unit C or F: ");

    if(scale=="C"){
        Fahrenheit = (temp*9/5)+32;
        console.log(Fahrenheit.toFixed(2));
        document.getElementById("conversion").innerHTML=`<li> The temperature in Fahrenheit is ${Fahrenheit.toFixed(2)} </li>`;

    }else if(scale=="F"){
        Celsius = (temp-32)*5/9;
        console.log(Celsius.toFixed(2));
        document.getElementById("conversion").innerHTML=`<li> The temperature in Celsius is ${Celsius.toFixed(2)} </li>`;
    }
}