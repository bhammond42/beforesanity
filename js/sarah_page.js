function sarah_page(){
	document.getElementById('right_container').innerHTML = '';
	right_container = document.getElementById('right_container');
	
	var sarah_page_header = document.createElement('div');
		sarah_page_header.id = 'sarah_page_header';
		sarah_page_header.setAttribute('class','header');
		sarah_page_header.appendChild(document.createTextNode('Sarah'));
	right_container.appendChild(sarah_page_header);
	
	var sarah_page_image_container = document.createElement('div');
		sarah_page_image_container.id = 'sarah_page_image_container';
	right_container.appendChild(sarah_page_image_container);
	
	var sarah_page_img1 = document.createElement('img');
		sarah_page_img1.id = 'sarah_page_img1';
		sarah_page_img1.setAttribute('class','personal_page_img');
		sarah_page_img1.setAttribute('title','sarah');
		sarah_page_img1.src = ("");
		sarah_page_img1.onclick = function(){
		}
	sarah_page_image_container.appendChild(sarah_page_img1);
	
	var sarah_page_history = document.createElement('p');
		sarah_page_history.id = 'sarah_page_history';
		sarah_page_history.appendChild(document.createTextNode('Sarah\'s History.'));
	right_container.appendChild(sarah_page_history);
}