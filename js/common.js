//$(function (){});
$(document).ready(function(){
    $('#scene').parallax();
     //fancy
    $("[data-fancybox]").fancybox({
	});
    //Кнопка меню
    $(".mnu_button").on("click",function(){
       $("#mnuu").slideToggle(1000); 
    });
    //Buy iteam
    $('.iteaminfo select').on('click',function(){
      var 
      iteamval = $(this).children(":selected").html(),
      wrap = $(this).closest('.iteaminfo'),
      price = $(this).children(":selected").data('price'),
      info = wrap.find('.p_info'),
      cost = wrap.find('.cost');
      info.text(iteamval);
      cost.html(price);
    });
    //Tabs
$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
    //Modal
    $(".modalbtn").magnificPopup();
    //Modal Form
    $('.modalbtn').click(function(){
    var wrap = $(this).parents(".iteaminfo");
    var buy = wrap.find("option:selected").text();
    var price = wrap.find("option:selected").attr('data-price');
    //$('.buyitm').text(buy);
    $('.buyitm').val(buy);
    $('.buyprice').val(price);
    });
    $("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$(".info_buy").text("Дякуюємо за покупку!Наш менеджер зв'яжиться з вами!")
			$("#form").trigger("reset");
		});
		return false;
	});
});