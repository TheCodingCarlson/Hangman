$(document).ready(function() {


    //set global variables
    var array = undefined;
    var turnCount = 6;

    //function to display word once difficulty is chosen
    var displayWord = function() {
        array.forEach(function(letter) {
            $('.word').append('<div class="letter"><h2 class="let ' + letter + '">' + letter + '</h2></div>');
            $('.let').hide();
        });
    };

    //function to check if letter chosen by player is in the word/show letter if guess is wrong/decrement turn count
    var checkLetter = function() {
        $('.input').on('click', function() {
            $('.turns_left').html('Turns Left: ' + turnCount);
            console.log(turnCount);
            var letter = $(this).attr('id');
            var boo = false;

            array.forEach(function(x) {
                if(letter === x && !$('.'+letter).data('displayed')) {
                    $('.'+letter).show();
                    $('.'+letter).data('displayed', true);
                    boo = true;
                } else if(letter === x) {
                    alert('This letter has already been chosen!');
                    boo = true;
                }
            });

            if(boo === false) {
                turnCount--;
                updateTurnCount();
                alert('Sorry, ' + letter + ' is not in this word. Try again!');
            }
            determineOutcome();
        });
    }

    //Updates turn count to HTML
    var updateTurnCount = function() {
        $('.turns_left').html('Turns Left: ' + turnCount);
    }

    var determineOutcome = function() {
        var correctLetterCount = 0;
        var divs = $('.let');

        if(turnCount === 0) {
            alert('You Lose');
        } else {
            for(var i=0; i < divs.length; i++) {
                if($(divs[i]).css('display') === 'none') { //telling me that the letter is wrong
                    correctLetterCount++;
                }
            }
            if(0 === correctLetterCount) {
                alert('You win!');

            }
        }
    }

    //function to get a random word from Wordnik API
	var randomWord = function(minLength, maxLength)  {
        var requestStr = "http://api.wordnik.com:80/v4/words.json/randomWords?minCorpusCount=10000&minDictionaryCount=20&excludePartOfSpeech=proper-noun,proper-noun-plural,proper-noun-posessive,suffix,family-name,idiom,affix&hasDictionaryDef=true&includePartOfSpeech=noun,verb,adjective,definite-article,conjunction&limit=26&minLength="+minLength+"&maxLength="+maxLength+"&api_key=a2928d7b39887c8f9340f0f28c303d6e15b37e8871ea72361";

        $.ajax(requestStr,
        	{
        	method: 'GET',
            success: function(data) {
            	array = (data[0].word).toLowerCase().split('');
                console.log(array);
                displayWord();	
                checkLetter();
                updateTurnCount();
            }
        }
        );
    }

    //hide input board/hangman
    $('.board').hide();
    $('.hangman').hide();

    //show rules when hovering mouse over How to Play?
    $('h2').mouseenter(function() {
        $('#des').show();
    }).mouseleave(function() {
        $('#des').hide();
    });

    //function when play button is clicked, shows difficulty buttons/hides intro div
    $('#play').on('click', function() {
        $('.intro').hide();
        $('.dif_buttons').show();
    });

    //set randomWord parameters when difficulty buttons are clicked/hide the diff buttons/show input board

    $('#easy').on('click', function() {
        randomWord(3,5);
        $('.diff').hide();
        $('.board').show();
        $('.hangman').show(); 
    });

    $('#med').on('click', function() {
        randomWord(6,9);
        $('.diff').hide();
        $('.board').show();
        $('.hangman').show();  
    });

    $('#hard').on('click', function() {
        randomWord(10,15);
        $('.diff').hide();
        $('.board').show(); 
        $('.hangman').show();
    });


    //button to toggle music on and off
    $("#music").on("click", function(){
            var x = document.querySelector("#gbu");
            if (x.paused === false){
                x.pause();
                $("#vol").removeClass("glyphicon glyphicon-volume-up").addClass("glyphicon glyphicon-volume-off");
            } else {
                x.play();
                $("#vol").removeClass("glyphicon glyphicon-volume-off").addClass("glyphicon glyphicon-volume-up");
            }
        });
});