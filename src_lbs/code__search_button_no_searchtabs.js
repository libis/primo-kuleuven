{
        "description": "replace advanced search-button when no searchtabs",
        "active": true,
        "record": false,
        "code": function(data) {
	    if ( $('#exlidHeaderContainer #exlidSearchTabs').length === 0 ){
               $('#exlidSearchRibbon .EXLSearchFieldRibbonAdvancedSearchLink').css("margin-top","0");
            }
        }
		
}
