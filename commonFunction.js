function click(idb) {
    document.getElementById(idb).addEventListener('mouseenter', function (event) {
        const box = event.target;
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        box.style.backgroundColor = "#" + randomColor;

    })

}
function valueInput(idName) {
    const inputfild = document.getElementById(idName);
    inputfild.style.display = 'none';
}
function removeExampleText(exampleNumber) {
    const example = document.getElementById(exampleNumber);
    example.style.display = 'none';
}
function removeinput(exampleNumber) {
    const example = document.getElementById(exampleNumber);
    example.style.display = 'block';
}

function showInputFild(idName) {
    const inputfild = document.getElementById(idName);
    inputfild.style.display = 'block';


}


function getElementInput(idElement) {
    const inputvalue = document.getElementById(idElement);
    const inputvalueString = inputvalue.value;
    const integerInputValue = parseFloat(inputvalueString);
    inputvalue.value = '';
    if (isNaN(integerInputValue)) {
        alert('provied a valid number');
        return;
    }
    else if (integerInputValue < 0) {
        a
    }
    return integerInputValue;

}
function exampleInnerValue(IdName, values) {
    const innerValue = document.getElementById(IdName);
    const innerString = innerValue.innerText;
    const innerIntValue = parseFloat(innerString);

    innerValue.innerText = values;
}

function textValue(idName) {
    const turValues = document.getElementById(idName);
    const turValueString = turValues.innerText;
    const intvalue = parseFloat(turValueString);
    return turValues;

}