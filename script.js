function rotateCard(event){
	event.currentTarget.children[0].classList.toggle("activate")
	event.currentTarget.children[1].classList.toggle("activate")
}

const cards = document.querySelectorAll(".card")

for(let i = 0; i < cards.length; i++){
	let card = cards[i]

	card.addEventListener("click", rotateCard)
}