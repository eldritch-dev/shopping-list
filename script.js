var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	btn.classList.add("delete");
	btn.innerHTML = "Delete";
	li.setAttribute("id", (list.length));
	li.appendChild(document.createTextNode(input.value + " "));
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

for (var i = 0; i < list.length; i++) {
	list[i].setAttribute("id", i);
}

function toggleClass(e) {
	if (e.target.getAttribute("id")) {
		e.target.classList.toggle("done");
	}
}

function deleteParent(e) {
	if (e.target.getAttribute("class") === "delete") {
		e.target.parentNode.remove();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener('click', toggleClass, false);

ul.addEventListener('click', deleteParent, false);

