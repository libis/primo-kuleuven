{
        "description": "create_inconspicuous_frbr_PC_records",
        "active": true,
        "record": true,
        "code": function(record) {
            if (/^TN_/.test(record.id)) {
                jQuery('tr#exlidResult' + record.index + ' cite.EXLResultFRBR').css('border', 'none');
                jQuery('tr#exlidResult' + record.index + ' cite.EXLResultFRBR a').css({
                    'background-image': 'none',
                    'padding': '0'
                });
            }
        }
}
