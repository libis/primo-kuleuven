{
        "description": "ui feedback with link to form",
        "active": false,
        "record": false,
        "code": function(data) {

		jQuery(document).ready(function() {
			var lbsFeedback = {messages:['Please give your', 'feedback', 'on the new Limo !'], url:'https://forms.zohopublic.com/libisteam/form/Feedback/formperma/bM6BFe4b4Gj04KkFeCb3_G419'}

var viewArray = [
'KULeuven',
'KULeuven_VIVES_KHBO',
'KULeuven_ODISEE',
'KULeuven_LUCA',
'KULeuven_TMOREM',
'KULeuven_UCLL',
'KULeuven_TMOREK',
'LUCA',
'ODISEE',
'TMOREA',
'TMOREK',
'TMOREM',
'KHL',
'KHLIM',
'VIVES_KATHO',
'VIVES_KHBO'
];



		
			switch (jQuery.PRIMO.session.view.interfaceLanguage) {
				case 'nl_BE':
					lbsFeedback = {
							messages:['Geef je', 
								  'mening', 
								  'over de vernieuwde Limo !'], 
							url:'https://forms.zohopublic.com/libisteam/form/Feedback/formperma/bM6BFe4b4Gj04KkFeCb3_G419'
						      };
					break;
			}

			  var divMessageTop = '145'
			  $(window).scroll(function () {
			    if ($(window).scrollTop() > divMessageTop) {
			      $('div#lbsUIFeedback').addClass('lbsMessageFixed');
			    }
			    if ($(window).scrollTop() < divMessageTop) {
			      $('div#lbsUIFeedback').removeClass('lbsMessageFixed');
			    } 
			  });
                        if ( $.inArray( jQuery.PRIMO.session.view.code , viewArray) > 0){ 

				$('#exlidSearchTileWrapper').after($.PRIMO.template.render($('#lbsUIFeedback-tpl').html(), {data: lbsFeedback , txtcolor:'#53738c', bgcolor:'#fbca04'}));

				$('#lbsUIFeedbackClose').on('click', function(e){
					 e.preventDefault();
					$('#lbsUIFeedback').hide();
				});
			}
		});
        }
}
