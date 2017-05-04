$(document).ready( function () {
   ticketingForm();
   nsoForm();
   slider();
   imgLb();
   autoSlide();
})

$(document).scroll( function() {
   animate();
})

function nsoForm() {     
   $('.form-birth .continue').click( function() {
      var rfname = $("[name='requestor-firstname']").val(),
          rmname = $("[name='requestor-middlename']").val(),
          rlname = $("[name='requestor-lastname']").val(),
          gender = $("[name='gender'] :selected").text(),
          month = $("[name='month'] :selected").text(),
          day = $("[name='day'] :selected").text(),
          year = $("[name='year'] :selected").val(),
          country = $("[name='country'] :selected").text(),
          province = $("[name='province']").val(),
          city = $("[name='city']").val(),
          dnumber = $("[name='dispatch-number']").val(),
          rnumber = $("[name='reference-number']").val(),
          bright = $("[name='birthright'] :selected").text(),
          ffname = $("[name='father-firstname']").val(),
          fmname = $("[name='father-middlename']").val(),
          flname = $("[name='father-lastname']").val(),
          mfname = $("[name='mother-firstname']").val(),
          mmname = $("[name='mother-middlename']").val(),
          mlname = $("[name='mother-lastname']").val(),          
          purpose = $("[name='purpose']").val(); 
                  
      if ( $('.requestor-details .required').filter( function() { return !$(this).val(); }).length > 0 || $('.requestor-details select').children('option:first-child').is(':selected') ) {    
         
         alert('Please fill the form to continue');
         
      } else {     

         $('#req-name').html(rfname+' '+rmname+' '+rlname);
         $('#gender').html(gender);
         $('#d-birth').html(month+', '+day+' '+year);
         $('#php-p-birth').html(city+', '+province+', '+country);
         $('#unphp-p-birth').html(dnumber+', '+rnumber+', '+country);
         $('#b-right').html(bright);
         $('#f-name').html(ffname+' '+fmname+' '+flname);      
         $('#m-name').html(mfname+' '+mmname+' '+mlname);
         $('#purpose').html(purpose);

         $('.form').addClass('toggle-form');

         $('html, body').animate({
            scrollTop: 0
         }, 800);           
      }
   })

   $('.form-marriage .continue').click( function() {
      var month = $("[name='month'] :selected").text(),
          day = $("[name='day'] :selected").text(),
          year = $("[name='year'] :selected").val(),
          country = $("[name='country'] :selected").text(),
          province = $("[name='province']").val(),
          city = $("[name='city']").val(),
          dnumber = $("[name='dispatch-number']").val(),
          rnumber = $("[name='reference-number']").val(),
          hfname = $("[name='hustband-firstname']").val(),
          hmname = $("[name='hustband-middlename']").val(),
          hlname = $("[name='hustband-lastname']").val(),
          wfname = $("[name='wife-firstname']").val(),
          wmname = $("[name='wife-middlename']").val(),
          wlname = $("[name='wife-lastname']").val(),      
          purpose = $("[name='purpose']").val();  
                  
      if ( $('.requestor-details .required').filter( function() { return !$(this).val(); }).length > 0 || $('.requestor-details select').children('option:first-child').is(':selected') ) {    
         
         alert('Please fill the form to continue');
         
      } else {  

         $('#d-marriage').html(month+', '+day+' '+year);
         $('#php-p-marriage').html(city+', '+province+', '+country);
         $('#unphp-p-marriage').html(dnumber+', '+rnumber+', '+country);
         $('#h-name').html(hfname+' '+hmname+' '+hlname);      
         $('#w-name').html(wfname+' '+wmname+' '+wlname);
         $('#purpose').html(purpose);  

         $('.form').addClass('toggle-form');

         $('html, body').animate({
            scrollTop: 0
         }, 800);           
      }
   })
   
   $('.form-death .continue').click( function() {
      var rfname = $("[name='requestor-firstname']").val(),
          rmname = $("[name='requestor-middlename']").val(),
          rlname = $("[name='requestor-lastname']").val(),
          gender = $("[name='gender'] :selected").text(),
          month = $("[name='month'] :selected").text(),
          day = $("[name='day'] :selected").text(),
          year = $("[name='year'] :selected").val(),
          country = $("[name='country'] :selected").text(),
          province = $("[name='province']").val(),
          city = $("[name='city']").val(),
          dnumber = $("[name='dispatch-number']").val(),
          rnumber = $("[name='reference-number']").val(),
          purpose = $("[name='purpose']").val();
                  
      if ( $('.requestor-details .required').filter( function() { return !$(this).val(); }).length > 0 || $('.requestor-details select').children('option:first-child').is(':selected') ) {    
         
         alert('Please fill the form to continue');
         
      } else {
         
         $('#req-name').html(rfname+' '+rmname+' '+rlname);
         $('#gender').html(gender);
         $('#d-death').html(month+', '+day+' '+year);
         $('#php-p-death').html(city+', '+province+', '+country);
         $('#unphp-p-death').html(dnumber+', '+rnumber+', '+country);
         $('#purpose').html(purpose);

         $('.form').addClass('toggle-form');

         $('html, body').animate({
            scrollTop: 0
         }, 800);          
      }
   })   
      
   $('.form-ceno .continue').click( function() {
      var rfname = $("[name='requestor-firstname']").val(),
          rmname = $("[name='requestor-middlename']").val(),
          rlname = $("[name='requestor-lastname']").val(),
          gender = $("[name='gender'] :selected").text(),
          month = $("[name='month'] :selected").text(),
          day = $("[name='day'] :selected").text(),
          year = $("[name='year'] :selected").val(),
          country = $("[name='country'] :selected").text(),
          province = $("[name='province']").val(),
          city = $("[name='city']").val(),
          dnumber = $("[name='dispatch-number']").val(),
          rnumber = $("[name='reference-number']").val(),
          bright = $("[name='birthright'] :selected").text(),
          ffname = $("[name='father-firstname']").val(),
          fmname = $("[name='father-middlename']").val(),
          flname = $("[name='father-lastname']").val(),
          mfname = $("[name='mother-firstname']").val(),
          mmname = $("[name='mother-middlename']").val(),
          mlname = $("[name='mother-lastname']").val(),            
          purpose = $("[name='purpose']").val();   
                  
      if ( $('.requestor-details .required').filter( function() { return !$(this).val(); }).length > 0 || $('.requestor-details select').children('option:first-child').is(':selected') ) {    
         
         alert('Please fill the form to continue');
         
      } else {   

         $('#req-name').html(rfname+' '+rmname+' '+rlname);
         $('#gender').html(gender);
         $('#d-birth').html(month+', '+day+' '+year);
         $('#php-p-birth').html(city+', '+province+', '+country);
         $('#unphp-p-birth').html(dnumber+', '+rnumber+', '+country);
         $('#b-right').html(bright);
         $('#f-name').html(ffname+' '+fmname+' '+flname);      
         $('#m-name').html(mfname+' '+mmname+' '+mlname);
         $('#purpose').html(purpose); 

         $('.form').addClass('toggle-form');

         $('html, body').animate({
            scrollTop: 0
         }, 800);           
      }
   })

   $('.form #country').change( function() {
      var $this = $(this).find('option:selected').text();

      if ( $this == 'Philippines' ) {
         $('.form .time').removeClass('toggle-add');
         $('.requestor-summary .php-add').addClass('toggle-add');
         $('.form .time .php-add').find('input').addClass('required');
         $('.form .time .php-add label:first-of-type').find('input').attr('name','province');
         $('.form .time .php-add label:last-of-type').find('input').attr('name','city');
         $('.form .time .unphp-add').find('input').removeAttr('class');
         $('.form .time .unphp-add').find('input').removeAttr('name');
         
      } else {
         $('.form .time').addClass('toggle-add');
         $('.requestor-summary .php-add').removeClass('toggle-add');
         $('.form .time .unphp-add').find('input').addClass('required');
         $('.form .time .unphp-add label:first-of-type').find('input').attr('name','dispatch-number');
         $('.form .time .unphp-add label:last-of-type').find('input').attr('name','reference-number');
         $('.form .time .php-add').find('input').removeAttr('class');
         $('.form .time .php-add').find('input').removeAttr('name');
      }
   })
   
   $('.delivery-pickup input[type="radio"]').click( function() {
      var $this = $(this),
          id = $this.attr('id');
      
      if ( id === 'delivery' ) {
         $("[name='del-amount']").val('P 100');
         $("[name='copies']").attr('data-del-amount', '100');
         var copy = $('.form #copy').find('option:selected').text(),
             amount = $('.form #copy').attr('data-amount'),
             delAmount = Number($('.form #copy').attr('data-del-amount')),
             tAmount = delAmount + (amount * copy);
         $("[name='t-amount']").val('P '+tAmount);  
         
      } else {
         $("[name='del-amount']").val('P 0');
         $("[name='copies']").attr('data-del-amount', '0');
         var copy = $('.form #copy').find('option:selected').text(),
             amount = $('.form #copy').attr('data-amount'),
             delAmount = Number($('.form #copy').attr('data-del-amount')),
             tAmount = delAmount + (amount * copy);
         $("[name='t-amount']").val('P '+tAmount);  
      }
      
      $('.form').find('.'+id).siblings().removeClass('toggle-delivery');
      $('.form').find('.'+id).addClass('toggle-delivery'); 
   })      
      
   $('.form #copy').change( function() {
      var $this = $(this),
          copy = $this.find('option:selected').text(),
          amount = $this.attr('data-amount'),
          delAmount = Number($this.attr('data-del-amount')),
          tAmount = delAmount + (amount * copy);
      
      $("[name='t-amount']").val('P '+tAmount);
   })   

   $('.form .edit-btn').click( function() {
      $('.form').removeClass('toggle-form');
   })   
}

