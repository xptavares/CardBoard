;(function() {

var deck, trash, hand;

var render = function(){
	var list = "<% _.each(cards, function(name) { %> <%= name %> <% }); %>";
	$('#deck').html(_.template(list, {cards : deck}));
	$('#hand').html(_.template(list, {cards : hand}));
	$('#trash').html(_.template(list, {cards : trash}));
};

var startPosition = function(){
	deck = ['A','B','C','D','E','F','G','H','I','J','K','L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V'];
	hand = ['X'];
	trash = ['Z'];
	render();
};

var addCard = function(card){
	deck.push(card);
	render();
};

var pickUpCard = function(numberOfCardsToPick){
	var card = _.first(deck, numberOfCardsToPick);
	hand.push(card);
	deck = _.rest(deck,numberOfCardsToPick);
	render();
};	

var pickUpFirstCard = function(){
	var card = _.first(deck);
	hand.push(card);
	deck = _.rest(deck);
	render();
};

var shuffle = function(){
	deck = _.shuffle(deck);
	render();
};

var remove = function(){
	var card = _.first(hand);
	trash.push(card);
	hand = _.rest(hand);
	render();
};


var backToDeck = function(){
	_.each(trash, function(num) { deck.push(num); } );
	trash = [];
	render();
};

var init = function(){
	$('#pickUp').on('click', pickUpFirstCard);
	$('#startPositionBtn').on('click', startPosition);
	$('#remove').on('click', remove);
	$('#shuffle').on('click', shuffle);
	$('#backToDeck').on('click', backToDeck);
	startPosition();
};

window.init = init;
})();