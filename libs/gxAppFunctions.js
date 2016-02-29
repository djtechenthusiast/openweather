/**
* Copyright 2014 Pacific Controls Software Services LLC (PCSS). All Rights Reserved.
*
* This software is the property of Pacific Controls  Software  Services LLC  and  its
* suppliers. The intellectual and technical concepts contained herein are proprietary 
* to PCSS. Dissemination of this information or  reproduction  of  this  material  is
* strictly forbidden  unless  prior  written  permission  is  obtained  from  Pacific 
* Controls Software Services.
* 
* PCSS MAKES NO REPRESENTATION OR WARRANTIES ABOUT THE SUITABILITY  OF  THE  SOFTWARE,
* EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE  IMPLIED  WARRANTIES  OF
* MERCHANTANILITY, FITNESS FOR A PARTICULAR PURPOSE,  OR  NON-INFRINGMENT.  PCSS SHALL
* NOT BE LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE AS A RESULT OF  USING,  MODIFYING
* OR DISTRIBUTING THIS SOFTWARE OR ITS DERIVATIVES.
*/

/**
 * Version    :    1.0 
 * User       :    pcseg306
 * Function   :    This file is main file where all related/common level javascript functions would be written 
 */
$('html').on('click', function(e) {
	var activatemenu = 0;
  $('#btnPopover, .popover-content').hover( function() {
	  activatemenu = 1;
  });
  
  $('body').click(function() {
		if (activatemenu == 1)
		{			
			$('.popover').css('display', 'none'); 
			
		}
		 $('#btnPopover').click( function() {
			  activatemenu = 0;
		  });  
  });

 
});