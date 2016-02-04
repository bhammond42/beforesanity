//Create Top Header Container
var top_container = document.createElement('div');
	top_container.id = 'top_container';
document.body.appendChild(top_container);

var div = document.createElement('img');
	div.id = 'header_img';
	div.src = 'img/header.jpg';
top_container.appendChild(div);

//Create Left Menu Container
var left_container = document.createElement('div');
	left_container.id = 'left_container';
document.body.appendChild(left_container);

var div = document.createElement('label');
	div.id = 'home_label';
	div.setAttribute("class","label");
	div.appendChild(document.createTextNode('Home'));
	div.onclick = function(){
		var page = new home_page();
	}
left_container.appendChild(div);

var div = document.createElement('label');
	div.id = 'media_label';
	div.setAttribute("class","label");
	div.appendChild(document.createTextNode('Media'));
	div.onclick = function(){
		var page = new media_page();
	}
left_container.appendChild(div);

var div = document.createElement('label');
	div.id = 'tour_label';
	div.setAttribute("class","label");
	div.appendChild(document.createTextNode('Tour'));
	div.onclick = function(){
		var page = new tour_page();
	}
left_container.appendChild(div);

var div = document.createElement('label');
	div.id = 'brad_label';
	div.setAttribute("class","label");
	div.appendChild(document.createTextNode('Brad'));
	div.onclick = function(){
		var page = new brad_page();
	}
left_container.appendChild(div);

var div = document.createElement('label');
	div.id = 'sel_label';
	div.setAttribute("class","label");
	div.appendChild(document.createTextNode('Selero'));
	div.onclick = function(){
		var page = new sel_page();
	}
left_container.appendChild(div);

var div = document.createElement('label');
	div.id = 'egore_label';
	div.setAttribute("class","label");
	div.appendChild(document.createTextNode('Egore'));
	div.onclick = function(){
		var page = new egore_page();
	}
left_container.appendChild(div);

var div = document.createElement('label');
	div.id = 'sarah_label';
	div.setAttribute("class","label");
	div.appendChild(document.createTextNode('Sarah'));
	div.onclick = function(){
		var page = new sarah_page();
	}
left_container.appendChild(div);

//Create Right Container
var right_container = document.createElement('div');
	right_container.id = 'right_container';
document.body.appendChild(right_container);

create_welcome();

