$( document ).ready(function() {
	var audio = new Audio('http://66.90.94.162/ost/bomberman-64-second-attack-/okjvgoshxl/bm64sa-gravity-generator.mp3');
	audio.play();
	var newGame = function () {


	var warrior = {
		"hp": 100,
		"ap": 30,
		"ca": 20
	}

	var girl = {
		"hp": 100,
		"ap": 20,
		"ca": 10
	}

	var goblin = {
		"hp": 100,
		"ap": 10,
		"ca": 40
	}

	var giant = {
		"hp": 100,
		"ap": 40,
		"ca": 10
	}

	var usersCharacter;
	var usersCharacterStats;
	var baseAttack;
	var displayUserStats;

	var opponent1;
	var opponent2;
	var opponent3;
	var opponentsLeft = 3;

	var defender;
	var defenderCharacterStats;
	var displayDefenderStats;

	var opponentsRow;
	var defenderRow;
	var attack;	

	var resetUserCharacter = function() {
		usersCharacter.remove();
		usersCharacterStats;
		displayUserStats.remove();
	};
	var resetDefender = function() {
		defender.remove();
		displayDefenderStats.remove();
		defenderRow.remove();
		defender;
		defenderCharacterStats;
	};
	
//============================
// Selecting user's character:
//============================
	// var newGame = function () {
	$(".character").on('click', function() {

		// Selecting Warrior as usersCharacter
		$('#instructions').html("<p>Now, from the three possible opponents<br>(circled in <span style='color: orange'>ORANGE</span>),<br> select who you'd like to<br> <span style='font-size: 24px'>ATTACK</span> first!<br>That character will be<br> circled in <span style='color: red'>RED</span>!</p>");
		if (($(this).is($('#warrior'))) && ($(this).hasClass('character'))) {
			usersCharacter = $('#warrior');
			usersCharacterStats = warrior;
			baseAttack = warrior.ap;
			displayUserStats = $('<div id="displayUserStats" class="col-xs-2">').html('Health Points: ' + usersCharacterStats.hp + '<br>Attack Power: ' + usersCharacterStats.ap + '<br>Counter Attack Power: ' + usersCharacterStats.ca);
			
			$('#userRow').append(displayUserStats);

			opponentsRow = $('<div id="opponentsRow" class="row"></div>');
			opponent1 = $('#girl').addClass("opponent").removeClass("character");
			opponent2 = $('#goblin').addClass("opponent").removeClass("character");
			opponent3 = $('#giant').addClass("opponent").removeClass("character");

			$('#userRow').after(opponentsRow);
			opponentsRow.append(opponent1);
			opponentsRow.append(opponent2);
			opponentsRow.append(opponent3);

			usersCharacter.hide().fadeIn();
			opponent1.hide().fadeIn(1000);
			opponent2.hide().fadeIn(2500);
			opponent3.hide().fadeIn(3500);

			$('#warrior').unbind();
		};

		// Selecting Girl as usersCharacter
		if ($(this).is($('#girl')) && ($(this).hasClass('character'))) {
			usersCharacter = $('#girl');
			usersCharacterStats = girl;
			baseAttack = girl.ap;
			displayUserStats = $('<div id="displayUserStats" class="col-xs-2">').html('Health Points: ' + usersCharacterStats.hp + '<br>Attack Power: ' + usersCharacterStats.ap + '<br>Counter Attack Power: ' + usersCharacterStats.ca);

			$('#userRow').append(displayUserStats);

			opponentsRow = $('<div id="opponentsRow" class="row"></div>');
			opponent1 = $('#warrior').addClass("opponent").removeClass("character");
			opponent2 = $('#goblin').addClass("opponent").removeClass("character");
			opponent3 = $('#giant').addClass("opponent").removeClass("character");
			
			$('#userRow').after(opponentsRow);
			opponentsRow.append(opponent1);
			opponentsRow.append(opponent2);
			opponentsRow.append(opponent3);

			usersCharacter.hide().fadeIn();
			opponent1.hide().fadeIn(1000);
			opponent2.hide().fadeIn(2500);
			opponent3.hide().fadeIn(3500);
			
			$('#girl').unbind();
		};

		// Selecting Goblin as usersCharacter
		if ($(this).is($('#goblin')) && ($(this).hasClass('character'))) {
			usersCharacter = $('#goblin');
			usersCharacterStats = goblin;
			baseAttack = goblin.ap;
			displayUserStats = $('<div id="displayUserStats" class="col-xs-2">').html('Health Points: ' + usersCharacterStats.hp + '<br>Attack Power: ' + usersCharacterStats.ap + '<br>Counter Attack Power: ' + usersCharacterStats.ca);
			
			$('#userRow').append(displayUserStats);

			opponentsRow = $('<div id="opponentsRow" class="row"></div>');
			opponent1 = $('#warrior').addClass("opponent").removeClass("character");
			opponent2 = $('#girl').addClass("opponent").removeClass("character");
			opponent3 = $('#giant').addClass("opponent").removeClass("character");
			
			$('#userRow').after(opponentsRow);
			opponentsRow.append(opponent1);
			opponentsRow.append(opponent2);
			opponentsRow.append(opponent3);

			usersCharacter.hide().fadeIn();
			opponent1.hide().fadeIn(1000);
			opponent2.hide().fadeIn(2500);
			opponent3.hide().fadeIn(3500);
			
			$('#goblin').unbind();
		};

		// Selecting Giant as usersCharacter
		if ($(this).is($('#giant')) && ($(this).hasClass('character'))) {
			usersCharacter = $('#giant');
			usersCharacterStats = giant;
			baseAttack = giant.ap;
			displayUserStats = $('<div id="displayUserStats" class="col-xs-2">').html('Health Points: ' + usersCharacterStats.hp + '<br>Attack Power: ' + usersCharacterStats.ap + '<br>Counter Attack Power: ' + usersCharacterStats.ca);
			
			$('#userRow').append(displayUserStats);

			opponentsRow = $('<div id="opponentsRow" class="row"></div>');
			opponent1 = $('#warrior').addClass("opponent").removeClass("character");
			opponent2 = $('#girl').addClass("opponent").removeClass("character");
			opponent3 = $('#goblin').addClass("opponent").removeClass("character");
			
			$('#userRow').after(opponentsRow);
			opponentsRow.append(opponent1);
			opponentsRow.append(opponent2);
			opponentsRow.append(opponent3);

			usersCharacter.hide().fadeIn();
			opponent1.hide().fadeIn(1000);
			opponent2.hide().fadeIn(2500);
			opponent3.hide().fadeIn(3500);
			
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
			
			$('#instructions').html("<p>Click<br> <span style='font-size: 24px'>ATTACK</span><br> until he disappears!</p>");
		
			$(opponentsRow).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeTo('slow',0.5);
		};

		// Selecting Girl as Defender
		if ($(this).is($('#girl')) && ($(this).hasClass('opponent'))) {
			defenderRow = $('<div id="defenderRow" class="row"></div>');
			defender = $('#girl');
			defenderCharacterStats = girl;

			// defenderControl = true;
			
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);
			
			attack = $('<button id="attack">Attack!</button>');
			$('#userRow').append(attack);
			$('#girl').unbind();

			displayDefenderStats = $('<div id="displayDefenderStats" class="col-xs-2">').html('Health: ' + defenderCharacterStats.hp + '<br>Attack: ' + defenderCharacterStats.ap + '<br>Counter: ' + defenderCharacterStats.ca);
			defenderRow.append(displayDefenderStats);
			
			$('#instructions').html("<p>Click <br> <span style='font-size: 24px'>ATTACK</span><br> until he disappears!</p>");

			$(opponentsRow).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeTo('slow',0.5);
		};

		// Selecting Goblin as Defender
		if ($(this).is($('#goblin')) && ($(this).hasClass('opponent'))) {
			defenderRow = $('<div id="defenderRow" class="row"></div>');
			defender = $('#goblin');
			defenderCharacterStats = goblin;

			// defenderControl = true;
			
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);
			
			attack = $('<button id="attack">Attack!</button>');
			$('#userRow').append(attack);
			$('#goblin').unbind();

			displayDefenderStats = $('<div id="displayDefenderStats" class="col-xs-2">').html('Health: ' + defenderCharacterStats.hp + '<br>Attack: ' + defenderCharacterStats.ap + '<br>Counter: ' + defenderCharacterStats.ca);
			defenderRow.append(displayDefenderStats);
			
			$('#instructions').html("<p>Click <br> <span style='font-size: 24px'>ATTACK</span><br> until he disappears!</p>");

			$(opponentsRow).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeTo('slow',0.5);
		};

		// Selecting Giant as Defender
		if ($(this).is($('#giant')) && ($(this).hasClass('opponent'))) {
			defenderRow = $('<div id="defenderRow" class="row"></div>');
			defender = $('#giant');
			defenderCharacterStats = giant;

			// defenderControl = true;
			
			opponentsRow.after(defenderRow);
			defenderRow.append(defender);
			
			attack = $('<button id="attack">Attack!</button>');
			$('#userRow').append(attack);
			$('#giant').unbind();

			displayDefenderStats = $('<div id="displayDefenderStats" class="col-xs-2">').html('Health: ' + defenderCharacterStats.hp + '<br>Attack: ' + defenderCharacterStats.ap + '<br>Counter: ' + defenderCharacterStats.ca);
			defenderRow.append(displayDefenderStats);
			
			$('#instructions').html("<p>Click <br> <span style='font-size: 24px'>ATTACK</span><br> until he disappears!</p>");

			$(opponentsRow).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000).fadeTo('slow',0.5);
		};
	

//===========================
// Pressing the Attack Button
//===========================
		$('#attack').on('click', function() {
			usersCharacterStats.hp = usersCharacterStats.hp - defenderCharacterStats.ca;
			defenderCharacterStats.hp = defenderCharacterStats.hp - usersCharacterStats.ap; 
			usersCharacterStats.ap = usersCharacterStats.ap + baseAttack;

			defender.fadeOut('fast').fadeIn('fast');

			$('#displayUserStats').html('Health Points: ' + usersCharacterStats.hp + '<br>Attack Power: ' + usersCharacterStats.ap + '<br>Counter Attack Power: ' + usersCharacterStats.ca);
			$('#displayDefenderStats').html('Health Points: ' + defenderCharacterStats.hp + '<br>Attack Power: ' + defenderCharacterStats.ap + '<br>Counter Attack Power: ' + defenderCharacterStats.ca);
			
			//===================
			// Losing
			//===================
			if (usersCharacterStats.hp < 1) {

				$('#instructions').html("Oh No!<br>You Lost!<br>Let's try again...<br>Select your character!</p>");

				resetDefender();

				opponentsRow.remove();
				opponent1;
				opponent2;
				opponent3;

				$('#userRow').append('<div id="warrior" class="col-xs-2 character"><a href="#"><img class="media-object" src="https://github.com/hcbreedl/week-4-game/blob/master/assets/images/warrior.png?raw=true" alt=""></a></div>');
				$('#userRow').append('<div id="girl" class="col-xs-2 character"><a href="#"><img class="media-object" src="https://github.com/hcbreedl/week-4-game/blob/master/assets/images/girl.png?raw=true" alt=""></a></div>');
				$('#userRow').append('<div id="goblin" class="col-xs-2 character"><a href="#"><img class="media-object" src="https://github.com/hcbreedl/week-4-game/blob/master/assets/images/goblin.png?raw=true" alt=""></a></div>');
				$('#userRow').append('<div id="giant" class="col-xs-2 character"><a href="#"><img class="media-object" src="https://github.com/hcbreedl/week-4-game/blob/master/assets/images/giant.png?raw=true" alt=""></a></div> ');

				resetUserCharacter();

				newGame();

				if ((usersCharacterStats.hp < 1) && (opponentsLeft < 1)) {

					$('#instructions').html("AH! So close!<br>To play again, simply select your character!</p>")

					$('#userRow').append('<div id="warrior" class="col-xs-2 character"><a href="#"><img class="media-object" src="https://github.com/hcbreedl/week-4-game/blob/master/assets/images/warrior.png?raw=true" alt=""></a></div>');
					$('#userRow').append('<div id="girl" class="col-xs-2 character"><a href="#"><img class="media-object" src="https://github.com/hcbreedl/week-4-game/blob/master/assets/images/girl.png?raw=true" alt=""></a></div>');
					$('#userRow').append('<div id="goblin" class="col-xs-2 character"><a href="#"><img class="media-object" src="https://github.com/hcbreedl/week-4-game/blob/master/assets/images/goblin.png?raw=true" alt=""></a></div>');
					$('#userRow').append('<div id="giant" class="col-xs-2 character"><a href="#"><img class="media-object" src="https://github.com/hcbreedl/week-4-game/blob/master/assets/images/giant.png?raw=true" alt=""></a></div> ');

					resetUserCharacter();

					newGame();
				}
			};

			//===================
			// Winning
			//===================
			if (defenderCharacterStats.hp < 1) {
				opponentsLeft = opponentsLeft - 1;

				resetDefender();

				$('#attack').remove();

				$('#instructions').html("<p>You beat that character!<br>Great Job!<br>Select who you think you can take out next!</p>")
				
				// Selecting Warrior as Defender (2nd Time)
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

				// Selecting Girl as Defender (2nd Time)
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

				// Selecting Goblin as Defender (2nd Time)
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
 
				// Selecting Giant as Defender (2nd Time)
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

					if (opponentsLeft < 1) {
						$('#instructions').html("YOU BEAT THEM ALL!<br>You're Awesome!<br>To play again, simply select your character!</p>")

						$('#userRow').append('<div id="warrior" class="col-xs-2 character"><a href="#"><img class="media-object" src="https://github.com/hcbreedl/week-4-game/blob/master/assets/images/warrior.png?raw=true" alt=""></a></div>');
						$('#userRow').append('<div id="girl" class="col-xs-2 character"><a href="#"><img class="media-object" src="https://github.com/hcbreedl/week-4-game/blob/master/assets/images/girl.png?raw=true" alt=""></a></div>');
						$('#userRow').append('<div id="goblin" class="col-xs-2 character"><a href="#"><img class="media-object" src="https://github.com/hcbreedl/week-4-game/blob/master/assets/images/goblin.png?raw=true" alt=""></a></div>');
						$('#userRow').append('<div id="giant" class="col-xs-2 character"><a href="#"><img class="media-object" src="https://github.com/hcbreedl/week-4-game/blob/master/assets/images/giant.png?raw=true" alt=""></a></div> ');

						resetUserCharacter();

						newGame();
					}
				};

				if ((opponentsLeft < 1) && (defenderCharacterStats.hp < 1)) {
					$('#instructions').html("YOU BEAT THEM ALL!<br>You're Awesome!<br>To play again, simply select your character!</p>")

					$('#userRow').append('<div id="warrior" class="col-xs-2 character"><a href="#"><img class="media-object" src="https://github.com/hcbreedl/week-4-game/blob/master/assets/images/warrior.png?raw=true" alt=""></a></div>');
					$('#userRow').append('<div id="girl" class="col-xs-2 character"><a href="#"><img class="media-object" src="https://github.com/hcbreedl/week-4-game/blob/master/assets/images/girl.png?raw=true" alt=""></a></div>');
					$('#userRow').append('<div id="goblin" class="col-xs-2 character"><a href="#"><img class="media-object" src="https://github.com/hcbreedl/week-4-game/blob/master/assets/images/goblin.png?raw=true" alt=""></a></div>');
					$('#userRow').append('<div id="giant" class="col-xs-2 character"><a href="#"><img class="media-object" src="https://github.com/hcbreedl/week-4-game/blob/master/assets/images/giant.png?raw=true" alt=""></a></div> ');

					resetUserCharacter();

					newGame();
				}
			}

		}); // End of attack button onclick			
	}); //End of on.click function
	};// End of newGame function

newGame();

}); //End of Document.ready function