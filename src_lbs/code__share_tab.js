{
      "description": "add share tab",
      "active": true,
      "record": true,
      "code": function(record){
        record.tabs.addTab('ShareTab', {state:'enabled',
                                        label: getI18N().tabText,
                                        click:function (event, tab, record, options) {
          if (tab.isOpen()) {
            tab.close();
          } else {
            var record_ids = [record.id];

            if (record.isDedupedRecord()){
              jQuery.merge(record_ids, record.getDedupedRecordIds());
            }

            var details_url = $(record.tabs).filter('.EXLDetailsTab').find('a').attr('href');

            $.get(details_url,
              function(data){
                    var html = jQuery(jQuery.parseHTML(data)).find('.EXLTabHeaderButtonSendToList li');
                    var permalink = html.filter('.EXLButtonSendToPermalink').length == 0 ? false : true;
                    var citation = html.filter('.EXLButtonSendToCitation').length == 0 ? false : true;

                    if (permalink) { 
                       html.filter('.EXLButtonSendToPermalink').find('a').attr('onclick', html.filter('.EXLButtonSendToPermalink').find('a').attr('onclick').replace(/-1/g, record.index) ); 
                    } 

                    if (citation){ 
                      html.filter('.EXLButtonSendToCitation').find('a').attr('onclick', html.filter('.EXLButtonSendToCitation').find('a').attr('onclick').replace(/-1/g, record.index) ); 
                    } 


/*
                    if (permalink) {
                       html.filter('.EXLButtonSendToPermalink').find('a').attr('onclick', html.filter('.EXLButtonSendToPermalink').find('a').attr('onclick').replace(/_1/g, '_' +record.index).replace(/\'1\'/g, '\'' +record.index +'\'') );
                    }

                    if (citation){
                      html.filter('.EXLButtonSendToCitation').find('a').attr('onclick', html.filter('.EXLButtonSendToCitation').find('a').attr('onclick').replace(/_1/g, '_'+record.index).replace(/\'1\'/g, '\'' +record.index +'\'') );
                    }
*/
                    tab.container.find('.share_options_import').empty().append(html);
                    eshelfUpdate(record.children(), record.isOnEShelf());
              }, 'html'
            );

            details_url = 'http://' + location.hostname + location.pathname.substr(0, location.pathname.lastIndexOf('/')) + '/display.do?tabs=detailsTab&ct=display&fn=search&doc=' + record.id + "&recIds=" + record.id;

            tab.open(jQuery.PRIMO.template.renderById('lbsShare-tpl',{
                labels: getI18N(),
                record_ids: record_ids,
                showPNX: 'none'
            }), {reload:true, url: details_url});
          } //else
        }
      });
    }
}
