
var edit_clicked = false;
var current_div = '';
var header_content = '';
var body_content = '';


$(document).ready(function() {

	

	//DRAG AND DROP
	
	    $( "#list_item_holder" ).sortable();
	    $( "#list_item_holder" ).disableSelection();
	


	//MODAL

	
	    $( "#dialog-modal" ).dialog({
	      height: 140,
	      modal: true
	    });
	
	        

	//ADD NEW ITEM

	

		

			$("#add_item").click(function() {
					
				

				if(edit_clicked == true) {
					
					var new_title_entered = $('#list_title_entry').val();
						
					var new_text_entered = $('#list_text_entry').val();
					
					var new_bg_color = $(".modal-content").css("background-color");
					
					$(current_div).css("background-color", new_bg_color);
					
					$(current_header).html(new_title_entered);
					
					$(current_body).html(new_text_entered);

					$("#myModal").modal('hide');
					$("#list_title_entry").val('');
					$("#list_text_entry").val('');

				//reset flag
					$("#add_item").html("Add Item");
					$("#myModalLabel").html("New List Item");
					edit_clicked = false;

				} else {

					$("#myModalLabel").html("Add Item");


						var title_entered = $('#list_title_entry').val();
						 

						var text_entered = $('#list_text_entry').val();

						var bg_color = $(".modal-content").css("background-color");

						$("#list_item_holder").prepend("<div class='.col-md-12' id='new'></div>");
						$("#new").append("<div class='list_item_header' id='new_header'></div>");
							$("#new_header").html(title_entered);
						$("#new").append("<div class='list_item_body' id='new_body'>text</div>");
							$("#new_body").html(text_entered);
						
						$("#new").append("<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#myModal' id='new_edit_button'></div>");
							$("#new_edit_button").html("Edit");
						$("#new").append("<button type='button' class='btn btn-primary' id='new_delete_button'></div>");
							$("#new_delete_button").html("Delete");


						$("#new").css("background-color", bg_color);
						
						$("#myModal").modal('hide');
						$("#list_title_entry").val('');
						$("#list_text_entry").val('');
						
						//count++;
						
				}

				
			});
	
	

	//DELETE ITEM
	
		$( "#list_item_holder" ).on( "click", "#new_delete_button", function() {
		  	$(this).parent().remove();
		});	
	

	//EDIT ITEM

	
		$( "#list_item_holder" ).on( "click", "#new_edit_button", function() {
		  	//1. Boolean flag to signal the edit has been clicked
			edit_clicked = true;
			
			//2.  Change the default settings to "edit"
			$("#add_item").html("Edit");
			$("#myModalLabel").html("Edit Item");
			
			//3.  Get the current css bg color to place in modal
			var parent_bg_color = $(this).parent().css("background-color");
			$(".modal-content").css("background-color", parent_bg_color);

			//4.  Get the current header content and place into modal
			header_content = $(this).prev().prev().html();
			$("#list_title_entry").val(header_content);
			
			//5.  Get and place current body content into modal
			body_content = $(this).prev().html();
			$("#list_text_entry").val(body_content);

			//6.  Make the div with the edit button selected unique by assigning the div and elements to unique based on time
			var unique = new Date().getTime();
				current_div = $(this).parent().attr('id', 'holder' + unique);
				current_body = $(this).prev().attr('id', 'body' + unique);
				current_header = $(this).prev().prev().attr('id', 'header' + unique);
		  	

		});

	//Modify CSS BG for MODAL

	
		$(".btn-primary").click(function(){
			$(".modal-content").css("background-color", $(this).css("background-color"));
		})


	

});
