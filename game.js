$(document).ready(function() {

    //declare global variables
    var array = undefined;
    var turnCount = 6;
    var countfuncs = 0;

    //declare music variables

    //hangman drawing section variables
    var gallows = {
        "hangman": {
            "strokepath": [
            {
                "path": "M34.8,347.7c124.4-7.4,249.1-9.5,373.7-5.8c5.9,0.2,5.9-9.1,0-9.3c-124.6-3.5-249.3-1.7-373.7,5.8    C28.8,338.8,28.8,348.1,34.8,347.7L34.8,347.7z",
                "duration": 600
            },
            {
                "path": "M214.3,336.6c2-23.2,7.2-46.8,1.7-68.9c-6.5-26-4.1-50.9-1.7-77.2c4.5-51.6,3.5-103.4,2.6-155c-0.2-5.9-9.5-5.9-9.3,0    c0.9,51.6,1.9,103.6-2.6,155c-2,24.1-5,47.7,0.2,71.7c5.2,24.1,2,49.2-0.2,74.4c-0.6,6.1,21.7,4.1,22.3-1.9L214.3,336.6z",
                "duration": 600
            },
            {
                "path": "M208.9,34.6c94.3-1.9,188.6-0.6,282.9,3.7c5.9,0.2,5.9-9.1,0-9.3c-94.3-4.3-188.6-5.6-282.9-3.7    C202.9,25.5,202.9,34.7,208.9,34.6L208.9,34.6z",
                "duration": 600
            },
            {
                "path": "M216.3,97.7c14.1-5,22.5-16.9,32.7-26.9c13-12.8,27.8-23.4,44-31.7c5.4-2.8,0.6-10.8-4.6-8c-14.1,7.2-27.1,16.1-39,26.7    c-11.3,10-21,25.8-35.5,31.2C208.3,90.6,210.7,99.7,216.3,97.7L216.3,97.7z",
                "duration": 600
            },
            {
                "path": "M482.1,34.2c2.4,16.9,5.4,33.8,8.5,50.5c1.1,5.9,10,3.3,8.9-2.4c-3.3-16.7-6.1-33.6-8.5-50.5    C490.3,25.8,481.4,28.4,482.1,34.2L482.1,34.2z",
                "duration": 600
            },
           
            ],
            "dimensions": {
                "width": 575,
                "height": 400
            }
        }
    };

    var head = {
        "hang_head": {
            "strokepath": [    
            {
                "path": "M492.9,82.4c-13.4,1.1-32.9,8.4-28.4,25.8c3.9,15.6,26,25.1,40.5,24.9c14.8-0.2,26.4-15.2,26.5-29.5    c0.2-16.5-26-22.8-38.6-23.4c-5.9-0.4-5.9,8.9,0,9.3c8,0.4,19.1,2.4,25.1,8.4c9.1,9.3-2,25.8-13,26c-9.5,0.2-20.4-4.6-27.1-11.3    c-12.4-12.1,4.5-19.9,15-20.8C498.8,91.2,498.8,81.9,492.9,82.4L492.9,82.4z",
                "duration": 600
            },

            ], 
            "dimensions": {
                "width": 575,
                "height": 400
            }
        }
    };

    var body = {
        "hang_body": {
            "strokepath": [ 
            {
                "path": "M492.9,132.9c5.2,19.3,8,39.2,8,59.2c0,5.9,9.3,5.9,9.3,0c0-21-2.8-41.4-8.4-61.6C500.3,124.8,491.2,127.2,492.9,132.9    L492.9,132.9z",
                "duration": 600
            },

            ],
            "dimensions": {
                    "width": 575,
                    "height": 400
            }
        }
    };

    var leftLeg  = {
        "hang_ll": {
            "strokepath": [
            {
                "path": "M500.7,191c-11.1,12.1-21.9,24.3-32.3,37.1c-3.7,4.6,2.8,11.1,6.5,6.5c10.4-12.6,21.2-25.1,32.3-37.1    C511.3,193.1,504.8,186.6,500.7,191L500.7,191z",
                "duration": 600
            },

            ],
            "dimensions": {
                "width": 575,
                "height": 400
            }
        }
    };

    var rightLeg  = {
        "hang_rl": {
            "strokepath": [
             {
                "path": "M503.8,194.2c12.6,9.5,24.3,20,34.9,31.7c4.1,4.5,10.6-2.2,6.5-6.5c-11.3-12.3-23.6-23.2-36.8-33.2    C503.6,182.7,499,190.7,503.8,194.2L503.8,194.2z",
                "duration": 600
            },

            ],
            "dimensions": {
                "width": 575,
                "height": 400
            }
        }
    };

    var leftArm  = {
        "hang_la": {
            "strokepath": [
             {
                "path": "M495.5,152.1c-11,0-21.9,0-32.9,0c-5.9,0-5.9,9.3,0,9.3c11,0,21.9,0,32.9,0C501.4,161.3,501.4,152.1,495.5,152.1    L495.5,152.1z",
                "duration": 600
            },

            ],
            "dimensions": {
                "width": 575,
                "height": 400
            }
        }
    };

    var rightArm  = {
        "hang_ra": {
            "strokepath": [
            {
                "path": "M500.5,162.6c15,2.8,30.1,3.3,45.3,1.3c5.8-0.7,5.9-10,0-9.3c-14.3,1.9-28.6,1.7-42.9-1.1    C497.1,152.6,494.7,161.5,500.5,162.6L500.5,162.6z",
                "duration": 600
            },

            ],
            "dimensions": {
                "width": 575,
                "height": 400
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

        $('.input').on('click', function(b) {

            $(this).addClass('add');
            $(this).attr('disabled', true);
            $('.turns_left').html('Turns Left: ' + turnCount);
            var letter = $(this).attr('id');
            var boo = false;

            array.forEach(function(x) {
                if(letter === x && !$('.'+letter).data('displayed')) {
                    $('.'+letter).show();
                    $('.'+letter).data('displayed', true);
                    boo = true;
                } else if(letter === x) {
                    boo = true;
                }
            });

            if(boo === false) {
                turnCount--;
                countfuncs++;
                updateTurnCount();
                alert('Sorry, ' + letter.toUpperCase() + ' is not in this word. Try again!');

                if(countfuncs === 1) {
                    drawHead();

                } else if(countfuncs === 2) {
                    drawBody();

                } else if(countfuncs === 3) {
                    drawLeftLeg();

                } else if(countfuncs === 4) {
                    drawRightLeg();

                } else if(countfuncs === 5) {
                    drawLeftArm();
                }
            }   
            determineOutcome();
        });
    }

    //Updates turn count to HTML
    var updateTurnCount = function() {
        $('.turns_left').html('Turns Left: ' + '<span id="tc">' + turnCount + '</span>');
    }

    var determineOutcome = function() {
        var correctLetterCount = 0;
        var divs = $('.let');

        if(turnCount === 0) {
            drawRightArm();
            var delay = function() {
                alert('You Lose'); 
                $('#reset').show();
            };

            setTimeout(delay, 2000);

        } else {
            for(var i=0; i < divs.length; i++) {
                if($(divs[i]).css('display') === 'none') { //telling me that the letter is wrong
                    correctLetterCount++;
                }
            }
            if(0 === correctLetterCount) {
                alert('You win!');
                $('#reset').show();
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

    var drawRightLeg = function() {
        $('#hang_rl').lazylinepainter( 
        {
            "svgData": rightLeg,
            "strokeWidth": 3,
            "strokeColor": "white",
            "drawSequential": true
        });

        $('#hang_rl').lazylinepainter('paint');
    };


    var drawLeftArm = function() {
        $('#hang_la').lazylinepainter( 
        {
            "svgData": leftArm,
            "strokeWidth": 3,
            "strokeColor": "white",
            "drawSequential": true
        });

        $('#hang_la').lazylinepainter('paint');
    };


    var drawRightArm = function() {
        $('#hang_ra').lazylinepainter( 
        {
            "svgData": rightArm,
            "strokeWidth": 3,
            "strokeColor": "white",
            "drawSequential": true
        });

        $('#hang_ra').lazylinepainter('paint');
    };

    //hide input board/hangman/reset button
    $('.board').hide();
    $('.draw').hide();
    $('#reset').hide();

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

    //reload page once game is over
    $('#reset').on('click',function() {
      location.reload();
    });

    //button to toggle music on and off
    $("#music").on("click", function(){
            var x = document.querySelector("#gbu");
            if (x.paused === false){
                x.pause();
                $("#vol").removeClass("glyphicon glyphicon-volume-up").addClass("glyphicon glyphicon-volume-off");
                $("#on").css('color', 'black');
                $("#off").css('color','#CC3300');

            } else {
                x.play();
                $("#vol").removeClass("glyphicon glyphicon-volume-off").addClass("glyphicon glyphicon-volume-up");
                $("#on").css('color', '#CC3300');
                $("#off").css('color','black');
            }
        });
});