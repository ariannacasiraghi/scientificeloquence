// The following piece of code is to make the navbar elements active on click  
// The following piece of code requires jquery
jQuery(function($) {
     var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
     $('ul a').each(function() {
      if (this.href === path) {
       $(this).addClass('active');
      }
     });
    });




/*//The following piece of code is to do custom client-side validation
//That is, the browser validation is removed to add custom validation style
//This code was found on Bootstratp 5 website

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()*/




//This is a modified version of the above code
//This does not only check the class 'needs-validation'
//But also the class 'vaildate-me'
//So that I can get rid of the the ugly green colors for the fields that are valid

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Fetch all the classes in need of validation
    var validateGroup = document.querySelectorAll('.validate-me')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        for (var i = 0; i < validateGroup.length; i++) {
                validateGroup[i].classList.add('was-validated');
            }
      }, false)
    })
})()




/*//The following piece of code is to make the navbar appear on scrolling 
//The following piece of code requires jquery

$(document).ready(function(){
    var $nav = $('.navbar');//Caching element
    // hide .navbar first - you can also do this in css .nav{display:none;}
    $nav.hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {
            // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 100) { //For dynamic effect use $nav.height() instead of '100'
                $nav.fadeIn();
            } else {
                $nav.fadeOut();
            }
        });
    });

});*/


