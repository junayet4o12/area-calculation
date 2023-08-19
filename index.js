const triangleBase = document.getElementById('triangleBase');
const triangleHeight = document.getElementById('triangleHeight');
const triangleArea = document.getElementById('triangleArea');
// triangle end
const database = document.getElementById('database');
const rectangleWidth = document.getElementById('rectangleWidth');
const rectangleLength = document.getElementById('rectangleLength');
const rectangleArea = document.getElementById('rectangleArea');
// rectangle end
const parallelogramBase = document.getElementById('parallelogramBase');
const parallelogramHeight = document.getElementById('parallelogramHeight');
const parallelogramArea = document.getElementById('parallelogramArea');
// parallelogramBase end
const rhombusd1 = document.getElementById('rhombusd1');
const rhombusd2 = document.getElementById('rhombusd2');
const rhombusArea = document.getElementById('rhombusArea');
// rhombus end
const pentagonp = document.getElementById('pentagonp');
const pentagonBase = document.getElementById('pentagonBase');
const pentagonArea = document.getElementById('pentagonArea');
// pentagone end
const ellipseA = document.getElementById('ellipseA');
const ellipseB = document.getElementById('ellipseB');
const ellipseArea = document.getElementById('ellipseArea');
const converts = document.getElementById('converts')
// ellipse end
/* function converts(this) {
    console.log('hello');
 } */


function stringerrorchack(input1, input2) {
    if (isNaN(parseFloat(input1.value)) || isNaN(parseFloat(input2.value)) || parseFloat(input1.value) < 0 || parseFloat(input2.value) < 0) {
        return true;
    }

}

