$(document).ready(function(){



        //regresa al top page  
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        $('#back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        // ayax para forma de contacto
         $('#contact-form-1').submit(function(){
  		var url = 'form-handler-nodb.php';

  		$.ajax({
  			type: 'POST',
  			url: url,
  			data: $('#contact-form-1').serialize(),
  			success: function(data)
  			{

  				$('.contact-frm').html(data) && $('.contact-frm').show() && $('#contact-form-1').hide();
  				console.log(data);
  			}
  		});
  			console.log('melleva');
  		return false;
  });

});