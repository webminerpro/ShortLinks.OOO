$(document).ready(function(){
	// Price Table
	var individual_price_table = $('#price_tables').find('.individual');
	var company_price_table = $('#price_tables').find('.company');

	$('.switch-toggles').find('.individual').addClass('active');
	$('#price_tables').find('.individual').addClass('active');

	$('.switch-toggles').find('.individual').on('click', function(){
		$(this).addClass('active');
		$(this).closest('.switch-toggles').removeClass('active');
		$(this).siblings().removeClass('active');
		individual_price_table.addClass('active');
		company_price_table.removeClass('active');
	});

	$('.switch-toggles').find('.company').on('click', function(){
		$(this).addClass('active');
		$(this).closest('.switch-toggles').addClass('active');
		$(this).siblings().removeClass('active');
		company_price_table.addClass('active');
		individual_price_table.removeClass('active');			
	});
});


	$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("header").addClass("activehead");
    } else {
       $("header").removeClass("activehead");
    }
	});
	
	function In_headerFunction() {
    var element = $("header");
    element.toggleClass("activeheadmenu2");
	}
	
	function In_ShowPosInfo() {
	$(".short-adv-sett").fadeIn(100);
	$(".main-index-top #main-form .main-options").slideDown(100);
	}
	
	//Custom Link Modal
	var $modallink = $('.link-shared'),
    $overlaylink = $('.overlaylink'),
    $showModallink = $('.show-modal'),
    $closelink = $('.closelink');
    
	function In_ShowLinkModal(){
	e.preventDefault();
  
	var windowHeight = $(window).height(),
      windowWidth = $(window).width(),
      modalWidth = windowWidth/2; //50% of window
  
	$overlaylink.show();
	$modallink.css({
		'width' : modalWidth,
		'margin-left' : -modalWidth/2
	});
	}

	$closelink.on('click', function(){
		$overlaylink.hide();
	});
	
	//Sidebar Menu
	$(document).on('click','.quicklinks-toggle__btn',function(){

        $('#focus-overlay').fadeIn(100);
        $('section .sidebar').css('zIndex',999999);
        $('section .sidebar').fadeIn(100);
	});

	$('#focus-overlay').on('click',function (){
    $(this).fadeOut(200);
    $('section .sidebar').css('display','none');

	});
	
	$(document).ready(function(){
        $("#widget_news h3").append(" <i class='zmdi zmdi-info' style='color: #00BCD4;'></i>");
		$("#widget_activities h3").append(" <i class='zmdi zmdi-swap-vertical-circle' style='color: #ff9800;'></i>");
		$("#widget_top_urls h3").append(" <i class='zmdi zmdi-trending-up' style='color: #4caf50;'></i>");
		$("#splash h3, #splash_create h3").append(" <i class='zmdi zmdi-info' style='color: #673ab7;'></i>");
		$("#overlay h3").append(" <i class='zmdi zmdi-info' style='color: #4CAF50;'></i>");
		$("#widget_tools h3").append(" <i class='zmdi zmdi-wrench' style='color: #9c27b0;'></i>");
		$("#widget_export h3").append(" <i class='zmdi zmdi-hourglass-alt' style='color: #4CAF50;'></i>");
	});
	
	//Smooth Scroll
	$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(t){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);(e=e.length?e:$("[name="+this.hash.slice(1)+"]")).length&&(t.preventDefault(),$("html, body").animate({scrollTop:e.offset().top},1e3,function(){var t=$(e);if(t.focus(),t.is(":focus"))return!1;t.attr("tabindex","-1"),t.focus()}))}})