function toggel_track(){
	var elem=event.currentTarget;
	var rect = elem.getBoundingClientRect();
	var x=Math.round(event.pageX-rect.left); x=x<2?0:x;
	var perX =Math.round(x/elem.offsetWidth*100);
	var y=Math.round(event.pageY-rect.top); y=y<2?0:y;
	var perY =Math.round(y/elem.offsetHeight *100);
	elem.style.background="radial-gradient(circle farthest-side at "+perX+"% "+perY+"%, rgba(50, 50, 50, 0.2) 10%, rgba(255, 255, 255, 0.1) 50%)"
}
var elems = document.querySelectorAll('[data-followed-light]');
elems.forEach((elem) => {
	elem.onmouseover = function() {
		toggel_track();
		elem.addEventListener("mousemove", toggel_track);		
	};
	elem.onmouseout = function() {
		elem.style.background="";
		elem.removeEventListener("mousemove", toggel_track);
	};
});
elems = document.querySelectorAll('ul.sidebar-list-light li');
elems.forEach((elem) => {
	elem.onmousedown = function() {
		elem.classList.add("clicked");
	};
	elem.onmouseup  = function() {
		elem.classList.remove("clicked");
	};
});
var elem = document.getElementById('btn-sidebar-light');
elem.onclick = function() {
	document.getElementById("sidebar-light").classList.add("slideInLeft", "sidebar-open-light");
	elem.classList.remove("fadeIn");
	elem.classList.add('animated', "fadeOut");
	function handleAnimationEnd() {
		elem.classList.remove("fadeOut");
		elem.classList.add("btn-hide-sidebar-light");
		elem.removeEventListener('animationend', handleAnimationEnd);
	}
	elem.addEventListener('animationend', handleAnimationEnd)
};
document.onmouseup=function() {
	var container = document.querySelector("#sidebar-light.sidebar-open-light");
	if(container){
		if (container!==event.target && !container.contains(event.target)) {
			container.classList.remove("slideInLeft");
			container.classList.add('animated', "slideOutLeft");
			function handleAnimationEnd() {
				container.classList.remove("sidebar-open-light");
				container.classList.remove("slideOutLeft");
				document.getElementById('btn-sidebar-light').classList.add("fadeIn");
				document.getElementById('btn-sidebar-light').classList.remove("btn-hide-sidebar-light");
				container.removeEventListener('animationend', handleAnimationEnd);
			}
			container.addEventListener('animationend', handleAnimationEnd);
		}
	}
	var elems = document.querySelectorAll('.popup-opened-light .popup-container-light');
	elems.forEach((elem) => {
		if (elem!==event.target && !elem.contains(event.target)) {
			const node = elem.parentElement;
			node.classList.add('animated', "slideOutUp");
			function handleAnimationEnd() {
				node.classList.remove("popup-opened-light");
				node.classList.remove("slideOutUp");
				node.classList.remove("slideInDown");
				node.removeEventListener('animationend', handleAnimationEnd);
			}
			node.addEventListener('animationend', handleAnimationEnd);
		}
	});
};

function followedLight(){

	var elems = document.querySelectorAll('.followed-light');
	elems.forEach((elem) => {
		elem.onmouseover = function() {
			elem.onmousemove=function() {
				var base_color = elem.dataset["base-color"];
				if(base_color==null||base_color==="")base_color="rgba(255,255,255,0.1)";
				var second_color = elem.dataset["second-color"];
				if(second_color==null||second_color==="")second_color="rgba(75,75,75,0.2)";
				var rect = elem.getBoundingClientRect();

				var x=Math.round(event.pageX-rect.left);
				x=x<2?0:x;
				var perX =Math.round(x/event.currentTarget.offsetWidth*100);
				if(perX<10){ perX = 0; } 
				if(perX>90){ perX = 100; }
				elem.style.background="linear-gradient(90deg, "+base_color+" 0%, "+second_color+" "+perX+"%, "+base_color+" 100%)";
			}
		};
		elem.onmouseout = function() {
			elem.style.background="";
		};
	});
};

