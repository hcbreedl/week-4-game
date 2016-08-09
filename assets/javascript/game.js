$( document ).ready(function() {

	var warrior = {
		"hp": 100,
		"ap": 40,
		"ca": 30
	}

	var girl = {
		"hp": 100,
		"ap": 30,
		"ca": 40
	}

	var goblin = {
		"hp": 100,
		"ap": 20,
		"ca": 50
	}

	var giant = {
		"hp": 100,
		"ap": 50,
		"ca": 20
	}

	var usersCharacter;
	var usersCharacterStats;
	var displayStats;

	var opponent1;
	var opponent2;
	var opponent3;

	var defender;

	var opponentsRow;
	var defenderRow;
	var attack;	
	
//============================
// Selecting user's character:
//============================
	$(".character").on('click', function() {

		// Selecting Warrior as usersCharacter
		if (($(this).is($('#warrior'))) && ($(this).hasClass('character'))) {
			usersCharacter = $('#warrior');
			usersCharacterStats = warrior;
			displayStats = $('<div id="displayStats" class="col-xs-2">').html('Health: ' + warrior.hp + '<br>Attack: ' + warrior.ap + '<br>Counter: ' + warrior.ca);
			$('#userRow').append(displayStats);

			opponentsRow = $('<div id="opponentsRow" class="row"></div>');
			 opponent1 = $('#girl').addClass("opponent").removeClass("character");
			 opponent2 = $('#goblin').addClass("opponent").removeClass("character");
			 opponent3 = $('#giant').addClass("opponent").removeClass("character");

			$('#userRow').after(opponentsRow);
			opponentsRow.append(opponent1);
			opponentsRow.append(opponent2);
			opponentsRow.append(opponent3);

			$('#warrior').unbind();
		};

		// Selecting Girl as usersCharacter
		if ($(this).is($('#girl')) && ($(this).hasClass('character'))) {
			usersCharacter = $('#girl');
			usersCharacterStats = girl;
			displayStats = $('<div id="displayStats" class="col-xs-2">').html('Health: ' + girl.hp + '<br>Attack: ' + girl.ap + '<br>Counter: ' + girl.ca);

			$('#userRow').append(displayStats);

			opponentsRow = $('<div id="opponentsRow" class="row"></div>');
			 opponent1 = $('#warrior').addClass("opponent").removeClass("character");
			 opponent2 = $('#goblin').addClass("opponent").removeClass("character");
			 opponent3 = $('#giant').addClass("opponent").removeClass("character");
			
			$('#userRow').after(opponentsRow);
			opponentsRow.append(opponent1);
			opponentsRow.append(opponent2);
			opponentsRow.append(opponent3);
			
			$('#girl').unbind();
		};

		// Selecting Goblin as usersCharacter
		if ($(this).is($('#goblin')) && ($(this).hasClass('character'))) {
			usersCharacter = $('#goblin');
			usersCharacterStats = goblin;
			displayStats = $('<div id="displayStats" class="col-xs-2">').html('Health: ' + goblin.hp + '<br>Attack: ' + goblin.ap + '<br>Counter: ' + goblin.ca);
			$('#userRow').append(displayStats);
			console.log(usersCharacterStats);

			opponentsRow = $('<div id="opponentsRow" class="row"></div>');
			 opponent1 = $('#warrior').addClass("opponent").removeClass("character");
			 opponent2 = $('#girl').addClass("opponent").removeClass("character");
			 opponent3 = $('#giant').addClass("opponent").removeClass("character");
			
			$('#userRow').after(opponentsRow);
			opponentsRow.append(opponent1);
			opponentsRow.append(opponent2);
			opponentsRow.append(opponent3);
			
			$('#goblin').unbind();
		};

		// Selecting Giant as usersCharacter
		if ($(this).is($('#giant')) && ($(this).hasClass('character'))) {
			usersCharacter = $('#giant');
			usersCharacterStats = giant;
			displayStats = $('<div id="displayStats" class="col-xs-2">').html('Health: ' + giant.hp + '<br>Attack: ' + giant.ap + '<br>Counter: ' + giant.ca);
			$('#userRow').append(displayStats);

			opponentsRow = $('<div id="opponentsRow" class="row"></div>');
			 opponent1 = $('#warrior').addClass("opponent").removeClass("character");
			 opponent2 = $('#girl').addClass("opponent").removeClass("character");
			 opponent3 = $('#goblin').addClass("opponent").removeClass("character");
			
			$('#userRow').after(opponentsRow);
			opponentsRow.append(opponent1);
			opponentsRow.append(opponent2);
			opponentsRow.append(opponent3);
			
			$('#giant').unbind();
		};

//===========================================
//Selecting Defender from available Opponents
//===========================================

		// Selecting Warrior as Defender
		if ($(this).is($('#warrior')) && ($(this).hasClass('opponent'))) {
			defenderRow = $('<div id="defenderRow" class="row"></div>');
			defender = $('#warrior');
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);
			attack = $('<button id="attack">Attack!</button>');
			$('#userRow').append(attack);
			$('#warrior').unbind();

			displayStats = $('<div id="displayStats" class="col-xs-2">').html('Health: ' + warrior.hp + '<br>Attack: ' + warrior.ap + '<br>Counter: ' + warrior.ca);
			defenderRow.append(displayStats);
		};

		// Selecting Girl as Defender
		if ($(this).is($('#girl')) && ($(this).hasClass('opponent'))) {
			defenderRow = $('<div id="defenderRow" class="row"></div>');
			defender = $('#girl');
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);
			attack = $('<button id="attack">Attack!</button>');
			$('#userRow').append(attack);
			$('#girl').unbind();

			displayStats = $('<div id="displayStats" class="col-xs-2">').html('Health: ' + girl.hp + '<br>Attack: ' + girl.ap + '<br>Counter: ' + girl.ca);
			defenderRow.append(displayStats);
		};

		// Selecting Goblin as Defender
		if ($(this).is($('#goblin')) && ($(this).hasClass('opponent'))) {
			defenderRow = $('<div id="defenderRow" class="row"></div>');
			defender = $('#goblin');
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);
			attack = $('<button id="attack">Attack!</button>');
			$('#userRow').append(attack);
			$('#goblin').unbind();

			displayStats = $('<div id="displayStats" class="col-xs-2">').html('Health: ' + goblin.hp + '<br>Attack: ' + goblin.ap + '<br>Counter: ' + goblin.ca);
			defenderRow.append(displayStats);
		};

		// Selecting Giant as Defender
		if ($(this).is($('#giant')) && ($(this).hasClass('opponent'))) {
			defenderRow = $('<div id="defenderRow" class="row"></div>');
			defender = $('#giant');
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);
			attack = $('<button id="attack">Attack!</button>');
			$('#userRow').append(attack);
			$('#giant').unbind();

			displayStats = $('<div id="displayStats" class="col-xs-2">').html('Health: ' + giant.hp + '<br>Attack: ' + giant.ap + '<br>Counter: ' + giant.ca);
			defenderRow.append(displayStats);
		};

//===========================
// Pressing the Attack Button
//===========================
		$('#attack').on('click', function() {
			console.log('Attack button was clicked!');
		});
		
			
		
	}); //End of on.click function

}); //End of Document.ready function