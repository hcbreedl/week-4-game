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
	var displayUserStats;

	var opponent1;
	var opponent2;
	var opponent3;

	var defender;
	var defenderCharacterStats;
	var displayDefenderStats;


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
			displayUserStats = $('<div id="displayUserStats" class="col-xs-2">').html('Health: ' + usersCharacterStats.hp + '<br>Attack: ' + usersCharacterStats.ap + '<br>Counter: ' + usersCharacterStats.ca);
			$('#userRow').append(displayUserStats);

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
			displayUserStats = $('<div id="displayUserStats" class="col-xs-2">').html('Health: ' + usersCharacterStats.hp + '<br>Attack: ' + usersCharacterStats.ap + '<br>Counter: ' + usersCharacterStats.ca);

			$('#userRow').append(displayUserStats);

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
			displayUserStats = $('<div id="displayUserStats" class="col-xs-2">').html('Health: ' + usersCharacterStats.hp + '<br>Attack: ' + usersCharacterStats.ap + '<br>Counter: ' + usersCharacterStats.ca);
			$('#userRow').append(displayUserStats);
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
			displayUserStats = $('<div id="displayUserStats" class="col-xs-2">').html('Health: ' + usersCharacterStats.hp + '<br>Attack: ' + usersCharacterStats.ap + '<br>Counter: ' + usersCharacterStats.ca);
			$('#userRow').append(displayUserStats);

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
			defenderCharacterStats = warrior;
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);
			attack = $('<button id="attack">Attack!</button>');
			$('#userRow').append(attack);
			$('#warrior').unbind();

			displayDefenderStats = $('<div id="displayDefenderStats" class="col-xs-2">').html('Health: ' + defenderCharacterStats.hp + '<br>Attack: ' + defenderCharacterStats.ap + '<br>Counter: ' + defenderCharacterStats.ca);
			defenderRow.append(displayDefenderStats);
		};

		// Selecting Girl as Defender
		if ($(this).is($('#girl')) && ($(this).hasClass('opponent'))) {
			defenderRow = $('<div id="defenderRow" class="row"></div>');
			defender = $('#girl');
			defenderCharacterStats = girl;
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);
			attack = $('<button id="attack">Attack!</button>');
			$('#userRow').append(attack);
			$('#girl').unbind();

			displayDefenderStats = $('<div id="displayDefenderStats" class="col-xs-2">').html('Health: ' + defenderCharacterStats.hp + '<br>Attack: ' + defenderCharacterStats.ap + '<br>Counter: ' + defenderCharacterStats.ca);
			defenderRow.append(displayDefenderStats);
		};

		// Selecting Goblin as Defender
		if ($(this).is($('#goblin')) && ($(this).hasClass('opponent'))) {
			defenderRow = $('<div id="defenderRow" class="row"></div>');
			defender = $('#goblin');
			defenderCharacterStats = goblin;
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);
			attack = $('<button id="attack">Attack!</button>');
			$('#userRow').append(attack);
			$('#goblin').unbind();

			displayDefenderStats = $('<div id="displayDefenderStats" class="col-xs-2">').html('Health: ' + defenderCharacterStats.hp + '<br>Attack: ' + defenderCharacterStats.ap + '<br>Counter: ' + defenderCharacterStats.ca);
			defenderRow.append(displayDefenderStats);
		};

		// Selecting Giant as Defender
		if ($(this).is($('#giant')) && ($(this).hasClass('opponent'))) {
			defenderRow = $('<div id="defenderRow" class="row"></div>');
			defender = $('#giant');
			defenderCharacterStats = giant;
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);
			attack = $('<button id="attack">Attack!</button>');
			$('#userRow').append(attack);
			$('#giant').unbind();

			displayDefenderStats = $('<div id="displayDefenderStats" class="col-xs-2">').html('Health: ' + defenderCharacterStats.hp + '<br>Attack: ' + defenderCharacterStats.ap + '<br>Counter: ' + defenderCharacterStats.ca);
			defenderRow.append(displayDefenderStats);
		};

//===========================
// Pressing the Attack Button
//===========================
		$('#attack').on('click', function() {
			console.log('Attack button was clicked!');

			usersCharacterStats.hp = usersCharacterStats.hp - defenderCharacterStats.ca;
			defenderCharacterStats.hp = defenderCharacterStats.hp - usersCharacterStats.ap;
			usersCharacterStats.ap = usersCharacterStats.ap * 2;

			$('#displayUserStats').html('Health: ' + usersCharacterStats.hp + '<br>Attack: ' + usersCharacterStats.ap + '<br>Counter: ' + usersCharacterStats.ca);
			$('#displayDefenderStats').html('Health: ' + defenderCharacterStats.hp + '<br>Attack: ' + defenderCharacterStats.ap + '<br>Counter: ' + defenderCharacterStats.ca);

			console.log(usersCharacterStats);
			console.log(defenderCharacterStats);
		});
		
			
		
	}); //End of on.click function

}); //End of Document.ready function