function valueToNumber(input) {
    return parseFloat(input.value);
}
function databasing(databaseinput, input1, input2, input3, input4) {
    databaseinput.appendChild(input1);
    databaseinput.appendChild(input2);
    databaseinput.appendChild(input3);
    databaseinput.appendChild(input4);
}
function appending(databaseinput,input3, input4, input5, input6, input7, input8, input9) {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="grid grid-cols-1 justify-center items-center gap-3">
    <div>
    <h3 class="text-center text-2xl font-semibold">${input3}</h3>
    <p>${input4}<br>=<span id="hello1">${input5}</span> <span id="cmtom1">cm</span></p>
    <p>${input6}<br>=<span id="hello2">${input7}</span> <span id="cmtom2">cm</span></p>
    <p>${input8}<br>=<span id="hello3">${input9}</span> <span id="cmtom3">cm</span><sup>2</sup></p>
    <hr class="border-black border-[1px]">
    </div>
    <div>
    <button id="convert" class="px-1 py-2 text-white font-semibold rounded-lg bg-blue-800 w-max hover:bg-violet-600">Conv. to <span id="mtospan">m</span><sup>2</sup></button>
    </div>
    </div>
    `;
    /* function hello(this){
       console.log('hello');
    } */
    databaseinput.appendChild(div);



    const convert = document.getElementById('convert');
    const mtospan = document.getElementById('mtospan');
    const cmtom1 = document.getElementById('cmtom1');
    const cmtom2 = document.getElementById('cmtom2');
    const cmtom3 = document.getElementById('cmtom3');
    const hello1 = document.getElementById('hello1');
    const hello2 = document.getElementById('hello2');
    const hello3 = document.getElementById('hello3');

    convert.addEventListener('click', function () {
        if (cmtom3.innerText == 'cm') {
            console.log(cmtom1.innerText = 'm');
            console.log(cmtom2.innerText = 'm');
            console.log(cmtom3.innerText = 'm');
            console.log(hello1.innerText = parseFloat(hello1.innerText) / 100);
            console.log(hello2.innerText = parseFloat(hello2.innerText) / 100);
            console.log(hello3.innerText = parseFloat(hello3.innerText) / 10000);
            mtospan.innerText = 'cm';

            return;
        }
        if (cmtom3.innerText == 'm') {
            console.log(cmtom1.innerText = 'cm');
            console.log(cmtom2.innerText = 'cm');
            console.log(cmtom3.innerText = 'cm');
            console.log(hello1.innerText = parseFloat(hello1.innerText) * 100);
            console.log(hello2.innerText = parseFloat(hello2.innerText) * 100);
            console.log(hello3.innerText = parseFloat(hello3.innerText) * 10000);
            mtospan.innerText = 'm';
            return;
        }

    })

}

function fixing(input) {
    return parseFloat(input.toFixed(3));
}

function calculateTriangle() {
    if (stringerrorchack(triangleBase, triangleHeight) == true) {
        alert('Invalid Input');
        triangleBase.value = '';
        triangleHeight.value = '';
        return;
    }
    database.innerText = '';
    const triangleAreavalue = valueToNumber(triangleBase) * valueToNumber(triangleHeight) * 0.5;
    triangleArea.innerText = fixing(triangleAreavalue);
    appending(database,'Triangle', 'Triangle base', valueToNumber(triangleBase), 'Triangle height', valueToNumber(triangleHeight), 'Triangle Area', fixing(triangleAreavalue));
}
// triangle end

function calculateRectangle() {

    if (stringerrorchack(rectangleWidth, rectangleLength) == true) {
        alert('Invalid Input');
        rectangleWidth.value = '';
        rectangleLength.value = '';
        return;
    }
    database.innerText = '';
    const rectangleAreavalue = valueToNumber(rectangleWidth) * valueToNumber(rectangleLength);
    console.log(rectangleAreavalue);
    rectangleArea.innerText = fixing(rectangleAreavalue);
    appending(database,'Rectangle', 'Rectangle width', valueToNumber(rectangleWidth), 'Rectangle length', valueToNumber(rectangleLength), 'Rectangle Area', fixing(rectangleAreavalue));
}
// rectangle end

function calculateparallelogram() {
    if (stringerrorchack(parallelogramBase, parallelogramHeight) == true) {
        alert('Invalid Input');
        parallelogramBase.value = '';
        parallelogramHeight.value = '';
        return;
    }
    database.innerText = '';
    const parallelogramAreavalue = valueToNumber(parallelogramBase) * valueToNumber(parallelogramHeight);
    parallelogramArea.innerText = fixing(parallelogramAreavalue);
    appending(database,'Parallelogram', 'parallelogram base', valueToNumber(parallelogramBase), 'parallelogram height', valueToNumber(parallelogramHeight), 'parallelogram Area', fixing(parallelogramAreavalue));
}
// parallelogram end

function calculaterhombus() {
    if (stringerrorchack(rhombusd1, rhombusd2) == true) {
        alert('Invalid Input');
        rhombusd1.value = '';
        rhombusd2.value = '';
        return;
    }
    database.innerText = '';
    const rhombusAreavalue = valueToNumber(rhombusd1) * valueToNumber(rhombusd2) * 0.5;
    rhombusArea.innerText = fixing(rhombusAreavalue);
    appending(database,'Rhombus', 'Rhombus b1', valueToNumber(rhombusd1), 'Rhombus b2', valueToNumber(rhombusd2), 'Rhombus Area', fixing(rhombusAreavalue));
}
// parallegron end

function calculatepentagon() {
    if (stringerrorchack(pentagonp, pentagonBase) == true) {
        alert('Invalid Input');
        pentagonp.value = '';
        pentagonBase.value = '';
        return;
    }
    database.innerText = '';
    const pentagonAreavalue = valueToNumber(pentagonp) * valueToNumber(pentagonBase) * 0.5;
    pentagonArea.innerText = fixing(pentagonAreavalue);
    appending(database,'Pentagon', 'pentagon p', valueToNumber(pentagonp), 'pentagon base', valueToNumber(pentagonBase), 'pentagon Area', fixing(pentagonAreavalue));
}
// pentagone end
function calculateellipse() {
    if (stringerrorchack(ellipseA, ellipseB) == true) {
        alert('Invalid Input');
        ellipseA.value = '';
        ellipseB.value = '';
        return;
    }
    database.innerText = '';
    const ellipseAreavalue = valueToNumber(ellipseA) * valueToNumber(ellipseB) * Math.PI;
    ellipseArea.innerText = fixing(ellipseAreavalue);
    appending(database,'Ellipse', 'ellipse a', valueToNumber(ellipseA), 'ellipse base', valueToNumber(ellipseB), 'ellipse Area', fixing(ellipseAreavalue));
}
// ellipse end
function calculatereset(target) {
    target.parentNode.parentNode.childNodes[5].childNodes[1].value = '';
    target.parentNode.parentNode.childNodes[5].childNodes[5].value = '';
    console.log(target.parentNode.parentNode.childNodes[7].childNodes[1].innerText = '_ _');

}