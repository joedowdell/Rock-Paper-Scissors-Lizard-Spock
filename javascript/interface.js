$(document).ready(function(){

        var player1 = new Player('Alex');
        var player2 = new Player('Bob');
        var game = new Game(player1, player2);

	        $('.choices img').on('click', function(){
	          player1.picks($(this).data('pick'));
	          player2.picks(['rock', 'paper', 'scissors', 'lizard', 'spock'][Math.round((Math.random())*2)]);

	        $("<li>" + game.victoryMessage(game.winner(), game.loser(game.winner()), game.verb) + "</li>").prependTo('#results').slideDown();

	        $("#results li:gt(3)").fadeOut(function(){
	          $(this).remove();
	        });
        });
	        
      })