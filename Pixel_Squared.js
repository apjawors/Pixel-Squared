$(document).ready(function() {
	
	var welcome = alert("Click a button and have fun!");
	
    function initiate () {
        
        //Initializes default settings
        
        var numOfSquares = prompt("You can pick up to 75 squares. How many do you want on each side?","");
        
        if (numOfSquares > 75) {
            var retry1 = alert("C'mon what did I just tell you about putting more than 75?");
            numOfSquares = 0;
            restart();
        };
        
        if (numOfSquares < 1) {
            var retry2 = alert("That doesn't make any sense...");
            numOfSquares = 0;
            restart();   
        };
        
        var $containerWidth = $(".container").width();
	    var $squareSize = ($containerWidth / numOfSquares);
    
        for(var i = 0; i < numOfSquares * numOfSquares; i++) {
			$(".container").append('<div class="square"></div>');
        };
    
        $(".square").css({"height": $squareSize, 
                      "width": $squareSize, 
                      "display": "inline-block",
                      "float": "left"});
    };
    
    function restart() {
		
		$(".square").remove();
		
		initiate();
	};
			
	$(".Color").click(function() {
		
		//Color and size of grid is changed by the button color you click on
		
		var value = $(this).val();
		
		restart();
		
		$(".square").mouseenter(function() {			
			$(this).css("background-color", value);
		});		
	});
	
	$(".Random").click(function() {
        
        restart();
        
        //Creates random color when mouse enters squares
        
        $('.square').mouseenter(function() {
            
            var r = Math.floor(Math.random()*256);
            var g = Math.floor(Math.random()*256);
            var b = Math.floor(Math.random()*256);
            
            $(this).css("background-color", "rgb(" + r +"," + g + "," + b +")");
        });
    });
	
	$(".Fade").click(function() {
		
		restart();
		
		var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
            
        var newColor = "rgb(" + r +"," + g + "," + b +")"
		
		$(".square").mouseenter(function () {
            $(this).css({"background-color": newColor});
		});
        
        $(".square").mouseleave(function () {
			$(this).css({"background-color": "#c0adad",
						 "transition": "background-color 3.0s ease"});
        });
	});
});
	