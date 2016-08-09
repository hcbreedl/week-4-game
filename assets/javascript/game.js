$( document ).ready(function() {

	// var characters = {
	// 	"man-with-sword": {
	// 		"health-points": 10,
	// 		"attack-points": 5,
	// 		"counter-points": 5,
	// 	},
	// 	"girl-with-bow": {
	// 		"health-points": 10,
	// 		"attack-points": 5,
	// 		"counter-points": 5,
	// 	},
	// 	"skeleton-with-bomb": {
	// 		"health-points": 10,
	// 		"attack-points": 5,
	// 		"counter-points": 5,
	// 	},
	// 	"dragon-man": {
	// 		"health-points": 10,
	// 		"attack-points": 5,
	// 		"counter-points": 5,
	// 	}
	// };

	var usersCharacter;
	var opponent1;
	var opponent2;
	var opponent3;
	var defender;

	var opponentsRow;
	var defenderRow;

	// Selecting user's character:	
	
//============
	$(".character").on('click', function() {
		if ($(this).is($('#man-with-sword'))) {
			usersCharacter = $('#girl-with-bow');
			opponentsRow = $('<div id="opponentsRow" class="row"></div>');
			 opponent1 = $('#man-with-sword').addClass("opponent");;
			 opponent2 = $('#skeleton-with-bomb').addClass("opponent");;
			 opponent3 = $('#dragon-man').addClass("opponent");;
			$('#media-container').after(opponentsRow);
			opponentsRow.append(opponent1);
			opponentsRow.append(opponent2);
			opponentsRow.append(opponent3);
			$('#girl-with-bow').unbind();
		};

		if ($(this).is($('#girl-with-bow'))) {
			usersCharacter = $('#girl-with-bow');
			opponentsRow = $('<div id="opponentsRow" class="row"></div>');
			 opponent1 = $('#man-with-sword').addClass("opponent");;
			 opponent2 = $('#skeleton-with-bomb').addClass("opponent");;
			 opponent3 = $('#dragon-man').addClass("opponent");;
			$('#media-container').after(opponentsRow);
			opponentsRow.append(opponent1);
			opponentsRow.append(opponent2);
			opponentsRow.append(opponent3);
			$('#girl-with-bow').unbind();
		};

		if ($(this).is($('#skeleton-with-bomb'))) {
			usersCharacter = $('#girl-with-bow');
			opponentsRow = $('<div id="opponentsRow" class="row"></div>');
			 opponent1 = $('#man-with-sword').addClass("opponent");;
			 opponent2 = $('#skeleton-with-bomb').addClass("opponent");;
			 opponent3 = $('#dragon-man').addClass("opponent");;
			$('#media-container').after(opponentsRow);
			opponentsRow.append(opponent1);
			opponentsRow.append(opponent2);
			opponentsRow.append(opponent3);
			$('#girl-with-bow').unbind();
		};

		if ($(this).is($('#dragon-man'))) {
			usersCharacter = $('#girl-with-bow');
			opponentsRow = $('<div id="opponentsRow" class="row"></div>');
			 opponent1 = $('#man-with-sword').addClass("opponent");;
			 opponent2 = $('#skeleton-with-bomb').addClass("opponent");;
			 opponent3 = $('#dragon-man').addClass("opponent");;
			$('#media-container').after(opponentsRow);
			opponentsRow.append(opponent1);
			opponentsRow.append(opponent2);
			opponentsRow.append(opponent3);
			$('#girl-with-bow').unbind();
		};
		console.log('User Selected!');
	});
//=============
		



	// Selecting opponent to attack
	$('.opponent').on('click', function() {
		console.log("opponent click is working");
		if ($(this).is($('#man-with-sword'))) {
			defenderRow = $('<div id="defenderRow" class="row"></div>');
			defender = $('#man-with-sword');
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);
			console.log("working");

		};
		if ($(this).is($('#girl-with-bow'))) {
			defenderRow = $('<div id="defenderRow" class="row"></div>');
			defender = $('#girl-with-bow');
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);

		};
		if ($(this).is($('#skeleton-with-bomb'))) {
			defenderRow = $('<div id="defenderRow" class="row"></div>');
			defender = $('#skeleton-with-bomb');
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);

		};
		if ($(this).is($('#dragon-man'))) {
			defenderRow = $('<div id="defenderRow" class="row"></div>');
			defender = $('#dragon-man');
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);

		};
	});

















});