
//srdce
$(function () {
   $('#heart_click').on('click', function () {
      if($(this).hasClass('fa-heart-o')) {
         $(this).toggleClass('fa-heart active');
         $(this).removeClass('fa-heart-o');
      } else {
         $(this).addClass('fa-heart-o');
         $(this).removeClass('fa-heart active');
      }
   });
});

$(function(){
   var url = document.location.toString();
   if (url.match('#')) {
      $('.nav[role="tablist"] a[href="#' + url.split('#')[1] + '"]').tab('show');
      $('.nav[role="tablist"] a[href="#' + url.split('#')[1] + '"]').parent().addClass('active');
   }

   // Change hash for page-reload
   $('.nav[role="tablist"] a').on('shown.bs.tab', function (e) {
      window.location.hash = e.target.hash;
      $(this).parent().addClass('active');
   });

   $('h5 a[aria-controls="pratele"]').on('click', function () {
      var tgrt = $(this).attr('aria-controls');
      $('.nav[role="tablist"] a').parent().removeClass('active');
      $('.nav[role="tablist"] a[aria-controls="' + tgrt + '"]').parent().addClass('active');
   });

});

// fancybox
$(document).ready(function () {

      $('.fancybox').fancybox();

    $('.btn-vertical-slider').on('click', function () {
        
        if ($(this).attr('data-slide') == 'next') {
            $('#myCarousel').carousel('next');
        }
        if ($(this).attr('data-slide') == 'prev') {
            $('#myCarousel').carousel('prev')
        }

    });
});

// spinner - vek, delka trasy..
$(function(){

    $('.spinner .btn:first-of-type').on('click', function() {
      var btn = $(this);
      var input = btn.closest('.spinner').find('input');
      if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {    
        input.val(parseInt(input.val(), 10) + 1);
      } else {
        btn.next("disabled", true);
      }
    });
    $('.spinner .btn:last-of-type').on('click', function() {
      var btn = $(this);
      var input = btn.closest('.spinner').find('input');
      if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {    
        input.val(parseInt(input.val(), 10) - 1);
      } else {
        btn.prev("disabled", true);
      }
    });
})


  $(function() {
    $('#datetimepicker3').datetimepicker({
      pickDate: false
    });
  });

 $(function toggler(divId) {
    $("#" + divId).toggle();
});


$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var target = this.href.split('#');
    $('.nav a').filter('a[href="#'+target[1]+'"]').tab('show');
})

// Javascript to enable link to tab
var hash = document.location.hash;
if (hash) {
    $('.nav-tabs a[href='+hash+']').tab('show');
} 

// Change hash for page-reload
$('.nav-tabs a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash;
});


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

