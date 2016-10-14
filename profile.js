$(document).ready(function(){
	var bigimage = document.getElementById("profilePic");
	console.log(bigimage);
	function increasePictureSize(){

	console.log(bigimage);

		// document.getElementById(elementId).style.width = "200%";
		// document.getElementById(elementId).style.height = "200%";
		// if (bigimage.style.width == "150px"){
		// 	bigimage.style.width = "300px";
		// 	bigimage.style.height = "300px";
		// }
		// else {
		// 	bigimage.style.width = "150px";
		// 	bigimage.style.height = "150px";
		// }	
		if (bigimage.className == "normal") {
			console.log("normal");
			bigimage.className = "large";
		}
		else {
			console.log("not normal")
			bigimage.className = "normal";
		};
	}

	bigimage.addEventListener("dblclick", increasePictureSize);

	var headercolor = document.getElementById("header");
	function hoverColor(){
		headercolor.style.color = "red";
	}
	function staticColor(){
		headercolor.style.color = "black";
	}

	headercolor.addEventListener("mouseover", hoverColor);
	headercolor.addEventListener("mouseout", staticColor);

	// function showRandomFact() {
	// }

	//TODO: Animation profilePic opacitiy demo here
	$("#profilePic").mouseover(function(){
		$(this).attr('title', 'HIIIIII!!! click me!');
		$(this).animate({
			opacity:0.4
		}, 500);
	});

	$("#profilePic").mouseout(function(){
		$(this).animate({
			opacity:1
		}, 500);
	});

	$("#profilePic").click(function(){
		$(this).animate({
			"margin-left":"+=50px"
		}, 500);
		$(this).animate({
			"margin-left":"-=50px"
		}, 500);
	});

	//TODO: Demo http://numbersapi.com/random/trivia AJAX call here
	$("#numberAJAX").click(function(){
		$.get('http://numbersapi.com/random/trivia', function(data){
			console.log('data received back from AJAX call:', data);
			$("#numberTrivia").text(data);
		});
	});

	$("#showTimeButton").click(function(){
		$.get('https://hb-server-time.herokuapp.com/', function(time){
			console.log('server time:', time);
			$('#serverTime').text(time);
		});
	});
	


});
