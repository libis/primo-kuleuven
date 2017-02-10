{
      "description": "add show pnx trigger",
      "active": true,
      "record": false,
      "code": function(record){
        Mousetrap.bind('* * p', function() {
                jQuery('.showpnx').toggle();
        });
      }
}
