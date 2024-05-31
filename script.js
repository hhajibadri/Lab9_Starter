let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

window.addEventListener('error', () => {
    console.log('An Error Has Occured');
});

const LECTURE_TIMES = [
    {
        Class: 'CSE 110',
        Time: '5 PM to 6:20 PM on Tuesdays and Thursdays'
    },
    {
        Class: 'CSE 105',
        Time: '3:30 PM to 4:50 PM on Tuesdays and Thursdays'
    },
    {
        Class: 'CSE 150B',
        Time: '5 PM to 6:20 PM on Mondays and Wednesdays'
    }
];

for(const button of errorBtns){
    button.addEventListener('click', () => {
        buttonClicked(button.textContent);
    });
}

function buttonClicked(textContent){
    switch(textContent){
        case 'Console Log':
            console.log('Console Log Demo');
            break;
        case 'Console Error':
            console.error('Console Error Demo');
            break;
        case 'Console Count':
            console.count('Count');
            break;
        case 'Console Warn':
            console.warn('Console Warn Demo');
            break;
        case 'Console Assert':
            console.assert(1 * 1 === 2, '1 * 1 is 1 not 2');
            break;
        case 'Console Clear':
            console.clear();
            break;
        case 'Console Dir':
            console.dir(document.querySelector('button'));
            break;
        case 'Console dirxml':
            console.dirxml(document.querySelector('button'));
            break;
        case 'Console Group Start':
            console.group('Example Group');
            break;
        case 'Console Group End':
            console.groupEnd();
            break;
        case 'Console Table':
            console.table(LECTURE_TIMES);
            break;
        case 'Start Timer':
            console.time('Timer');
            break;
        case 'End Timer':
            console.timeEnd('Timer');
            break;
        case 'Console Trace':
            console.trace();
            break;
        case 'Trigger a Global Error':
            iAmError();
            break;
    }
}

class NonExistentElementError extends Error {
    constructor(msg){
        super(msg);
        this.name = this.constructor.name;
    }
}

let button = document.createElement('button');
button.innerText = 'I am a button';
button.addEventListener('click', () => {
    try {
        let element = document.getElementById('I DONT EXIST');
        if(!element){
            throw new NonExistentElementError('This element does not exist');
        }
    } catch (error) {
        console.error(error.stack);
    }
    finally {
        button.remove();
    }
});
button.click();

