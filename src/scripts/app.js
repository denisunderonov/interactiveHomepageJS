import { base } from "./data";
import { initeNote } from "./utils";
import { addClick, calculatorFunctionalOn, calculatorRender, delItem, pushItem } from "./template";

const $app = document.querySelector('#todo');
$app.innerHTML = initeNote(base[0], base[1]);
//Чеклист
let $checklist = $app.querySelector('#checklist > ul');
const $addCheckItemButton = document.querySelector('.add-check-button');
const $inputChecklist = document.querySelector('#check-input');
const $checkPlusButton = $checklist.querySelector('.plus-button');
//Лист заметок
const $noteslist = $app.querySelector('#noteslist > ul');
const $addNoteItemButton = document.querySelector('.add-notes-button');
const $inputNoteList = document.querySelector('#note-input');
const $notePlusButton = $noteslist.querySelector('.plus-button');
//калькулятор 
const $calculator = document.querySelector('#calculatorblock');


export class App {
    constructor() {  
    }

    init() {
        this.checkListStart();
        this.noteslistStart();
        this.calculatorStart();
    }

    checkListStart() {
        addClick($addCheckItemButton, $inputChecklist, $checkPlusButton);
        pushItem($checkPlusButton, $inputChecklist, $addCheckItemButton, $checklist, 0);
        delItem($checklist, 0);
    }

    noteslistStart() {
        addClick($addNoteItemButton, $inputNoteList, $notePlusButton);
        pushItem($notePlusButton, $inputNoteList, $addNoteItemButton, $noteslist, 1);
        delItem($noteslist, 1);
    }

    calculatorStart() {
        calculatorRender($calculator);
        calculatorFunctionalOn($calculator);
    }

}
