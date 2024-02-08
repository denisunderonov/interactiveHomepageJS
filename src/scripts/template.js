import { base } from "./data";
import { addItem } from "./utils";


export const state = {
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
                listid = state.checkId
            } else if (listType === 1) {
                listid = state.noteId
            }
            base[listType].values.push({ id: listid, value :$inputlist.value});
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
