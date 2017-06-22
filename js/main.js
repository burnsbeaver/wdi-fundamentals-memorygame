var cards = [
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	}
];
var cardsInPlay = [];
var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
	alert("Sorry, try again");
	}
}
};
var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
}
var createBoard = function(){
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.addEventListener('click', flipCard);
	cardElement.setAttribute('data-id', i);
	document.getElementById('game-board').appendChild(cardElement);
	}
};
var pageReload = function(){
	window.location.reload();
}
var button = document.querySelector('button');
button.addEventListener('click', pageReload);

createBoard();
