let checkBoxWithLabelContainer = document.getElementById("checkBoxWithLabelContainer");
let checkboxId = "checkbox";
let labelId = "checkboxLabel";


function onClickStatusChanged() {
    checkboxLabelEl.classList.toggle("checked");
}
let checkboxInputEl = document.createElement("input");
checkboxInputEl.type = "checkbox";
checkboxInputEl.id = checkboxId;

checkboxInputEl.onclick = function() {
    onClickStatusChanged();
}
checkBoxWithLabelContainer.appendChild(checkboxInputEl);

let checkboxLabelEl = document.createElement("label");
checkboxLabelEl.classList.add("checkbox-label");
checkboxLabelEl.setAttribute("for", checkboxId);
checkboxLabelEl.id = labelId;
checkboxLabelEl.textContent = "I am a label";
checkBoxWithLabelContainer.appendChild(checkboxLabelEl);