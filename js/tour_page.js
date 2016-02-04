function tour_page(){
	document.getElementById('right_container').innerHTML = '';
	right_container = document.getElementById('right_container');
	
	var tour_dates_none = document.createElement('div');
		tour_dates_none.id = 'tour_dates_none';
		tour_dates_none.setAttribute('class', 'text');
		tour_dates_none.appendChild(document.createTextNode('There are currently no tour dates scheduled.'));
	right_container.appendChild(tour_dates_none);
	
	var linebreak = document.createElement('br');
	right_container.appendChild(linebreak);
	
	var tour_dates = document.createElement('div');
		tour_dates.id = 'tour_dates';
		tour_dates.setAttribute('class', 'text');
		tour_dates.appendChild(document.createTextNode('Previous performance dates and locations:'));
	right_container.appendChild(tour_dates);
	
	var limelight1 = document.createElement('div');
		limelight1.id = 'limelight1';
		limelight1.setAttribute('class','button');
		limelight1.appendChild(document.createTextNode('05/14/2009: Live at Limelight - Nashville, TN'));
	right_container.appendChild(limelight1);
	
	var exit_in = document.createElement('div');
		exit_in.id = 'exit_in';
		exit_in.setAttribute('class','button');
		exit_in.appendChild(document.createTextNode('05/23/2009: Exit/In - Nashville, TN'));
	right_container.appendChild(exit_in);
	
	var limelight2 = document.createElement('div');
		limelight2.id = 'limelight2';
		limelight2.setAttribute('class','button');
		limelight2.appendChild(document.createTextNode('05/28/2009: Live at Limelight - Nashville, TN'));
	right_container.appendChild(limelight2);
	
	var club527 = document.createElement('div');
		club527.id = 'club527';
		club527.setAttribute('class','button');
		club527.appendChild(document.createTextNode('06/03/2009: Club 527 - Murfreesboro, TN'));
		//add onclick function to open picture gallery
	right_container.appendChild(club527);
		
}
	