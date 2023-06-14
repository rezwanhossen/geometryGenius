document.getElementById('Calculate1').addEventListener('click', function () {
    const value1 = getElementInput('input-one');
    const value2 = getElementInput('input-two');
    document.getElementById('checkbox1').addEventListener('click', function () {
        const innerValue1 = exampleInnerValue('innerValue1', value1)
        const innerValue2 = exampleInnerValue('innerValue2', value2)
        const removeInput1 = removeinput('example-value-one')
        const shownexample1 = valueInput('input-value-one')
    })
    const result = parseFloat((0.5 * value1 * value2).toFixed(2));

    // const turValues = document.getElementById('truValue');
    // const turValueString = turValues.innerText;
    // const intvalue = parseFloat(turValueString);
    const value = textValue('truValue')
    value.innerText = result;
    const tur = showInputFild('tru');

})
document.getElementById('Calculate2').addEventListener('click', function () {
    const value1 = getElementInput('input-3');
    const value2 = getElementInput('input-4');
    document.getElementById('checkbox2').addEventListener('click', function () {
        const innerValue1 = exampleInnerValue('innerValue3', value1)
        const innerValue2 = exampleInnerValue('innerValue4', value2)
        const removeInput1 = removeinput('example-value-two')
        const shownexample1 = valueInput('input-value-two')
    })
    const result = parseFloat((value1 * value2).toFixed(2));
    const value = textValue('rect-value');
    value.innerText = result;
    const tur = showInputFild('rect');
})
document.getElementById('Calculate3').addEventListener('click', function () {
    const value1 = getElementInput('input-5');
    const value2 = getElementInput('input-6');
    document.getElementById('checkbox3').addEventListener('click', function () {
        const innerValue1 = exampleInnerValue('innerValue5', value1)
        const innerValue2 = exampleInnerValue('innerValue6', value2)
        const removeInput1 = removeinput('example-value-three')
        const shownexample1 = valueInput('input-value-three')
    })
    const result = parseFloat((value1 * value2).toFixed(2));
    const value = textValue('parall-value');
    value.innerText = result;
    const tur = showInputFild('parall');

})
document.getElementById('Calculate4').addEventListener('click', function () {
    const value1 = getElementInput('input-7');
    const value2 = getElementInput('input-8');
    document.getElementById('checkbox4').addEventListener('click', function () {
        const innerValue1 = exampleInnerValue('innerValue7', value1)
        const innerValue2 = exampleInnerValue('innerValue8', value2)
        const removeInput1 = removeinput('example-value-four')
        const shownexample1 = valueInput('input-value-four')
    })

    const result = parseFloat((0.5 * value1 * value2).toFixed(2));
    // console.log(result);
    const value = textValue('rhom-value');
    value.innerText = result;
    const tur = showInputFild('rhom');

})
document.getElementById('Calculate5').addEventListener('click', function () {
    const value1 = getElementInput('input-9');
    const value2 = getElementInput('input-10');

    document.getElementById('checkbox5').addEventListener('click', function () {
        const innerValue1 = exampleInnerValue('innerValue9', value1)
        const innerValue2 = exampleInnerValue('innerValue10', value2)
        const removeInput1 = removeinput('example-value-five')
        const shownexample1 = valueInput('input-value-five')
    })

    const result = parseFloat((0.5 * value1 * value2).toFixed(2));
    // console.log(result);
    const value = textValue('pent-value');
    value.innerText = result;
    const tur = showInputFild('penta');

})
document.getElementById('Calculate6').addEventListener('click', function () {
    const value1 = getElementInput('input-11');
    const value2 = getElementInput('input-12');
    document.getElementById('checkbox6').addEventListener('click', function () {
        const innerValue1 = exampleInnerValue('innerValue11', value1)
        const innerValue2 = exampleInnerValue('innerValue12', value2)
        const removeInput1 = removeinput('example-value-six')
        const shownexample1 = valueInput('input-value-six')
    })


    const result = parseFloat((3.14 * value1 * value2).toFixed(2));
    // console.log(result);
    const value = textValue('elli-valur');
    value.innerText = result;
    const tur = showInputFild('elli');

})