function ticketingForm() {
   $('.origin input[type="radio"]').click( function() {
      var $this = $(this),
          route = $this.attr('data-route'),
          routeVv = $this.attr('data-vv');
      
      $('.time .sched-item').removeClass('active-sched');
      $('.time .sched-item').find('select').removeClass('required');
      $('.time.depart').find('.'+route).addClass('active-sched');
      $('.time.depart .active-sched').find('select').addClass('required');
      $('.time.return').find('.'+routeVv).addClass('active-sched');
   })
   
   $('.cta-submit .continue').click( function() {
      
      var cust1Lname = $("[name='passenger1-lastname']").val(),
          cust1Fname = $("[name='passenger1-firstname']").val(),
          cust1Mname = $("[name='passenger1-middlename']").val(),
          cust1Age = $("[name='passenger1-age']").val(),
          cust2Lname = $("[name='passenger2-lastname']").val(),
          cust2Fname = $("[name='passenger2-firstname']").val(),
          cust2Mname = $("[name='passenger2-middlename']").val(),
          cust2Age = $("[name='passenger2-age']").val(),
          origin = $("input[name='origin']:checked").val(),
          originT = $("[name='origin']").val(),
          accomm = $("[name='accommodation'] :selected").text(),
          dmonth = $("[name='departure-month'] :selected").text(),
          dday = $("[name='departure-day'] :selected").text(),
          dyear = $("[name='departure-year'] :selected").text(),
          rmonth = $("[name='return-month'] :selected").text(),
          rday = $("[name='return-day'] :selected").text(),
          ryear = $("[name='return-year'] :selected").text(),
          dtime = $(".active-sched [name='departure-hour'] :selected").text(),
          rtime = $(".active-sched [name='return-hour'] :selected").text(),
          dhour = $("[name='departure-hour']").val(),
          rhour = $("[name='return-hour']").val();
      
                  
      if ( $('.passenger-details input.required').filter( function() { return !$(this).val(); }).length > 0  || $('.passenger-details select.required').children('option:first-child').is(':selected') ) {    
         
         alert('Please fill the form to continue');
         
      } else {  
         
         $('#pass1').html(cust1Fname+' '+cust1Mname+' '+cust1Lname+' - '+cust1Age);
         $('#pass2').html(cust2Fname+' '+cust2Mname+' '+cust2Lname+' - '+cust2Age);
         $('#origin').html(origin);
         $('#origin').html(originT);
         $('#accommodation').html(accomm);
         
         if ( $('.time label:last-of-type').hasClass('hour') ) {
            $('#depart').html(dmonth+' '+dday+', '+dyear+' - '+dhour);
            $('#return').html(rmonth+' '+rday+', '+ryear+' - '+rhour); 
         } else {         
            $('#depart').html(dmonth+' '+dday+', '+dyear+' - '+dtime);
            $('#return').html(rmonth+' '+rday+', '+ryear+' - '+rtime);
         }

         $('.form').addClass('toggle-form');

         $('html, body').animate({
            scrollTop: 0
         }, 800);   
      }
   });
}

