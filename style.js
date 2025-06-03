// REFERENCE DISPLAY ELEMENT//

const display = document.getElementById('display');

// Track if we have performed a calculator//

let justCalculated = false;

function appendToDisplay(value) {
console.log('Button pressed:',);

alert('you pressed:' + value);
}

function clearDisplay() {
    console.log('Cear button pressed.');
    alert('Clear button was clicked');
}

function deleteLast() {
    console.log('Backspace button pressed.');
    alert('Backspace button was clicked');
    
}

function calculate() {
    console.log('Equals button pressed.');
    alert('Equals button was clicked');
    
}

document.addEventListener('DMContentloaded', function() {
    console.log('calculator loaded successfully');
    console.log('Display element',display);

    if (display) {
        console.log('Current display value:', display.value);
    } else{
        console.log('Display element not found');
    }
}
) 