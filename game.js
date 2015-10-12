$(document).ready(function() {

    var array = undefined;

    var drawHangman = function() {
        array.forEach(function(letter) {
            $('.word').append('<h2 class="letter">' + letter + '</h2>');

        });
    };

        //function to get a random word from Wordnik API
	var randomWord = function(minLength, maxLength)  {
        var requestStr = "http://api.wordnik.com:80/v4/words.json/randomWords?minCorpusCount=10000&minDictionaryCount=20&excludePartOfSpeech=proper-noun,proper-noun-plural,proper-noun-posessive,suffix,family-name,idiom,affix&hasDictionaryDef=true&includePartOfSpeech=noun,verb,adjective,definite-article,conjunction&limit=26&minLength="+minLength+"&maxLength="+maxLength+"&api_key=a2928d7b39887c8f9340f0f28c303d6e15b37e8871ea72361";

        $.ajax(requestStr,
        	{
        	method: 'GET',
            success: function(data) {
            	array = (data[0].word).toLowerCase().split('');
                drawHangman();	
            }
        }
        );
    }

    //show rules when hovering mouse over How to Play?
    $('h2').mouseenter(function() {
        $('#des').show();
    }).mouseleave(function() {
        $('#des').hide();
    });

    //function when play button is clicked, shows diff buttons
    $('#play').on('click', function() {
        $('.intro').hide();
        $('.dif_buttons').show();
    });

    //set randomWord parameters when diff buttons are clicked

    $('#easy').on('click', function() {
        randomWord(3,5);
        $('.diff').hide();
        
    });

    $('#med').on('click', function() {
        randomWord(6,9);
        $('.diff').hide();
        
    });

    $('#hard').on('click', function() {
        randomWord(10,15);
        $('.diff').hide(); 
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