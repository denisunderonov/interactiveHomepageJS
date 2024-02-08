var t,e;class u{constructor(t,e){this.type=t,this.values=e}}const n=[new class extends u{constructor(t,e){super(t,e)}}("checklist",[]),new class extends u{constructor(t,e){super(t,e)}}("notelist",[])],o={checkId:0,noteId:0};function l(t,e,u){t.addEventListener("click",()=>{e.value="",t.style.display="none",u.style.display="block",e.style.display="block"})}function i(t,e,u,l,i){t.addEventListener("click",()=>{if(""!=e.value){let c;0===i?c=o.checkId:1===i&&(c=o.noteId),n[i].values.push({id:c,value:e.value}),t.style.display="none",e.style.display="none",u.style.display="block",l.insertAdjacentHTML("beforeend",function(t,e){if("checklist"===t){let t=a(`
        <button class="check-button"></button>
        <p>${e}</p>
        `,o.checkId);return o.checkId+=1,t}if("notelist"!==t)return console.log("Ошибка");{let t=a(`
        <button class="note-button">\u{2718}</button>
        <p>${e}</p>
        `,o.noteId);return o.noteId+=1,t}}(n[i].type,n[i].values[n[i].values.length-1].value))}else alert("Пустое значение")})}function c(t,e){t.addEventListener("click",t=>{let u;if(u=0===e?"check-button":"note-button",t.target.classList.contains(u)){t.target.parentNode.remove();let u=t.target.parentNode.dataset.id;n[e].values.forEach((t,o)=>{t.id==u&&(n[e].values.splice(o,1),console.log(n[e].values))})}})}function s(t){return"notelist"===t?`<li>
        <input type="text" id="note-input">
        <button class="add-notes-button">\u{434}\u{43E}\u{431}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{437}\u{430}\u{43F}\u{438}\u{441}\u{44C}</button>
        <button class="plus-button">+</button> 
        </li>`:"checklist"===t?`<li>
        <input type="text" id="check-input">
        <button class="add-check-button">\u{434}\u{43E}\u{431}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{446}\u{435}\u{43B}\u{44C}</button>
        <button class="plus-button">+</button> </li>`:void 0}function a(t,e){return`<li data-id="${e}">${t}</li>`}const r=document.querySelector("#todo");r.innerHTML=(t=n[0],e=n[1],`
        <div id="checklist">
            <ul>
                ${s(t.type)}
            </ul>
        </div>
        <div id="noteslist">
            <ul>
                ${s(e.type)}
            </ul>
        </div>
        `);let d=r.querySelector("#checklist > ul");const b=document.querySelector(".add-check-button"),v=document.querySelector("#check-input"),p=d.querySelector(".plus-button"),y=r.querySelector("#noteslist > ul"),h=document.querySelector(".add-notes-button"),k=document.querySelector("#note-input"),f=y.querySelector(".plus-button"),m=document.querySelector("#calculatorblock");new class{constructor(){}init(){this.checkListStart(),this.noteslistStart(),this.calculatorStart()}checkListStart(){l(b,v,p),i(p,v,b,d,0),c(d,0)}noteslistStart(){l(h,k,f),i(f,k,h,y,1),c(y,1)}calculatorStart(){m.innerHTML=`
        <form action="" id="calculator">
            <input type="text" name="" id="input" readonly>
                <div class="buttons">
                    <div>
                        <button>C</button>
                        <button>\u{2BA8}</button>
                        <button>x\xb2</button>
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
                        <button>\xf7</button>
                        <button>*</button>
                        <button>-</button>
                    </div>
                    <button id="bigplus">+</button>
                    <button id="result" type="submit">=</button>
                </div>
            </form>
    `,function(t){let e=t.querySelectorAll("button"),u=t.querySelector("#input"),n={firstNum:0,mathOperation:null};e.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),"C"===t.textContent?u.value="":"⮨"===t.textContent?u.value=u.value.substring(0,u.value.length-1):"x²"===t.textContent?u.value=Math.pow(Number(u.value),2):"÷"===t.textContent||"*"===t.textContent||"+"===t.textContent||"-"===t.textContent?(n.firstNum=Number(u.value),n.mathOperation=t.textContent,u.value=""):"="===t.textContent?function(t,e){let u=Number(e.value);switch(t.mathOperation){case"+":e.value=t.firstNum+u;break;case"-":e.value=t.firstNum-u;break;case"*":e.value=t.firstNum*u;break;case"÷":e.value=t.firstNum/u}t.firstNum=0}(n,u):u.value+=t.textContent})})}(m)}}().init();
//# sourceMappingURL=index.a40c418d.js.map
