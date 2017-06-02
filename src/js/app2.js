/*
 Розширити програму-анкету для опитування
 У вас має бути форма. В ній випадаючий список з питаннями і кнопка "Вибрати".
 Також має бути друга форма, де є текстове поле (textarea) для вводу відповіді і кнопка - "Відповісти".
 Під формами має бути список (ul), де будуть відображатись відповіді в такому форматі - {Питання} - {Відповідь}.
 Після того, як ви відповіли на питання, воно пропадає з випадаючого списку і додається до списку відповідей.
 Бажано це все гарно оформити.
 */

var selForm = document.querySelector("#selectForm");
var answerForm = document.querySelector("#answerForm");
var list = document.querySelector("#list");

selForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var select = this.sel[this.sel.selectedIndex].innerText;
    var li = document.createElement("li");
    var span = document.createElement("span");
    span.className = "question";
    span.textContent = select;
    li.appendChild(span);
    list.appendChild(li);
    selForm.sel.removeChild(selForm.sel[selForm.sel.selectedIndex]);
    document.getElementById("btnSelect").disabled = true;
    document.getElementById("sel").disabled = true;

    answerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var area = this.area.value;
        var span = document.createElement("span");
        span.className = "answer";
        span.textContent = " - " + area;
        this.area.value = "";
        if (area !== "") {
            li.parentElement.lastChild.appendChild(span);
            document.getElementById("btnSelect").disabled = false;
            document.getElementById("sel").disabled = false;
        }
    });
});