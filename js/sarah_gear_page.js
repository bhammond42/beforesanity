function sarah_gear_page(){
	document.getElementById('right_container').innerHTML = '';
	right_container = document.getElementById('right_container');
	
	var sarah_gear_header = document.createElement('div');
		sarah_gear_header.id = 'sarah_gear_header';
		sarah_gear_header.setAttribute('class','header');
		sarah_gear_header.appendChild(document.createTextNode('Sarah\'s Equipment'));
	right_container.appendChild(sarah_gear_header);
	
	var sarah_gear_mic_header = document.createElement('div');
		sarah_gear_mic_header.id = 'sarah_gear_mic_header';
		sarah_gear_mic_header.setAttribute('class','header');
		sarah_gear_mic_header.appendChild(document.createTextNode('- Microphones -'));
	right_container.appendChild(sarah_gear_mic_header);
	
	var sarah_gear_guitar_header = document.createElement('div');
		sarah_gear_guitar_header.id = 'sarah_gear_guitar_header';
		sarah_gear_guitar_header.setAttribute('class','header');
		sarah_gear_guitar_header.appendChild(document.createTextNode('- Guitars -'));
	right_container.appendChild(sarah_gear_guitar_header);		
	
/*	var sarah_gear_guitars = document.createElement('p');
		sarah_gear_guitars.id = 'sarah_gear_guitars';
		sarah_gear_guitars.appendChild(document.createTextNode('Gibson Les Paul'));
	right_container.appendChild(sarah_gear_guitars);
	
	var guitar_image_container = document.createElement('div');
		guitar_image_container.id = 'guitar_image_container';
	right_container.appendChild(guitar_image_container);
	
	var sarah_guitars_img1 = document.createElement('img');
		sarah_guitars_img1.id = 'sarah_guitars_img1';
		sarah_guitars_img1.setAttribute('class','center_img');
		sarah_guitars_img1.setAttribute('title','Sarah\'s Guitars');
		sarah_guitars_img1.src = ("");
		sarah_guitars_img1.onclick = function(){
			//var page = new sarah_gear_page();
			//window.scrollTo(0,0);
		}
	guitar_image_container.appendChild(sarah_guitars_img1);
	
	var sarah_gear_amp_header = document.createElement('div');
		sarah_gear_amp_header.id = 'sarah_gear_amp_header';
		sarah_gear_amp_header.setAttribute('class','header');
		sarah_gear_amp_header.appendChild(document.createTextNode('- Amplifiers -'));
	right_container.appendChild(sarah_gear_amp_header);		
	
	var sarah_gear_amps = document.createElement('p');
		sarah_gear_amps.id = 'sarah_gear_amps';
		sarah_gear_amps.appendChild(document.createTextNode('Marshall JCM2000 1/2 stack'));
	right_container.appendChild(sarah_gear_amps);
	
	var sarah_gear_amps2 = document.createElement('p');
		sarah_gear_amps2.id = 'sarah_gear_amps2';
		sarah_gear_amps2.appendChild(document.createTextNode('Marshall JCM600'));
	right_container.appendChild(sarah_gear_amps2);
	
	var amp_image_container = document.createElement('div');
		amp_image_container.id = 'amp_image_container';
	right_container.appendChild(amp_image_container);
	
	var sarah_amps_img1 = document.createElement('img');
		sarah_amps_img1.id = 'sarah_amps_img1';
		sarah_amps_img1.setAttribute('class','center_img');
		sarah_amps_img1.setAttribute('title','Sarah\'s Amps');
		sarah_amps_img1.src = ("");
		sarah_amps_img1.onclick = function(){
			//var page = new sarah_gear_page();
			//window.scrollTo(0,0);
		}
	amp_image_container.appendChild(sarah_amps_img1);*/
}