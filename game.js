$(document).ready(function() {

	    function RandomWord() {
        var requestStr = "http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=a2928d7b39887c8f9340f0f28c303d6e15b37e8871ea72361";

        $.ajax(requestStr,
        	{
        	method: 'GET',
            success: function(data) {
            	// var array = data.split('');
                console.log(data[0].word);
                // console.log(array.length);
      			
            }
        }
        );
    }

   RandomWord();

    // word.forEach.(function(letter) {
    //     $('<h3>' + letter + '</h3>').appendTo('div');
    // });
     

 


















});