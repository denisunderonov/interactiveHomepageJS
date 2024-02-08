import { base } from "./data";
import { addItem, back, toCalcbase, calcBase, sqrt } from "./utils";

export const todoState = {
    checkId: 0,
    noteId: 0
}

export function addClick($addItemButton, $inputlist, $plusButton) {
    $addItemButton.addEventListener('click', () => {
        $inputlist.value = '';
        $addItemButton.style.display = 'none';
        $plusButton.style.display = 'block';
        $inputlist.style.display = 'block';
    });
}

export function pushItem($plusButton, $inputlist, $addItemButton, $list, listType) {
    $plusButton.addEventListener('click', () => {
        if ($inputlist.value != '') {
            let listid;
            if (listType === 0) {
                listid = todoState.checkId
            } else if (listType === 1) {
                listid = todoState.noteId
            }
            base[listType].values.push({ id: listid, value: $inputlist.value});
            $plusButton.style.display = 'none';
            $inputlist.style.display = 'none';
            $addItemButton.style.display = 'block';
            $list.insertAdjacentHTML('beforeend', addItem(base[listType].type ,base[listType].values[base[listType].values.length - 1].value));
        } else {
            alert('Пустое значение');
        }
    })
}

export function delItem($list, listType) {
    $list.addEventListener('click', (event) => {
        let buttonFlag;
        listType === 0 ? buttonFlag = 'check-button' : buttonFlag = 'note-button'
        if (event.target.classList.contains(buttonFlag)) {
            event.target.parentNode.remove(); 
            const $blockDataId = event.target.parentNode.dataset.id;
            base[listType].values.forEach((item, index) => {
                if(item.id == $blockDataId) {
                    base[listType].values.splice(index, 1) 
                    console.log(base[listType].values);
                }
            });
        }
    })
}

export function calculatorRender($calculator) {
        $calculator.innerHTML = `
        <form action="" id="calculator">
            <input type="text" name="" id="input" readonly>
                <div class="buttons">
                    <div>
                        <button>C</button>
                        <button>⮨</button>
                        <button>x²</button>
                    </div>
                    <div>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>
                    <div>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                    </div>
                    <div>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                    </div>
                    <div><button id="zero">0</button></div>
                    <div>
                        <button>÷</button>
                        <button>*</button>
                        <button>-</button>
                    </div>
                    <button id="bigplus">+</button>
                    <button id="result" type="submit">=</button>
                </div>
            </form>
    `
}

export function calculatorFunctionalOn($calculator) {
    const $calcbuttons = $calculator.querySelectorAll('button');
    const $calcInput = $calculator.querySelector('#input');

    const calcState = {
        firstNum: 0,
        mathOperation: null
    }

    $calcbuttons.forEach(($button) => {
        $button.addEventListener('click', (e) => {
            e.preventDefault();
            if ($button.textContent === 'C') {
                $calcInput.value = '';
            } else if ($button.textContent === '⮨') {
                back($calcInput);
            } else if ($button.textContent === 'x²') {
                sqrt($calcInput);
            } else if ($button.textContent === '÷' || $button.textContent === '*' || $button.textContent === '+' || $button.textContent === '-') {
                toCalcbase(calcState, $calcInput, $button)
            } else if ($button.textContent === '=') {
                calcBase(calcState, $calcInput)
            } else {
                $calcInput.value += $button.textContent;
            }
        });
    });
}
