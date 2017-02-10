{
        "description": "remove locations in DOKS view",
        "active": true,
        "record": true,
        "code": function(record) {
            if (jQuery.inArray(['DOKS', 'DOKS_LIBISNET', jQuery.PRIMO.session.view.code])) {
                var moreTab = record.tabs.getByName('MoreTab');
                if (moreTab && (moreTab.length > 0) && (moreTab.text().trim().toLowerCase().search(/check locati||emplacements/) != -1)) {
                    moreTab.hide();
                }
            }
        }
}
