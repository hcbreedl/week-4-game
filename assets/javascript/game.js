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
	
//============================
// Selecting user's character:
//============================
	$(".character").on('click', function() {
		if (($(this).is($('#warrior'))) && ($(this).hasClass('character'))) {
			usersCharacter = $('#warrior');
			opponentsRow = $('<div id="opponentsRow" class="row"></div>');
			 opponent1 = $('#girl').addClass("opponent").removeClass("character");
			 opponent2 = $('#goblin').addClass("opponent").removeClass("character");
			 opponent3 = $('#giant').addClass("opponent").removeClass("character");
			$('#media-container').after(opponentsRow);
			opponentsRow.append(opponent1);
			opponentsRow.append(opponent2);
			opponentsRow.append(opponent3);
			$('#warrior').unbind();
		};

		if ($(this).is($('#girl')) && ($(this).hasClass('character'))) {
			usersCharacter = $('#girl');
			opponentsRow = $('<div id="opponentsRow" class="row"></div>');
			 opponent1 = $('#warrior').addClass("opponent").removeClass("character");
			 opponent2 = $('#goblin').addClass("opponent").removeClass("character");
			 opponent3 = $('#giant').addClass("opponent").removeClass("character");
			$('#media-container').after(opponentsRow);
			opponentsRow.append(opponent1);
			opponentsRow.append(opponent2);
			opponentsRow.append(opponent3);
			$('#girl').unbind();
		};

		if ($(this).is($('#goblin')) && ($(this).hasClass('character'))) {
			usersCharacter = $('#goblin');
			opponentsRow = $('<div id="opponentsRow" class="row"></div>');
			 opponent1 = $('#warrior').addClass("opponent").removeClass("character");
			 opponent2 = $('#girl').addClass("opponent").removeClass("character");
			 opponent3 = $('#giant').addClass("opponent").removeClass("character");
			$('#media-container').after(opponentsRow);
			opponentsRow.append(opponent1);
			opponentsRow.append(opponent2);
			opponentsRow.append(opponent3);
			$('#goblin').unbind();
		};

		if ($(this).is($('#giant')) && ($(this).hasClass('character'))) {
			usersCharacter = $('#girl');
			opponentsRow = $('<div id="opponentsRow" class="row"></div>');
			 opponent1 = $('#warrior').addClass("opponent").removeClass("character");
			 opponent2 = $('#girl').addClass("opponent").removeClass("character");
			 opponent3 = $('#goblin').addClass("opponent").removeClass("character");
			$('#media-container').after(opponentsRow);
			opponentsRow.append(opponent1);
			opponentsRow.append(opponent2);
			opponentsRow.append(opponent3);
			$('#giant').unbind();
		};

//==================
//Selecting Opponent
//==================
		if ($(this).is($('#warrior')) && ($(this).hasClass('opponent'))) {
			defenderRow = $('<div id="defenderRow" class="row"></div>');
			defender = $('#warrior');
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);
			console.log("working");

		};
		if ($(this).is($('#girl')) && ($(this).hasClass('opponent'))) {
			defenderRow = $('<div id="defenderRow" class="row"></div>');
			defender = $('#girl');
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);

		};
		if ($(this).is($('#goblin')) && ($(this).hasClass('opponent'))) {
			defenderRow = $('<div id="defenderRow" class="row"></div>');
			defender = $('#goblin');
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);

		};
		if ($(this).is($('#giant')) && ($(this).hasClass('opponent'))) {
			defenderRow = $('<div id="defenderRow" class="row"></div>');
			defender = $('#giant');
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);

		};
	});
//=============


	

















});