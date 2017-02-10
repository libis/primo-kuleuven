{
        "description": "",
        "active": true,
        "record": true,
        "code": function(record) {
                if ( record.materialType().match(/review/) ) {
			jQuery('tr#exlidResult'+ record.index).find('.EXLBriefResultsDisplayCoverImages').append('<span class="coverOverlay"><span>REVIEW</span></span>');
    		}
        }
}
