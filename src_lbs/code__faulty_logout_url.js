{
        "description": "change faulty logout url",
        "active": true,
        "record": false,
        "code": function(data) {
            var logout = $('div#exlidUserAreaTile ul#exlidUserAreaRibbon li#exlidSignOut.EXLSignOut a');
            var logoutURL = logout.attr('href');
            if (logoutURL && logoutURL.match(/targetURL=undefined/)) {
                var targetLogout = document.location.protocol + '://' + document.location.host + document.location.pathname + "?vid=" + jQuery.PRIMO.session.view.code
                logoutURL = logoutURL.replace(/targetURL=undefined/gi, "targetURL=" + targetLogout);
                logout.attr('href', logoutURL);
            }
        }
}
