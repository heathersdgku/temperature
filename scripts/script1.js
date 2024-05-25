function convertTempRange(){
    let startValue = prompt("Enter a starting temperature: ");
    let endValue = prompt("Enter an ending temperature: ");
    let scale = prompt("Enter the temperature unit C or F: ");

    for (let i=startValue;i<=endValue;i++){
        if(scale=="C"){
            Fahrenheit = (i*9/5)+32;
            document.write(`<li> ${i} degrees C = ${Fahrenheit} degrees Fahrenheit</li>`);
        }else if(scale=="F"){
            Celsius = (i-32)*5/9;
            document.write(`<li> ${i} degrees Fahrenheit = ${Celsius.toFixed(2)} degrees Celsius </li>`);
        }
    }
        
}   