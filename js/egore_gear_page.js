function egore_gear_page(){
	document.getElementById('right_container').innerHTML = '';
	right_container = document.getElementById('right_container');
	
	var egore_gear_header = document.createElement('div');
		egore_gear_header.id = 'egore_gear_header';
		egore_gear_header.setAttribute('class','header');
		egore_gear_header.appendChild(document.createTextNode('Egore\'s Equipment'));
	right_container.appendChild(egore_gear_header);
	
	var egore_gear_guitar_header = document.createElement('div');
		egore_gear_guitar_header.id = 'egore_gear_guitar_header';
		egore_gear_guitar_header.setAttribute('class','header');
		egore_gear_guitar_header.appendChild(document.createTextNode('- Bass Guitars -'));
	right_container.appendChild(egore_gear_guitar_header);		
	
	var egore_gear_guitars = document.createElement('p');
		egore_gear_guitars.id = 'egore_gear_guitars';
		egore_gear_guitars.appendChild(document.createTextNode('Ibanez 5 string'));
	right_container.appendChild(egore_gear_guitars);
	
	var guitar_image_container = document.createElement('div');
		guitar_image_container.id = 'guitar_image_container';
	right_container.appendChild(guitar_image_container);
	
	var egore_guitars_img1 = document.createElement('img');
		egore_guitars_img1.id = 'egore_guitars_img1';
		egore_guitars_img1.setAttribute('class','center_img');
		egore_guitars_img1.setAttribute('title','Egore\'s Guitars');
		egore_guitars_img1.src = ("");
		egore_guitars_img1.onclick = function(){
			//var page = new egore_gear_page();
			//window.scrollTo(0,0);
		}
	guitar_image_container.appendChild(egore_guitars_img1);
	
	var egore_gear_amp_header = document.createElement('div');
		egore_gear_amp_header.id = 'egore_gear_amp_header';
		egore_gear_amp_header.setAttribute('class','header');
		egore_gear_amp_header.appendChild(document.createTextNode('- Amplifiers -'));
	right_container.appendChild(egore_gear_amp_header);		
	
	var egore_gear_amps = document.createElement('p');
		egore_gear_amps.id = 'egore_gear_amps';
		egore_gear_amps.appendChild(document.createTextNode('Ibanez SW100 Stack'));
	right_container.appendChild(egore_gear_amps);
	
	var amp_image_container = document.createElement('div');
		amp_image_container.id = 'amp_image_container';
	right_container.appendChild(amp_image_container);
	
	var egore_amps_img1 = document.createElement('img');
		egore_amps_img1.id = 'egore_amps_img1';
		egore_amps_img1.setAttribute('class','center_img');
		egore_amps_img1.setAttribute('title','Egore\'s Amps');
		egore_amps_img1.src = ("");
		egore_amps_img1.onclick = function(){
			//var page = new egore_gear_page();
			//window.scrollTo(0,0);
		}
	amp_image_container.appendChild(egore_amps_img1);
}