function create_welcome(){
	var welcome = document.createElement('div');
		welcome.id = 'welcome';
		welcome.appendChild(document.createTextNode('Welcome to BeforeSanity.com'));
	right_container.appendChild(welcome);
	
	var welcome_image_container = document.createElement('div');
		welcome_image_container.id = 'welcome_image_container';
		welcome_image_container.style.textAlign = 'center';
	right_container.appendChild(welcome_image_container);
	
	var welcome_sarah_image = document.createElement('img');
		welcome_sarah_image.id = 'welcome_sarah_image';
		welcome_sarah_image.setAttribute("class","welcome_image");
		welcome_sarah_image.setAttribute("title","Sarah");
		welcome_sarah_image.src = ("img/sarahthumb.jpg");
		welcome_sarah_image.onclick = function(){
			var page = new sarah_page();
		}
	welcome_image_container.appendChild(welcome_sarah_image);
	
	var welcome_sel_image = document.createElement('img');
		welcome_sel_image.id = 'welcome_sel_image';
		welcome_sel_image.setAttribute("class","welcome_image");
		welcome_sel_image.setAttribute("title","Selero");
		welcome_sel_image.src = ("img/selerothumb.jpg");
		welcome_sel_image.onclick = function(){
			var page = new sel_page();
		}
	welcome_image_container.appendChild(welcome_sel_image);
	
	var welcome_egore_image = document.createElement('img');
		welcome_egore_image.id = 'welcome_egore_image';
		welcome_egore_image.setAttribute("class","welcome_image");
		welcome_egore_image.setAttribute("title","Egore");
		welcome_egore_image.src = ("img/egorethumb.jpg");
		welcome_egore_image.onclick = function(){
			var page = new egore_page();
		}
	welcome_image_container.appendChild(welcome_egore_image);
	
	var welcome_brad_image = document.createElement('img');
		welcome_brad_image.id = 'welcome_brad_image';
		welcome_brad_image.setAttribute("class","welcome_image");
		welcome_brad_image.setAttribute("title","Brad");
		welcome_brad_image.src = ("img/bradthumb.jpg");
		welcome_brad_image.onclick = function(){
			var page = new brad_page();
		}
	welcome_image_container.appendChild(welcome_brad_image);
	
	var welcome_history_container = document.createElement('div');
		welcome_history_container.id = 'welcome_history_container';
	right_container.appendChild(welcome_history_container);
	
	var welcome_history_header = document.createElement('div');
		welcome_history_header.id = 'welcome_history_header';
		welcome_history_header.setAttribute("class","header");
		welcome_history_header.appendChild(document.createTextNode('History of Before Sanity'));
	welcome_history_container.appendChild(welcome_history_header);
	
	var welcome_history = document.createElement('p');
		welcome_history.id = 'welcome_history';
		welcome_history.appendChild(document.createTextNode('They all take pleasure in blaming the long haired dude.'));
	welcome_history_container.appendChild(welcome_history);
	
	var welcome_gear_container = document.createElement('div');
		welcome_gear_container.id = 'welcome_gear_container';
		welcome_gear_container.style.textAlign = 'center';
	right_container.appendChild(welcome_gear_container);
	
	var welcome_gear_header = document.createElement('div');
		welcome_gear_header.id = 'welcome_gear_header';
		welcome_gear_header.setAttribute("class","header");
		welcome_gear_header.appendChild(document.createTextNode('Before Sanity\'s Gear'));
	welcome_gear_container.appendChild(welcome_gear_header);
	
	var sarah_gear_img = document.createElement('img');
		sarah_gear_img.id = 'sarah_gear_img';
		sarah_gear_img.setAttribute('class','gear_img');
		sarah_gear_img.setAttribute('title','Sarah\'s Gear');
		sarah_gear_img.src = ("");
		sarah_gear_img.onclick = function(){
			var page = new sarah_gear_page();
			window.scrollTo(0,0);
		}
	welcome_gear_container.appendChild(sarah_gear_img);
	
	var sel_gear_img = document.createElement('img');
		sel_gear_img.id = 'sel_gear_img';
		sel_gear_img.setAttribute('class','gear_img');
		sel_gear_img.setAttribute('title','Sel\'s Gear');
		sel_gear_img.src = ("");
		sel_gear_img.onclick = function(){
			var page = new sel_gear_page();
			window.scrollTo(0,0);
		}
	welcome_gear_container.appendChild(sel_gear_img);
	
	var egore_gear_img = document.createElement('img');
		egore_gear_img.id = 'egore_gear_img';
		egore_gear_img.setAttribute('class','gear_img');
		egore_gear_img.setAttribute('title','Egore\'s Gear');
		egore_gear_img.src = ("");
		egore_gear_img.onclick = function(){
			var page = new egore_gear_page();
			window.scrollTo(0,0);
		}
	welcome_gear_container.appendChild(egore_gear_img);
	
	var brad_gear_img = document.createElement('img');
		brad_gear_img.id = 'brad_gear_img';
		brad_gear_img.setAttribute('class','gear_img');
		brad_gear_img.setAttribute('title','Brad\'s Gear');
		brad_gear_img.src = ("");
		brad_gear_img.onclick = function(){
			var page = new brad_gear_page();
			window.scrollTo(0,0);
		}
	welcome_gear_container.appendChild(brad_gear_img);
}
/*
var div = document.createElement('label');
	div.id = 'test';
	div.appendChild(document.createTextNode('hey, this should disappear'));
right_container.appendChild(div);
*/
