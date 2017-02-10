{
        "description": "add close buttons",
        "active": true,
        "record": false,
        "code": function(data) {
            $('.CloseButton').click(function() {
                $('#' + $(this).attr('close')).hide();
            });
        }
}
