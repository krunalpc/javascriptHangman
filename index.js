
    var divMessage = document.getElementById('message')

	var wholeString ="";

	function setString(){
		wholeString = document.getElementById('wordToGuess').value
		document.getElementById('xxxxx').style.display = 'none'
	}

	var matchedWord = [];
	var count = 0;

	function drawBase(){
		  var c = document.getElementById("myCanvas");
	      var ctx = c.getContext("2d");
		  ctx.beginPath();
	      ctx.moveTo(20, 550);
	      ctx.lineTo(250, 550);
	      ctx.stroke();
	}

	function drawPiller(){
		  var c = document.getElementById("myCanvas");
	      var ctx = c.getContext("2d");
		  ctx.beginPath();
	      ctx.moveTo(130, 550);
	      ctx.lineTo(130, 100);
	      ctx.stroke();
	}

	function drawRode(){
		  var c = document.getElementById("myCanvas");
	      var ctx = c.getContext("2d");
		  ctx.beginPath();
	      ctx.moveTo(130, 100);
        ctx.lineTo(400, 100);
	      ctx.stroke();
	}

	function drawHanging(){
	  var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
	  ctx.beginPath();
      ctx.moveTo(400, 100);
      ctx.lineTo(400, 150);
      ctx.stroke();
	}

	function drawCircle(){
	  var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
	  ctx.beginPath();
      ctx.moveTo(400,150);
      ctx.arc(400,200,50,0,2*Math.PI);
      ctx.stroke();
	}

	function drawBody(){
	  var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
	  ctx.beginPath();
      ctx.moveTo(400,250);
      ctx.lineTo(400, 450);
      ctx.stroke();
	}

	function drawLeftHand(){
	  var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
	  ctx.beginPath();
      ctx.moveTo(400,300);
      ctx.lineTo(350, 350);
      ctx.stroke();
	}

	function drawRightHand(){
	  var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
	  ctx.beginPath();
      ctx.moveTo(400,300);
      ctx.lineTo(450, 350);
      ctx.stroke();
	}

	function drawLeftLeg(){
	  var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
	  ctx.beginPath();
      ctx.moveTo(400,450);
      ctx.lineTo(350, 500);
      ctx.stroke();
	}

	function drawRightLeg(){
	  var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
	  ctx.beginPath();
      ctx.moveTo(400,450);
      ctx.lineTo(450, 500);
      ctx.stroke();
	}

	function draw(){
		switch(count){
			case 1:
				drawBase();
				break;
			case 2:
				drawPiller();
				break;
			case 3:
				drawRode();	
				break;
			case 4:
				drawHanging();	
				break;
			case 5:
				drawCircle();
				break;
			case 6:
				drawBody();	
				break;
			case 7:
				drawLeftHand();
				break;
			case 8:
				drawRightHand();
				break;
			case 9:
				drawLeftLeg();
				break;
			case 10:
				drawRightLeg();
				break;
		}
	}

	function guessProcess()  {
		
		var mw = 0;

		var guess = document.getElementById("guess").value;

		if (wholeString.indexOf(guess) >= 0) {

				out("You have entered " + guess + " Matched " + "<br>");
				matchedWord.push(guess);
				mw++;

				}else{

						out("You have entered " + guess + " Missed " + "<br>");

						count++;
						if(count == 10){
							out('done with all attemepred')
							return;
						}
						draw();

				}
			};

	function out(msg){
		document.getElementById('message').innerHTML = document.getElementById('message').innerHTML + '<br>'+ msg
	}
