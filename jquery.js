$(document).ready(function(){
	var content= new Array();
	var count=0;
	$("#import").click(function(){
		var get_val=$('#input').val().split('\n');

		if (get_val=="") {
			alert('Nhap gia tri vao truong text area');
			return 0;
		}
		else {
			count++;
		}
		for (var i = 0; i < get_val.length; i++) {
				$('#ul').append("<li>" + get_val[i] + "</li>");

			}

		select();
		$('#input').val("");
		evenli();
	});
	$('#import-top').click(function(){
		var get_val=$('#input').val().split('\n');
		if(get_val==""){
			alert('Nhap gia tri vao truong text area');
			return 0;
		}
		else {
			count++;
		}
		for(i=get_val.length-1;i>=0;i--){
			$('#ul').prepend("<li>" + get_val[i] + "</li>");
		}
		select();
		$('#input').val("");
		evenli();
	});
	$('#order').click(function(){
		var od = $("#ul li");
		od.sort(function(a,b){
			x = $(a).text().toLowerCase();
			// document.write(x);
			y = $(b).text().toLowerCase();
		    if (x < y) {return -1;}
		    if (x > y) {return 1;}
		    return 0;
		});
		
		$("#ul").append($(od)).show();
		evenli();
		select();
	});
	$('#delete').click(function(){
		if($('#ul li').hasClass('select')){
			$('.select').hide(1000,function(){
				$(this).remove();
			});
		}
		else $('#ul li:last-child').hide(1000,function(){
			$(this).remove();
		});
		evenli();

	});
	$('#export').click(function(){
		var x=$('#ul .select');
		// document.write(x[2]);
		if($('#ul li').hasClass('select')){
			for(i=0;i<x.length;i++){
			$('.check-box').append("<li><input type='checkbox' name='check'>"+$(x[i]).text()+"</li>");
			$(x[i]).hide(500,function(){
				$(this).remove();
			});
			// return 0;
		}
		
		}
		else{
			if($('#ul li:last-child').text()!=""){
		 	$('.check-box').append('<li><input type="checkbox" name="check">'+$('#ul li:last-child').text()+"</li>");
			$('#ul li:last-child').hide(500,function(){
				$(this).remove();
			});
			}
			else alert('Nothing to export');
		}
		$('.check-box li').click(function(){
			$(this).hide("1000", function(){
				$(this).remove();
		});
	});
	});
	// alert('ok');
	
	$(function() {
		        $( "#ul" ).sortable();
	    });
	select();
});
function evenli(){
	$('#ul li:odd').css('background-color','#fff');
	$('#ul li:even').css('background-color','#ddd');
}
function select(){
	$("#ul li").unbind().click(function(){
		$(this).toggleClass("select");
	});
}


