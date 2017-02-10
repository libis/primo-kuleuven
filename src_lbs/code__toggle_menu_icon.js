{
        "description": "toggle class for menu icon on touch screens",
        "active": true,
        "record": false,
        "code": function(data) {
            jQuery('#exlidUserAreaRibbon').click(function() {
               jQuery('#exlidUserAreaRibbon').toggleClass('active');
            });
        }
}
