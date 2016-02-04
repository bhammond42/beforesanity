function brad_gear_page(){
	document.getElementById('right_container').innerHTML = '';
	right_container = document.getElementById('right_container');
	
	var brad_gear_header = document.createElement('div');
		brad_gear_header.id = 'brad_gear_header';
		brad_gear_header.setAttribute('class','header');
		brad_gear_header.appendChild(document.createTextNode('Brad\'s Equipment'));
	right_container.appendChild(brad_gear_header);
	
	var brad_gear_drum_header = document.createElement('div');
		brad_gear_drum_header.id = 'brad_gear_drum_header';
		brad_gear_drum_header.setAttribute('class','header');
		brad_gear_drum_header.appendChild(document.createTextNode('- Drums -'));
	right_container.appendChild(brad_gear_drum_header);		
	
	var brad_gear_drums = document.createElement('p');
		brad_gear_drums.id = 'brad_gear_drums';
		brad_gear_drums.appendChild(document.createTextNode('Numerous different drum brands'));
	right_container.appendChild(brad_gear_drums);
	
	var drum_image_container = document.createElement('div');
		drum_image_container.id = 'drum_image_container';
	right_container.appendChild(drum_image_container);
	
	var brad_drums_img1 = document.createElement('img');
		brad_drums_img1.id = 'brad_drums_img1';
		brad_drums_img1.setAttribute('class','center_img');
		brad_drums_img1.setAttribute('title','Brad\'s Drums');
		brad_drums_img1.src = ("");
		brad_drums_img1.onclick = function(){
			var myImage = 'img/header.jpg';
			var myHeight = 350;
			var myWidth = 350;
			origLeft = 0;
			origTop = 0;
			TheImgWin = window.open(myImage,'image,height' + myHeight + ',width=' + myWidth + ',toolbar=no,directories=no,status=no,' + 'menubar=no,scrollbars=no,resizable=no');
			TheImgWin.resizeTo(myWidth+2,myHeight+30);
			TheImgWin.moveTo(origLeft,origTop);
			TheImgWin.focus();
			//var page = new brad_gear_page();
			//window.scrollTo(0,0);
		/*	var newwindow
			function popitup(url , title) {
			if (newwindow && !newwindow.closed)
			{ newwindow.focus(); newwindow.document.clear() }
			else
			{ newwindow=window.open('','','width=404,height=316,resizable=1') }

			newwindow.document.writeln('<> <head> <title>' + title + '<\/title> <\/head> <body bgcolor=\"black\"> <center>');
			newwindow.document.writeln('<img src=' + url + ' title=\"' + title + '\" alt=\"' + title + '\" >');
			newwindow.document.writeln('<\/center> <\/body> <\/html>');
			newwindow.document.close();
			}*/
		}
	drum_image_container.appendChild(brad_drums_img1);
	
	var brad_gear_cymbal_header = document.createElement('div');
		brad_gear_cymbal_header.id = 'brad_gear_cymbal_header';
		brad_gear_cymbal_header.setAttribute('class','header');
		brad_gear_cymbal_header.appendChild(document.createTextNode('- Cymbals -'));
	right_container.appendChild(brad_gear_cymbal_header);		
	
	var brad_gear_cymbals = document.createElement('p');
		brad_gear_cymbals.id = 'brad_gear_cymbals';
		brad_gear_cymbals.appendChild(document.createTextNode('Zildjian A'));
	right_container.appendChild(brad_gear_cymbals);
	
	var cymbal_image_container = document.createElement('div');
		cymbal_image_container.id = 'cymbal_image_container';
	right_container.appendChild(cymbal_image_container);
	
	var brad_cymbals_img1 = document.createElement('img');
		brad_cymbals_img1.id = 'brad_cymbals_img1';
		brad_cymbals_img1.setAttribute('class','center_img');
		brad_cymbals_img1.setAttribute('title','Brad\'s Drums');
		brad_cymbals_img1.src = ("");
		brad_cymbals_img1.onclick = function(){
			//var page = new brad_gear_page();
			//window.scrollTo(0,0);
		}
	cymbal_image_container.appendChild(brad_cymbals_img1);
}