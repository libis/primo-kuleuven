{
        "description": "change background image_add_page",
        "active": true,
        "record": false,
        "code": function(data) {
            $('.EXLFacetContainer div.EXLFacetActionsV2 li.EXLFacetSaveToEShelfActionOff a').click(function() {
                $('.EXLFacetContainer div.EXLFacetActionsV2 li.EXLFacetSaveToEShelfActionOff').css("background-image", "url('../libis/lbs_default/images/icon_checkbox_on.png')");
            });
        }
}
