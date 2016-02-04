function sel_page(){
	document.getElementById('right_container').innerHTML = '';
	right_container = document.getElementById('right_container');
	
	var sel_page_header = document.createElement('div');
		sel_page_header.id = 'sel_page_header';
		sel_page_header.setAttribute('class','header');
		sel_page_header.appendChild(document.createTextNode('Selero'));
	right_container.appendChild(sel_page_header);
	
	var sel_page_image_container = document.createElement('div');
		sel_page_image_container.id = 'sel_page_image_container';
	right_container.appendChild(sel_page_image_container);
	
	var sel_page_img1 = document.createElement('img');
		sel_page_img1.id = 'sel_page_img1';
		sel_page_img1.setAttribute('class','personal_page_img');
		sel_page_img1.setAttribute('title','Selero');
		sel_page_img1.src = ("");
		sel_page_img1.onclick = function(){
		}
	sel_page_image_container.appendChild(sel_page_img1);
	
	var sel_page_history = document.createElement('p');
		sel_page_history.id = 'sel_page_history';
		sel_page_history.appendChild(document.createTextNode('Selero\'s History.'));
	right_container.appendChild(sel_page_history);
}