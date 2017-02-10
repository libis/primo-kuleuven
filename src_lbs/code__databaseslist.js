{
        "description": "alwaysopen db_tab in simple search, link to A-Z databaseslist homepage, replace advanced searhc with A-Z databaseslist",
        "active": true,
        "record": false,
        "code": function(data) {
		/* database tab altijd openen in Simple search */
  		db_tab_link = jQuery('a.EXLSearchTabTitle[href*="tab=db_tab"]').attr('href');
  		jQuery('a.EXLSearchTabTitle[href*="tab=db_tab"]').attr('href',db_tab_link.replace("mode=Advanced&","mode=Basic&")+'&ct=BasicSearch&');
  		var db_scope = jQuery('input[name="scp.scps"]');

		/*maak A-Z databaselink */
  		var A_Z_DatabasesLink  = "/primo_library/libweb/action/search.do?srt=title&dscnt=0&frbg=&scp.scps='+ db_scope +'&tab=db_tab&ct=search&mode=Basic&&dum=true&tb=t&indx=1&vl(freeText0)=database&&fn=search&bulkSize=200"; 
  		A_Z_DatabaesLinkText = 'A-Z Database List';
  		if (jQuery.PRIMO.session.view.interfaceLanguage === "nl_BE") { A_Z_DatabaesLinkText = 'A-Z Lijst databanken' }
  		if (jQuery.PRIMO.session.view.interfaceLanguage === "fr_FR") { A_Z_DatabaesLinkText = 'A-Z liste de base de données' }
  		if (jQuery('li.EXLSearchTabSelected a.EXLSearchTabTitle[href*="tab=db_tab"]').length ){ 
    			jQuery('a#advancedSearchBtn').attr('href',A_Z_DatabasesLink).text(A_Z_DatabaesLinkText);
                        jQuery('div.EXLSearchFieldRibbonAdvancedSearchLink a#advancedSearchBtn').css('background','#68bdc4');
  		} 

		/* Make link to DatabaseList on the home page dynamic */
		jQuery('h1#LinkToAZDatabaseList a').attr('href',A_Z_DatabasesLink);
        }
}


