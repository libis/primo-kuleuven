{
        "description": "open searchtips popup",
        "active": true,
        "record": false,
        "code": function(data) {
		jQuery('.searchtipslink').click(function(event) {
                	event.preventDefault();
 			jQuery("#searchtipsContainer").show();
                	return false;
		});
        }
}