function animate() {
   var trigAnimate = $(window).scrollTop() + ( $(window).height() * .5 );
   
   if ( trigAnimate > $('.homepage-hero').offset().top ) {
      $('.homepage-hero').removeClass('hero-animate');
   }

   if ( trigAnimate > $('#ticketing').offset().top ) {
      $('#ticketing').removeClass('ticketing-animate');
   }

   if ( trigAnimate > $('#services').offset().top ) {
      $('#services').removeClass('services-animate');
   }

   if ( trigAnimate > $('#advantage').offset().top ) {
      $('#advantage').removeClass('advantage-animate');
   }
}

function imgLb() {
   $('html').on('click', 'figure.lightbox-trig', function() {
      var $this = $(this).find('img'),
          curImg = $this.attr('src'),
          curImgname = $this.attr('data-title'),
          imgLb = "<div class='img-lightbox'><div class='lb-container'><span class='close-lb'></span><img class='lb-img' src='"+curImg+"' alt='Rhizz Tour and Travel "+curImgname+"'><h4 class='lb-name'>"+curImgname+"</h4></div></div>";
      
      if ( $this.hasClass('lightbox-img') ) {
         if ( typeof curImgname != 'undefined' ) {
            $('body').append("<div class='img-lightbox'><div class='lb-container'><span class='close-lb'></span><figure class='lb-img-container'><img class='lb-img' src='"+curImg+"' alt='Rhizz Tour and Travel "+curImgname+"'></figure></div></div>"); 
         } else { 
            $('body').append("<div class='img-lightbox'><div class='lb-container'><span class='close-lb'></span><figure class='lb-img-container'><img class='lb-img' src='"+curImg+"' alt='Rhizz Tour and Travel "+curImgname+"'></figure></div></div>");  
         }
      } else {
         return;
      }
   })   
   
   $('body').on('click', '.close-lb', function() {
      $('.img-lightbox').remove();
   })
}

