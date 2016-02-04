function sel_gear_page(){
	document.getElementById('right_container').innerHTML = '';
	right_container = document.getElementById('right_container');
	
	var sel_gear_header = document.createElement('div');
		sel_gear_header.id = 'sel_gear_header';
		sel_gear_header.setAttribute('class','header');
		sel_gear_header.appendChild(document.createTextNode('Sel\'s Equipment'));
	right_container.appendChild(sel_gear_header);
	
	var sel_gear_guitar_header = document.createElement('div');
		sel_gear_guitar_header.id = 'sel_gear_guitar_header';
		sel_gear_guitar_header.setAttribute('class','header');
		sel_gear_guitar_header.appendChild(document.createTextNode('- Guitars -'));
	right_container.appendChild(sel_gear_guitar_header);		
	
	var sel_gear_guitars = document.createElement('p');
		sel_gear_guitars.id = 'sel_gear_guitars';
		sel_gear_guitars.appendChild(document.createTextNode('Gibson Les Paul'));
	right_container.appendChild(sel_gear_guitars);
	
	var guitar_image_container = document.createElement('div');
		guitar_image_container.id = 'guitar_image_container';
	right_container.appendChild(guitar_image_container);
	
	var sel_guitars_img1 = document.createElement('img');
		sel_guitars_img1.id = 'sel_guitars_img1';
		sel_guitars_img1.setAttribute('class','center_img');
		sel_guitars_img1.setAttribute('title','Sel\'s Guitars');
		sel_guitars_img1.src = ("");
		sel_guitars_img1.onclick = function(){
			//var page = new sel_gear_page();
			//window.scrollTo(0,0);
		}
	guitar_image_container.appendChild(sel_guitars_img1);
	
	var sel_gear_amp_header = document.createElement('div');
		sel_gear_amp_header.id = 'sel_gear_amp_header';
		sel_gear_amp_header.setAttribute('class','header');
		sel_gear_amp_header.appendChild(document.createTextNode('- Amplifiers -'));
	right_container.appendChild(sel_gear_amp_header);		
	
	var sel_gear_amps = document.createElement('p');
		sel_gear_amps.id = 'sel_gear_amps';
		sel_gear_amps.appendChild(document.createTextNode('Marshall JCM2000 1/2 stack'));
	right_container.appendChild(sel_gear_amps);
	
	var sel_gear_amps2 = document.createElement('p');
		sel_gear_amps2.id = 'sel_gear_amps2';
		sel_gear_amps2.appendChild(document.createTextNode('Marshall JCM600'));
	right_container.appendChild(sel_gear_amps2);
	
	var amp_image_container = document.createElement('div');
		amp_image_container.id = 'amp_image_container';
	right_container.appendChild(amp_image_container);
	
	var sel_amps_img1 = document.createElement('img');
		sel_amps_img1.id = 'sel_amps_img1';
		sel_amps_img1.setAttribute('class','center_img');
		sel_amps_img1.setAttribute('title','Sel\'s Amps');
		sel_amps_img1.src = ("");
		sel_amps_img1.onclick = function(){
			//var page = new sel_gear_page();
			//window.scrollTo(0,0);
		}
	amp_image_container.appendChild(sel_amps_img1);
}