{
        "description": "add qtip to search tabs",
        "active": true,
        "record": false,
        "code": function(data) {
            $('ul#exlidSearchTabs li, div#KULLOCLinkToKULeuven img#kulloc_logo ').each(function() {
                var tabTooltip = jQuery(this).find('a.EXLSearchTabTitle').attr('title');
                var tabText = jQuery(this).find('a.EXLSearchTabTitle').text();
                $(this).qtip({
                    content: {
/*
                        title: tabText,
*/
                        text: tabTooltip
                    },
                    show: 'mouseover',
                    hide: 'mouseout',
                    position: {
                        adjust: {
                            x: -30,
                            y: -10
                        }
                    }
                });
                jQuery(this).find('a.EXLSearchTabTitle').removeAttr('title'); 
            });
        }
}
