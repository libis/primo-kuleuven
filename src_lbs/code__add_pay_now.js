{
        "description": "add pay now button to fines",
        "active": true,
        "record": false,
        "code": function(data) {
		jQuery(document).ready(function() {
//		  var hasFees = ($('#FinesAndFeesTable').length > 1 && $('#FinesAndFeesTable > tbody') && $('#FinesAndFeesTable > tbody').children().length > 0)
		  if (/^KULeuven/.test(jQuery.PRIMO.session.view.code)) {
			  var hasFees = ($('.MyAccount_FineAndFees_0').length > 0);
			  if (hasFees) {
			    $('#exlidMyAccountMainHeader').append(jQuery.PRIMO.template.renderById('lbsPayFines-tpl', {}));
			    var payFines = {
				click: function(e){
				   if (!jQuery.PRIMO.session.user.isLoggedIn()) {
					e.preventDefault();
					console.log('User not logged in');
				   }
				}
			    }
				
			  }
		   }
		})
	}
}
