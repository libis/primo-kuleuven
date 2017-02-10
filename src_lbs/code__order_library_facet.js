{
        "description": "order library facets",
        "active": true,
        "record": false,
        "code": function(data) {
  		var library_facets = jQuery.PRIMO.facets.filter( function (facet) { return facet.name === 'facet_library' })
  		jQuery.each( library_facets, function( index ) {
    			facet = this;
    			this.values = jQuery(this.values).sort(SortDescByFacetValue);
    			this.values.each( function(index){
      				jQuery(facet).find('ol.EXLFacetsList').prepend(this);
    			});
  		});
		function SortDescByFacetValue(a, b){
  			var afacet = a.value.toLowerCase();
  			var bfacet = b.value.toLowerCase();
 			 return ((afacet > bfacet) ? -1 : ((afacet < bfacet) ? 1 : 0));
		};
        }
}
