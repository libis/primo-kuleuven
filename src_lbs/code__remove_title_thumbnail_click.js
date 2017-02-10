{
        "description": "remove thumbnail and title click",
        "active": true,
        "record": false,
        "code": function(data) {
            $(".popThumbnailToTop, H2.EXLResultTitle a").click(function(event) {
                event.preventDefault();
            });
            $(".popThumbnailToTop, H2.EXLResultTitle a").css('cursor', 'default');
        }
}
