$( document ).ready(function() {

	var characters = {
		"man-with-sword": {
			"health-points": 10,
			"attack-points": 5,
			"counter-points": 5,
		},
		"girl-with-bow": {
			"health-points": 10,
			"attack-points": 5,
			"counter-points": 5,
		},
		"skeleton-with-bomb": {
			"health-points": 10,
			"attack-points": 5,
			"counter-points": 5,
		},
		"dragon-man": {
			"health-points": 10,
			"attack-points": 5,
			"counter-points": 5,
		}
	};

	// Selecting user's character:	
	$('.character').on('click', function() {
			var usersCharacter = $(this);
			console.log(usersCharacter);

		// If man-with-sword is selected	
		if ($(this).is("#man-with-sword")) {
			var opponentsRow = $('<div id="opponentRow" class="row"></div>');
			var opponent1 = $('#girl-with-bow').addClass("opponent");;
			var opponent2 = $('#skeleton-with-bomb').addClass("opponent");;
			var opponent3 = $('#dragon-man').addClass("opponent");;
			$('#media-container').after(opponentsRow);
			opponentsRow.append(opponent1);
			opponentsRow.append(opponent2);
			opponentsRow.append(opponent3);

		// If girl-with-bow is selected
		} else if ($(this).is("#girl-with-bow")) {
			var opponentsRow = $('<div id="opponentRow" class="row"></div>');
			var opponent1 = $('#man-with-sword').addClass("opponent");;
			var opponent2 = $('#skeleton-with-bomb').addClass("opponent");;
			var opponent3 = $('#dragon-man').addClass("opponent");;
			$('#media-container').after(opponentsRow);
			opponentsRow.append(opponent1);
			opponentsRow.append(opponent2);
			opponentsRow.append(opponent3);

		// If skeleton-with-bomb is selected
		} else if ($(this).is("#skeleton-with-bomb")) {
			var opponentsRow = $('<div id="opponentRow" class="row"></div>');
			var opponent1 = $('#man-with-sword').addClass("opponent");;
			var opponent2 = $('#girl-with-bow').addClass("opponent");;
			var opponent3 = $('#dragon-man').addClass("opponent");;
			$('#media-container').after(opponentsRow);
			opponentsRow.append(opponent1);
			opponentsRow.append(opponent2);
			opponentsRow.append(opponent3);

		// If dragon-man is selected
		} else if ($(this).is("#dragon-man")) {
			var opponentsRow = $('<div id="opponentRow" class="row"></div>');
			var opponent1 = $('#man-with-sword').addClass("opponent");
			var opponent2 = $('#girl-with-bow').addClass("opponent");
			var opponent3 = $('#skeleton-with-bomb').addClass("opponent");
			$('#media-container').after(opponentsRow);
			opponentsRow.append(opponent1);
			opponentsRow.append(opponent2);
			opponentsRow.append(opponent3);
		}
	});

	// Selecting opponent to attack
	$('.opponent').on('click', function() {
		if ($(this).is("#man-with-sword")) {
			var defenderRow = $('<div id="defenderRow" class="row"></div>');
			var defender = $('#man-with-sword');
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);

		} else if ($(this).is("#girl-with-bow")) {
			var defenderRow = $('<div id="defenderRow" class="row"></div>');
			var defender = $('#girl-with-bow');
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);

		} else if ($(this).is("#skeleton-with-bomb")) {
			var defenderRow = $('<div id="defenderRow" class="row"></div>');
			var defender = $('#skeleton-with-bomb');
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);

		} else if ($(this).is("#dragon-man")) {
			var defenderRow = $('<div id="defenderRow" class="row"></div>');
			var defender = $('#dragon-man');
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);

		}
	});

















});