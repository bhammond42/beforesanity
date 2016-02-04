function media_page(){
	document.getElementById('right_container').innerHTML = '';
	right_container = document.getElementById('right_container');
	
/*	var audio = document.createElement('div');
		audio.id = 'audio';
		audio.setAttribute('type','audio/mpeg');
		audio.src = 'Kalimba.mp3';
	right_container.appendChild(audio);
*/
	//var audio = new Audio('Kalimba.mp3');
/*	var song1 = document.createElement('input');
		song1.id = 'song1';
		song1.setAttribute("class","button");
		song1.setAttribute('type','button');
		song1.setAttribute('value','Before Sanity - Alone');
		song1.onclick = function(){
		//	audio.play()
			PlayerOpen('test', 'Kalimba.mp3');
		}
	right_container.appendChild(song1);
	
	var song2 = document.createElement('input');
		song2.id = 'song2';
		song2.setAttribute("class","button");
		song2.setAttribute('type','button');
		song2.setAttribute('value','Before Sanity - Me and You');
		song2.onclick = function(){
		//	audio.play()
			PlayerOpen('test2', 'Kalimba.mp3');
		}
	right_container.appendChild(song2);
*/	

	var media_none = document.createElement('div');
		media_none.id = 'media_none';
		media_none.setAttribute('class', 'text');
		media_none.appendChild(document.createTextNode('Media will be uploaded soon.'));
	right_container.appendChild(media_none);

//READY TO GO - JUST NEED TO UPLOAD MUSIC AND CHANGE THE .src
	/*var song_alone = document.createElement('iframe');
		song_alone.setAttribute('class', 'media_song');
		song_alone.src = 'http://audioboom.com/boos/2810032-jeff-got-in-a-fight-for-his-girlfriend/embed/v3?eid=AQAAAIctvVSw4CoA&player_theme=dark&link_color=white&image_option=none&show_title=true';
	right_container.appendChild(song_alone);
	
	var song_meandyou = document.createElement('iframe');
		song_meandyou.setAttribute('class', 'media_song');
		song_meandyou.src = 'http://audioboom.com/boos/2810032-jeff-got-in-a-fight-for-his-girlfriend/embed/v3?eid=AQAAAIctvVSw4CoA&player_theme=dark&link_color=white&image_option=none&show_title=true';
	right_container.appendChild(song_meandyou);*/
	
	function PlayerOpen(name, path){//Doesn't work in FireFox...may have too many restrictions/security settings
		PlayWin = window.open('','','width = 320, height = 190, top = 0, left = 0, resizable = 0, scrollbars = 0, titlebar = 0, toolbar = 0, menubar = 0, status = 0, directories = 0, personalbar = 0')
		PlayWin.focus();
		var winContent = "<HTML><HEAD><TITLE>" + name + "</TITLE></head><body bgcoloer = '#000000'>";
		winContent += "<B style = 'font-size:14px; font-family:Verdana,sans-seriff; line-height:1.5'>" + name + "</b>";
		winContent += "<OBJECT width='300' height='42'>";
		winContent += "<param name='SRC' value='" + path + "'>";
		winContent += "<param name='AUTOPLAY' VALUE='true'>";
		winContent += "<param name='CONTROLLER' VALUE='true'>";
		winContent += "<param name='BGCOLOR' VALUE='#FF9900'>";
		winContent += "<EMBED SRC='" + path + "' AUTOSTART='TRUE' LOOP='FALSE' WIDTH='300' HEIGHT='42' CONTROLLER='TRUE' BGCOLOR='#FF9900'></EMBED>";
		winContent += "</OBJECT>";
		winContent += "<form><div align = 'center'><input type = 'button' value = 'Close Window' onClick = 'window.close();'></div></form>";
		winContent += "</body></html>"
		PlayWin.document.write(winContent);
		PlayWin.document.close();
	}
}