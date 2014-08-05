

function Player(name) {
  // 'initialize' method goes here!
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};


Game.prototype.PAIRS = {
  rock:       {scissors: 'crushes', lizard: 'squashes'},
  paper:      {rock: 'covers', spock: 'disproves'},
  scissors:   {paper: 'cuts', lizard: 'decapitates'},
  lizard:     {spock: 'posions', paper: 'eats'},
  spock:      {rock: 'vapourises', scissors: 'smashes'}
};

Game.prototype.winner = function() { 

	if(this.player1.pick === this.player2.pick) {
	return null
	}

	else if (typeof this.PAIRS[this.player1.pick][this.player2.pick] === 'string') {
    this.verb = this.PAIRS[this.player1.pick][this.player2.pick];
    return this.player1;
  }
 	
  else if (typeof this.PAIRS[this.player2.pick][this.player1.pick] === 'string') {
    this.verb = this.PAIRS[this.player2.pick][this.player1.pick];
    return this.player2;
  }
  
};

Game.prototype.loser = function(winner) {

loser = (winner === this.player1) ? this.player2 : this.player1;
return loser;
};

Game.prototype.victoryMessage = function(winner, loser, verb) {
  if (winner === null) {
    return 'draw'
    }
  else {
	return (["Congratulations", winner.name, "your", winner.pick, verb, loser.name + "'s", loser.pick]).join(' ');
  };
  }



