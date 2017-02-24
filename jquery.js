$(document).ready(function(){
	var content= new Array();
	var count=0;
	$("#import").click(function(){
		add(this.id);
	});
	$('#import-top').click(function(){
		add(this.id);
	});
	$('#order').click(function(){
		var od = $("#ul li");
		od.sort(function(a,b){
			x = $(a).text().toLowerCase();
			// document.write(x);
			y = $(b).text().toLowerCase();
		    if (x < y) {return -1;}
		    if (x > y) {return 1;}
		    evenli();
		    select();
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
				evenli();
			});
		}
		else $('#ul li:last-child').hide(1000,function(){
			$(this).remove();
			evenli();
		});
		// evenli();
		select();

	});
	$('#export').click(function(){
		var x=$('#ul .select');
		// document.write(x[2]);
		if($('#ul li').hasClass('select')){
			for(i=0;i<x.length;i++){
			$('.check-box').append("<li><input type='checkbox' name='check'>"+$(x[i]).text()+"</li>");
			$(x[i]).hide(500,function(){
				$(this).remove();
				evenli();
			});
			// return 0;
			
			select();
		}
		
		}
		else{
			if($('#ul li:last-child').text()!=""){
		 	$('.check-box').append('<li><input type="checkbox" name="check">'+$('#ul li:last-child').text()+"</li>");
			$('#ul li:last-child').hide(500,function(){

				$(this).remove();
				evenli();
			});
			}
			else alert('Nothing to export');
			
			select();
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
		        evenli();
	    });
	select();
});
function add(x) {
		var arr = $('#input').val().split('\n');

		if (x == 'import') {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] == "") {
					continue;
				}
				$('#ul').append("<li>" + arr[i] + "</li>");
			}
		}
		if (x == "import-top") {
			for (var i = arr.length - 1; i >= 0; i--) {
				if (arr[i] == "") {
					continue;
				}
				$('#ul').prepend("<li>" + arr[i] + "</li>");
			}
		}

		$("#ul li").show('slow');
		
		$('#input').val("");
		evenli();
		select();
	}
function evenli(){
	$('#ul li:odd').css('background-color','#fff');
	$('#ul li:even').css('background-color','#ddd');
}
function select(){
	$("#ul li").unbind().click(function(){
		$(this).toggleClass("select");
	});
}


