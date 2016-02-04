function brad_page(){
	document.getElementById('right_container').innerHTML = '';
	right_container = document.getElementById('right_container');
	
	var brad_page_header = document.createElement('div');
		brad_page_header.id = 'brad_page_header';
		brad_page_header.setAttribute('class','header');
		brad_page_header.appendChild(document.createTextNode('Brad'));
	right_container.appendChild(brad_page_header);
	
	var brad_page_image_container = document.createElement('div');
		brad_page_image_container.id = 'brad_page_image_container';
	right_container.appendChild(brad_page_image_container);
	
	var brad_page_img1 = document.createElement('img');
		brad_page_img1.id = 'brad_page_img1';
		brad_page_img1.setAttribute('class','personal_page_img');
		brad_page_img1.setAttribute('title','Brad');
		brad_page_img1.src = ("");
		brad_page_img1.onclick = function(){
		}
	brad_page_image_container.appendChild(brad_page_img1);
	
	var brad_page_history = document.createElement('p');
		brad_page_history.id = 'brad_page_history';
		brad_page_history.appendChild(document.createTextNode('Brad\'s History.'));
	right_container.appendChild(brad_page_history);
}