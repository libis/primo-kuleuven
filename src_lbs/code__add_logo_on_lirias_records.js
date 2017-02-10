{
        "description": "remove locations in DOKS view",
        "active": true,
        "record": true,
        "code": function(record) {
                if( (record.id).match(/^lirias/)) {
        		jQuery('tr#exlidResult'+ record.index +' td.EXLSummary div.EXLSummaryFields h3.EXLResultFourthLine').after('<h3 class="EXLResultFourthLine">Lirias <img src="/primo_library/libweb/libis/images/lirias.jpg" style="vertical-align:middle;height:25px"></h3>');
    		}
        }
}
