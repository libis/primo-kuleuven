{
    "description": "trigger image in image carousel",
    "active": true,
    "record": false,
    "code": function(record) {
        if (jQuery.PRIMO.session.view.code === 'KMKG' &&
            jQuery.PRIMO.records.length > 0 &&
            (window.getParameterByName('tab') === "special_col_tab" ||
                window.getParameterByName('tab') === "phys_items_tab" ||
                window.getParameterByName('tab') === "" ||
                window.getParameterByName('tab') === null)
        ) {
            jQuery('.imgCarousel').live('click', function() {
                var url = $(this).data('image');
                var win = window.open(url, '_blank');
                win.focus();
            });
        }
    }
}
