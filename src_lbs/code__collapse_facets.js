{
        "description": "collapse facets",
        "active": true,
        "record": false,
        "code": function(data) {
            if (jQuery.PRIMO.facets && jQuery.PRIMO.facets.length > 0) {
                jQuery.PRIMO.facets[0].find('h4').addClass('visibleFacetList');
                jQuery(jQuery.PRIMO.facets).each(function(i, facet) {
                    facet.find('h4.EXLFacetTitleLabelPHolderfacet_creationdate').addClass('visibleFacetList');
                    facet.find('h4').on('click',function() {
                        facet.find('div.EXLDateRangeText').toggle();
                        facet.find('ol').toggle();
                        if ($(this).hasClass('visibleFacetList')) {
                            $(this).removeClass('visibleFacetList');
                        } else {
                            $(this).addClass('visibleFacetList');
                        }
                    });
                });
            }
        }
}
