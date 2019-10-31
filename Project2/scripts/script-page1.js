$(function(){

// ВЫПАДАЮЩЕЕ МЕНЮ
    var el = document.getElementsByClassName('menu-item');
    var elHead = document.getElementById('head');
    
    for(var i=0; i<el.length; i++) 
    {
	   el[i].addEventListener("mouseenter", showSub, false);
	   el[i].addEventListener("mouseleave", hideSub, false);
	}

	function showSub(e) 
	{
	   if(this.children.length>1) 
	   {
	    this.children[1].style.height = "auto";
	    this.children[1].style.overflow = "visible";
	    this.children[1].style.transform  = "scaleY(1)";
	    
	      } else{
	      return false;
  			}
	}

	function hideSub(e) 
	{
	    if(this.children.length>1) 
	    {
	      this.children[1].style.height = "0px";
	      this.children[1].style.overflow = "hidden";
	      this.children[1].style.transform  = "scaleY(0)";
	     
	      } else {
	       return false;
	    	}
	}

	$(".fff :text:first").focus(); //курсор в первое текствое поле

// ПРОСМОТР ПАРОЛЯ

	function show() 
	{
    	var p1 = document.getElementById('myInput');
    	var p2 = document.getElementById('myInput2');
    	p1.setAttribute('type', 'text');
    	p2.setAttribute('type', 'text');
	}

	function hide() 
	{
    	var p1 = document.getElementById('myInput');
    	var p2 = document.getElementById('myInput2');
    	p1.setAttribute('type', 'password');
    	p2.setAttribute('type', 'password');
	}

		var pwShown = 0;

		document.getElementById("eye").addEventListener("click", function () 
		{
    	if (pwShown == 0) 
    		{
        	pwShown = 1;
        	show();
        	document.getElementById("close").src="images/eye.png";
    		} else {
       	 		pwShown = 0;
        		hide();
        		document.getElementById("close").src="images/eye2.png";
    				}
		});



// плагин выпадающих ПОДСКАЗОК (jQuery UI)

		$(".tooltip").tooltip();

		$("#tooltipKomment").tooltip({
			content: $("#tooltipTemplate").html() //добавление в подсказку блока из html, "спрятанного"" в тэге script
		});	

		$(".tooltipSoc").tooltip({ //подсказка рассыпается при исчезновении
			show: true,
			hide: "explode"
		});	

// ПРОВЕРКА ФОРМ (jQuery)

		$(".fff").submit(function(){
			if($(".fio").val() == "") {
				$(".fio").addClass("redZone").attr("placeholder", "Не введены Фамилия Имя и Отчество");
			return false;
			}
			if ($("#myInput").val() !== $("#myInput2").val()) {
				$("#myInput").addClass("redZone");
				$("#myInput2").addClass("redZone");
				$('#errorBlock').html('Пароли не совпадают');
			return false;
			};

		});

 }); //окончание ready
