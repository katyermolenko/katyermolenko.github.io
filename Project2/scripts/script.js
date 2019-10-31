 $(function(){

// ВЫПАДАЮЩЕЕ МЕНЮ
    var el = document.getElementsByClassName('menu-item');
    var elHead = document.getElementById('head');
    
    for(var i=0; i<el.length; i++) 
    {
     el[i].addEventListener("mouseover", showSub, false);
     el[i].addEventListener("mouseout", hideSub, false);
  	}

	 function showSub(e) 
   {
     if(this.children.length>1) 
     {
        this.children[1].style.height = "auto";
        this.children[1].style.overflow = "visible";
        this.children[1].style.transform  = "scaleY(1)";
       
      } else {
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

//СЛАЙДЕР

    var dots = document.getElementsByClassName("dots-item"),
        dotsArea = document.getElementsByClassName("dots-block")[0],
        slides = document.getElementsByClassName("single-slide"),
        prevBtn = document.getElementById("left-button"),
        nextBtn = document.getElementById("right-button"),
        slideIndex = 1;

    showSlides(slideIndex);
 
    function showSlides(n)
    {
      if(n < 1)
      {
        slideIndex = slides.length;
      } else if (n > slides.length)
        {
          slideIndex = 1;
        }

      for(var i = 0;  i < slides.length; i++)
      {
        slides[i].style.display = "none";
      }

      for(var i = 0;  i < dots.length; i++)
      {
        dots[i].classList.remove("active");
      }

      slides[slideIndex - 1].style.display = "flex";
      dots[slideIndex - 1].classList.add("active");
    }

    function plusSlides(n)
      {
        showSlides(slideIndex += n);
      }

    function currentSlide(n)
      {
        showSlides(slideIndex = n);
      }

    prevBtn.onclick = function()
      {
        plusSlides(-1);
      }

    nextBtn.onclick = function()
      {
        plusSlides(1);
      }

    dotsArea.onclick = function(e)
      {
        for(var i = 0; i < (dots.length + 1); i++)
        {
          if (e.target.classList.contains("dots-item") && e.target == dots[i - 1]) 
          { //c  this не работает
            currentSlide(i);
          }
        }
      }
  
  // АВТОМАТИЧЕСКИЙ СЛАЙДЕР
    var slideIndexAuto = 0;
    showSlidesAuto();
  
    function showSlidesAuto() 
      {
      var i;
      var slides = document.getElementsByClassName("single-slide");
      var dots = document.getElementsByClassName("dots-item");
        for (i = 0; i < slides.length; i++) 
          {
            slides[i].style.display = "none";
            dots[i].classList.remove("active");
          }
        slideIndexAuto++;

        if (slideIndexAuto > slides.length) 
          { 
           slideIndexAuto = 1;
          }
        slides[slideIndexAuto-1].style.display = "flex";
        dots[slideIndexAuto - 1].classList.add("active");
        setTimeout(showSlidesAuto, 5000);
      }

      

  // ИЗМЕНЕНИЕ КАРТИНОК

    $(function()
    {
      $(".total").hover(function()
      {
          $(this).find("img").fadeOut();
      }, 
      function() {
          $(this).find("img").fadeIn();
      });
    });
 
// плагин выпадающих ПОДСКАЗОК
 
    $(".tooltipSoc").tooltip({ //подсказка выпадает и при исчезновении расспается на кубики
      show: true,
      hide: "explode"
    }); 

 }); //окончание ready


  
    
