$(document).ready(function(){
	$("*[data-btn-light]").each(function(){
		$(this).addClass("btn-light component-light");
		$( this ).html('<div class="btn-body-light"> <div class="border-light"></div> <div class="btn-content-light"> <div class="text-light">'+$( this ).data("text")+'</div> </div> </div>');
		$( this ).removeAttr("data-text");
		
		if($(this).data("color")!=null && $(this).data("color")!==""){
			$(this).addClass($(this).data("color")+"-light");
		}
		$( this ).removeAttr("data-color");
		if($(this).data("size")){
			$(this).addClass($(this).data("size")+"-light");
		}
		$( this ).removeAttr("data-size");
		$(this).mousedown(function (event){
			$(this).addClass("click-light");
			var x=Math.round(event.pageX-$( this ).offset().left);
			x=x<2?0:x;
			if(x<=event.currentTarget.offsetWidth/3){
				$( this ).css("transform","rotate(-2deg)");
			}else if(x>=event.currentTarget.offsetWidth*2/3){
				$( this ).css("transform","rotate(2deg)");
			}else{
				$( this ).css("transform","");
			}
			$( this ).mousemove(function( event ) {
				
				if($(event.currentTarget).hasClass("click-light")){
					var x=Math.round(event.pageX-$(event.currentTarget).offset().left);
						x=x<2?0:x;
					if(x<=event.currentTarget.offsetWidth/3){
						$( this ).css("transform","rotate(-2deg)");
					}else if(x>=event.currentTarget.offsetWidth*2/3){
						$( this ).css("transform","rotate(2deg)");
					}else{
						$( this ).css("transform","");
					}

				}
			});

		}).mouseup(function (event){
			var curr_elem=  $( this );
			setTimeout(function(){
				curr_elem.removeClass("click-light");					
				curr_elem.css("transform","");
			},200);

			
		});
			$(this)
		.hover(function(e){
			var curr_elem=  $( this );
			curr_elem.addClass("hover-light");
			curr_elem.mousemove(function( event ) {
			$(".ls-light").removeClass("ls-light");					
			$(".rs-light").removeClass("rs-light");					
			$(".bs-light").removeClass("bs-light");					
			$(".ts-light").removeClass("ts-light");					
			curr_elem.css("box-shadow","");
			curr_elem.find(".border-light").css("background","");

			var angleDeg = Math.round(Math.atan2(event.offsetY - event.currentTarget.offsetHeight/2, event.offsetX - event.currentTarget.offsetWidth/2) * 180 / Math.PI)-90;
			//$( this ).find(".border-light").css("background","linear-gradient("+angleDeg+"deg, rgba(120,120,120,1) 0%, rgba(255,255,255,1) 100%)");
			var x=Math.round(event.pageX-curr_elem.offset().left);
			x=x<2?0:x;
			var perX =Math.round(x/event.currentTarget.offsetWidth*100);
			if(perX<30){ perX = 0; } 
			if(perX>70){ perX = 100; }
			
			var y=Math.round(event.pageY-curr_elem.offset().top);
			y=y<2?0:y;

			var perY =Math.round(y/event.currentTarget.offsetHeight*100);
			if(perY<30){ perY = 0; } 
			if(perY>70){ perY = 100; }
			if(curr_elem.hasClass("blue-light")){
				curr_elem.find(".border-light").css("background","linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(93,172,227,1) "+perX+"%, rgba(255,255,255,1) 100%)");

			}else if(curr_elem.hasClass("red-light")){
				curr_elem.find(".border-light").css("background","linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(231,80,90,1) "+perX+"%, rgba(255,255,255,1) 100%)");

			}else{
				curr_elem.find(".border-light").css("background","linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(120,120,120,1) "+perX+"%, rgba(255,255,255,1) 100%)");

			}
			curr_elem.css("box-shadow", " "+perX/20-2.5+"px "+(perY/20-2.5)+"px 5px 0px rgba(120,120,120,.75)");
			if(curr_elem.prev().length!=0 && x<=event.currentTarget.offsetWidth/3 && curr_elem.offset().top==curr_elem.prev().offset().top){
					curr_elem.prev().addClass("ls-light");
			}else if (curr_elem.next().length!=0 && x>=event.currentTarget.offsetWidth*2/3 && curr_elem.offset().top==curr_elem.next().offset().top){
					curr_elem.next().addClass("rs-light");
			}
			
			curr_elem.prevAll().each(function(index, element) {
				if(y<=event.currentTarget.offsetHeight/3){
					if(curr_elem.offset().left==$(element).offset().left){
						$(element).addClass("ts-light");
						return false;
					}
				}
			});
			curr_elem.nextAll().each(function(index, element) {
				if(y>=event.currentTarget.offsetHeight*2/3){
					if(curr_elem.offset().left== $(element).offset().left){
						$(element).addClass("bs-light");
						return false;
					}
				}
			});

		});
	}, function(e){
		$(".hover-light").removeClass("hover-light");
		$( this ).css("box-shadow","");
		$( this ).find(".border-light").css("background","");
		$(".ls-light").removeClass("ls-light");					
		$(".rs-light").removeClass("rs-light");					
		$(".bs-light").removeClass("bs-light");					
		$(".ts-light").removeClass("ts-light");					
		$(this).removeClass("click-light");					
		$( this ).css("transform","");

	});
	    $( this ).removeAttr("data-btn-light");
});


});