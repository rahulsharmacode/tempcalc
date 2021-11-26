const claculateTemp = () =>{

    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);
const tempType = document.getElementById('typeTemp').value;
switch (tempType) {
    case "celsus":
        console.log('celsus');
        let finalCelsusValue = (numberTemp -32) * 5/9;
        console.log(finalCelsusValue);
        document.getElementById('container').innerHTML = `<br> The ${numberTemp}°F is ${finalCelsusValue.toFixed(2)}°C`;

        break;
    case "fahrenheit":
        console.log("fahrenheit");
        let claculateValue = 0;
        let finalValue = (numberTemp* (9/5))+32;
        console.log(finalValue);
        document.getElementById('container').innerHTML = `<br> The ${numberTemp}°C is ${finalValue.toFixed(2)}°F`;

        break;

    default: 
        document.getElementById('container').innerHTML = "Enter Value";
        break;
}

}



claculateTemp();