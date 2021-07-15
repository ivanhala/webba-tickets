jQuery(document).on( 'wbk_on_form_rendered', function(){	
  	jQuery('label[for="wbk-quantity"]').attr('style','display: none !important;');
	  jQuery('.wbk-book-quantity').attr('style','display: none !important;');
    var available = parseInt( jQuery('[name="wbk-book-quantity"]').find('option').last().attr('value') );
    html  = '';
    for( var i = 0; i <= available; i++ ){
        html += '<option value="' + i +'">' + i + '</option>';    
    }
    jQuery('[name="regular_tickets_num"]').html(html);
    jQuery('[name="regular_tickets_num"]').val('1');
  	jQuery('.wbk_tickets').change( function(){
        var current = parseInt( jQuery(this).val() );     
   		  var sib =  available - current;
      	var html = '';
        for( var i = 0; i <= sib; i++ ){
            html += '<option value="' + i +'">' + i + '</option>';    
        }
        var sib_current = parseInt( jQuery('.wbk_tickets').not(this).val() );
      	if( sib_current > sib ){
            sib_current = sib;
        }
        jQuery('.wbk_tickets').not(this).html(html);
        jQuery('.wbk_tickets').not(this).val( sib_current );
        var sum =  parseInt( jQuery('[name="regular_tickets_num"]').val() ) + parseInt( jQuery('[name="reduced_tickets_num"]').val() );
        jQuery('[name="wbk-book-quantity"]').val(sum);
        if( sum == 0 ){
          jQuery('#wbk-book_appointment').prop('disabled', true);
        } else{
          jQuery('#wbk-book_appointment').prop('disabled', false);
        }
    });  	 
    jQuery('[name="regular_tickets_num"]').trigger('change');
});

 
