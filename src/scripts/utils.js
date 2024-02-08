import { state } from "./template"

export function addItem(type, content) {
    if (type === 'checklist') {
        let checkstroke = toLi(`
        <button class="check-button"></button>
        <p>${content}</p>
        `, state.checkId)
        state.checkId += 1;
        return checkstroke;   
    } else if (type === 'notelist') {
        let notestroke = toLi(`
        <button class="note-button">✘</button>
        <p>${content}</p>
        `, state.noteId)
        state.noteId += 1;
        return notestroke;
    } else {
        return console.log('Ошибка')
    }
}

function addButton(type) {
    if(type === 'notelist') {
        return `<li>
        <input type="text" id="note-input">
        <button class="add-notes-button">добавить запись</button>
        <button class="plus-button">+</button> 
        </li>`
    } else if(type === 'checklist') {
        return `<li>
        <input type="text" id="check-input">
        <button class="add-check-button">добавить цель</button>
        <button class="plus-button">+</button> </li>`
    }
}

export function initeNote(checkObj, noteObj) {
    return `
        <div id="checklist">
            <ul>
                ${addButton(checkObj.type)}
            </ul>
        </div>
        <div id="noteslist">
            <ul>
                ${addButton(noteObj.type)}
            </ul>
        </div>
        `
}

function toLi(content, id) {
    return `<li data-id="${id}">${content}</li>`
}