function paragraphLight(){
	var elems = document.querySelectorAll('[data-paragraph-light]');
	elems.forEach((elem) => {
		elem.classList.add("paragraph-light", "component-light");
		elem.innerHTML=`<div class="paragraph-border-light">
							<svg viewBox="0 0 384 384" style="width: 16px;position: absolute; bottom: 0; right: 0;">
										<path d="M373.333,0H352c-5.896,0-10.667,4.771-10.667,10.667v330.667H10.667C4.771,341.333,0,346.104,0,352v21.333
											C0,379.229,4.771,384,10.667,384h362.667c5.896,0,10.667-4.771,10.667-10.667V10.667C384,4.771,379.229,0,373.333,0z"/>
							</svg>

							<svg viewBox="0 0 384 384" style="width: 16px;position: absolute; bottom: 0; left: 0;  transform: scaleX(-1);">
									<path d="M373.333,0H352c-5.896,0-10.667,4.771-10.667,10.667v330.667H10.667C4.771,341.333,0,346.104,0,352v21.333
										C0,379.229,4.771,384,10.667,384h362.667c5.896,0,10.667-4.771,10.667-10.667V10.667C384,4.771,379.229,0,373.333,0z"/>
							</svg>

							<svg viewBox="0 0 384 384" style="width: 16px;position: absolute; top: 0; right: 0; transform: scaleY(-1);">
									<path d="M373.333,0H352c-5.896,0-10.667,4.771-10.667,10.667v330.667H10.667C4.771,341.333,0,346.104,0,352v21.333
										C0,379.229,4.771,384,10.667,384h362.667c5.896,0,10.667-4.771,10.667-10.667V10.667C384,4.771,379.229,0,373.333,0z"/>
							</svg>
							<svg viewBox="0 0 384 384" style="width: 16px;position: absolute; top: 0; left: 0; transform: scaleX(-1) scaleY(-1);">
									<path d="M373.333,0H352c-5.896,0-10.667,4.771-10.667,10.667v330.667H10.667C4.771,341.333,0,346.104,0,352v21.333
										C0,379.229,4.771,384,10.667,384h362.667c5.896,0,10.667-4.771,10.667-10.667V10.667C384,4.771,379.229,0,373.333,0z"/>
							</svg>

						</div>	
						<div class="paragraph-content-light">
							${elem.innerHTML}
						</div>`;
		elem.removeAttribute("data-paragraph-light");
	});
}

 function popupLight() {
	var elems = document.querySelectorAll('[data-popup-light]');
	elems.forEach((elem) => {
		
		elem.classList.add("popup-light", "component-light", "animated");
		var title=elem.dataset["title"];
		var content=elem.innerHTML;
		elem.innerHTML=`
			<div class="popup-container-light">
				<div class="popup-content-light">
					<div class="popup-head-light">
						<button data-btn-light class="btn-icon-light popup-btn-light popup-btn-close-light" data-text="<i class='fa fa-arrow-left' aria-hidden='true'></i>"></button>
						<div class="popup-title-light followed-light" data-base-color="rgba(255,255,255,0.1)" data-second-color="rgba(75,75,75,0.2)"><h3 class="popup-text-light">${title}</h3></div>
					</div>
					<div class="popup-separate-light"></div>
					<div class="popup-body-light">
					${content}
				</div>
				<div class="popup-separate-light"></div>
				</div>
			</div>`;
		followedLight();
		var btn = elem.querySelector('.popup-btn-close-light');
		
		

		btn.onclick=function(){
			elem.classList.add('animated', "slideOutUp");
			function handleAnimationEnd() {
				elem.classList.remove("popup-opened-light");
				elem.classList.remove("slideOutUp");
				elem.classList.remove("slideInDown");
				elem.classList.remove('animated', "slideOutUp");
				elem.removeEventListener('animationend', handleAnimationEnd);
			}
			elem.addEventListener('animationend', handleAnimationEnd)

		}
		elem.removeAttribute("data-popup-light");
		
	});

	elems = document.querySelectorAll('[data-btn-popup]');
	elems.forEach((elem) => {
		elem.onclick=function(){
			document.querySelector(elem.getAttribute("data-btn-popup")).classList.remove("slideInDown");
			document.querySelector(elem.getAttribute("data-btn-popup")).classList.add("popup-opened-light", "animated", "slideInDown");
		}
	});
}; 	

