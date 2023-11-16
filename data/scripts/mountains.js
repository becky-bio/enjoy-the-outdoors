"use strict"
let selection = document.querySelector ('ul')
let result = document.querySelector('h4')

selection.addEventListener('change', ()=> {
    result.innerText = selection.dropdownItem[selection.selectedIndex].text;
}
)