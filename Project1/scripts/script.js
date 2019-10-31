 $(function(){

        //предзагрузочник
        setTimeout(function()
        {
          $("#before-load").fadeOut();
          $(".gif").hide().fadeOut("slow");
          $('html, body').scrollTop(0);
        },5000);

       //убираем меню при прикрутке вниз и выводим при прокрутке вверх 
        var lastPosition = 0;

        $(window).scroll(function(event){
          var st = $(document).scrollTop();
          console.log(st);
          if (st >= lastPosition){
             // код для прокрутки вниз
             $('.head').hide();
          } else {
            // код для прокрутки вверх
            $('.head').show();
         }
          lastPosition = st;
        });

        //приготовление крема
        var top, ia;
        var number = 8;
        cImg = Array(number);
        cAttr = Array(number);//массив со значением аттрибута alt
        for (var i=0; i<=number; i++) 
        {
         cImg[i] = new Image;
         cImg[i].src = 'images/'+(i+1)+'.png';
         ia = document.getElementById( (i+1) + 'a');
         cAttr[i] = ia.getAttribute('alt');
        }
       
        var Scroll = function()
        {
          top = $(".back_3").offset().top;//узнаем высоту от начала страницы до блока на который ссылается якорь
          $('body,html').animate({scrollTop: top}, 300);//анимируем переход на расстояние - top
         }

        $("#formulate, .cream, .flask, .chose2, .info, .chose3, .chose4, .chose5, #formulateNew, .formulatePic, .chemistry").hide();

        var count = 0;
        attr = Array(2);
        $('.container').click(function()
        {

        $(this).fadeOut('slow', function() {
        attr[count] = parseInt($(this).find("img").attr("id"));
        
          console.log(attr);
          count++
          if(count<=1){ 
            $(".chose").hide();
            $(".chose2").show();
            Scroll();
            
            }else{
              $('.chose, .back_3>p, .container').hide();
              $(".chose5").show();
              $("#formulate, .chemistry").show();
              Scroll();
              
              $('#formulate').click(function(event){
                event.stopImmediatePropagation(); //предотвращаем всплытие и срабатывание обработчика на родит. элементе
                $(".flask, .chose3").show(); 
                // $(".wrap1_1").css("background-image", "url(images/moleculeBackground.png)"); 
                $(".chose5, .chemistry").hide();
                
                    setTimeout(function(){
                        $('.flask').fadeOut(700);
                          }, 3000);

                    setTimeout(function(){
                        $('.cream').show();
                        $('.row_1').after('<div class="divResCream"><span class="resultCream">крем ' + cAttr[(attr[0]-1)] + ' и ' + cAttr[(attr[1]-1)] + ' готов!</span></div>');
                        $(".chose3").hide();
                        $(".chose4").show();
                  }, 3600);

                    setTimeout(function(){
                        $('.info.a'+(attr[0])).show();
                        $('.info.a'+(attr[1])).show();
                        $("#formulateNew").show();
                          }, 4000);
              
              $("#formulate, .formulatePic").hide();
              top = $("#formulateNew").offset().top;//узнаем высоту от начала страницы до блока на который ссылается якорь
              Scroll();
                });
              } 
            });
          });

          $('#formulateNew').click(function()
          {

                $(".cream, .chose4, #formulateNew, .info").hide();
                $('.chose, .container').show();
                $(".resultCream").detach();
              top = $(".back_3").offset().top;//узнаем высоту от начала страницы до блока на который ссылается якорь
            Scroll();
                count = 0;

          });


          //анимирование элементов инструкции
          $('.visite>img').hover(
            function() 
            {
              $(this).addClass('bounce'); // Добавляем класс
             },
             function() {
              $(this).removeClass('bounce'); // Убираем класс
             })
          
     
          //сдвиг по движению мыши
          //выключаем встроенный API drag&drop
          document.ondragstart = function() 
          {
          return false;// отмена событий по умолчанию
          };
      
          var wrinkle = document.getElementById("wrinkle");
          var wrinkleDown = document.querySelector(".wrinkleDown");
      
          wrinkleDown.style.width = wrinkle.getBoundingClientRect().width/2+"px";  //линию ставим на середину   
            
          wrinkle.onmouseover = function()
          { //при наведении мыши меняем указатель мыши
            this.style.cursor = "pointer";
            this.onmousemove = function(e)
            {
              wrinkleDown.style.width= e.clientX -wrinkleDown.getBoundingClientRect().left +"px";
              console.log(wrinkleDown.style.width);

              if(parseInt(wrinkleDown.style.width)<0){
                wrinkleDown.style.width=0 +'px';
              }

              if(parseInt(wrinkleDown.style.width)>335){
                wrinkleDown.style.width=335 + 'px';
              }
            }
          }

      //Обработка нажатия на кнопку "Вверх" 
      $(".up").click(function(){
      $("html").animate({"scrollTop":0},"slow");
      });

      // плагин выпадающих ПОДСКАЗОК (jQuery UI)
      $(".order").tooltip({
      content: $("#tooltipTemplate").html() //добавление в подсказку блока из html, "спрятанного"" в тэге script
      }); 

       $(".delivery").tooltip({
      content: $("#tooltipTemplate2").html() //добавление в подсказку блока из html, "спрятанного"" в тэге script
      }); 

      $(".footSocImage").tooltip({ //плагин - подсказка выпадает и при исчезновении рассыпается на кубики
            show: true,
            hide: "explode"
      });

      //аудио

       $('audio').audioPlayer();

      // var play = $(".music");
      // var audio = $("audio");
      // play.click(function StopPlay()
      // {
      //     for (var i=0; i<audio.length; i++)
      //     {
      //       if (audio[i].paused)
      //       {
      //         audio[i].play();
      //         this.innerHTML = "Выключить звук";
      //       }
      //       else
      //       { 
      //         audio[i].pause();
      //         this.innerHTML = "Включить звук";
      //       }
      //     }
      // }); 

 }); //окончание ready    
    
   

