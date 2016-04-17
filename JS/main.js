	function askQuestions() {


	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;


	if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() !== 'assembly') {
		console.log('Hello General!');
	}

	var faveColor = prompt('What is your favourite color?').toLowerCase();

	if (faveColor === 'blue' || 
		faveColor === 'red' || 
		faveColor === 'white');{
		$('h1').css('color', faveColor);
	}

}

// When the page loads
$(function() {

	$('img').on('click', askQuestions);

	//Hide all the content 
	$('h3').next().hide();

	// When the user clicks an h3
	$('h3').on('click', function() {

			// Hide the content 
			$('h3').next().slideUp(150);

			// Toggle the next element
			$(this).next().slideToggle(150);
	});


});


 