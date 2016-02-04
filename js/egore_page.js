function egore_page(){
	document.getElementById('right_container').innerHTML = '';
	right_container = document.getElementById('right_container');
	
	var egore_page_header = document.createElement('div');
		egore_page_header.id = 'egore_page_header';
		egore_page_header.setAttribute('class','header');
		egore_page_header.appendChild(document.createTextNode('Egore'));
	right_container.appendChild(egore_page_header);
	
	var egore_page_image_container = document.createElement('div');
		egore_page_image_container.id = 'egore_page_image_container';
	right_container.appendChild(egore_page_image_container);
	
	var egore_page_img1 = document.createElement('img');
		egore_page_img1.id = 'egore_page_img1';
		egore_page_img1.setAttribute('class','personal_page_img');
		egore_page_img1.setAttribute('title','Egore');
		egore_page_img1.src = ("");
		egore_page_img1.onclick = function(){
		}
	egore_page_image_container.appendChild(egore_page_img1);
	
	var egore_page_history = document.createElement('p');
		egore_page_history.id = 'egore_page_history';
		egore_page_history.appendChild(document.createTextNode('Egore\'s History.'));
	right_container.appendChild(egore_page_history);
}