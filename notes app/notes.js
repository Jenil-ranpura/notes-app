let btn = document.querySelector(".btn");
let div = document.querySelector(".notes");

function random () {
	let text = document.createElement("p");
	let p = document.createElement("p");

	text.contentEditable = true;
	text.className = "p";
	p.innerHTML = "X";
	p.fontSize = "20px";
	p.style.fontWeight = "700";

	let one = document.createElement("div");
	div.appendChild(one);

	one.appendChild(text);
	one.appendChild(p);

	p.addEventListener("click", () => {
		one.remove();
	})

	localStorage.setItem("name", JSON.stringify(div));
}

btn.addEventListener("click", random);