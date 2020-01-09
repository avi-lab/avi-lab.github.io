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
			close_popup(elem.parentElement);
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
		var color=elem.dataset["color"];
		if(color!=null && color!==""){
			elem.classList.add(color+"-paragraph-light");
		}
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
		buttonLight();
		followedLight();
		var btn = elem.querySelector('.popup-btn-close-light');
		
		btn.onclick=function(){
			close_popup(elem);
		}
		elem.removeAttribute("data-popup-light");
		
	});

	elems = document.querySelectorAll('[data-btn-popup]');
	elems.forEach((elem) => {
		elem.onclick=function(){	
			var elem_popup = document.querySelector(elem.getAttribute("data-btn-popup"));
			elem_popup.classList.remove("fadeOut");
			elem_popup.classList.add("popup-opened-light", "animated", "fadeIn");
			elem_popup.querySelector(".popup-container-light").classList.add("animated", "fadeInUp");
		}
	});
}; 	

function close_popup(elem) {
	var elem_popup_container = elem.querySelector(".popup-container-light");
	elem_popup_container.classList.add('animated',"fadeOutDown");
	elem.classList.remove("fadeIn");
	elem.classList.add('animated',"fadeOut");
	function handleAnimationEnd() {
		elem_popup_container.classList.remove('animated',"fadeOutDown");
		elem.classList.remove("popup-opened-light");
		elem.classList.remove('animated', "fadeOut");
		elem.removeEventListener('animationend', handleAnimationEnd);
	}
	elem.addEventListener('animationend', handleAnimationEnd);
}


function buttonLight(){

	var	elems = document.querySelectorAll('[data-btn-light]');
	elems.forEach((elem) => {
		elem.classList.add("btn-light", "component-light");
		elem.innerHTML='<div class="btn-body-light"> <div class="border-light"></div> <div class="btn-content-light"> <div class="text-light">'+elem.dataset["text"]+'</div> </div> </div>';
		elem.removeAttribute("data-text");
		
		if(elem.dataset["color"]!=null && elem.dataset["color"]!==""){
			elem.classList.add(elem.dataset["color"]+"-light");
			elem.removeAttribute("data-color");
		}

		if(elem.dataset["size"]!=null && elem.dataset["size"]!==""){
			elem.classList.add(elem.dataset["size"]+"-light");
			elem.removeAttribute("data-size");
		}
		function elem_crocked(elem){
			elem.classList.add("click-light");
			var rect = elem.getBoundingClientRect();
			var x=Math.round(event.pageX-rect.left);
			x=x<2?0:x;
			if(x<=event.currentTarget.offsetWidth/3){
				elem.style.transform="rotate(-2deg)";
			}else if(x>=event.currentTarget.offsetWidth*2/3){
				elem.style.transform="rotate(2deg)";
			}else{
				elem.style.transform="";
			}
		}
		elem.onmousedown=function(){
			elem_crocked(elem);
		};
		elem.onmouseup=function(){
			setTimeout(function(){
				elem.classList.remove("click-light");				
				elem.style.transform="";
			},200);
		};
		
		
		elem.onmousemove = function (){
			var elem = event.currentTarget;
			if(elem.classList.contains("hover-light")){
				var ls = document.querySelector('.ls-light'); if(ls!=null) ls.classList.remove("ls-light");					
				var rs = document.querySelector('.rs-light'); if(rs!=null) rs.classList.remove("rs-light");					
				var bs = document.querySelector('.bs-light'); if(bs!=null) bs.classList.remove("bs-light");					
				var ts = document.querySelector('.ts-light'); if(ts!=null) ts.classList.remove("ts-light");					
				elem.style.transform="";
				elem.querySelector('.border-light').style.background="";
				var rect = elem.getBoundingClientRect();
				var x=Math.round(event.pageX-rect.left);
				x=x<2?0:x;
				var perX =Math.round(x/event.currentTarget.offsetWidth*100);
				if(perX<30){ perX = 0; } 
				if(perX>70){ perX = 100; }
				
				var y=Math.round(event.pageY-rect.top);
				y=y<2?0:y;

				var perY =Math.round(y/event.currentTarget.offsetHeight*100);
				if(perY<30){ perY = 0; } 
				if(perY>70){ perY = 100; }
				if(elem.classList.contains("blue-light")){
					elem.querySelector(".border-light").style.background="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(93,172,227,1) "+perX+"%, rgba(255,255,255,1) 100%)";

				}else if(elem.classList.contains("red-light")){
					elem.querySelector(".border-light").style.background="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(231,80,90,1) "+perX+"%, rgba(255,255,255,1) 100%)";

				}else{
					elem.querySelector(".border-light").style.background="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(120,120,120,1) "+perX+"%, rgba(255,255,255,1) 100%)";

				}
				elem.style["box-shadow"]=perX/20-2.5+"px "+(perY/20-2.5)+"px 5px 0px rgba(120,120,120,.75)";
				
				if(elem.previousElementSibling!=null && x<=event.currentTarget.offsetWidth/3 && elem.getBoundingClientRect().top==elem.previousElementSibling.getBoundingClientRect().top){
						elem.previousElementSibling.classList.add("ls-light");
				}else if (elem.nextElementSibling!=null && x>=event.currentTarget.offsetWidth*2/3 && elem.getBoundingClientRect().top==elem.nextElementSibling.getBoundingClientRect().top){
						elem.nextElementSibling.classList.add("rs-light");
				}
			
				var previousElement = elem.previousElementSibling;
				while(previousElement!=null){
					if(y<=event.currentTarget.offsetHeight/3){
						if(elem.getBoundingClientRect().left==previousElement.getBoundingClientRect().left){
							previousElement.classList.add("ts-light");
							return;
						}
					}
					previousElement = previousElement.previousElementSibling;
				}

				var nextElement = elem.nextElementSibling;
				while(nextElement!=null){
					if(y>=event.currentTarget.offsetHeight*2/3){
						if(elem.getBoundingClientRect().left==nextElement.getBoundingClientRect().left){
							nextElement.classList.add("bs-light");
							return;
						}
					}
					nextElement = nextElement.nextElementSibling;
				}
			}
			if(elem.classList.contains("click-light")){
				var elem = event.currentTarget;
				elem_crocked(elem);
			}
			
		}
		elem.onmouseenter = function() {
			elem.classList.add("hover-light");
		};
		elem.onmouseleave = function() {
			var ls = document.querySelector('.ls-light'); if(ls!=null) ls.classList.remove("ls-light");					
			var rs = document.querySelector('.rs-light'); if(rs!=null) rs.classList.remove("rs-light");					
			var bs = document.querySelector('.bs-light'); if(bs!=null) bs.classList.remove("bs-light");					
			var ts = document.querySelector('.ts-light'); if(ts!=null) ts.classList.remove("ts-light");					
			elem.style["box-shadow"]="";
			elem.classList.remove("hover-light");
			elem.querySelector('.border-light').style.background="";
			elem.dispatchEvent(new Event("mouseup"));
		};
		elem.removeAttribute("data-btn-light");
	});
};

