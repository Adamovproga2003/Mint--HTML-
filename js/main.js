const filterButton = document.querySelector('.filter-button');
const filterMenu = document.querySelector('.filter-menu');
const sign = document.querySelector('.flaticon-down-arrow');
const body = document.querySelector('body');
const newestButton = document.getElementById('newest-button');
const casualButton = document.getElementById('casual-button');
const superButton = document.getElementById('super-button');
const allSort = document.getElementById('all');
const brandingSort = document.getElementById('branding');
const illustrationSort = document.getElementById('illustration');
const webSort = document.getElementById('web');
const filterName = document.querySelector('.filter-name');



const toggleMenu = function() {
    filterMenu.classList.toggle('open');
    sign.classList.toggle('flaticon-down-arrow');
	sign.classList.toggle('flaticon-upload');
}

filterButton.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

filterMenu.addEventListener('click', function(e) {
	e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == filterMenu || filterMenu.contains(target);
    const its_btnMenu = target == filterButton;
    const menu_is_active = filterMenu.classList.contains('open');
    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});


newestButton.addEventListener('click', () => {
	filterName.innerHTML = 'Newest first';
	if (casualButton.classList.contains('active')){
		casualButton.classList.remove('active');
	}else if (superButton.classList.contains('active')){
		superButton.classList.remove('active');
	}
	newestButton.classList.add('active');
});

casualButton.addEventListener('click', () => {
	filterName.innerHTML = 'Casual';
	if (newestButton.classList.contains('active')){
		newestButton.classList.remove('active');
	}else if (superButton.classList.contains('active')){
		superButton.classList.remove('active');
	}
	casualButton.classList.add('active');
});


superButton.addEventListener('click', () => {
	filterName.innerHTML = 'Super new';
	if (newestButton.classList.contains('active')){
		newestButton.classList.remove('active');
	}else if (casualButton.classList.contains('active')){
		casualButton.classList.remove('active');
	}
	superButton.classList.add('active');
});

allSort.addEventListener('click', () => {
	if (brandingSort.classList.contains('active')){
		brandingSort.classList.remove('active');
	}else if(illustrationSort.classList.contains('active')){
		illustrationSort.classList.remove('active');
	}else if(webSort.classList.contains('active')){
		webSort.classList.remove('active');
	}
	allSort.classList.add('active');
});

brandingSort.addEventListener('click', () => {
	if (allSort.classList.contains('active')){
		allSort.classList.remove('active');
	}else if(illustrationSort.classList.contains('active')){
		llustrationSort.classList.remove('active');
	}else if(webSort.classList.contains('active')){
		webSort.classList.remove('active');
	}
	brandingSort.classList.add('active');
});
illustrationSort.addEventListener('click', () => {
	if (brandingSort.classList.contains('active')){
		brandingSort.classList.remove('active');
	}else if(allSort.classList.contains('active')){
		allSort.classList.remove('active');
	}else if(webSort.classList.contains('active')){
		webSort.classList.remove('active');
	}
	illustrationSort.classList.add('active');
});

webSort.addEventListener('click', () => {
	if (brandingSort.classList.contains('active')){
		brandingSort.classList.remove('active');
	}else if(illustrationSort.classList.contains('active')){
		illustrationSort.classList.remove('active');
	}else if(allSort.classList.contains('active')){
		allSort.classList.remove('active');
	}
	webSort.classList.add('active');
});