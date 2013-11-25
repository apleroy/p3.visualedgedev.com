// $('.colors').click(function() {

// 	var bg_color = $(this).css('background-color');

// 	$('#canvas').css('background-color', bg_color);


// });	

// $(function() {
//     $( ".col-md-12" ).draggable();
    
//  });

$(function() {
    $( "#tester2" ).sortable();
    $( "#tester2" ).disableSelection();
  });




$(function() {
    $( "#dialog-modal" ).dialog({
      height: 140,
      modal: true
    });
});



$('#tester').click(function() {

	var text_entered = $('.text_entry').val();

	$("#tester2").prepend("<div class='.col-md-12' id='new'></div>");
	$("#new").html(text_entered);

	
});

