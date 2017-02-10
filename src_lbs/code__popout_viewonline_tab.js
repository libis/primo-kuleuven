{
        "description": "add popout to view online tab",
        "active": true,
        "record": true,
        "code": function(record) {
            var selectedTabs = record.tabs.getByName('ViewOnlineTab');

            if (selectedTabs && selectedTabs.length > 0 && selectedTabs.text().trim().toLowerCase().search(/online|ligne/) != -1) {
                var view_online = $(selectedTabs[0]).find('a');
                try {
                    var getit1 = record.getIt1();
                    if (
                        getit1.search(/.exlibrisgroup.com\/view\/uresolver\/32KUL_/) == -1 &&
                        getit1.search(/.exlibrisgroup.com\/view\/uresolver\/49ECB_/) == -1 &&
                        getit1.search(/http:\/\/resolver.lias.be\/get_pid/) == -1
                    ) {
                        view_online.attr('target', '_blank');
                        view_online.attr('href', getit1);
                    }
                } catch (e) {
                    console.log('Error setting view it url');
                }
            }
        }
}
