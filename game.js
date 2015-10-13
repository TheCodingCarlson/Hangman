$(document).ready(function() {

    //set global variables
    var array = undefined;
    var turnCount = 6;
    var countfuncs = 0;

    //hangman drawing sections
    var gallows = {
        "hangman": {
            "strokepath": [
                {
                    "path": "M70.4,489.1c16.4-16.4,30.9-34.7,43-54.6c11.2-18.4,18.9-41.7,37.2-54.4c2.6-1.8,0.1-6.2-2.5-4.3    c-17.9,12.4-25.7,33.5-36.3,51.7c-12.4,21.2-27.6,40.7-44.9,58C64.6,487.8,68.1,491.3,70.4,489.1L70.4,489.1z",
                    "duration": 600
                },
                {
                    "path": "M147.7,378.4c15.4,21.2,33.9,39.8,55.3,55c20.5,14.6,43.7,26.6,59,47.1c1.9,2.5,6.2,0.1,4.3-2.5    c-14.6-19.6-35.7-31.8-55.5-45.3c-22.7-15.5-42.6-34.6-58.8-56.9C150.1,373.3,145.8,375.8,147.7,378.4L147.7,378.4z",
                    "duration": 600
                },
                {
                    "path": "M151,376.7c-6.7-78.2-9.2-156.7-7.6-235.1c0.1-3.2-4.9-3.2-5,0c-1.6,78.4,1,156.9,7.6,235.1    C146.2,379.9,151.2,379.9,151,376.7L151,376.7z",
                    "duration": 600
                },
                {
                    "path": "M140.4,143c27.5-3.5,55,6.5,82.5,1.8c14-2.4,26.7-9.3,40.2-13.4c13.6-4.1,27.6-6.5,41.5-8.9c3.2-0.5,1.8-5.4-1.3-4.8    c-13.7,2.3-27.3,4.7-40.6,8.7c-13.3,3.9-25.7,10.6-39.3,13.3c-27.5,5.5-55.3-5.1-82.9-1.6C137.3,138.4,137.2,143.4,140.4,143    L140.4,143z",
                    "duration": 600
                },
                {
                    "path": "M304.1,120.7c-0.5,20.1-0.9,40.3-1.4,60.4c-0.1,3.2,4.9,3.2,5,0c0.5-20.1,0.9-40.3,1.4-60.4    C309.2,117.4,304.2,117.4,304.1,120.7L304.1,120.7z",
                    "duration": 600
                },
            ],
            "dimensions": {
                "width": 576,
                "height": 720
            }
        }
    };

    var head = {
        "hang_head": {
            "strokepath": [
                {
                    "path": "M305.3,180.4c-21.5,0.7-39.6,15.1-50.8,32.6c-11,17.2-16.5,41.8-1.8,58.7c13.1,15.1,35.7,17.2,53.3,9.7    c9.7-4.2,18.3-10.9,25.3-18.7c7.4-8.3,14.2-18.3,16.1-29.5c1.7-10.6-1.5-22.1-10.6-28.5c-9.9-7-28.2-7.2-31.8-20.9    c-0.8-3.1-5.6-1.8-4.8,1.3c5.2,19.6,31.8,14.7,40.1,31c10.1,19.6-9.1,42.8-24.1,53.8c-14.9,11-34.9,15.2-51.5,5.3    c-19.1-11.3-18.7-34.7-9.8-52.6c9.5-19.1,28.2-36.4,50.5-37.1C308.5,185.3,308.5,180.3,305.3,180.4L305.3,180.4z",
                    "duration": 800
                },
            ], 
            "dimensions": {
                "width": 576,
                "height": 720
            }
        }
    };

    var body = {
        "hang_body": {
            "strokepath": [
            {
                "path": "M287.3,288.8c0.6,30.1,0.1,60.1-1.5,90.1c-0.2,3.2,4.8,3.2,5,0c1.6-30,2.1-60.1,1.5-90.1    C292.2,285.6,287.2,285.6,287.3,288.8L287.3,288.8z",
                "duration": 600
            },

            ],

            "dimensions": {
                    "width": 576,
                    "height": 720
            }
        }
    };

    var leftLeg  = {
        "hang_ll": {
            "strokepath": [
            {
                "path": "M284.7,382.1c-1,22.1-14.5,40.6-27.1,57.8c-1.9,2.6,2.4,5.1,4.3,2.5c13.3-18,26.7-37.2,27.8-60.3    C289.8,378.9,284.8,378.9,284.7,382.1L284.7,382.1z",
                "duration": 600
            },

            ],

            "dimensions": {
                "width": 576,
                "height": 720
            }
        }
    };


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
                countfuncs++;
                updateTurnCount();
                alert('Sorry, ' + letter.toUpperCase() + ' is not in this word. Try again!');
            }

            if(countfuncs === 1) {
                drawHead();

            } else if(countfuncs === 2) {
                drawBody();

            } else if(countfuncs === 3) {
                drawLeftLeg();
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
                drawGallows();

            }
        }
        );
    }

    //functions to draw figure
    var drawGallows = function() {
        $('#hangman').lazylinepainter( 
        {
        "svgData": gallows,
        "strokeWidth": 3,
        "strokeColor": "white",
        "drawSequential": true
        });

        $('#hangman').lazylinepainter('paint');
    };

    var drawHead = function() {
        $('#hang_head').lazylinepainter( 
        {
        "svgData": head,
        "strokeWidth": 3,
        "strokeColor": "white",
        "drawSequential": true
        });

        $('#hang_head').lazylinepainter('paint');
    };

    var drawBody = function() {
        $('#hang_body').lazylinepainter( 
        {
        "svgData": body,
        "strokeWidth": 3,
        "strokeColor": "white",
        "drawSequential": true
        });

        $('#hang_body').lazylinepainter('paint');
    };

    var drawLeftLeg = function() {
        $('#hang_ll').lazylinepainter( 
        {
        "svgData": leftLeg,
        "strokeWidth": 3,
        "strokeColor": "white",
        "drawSequential": true
        });

        $('#hang_ll').lazylinepainter('paint');
    };

    //hide input board/hangman
    $('.board').hide();
    $('.draw').hide();


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
        $('.dp').show();
    });

    //set randomWord parameters when difficulty buttons are clicked/hide the diff buttons/show input board

    $('#easy').on('click', function() {
        randomWord(4,7);
        $('.diff').hide();
        $('.board').show();
        $('.draw').show();
    });

    $('#med').on('click', function() {
        randomWord(8,12);
        $('.diff').hide();
        $('.board').show();
        $('.draw').show();  
    });

    $('#hard').on('click', function() {
        randomWord(13,16);
        $('.diff').hide();
        $('.board').show();
        $('.draw').show();

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

