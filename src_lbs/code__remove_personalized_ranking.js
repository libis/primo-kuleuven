{
        "description": "Remove Personalized Rankings If the search scope doesn't contain Primo Central",
        "active": true,
        "record": false,
        "code": function(data) {
  		var accountRanking = jQuery('div#exlidFacetTile > div.EXLMyAccountRanking').clone();
  		jQuery('div#exlidFacetTile > div.EXLMyAccountRanking').remove();
  		accountRanking.appendTo( jQuery('div#exlidFacetTile')  ).show();
            if ( jQuery('[name=pcAvailabiltyMode]').length ===  0) {
                jQuery("#pyrTopLevel").hide();
            }

            if (!/primo_central_multiple_fe/i.test(jQuery.PRIMO.query.scope)) {
/*
                jQuery("#pyrTopLevel").hide();
*/
            }
        }
}