function slider() {
   $('.thumb-item').click( function() {
      var $this = $(this),
          position = $this.parent().children().index($this);
      
      $('.thumb-container .thumb-item').removeClass('active-thumb').eq(position).addClass('active-thumb');
      $('.slide-container .slide-item').removeClass('active-slide').eq(position).addClass('active-slide');      
   });
   
   $('#slider .ctrl-prev, #slider .ctrl-next').click( function() {
      var $this = $(this),
          curSlide = $('.slide-container').find('.active-slide'),
          position = $('.slide-container').children().index(curSlide),
          slideNum = $('.slide-container .slide-item').length;
      
      if ( $this.hasClass('ctrl-next')) {
         if ( position < slideNum - 1) {
            $('.slide-container .active-slide').removeClass('active-slide').next().addClass('active-slide');
            $('.thumb-container .active-thumb').removeClass('active-thumb').next().addClass('active-thumb');              
         } else {
            $('.slide-container .slide-item').removeClass('active-slide').first().addClass('active-slide');
            $('.thumb-container .thumb-item').removeClass('active-thumb').first().addClass('active-thumb');
         }
      } else {
         if ( position === 0 ) {
            $('.slide-container .slide-item').removeClass('active-slide').last().addClass('active-slide');
            $('.thumb-container .thumb-item').removeClass('active-thumb').last().addClass('active-thumb');
         } else {
            $('.slide-container .active-slide').removeClass('active-slide').prev().addClass('active-slide');
            $('.thumb-container .active-thumb').removeClass('active-thumb').prev().addClass('active-thumb');
         }
      }
   });
}

function autoSlide() {
   var auto = function() {
      interval = setInterval(
         function () {
            var $this = $('.slide-container .active-slide'),
                slideNum = $('.slide-container .slide-item').length,
                position = $this.parent().children().index($this);

            if ( position < slideNum - 1 ) {
               $this.removeClass('active-slide').next().addClass('active-slide');
               $('.thumb-container .active-thumb').removeClass('active-thumb').next().addClass('active-thumb');
            } else {
               $('.slide-container .slide-item').removeClass('active-slide').first().addClass('active-slide');
               $('.thumb-container .thumb-item').removeClass('active-thumb').first().addClass('active-thumb');
            }
         }, 4000);
   }
   
   $('#slider').hover( function() {
      clearInterval(interval);
   });
   
   $('#slider').mouseleave( function() {
      auto();
   });
   
   auto();
}
