if (jQuery.PRIMO.session.view.code === 'KMKG' && jQuery.PRIMO.records.length > 0 && (window.getParameterByName('tab') === "special_col_tab" || window.getParameterByName('tab') === "phys_items_tab" || window.getParameterByName('tab') === "" || window.getParameterByName('tab') === null)) {
jQuery('.imgCarousel').live('click',function(){
  var url = $(this).data('image');
  var win = window.open(url, '_blank');
  win.focus();
});
jQuery.each(jQuery.PRIMO.records, function (i, s_record) {
        if ((jQuery.isArray(s_record.getData().search['lsr04'])) && /Collectiedocumentatie/.test(s_record.getData().search['lsr04'].toString())) {

	s_record.tabs.addTab('Images', {tooltip:'Images', state:'enabled',click:function(event, tab, record, options){
	  if (tab.isOpen()) {
	    jQuery('#imageContainer-' + record.index).photobox('destroy');
	    tab.close();
	  } else {
	    var tab_content = '';
	    var image_records=jQuery.PRIMO.search.byQuery('lsr05,exact,MPLUS_'+record.id, {bulkSize: 500});
	    var image_data = [];

	    if (jQuery.type(image_records) === 'object'){
		image_records = [image_records];
	    }
 
	    if (image_records){
	      tab_content = '<div style="height:15em;padding:10px;overflow:auto"><div id="imageContainer-' + record.index + '" class="polaroid-images" style="width:100%;margin:0 auto;position:relative;">';
	      jQuery.each(image_records, function(index, data){
//Extract caption according to interface language
		var title = "";

		if (typeof(data.PrimoNMBib.record.display.title) === 'string'){
		  title = data.PrimoNMBib.record.display.title;
		} else {
		  var language_ui = {'en_US': 'eng', 'fr_FR': 'fre', 'nl_BE': 'dut'};
		  var language_c  = {'en_US': 'en', 'fr_FR': 'fr', 'nl_BE': 'nl'};
		  jQuery.each(data.PrimoNMBib.record.display.title, function(i, data){
			if(data.split(/\$\$8/)[1] === language_ui[jQuery.PRIMO.session.view.interfaceLanguage]){
				title = data.replace(/\$\$8.*$/,'');
			}
		  });

		  if (title === "") {
			title = data.PrimoNMBib.record.display.title[0].split(/\$\$8/)[0];
		  }
		}

//Get backlink and add to caption
/*
                jQuery.each(data.PrimoNMBib.record.links.backlink, function(i,data){
		 var language = jQuery.PRIMO.session.view.interfaceLanguage.split(/_/)[0];
		 if (data.search("lang=" + language) != -1) {
			title = title;// + ' <a target="_blank" href="'+ data + '">@Carmentis</a>';
		 }
		
		});
*/
		var language = jQuery.PRIMO.session.view.interfaceLanguage.split(/_/)[0];
		var linktorsrc = '';
		if (jQuery.isArray(data.LINKS.linktorsrc)) {
		 linktorsrc = jQuery.grep(data.LINKS.linktorsrc, function(a){return (a.search('carmentis') != -1) })[0];
		 //linktorsrc = jQuery.grep(data.LINKS.linktorsrc, function(a){return ((a.search('carmentis') != -1) && (a.search('lang=' + language) != -1))})[0];
		} else {
		 linktorsrc = data.LINKS.linktorsrc;
		}

		var backlink = '';
		if (jQuery.isArray(data.LINKS.backlink)) {
		 backlink = jQuery.grep(data.LINKS.backlink, function(a){return ((a.search('carmentis') != -1) && (a.search('lang=' + language) != -1))})[0];
		} else {
		 backlink = data.LINKS.backlink;
		}
		var thumbnail  = '';
//Set image data
                if (typeof data.LINKS.thumbnail === 'object') {
                        thumbnail = data.LINKS.thumbnail[0];
                } else {
                        thumbnail = data.LINKS.thumbnail;
                }

                tab_content += "<a title='"+title+"' href='"+ linktorsrc +"'><img data-pb-captionLink='@carmentis["+ backlink +"]' src='"+ thumbnail +"' alt='"+ title +"' title='" + title + "' /></a>";
	      });
	      tab_content += '</div></div>';
	    } else {
	      tab_content = '<br><br><br><h1>No images found</h1>'
	    }
	    
	    tab.open(tab_content, {reload:true});

	   jQuery('#imageContainer-' + record.index).photobox('a', {time: 0, zoomable:false, thumbs:false});
	  }
	}});
  	} //if
});
}
