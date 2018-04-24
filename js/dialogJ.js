$().ready(
    $('#fofo').dialog({
        autoOpen: false,
        draggable: false,
        width:800,
        height:200,
        hide: { effect: "explode", duration: 1000 },

    }),
    $( '#fofo' ).dialog( "option", "title", "Nombre d'heures" )
);
$('#title').click(function(){
        $("#fofo").dialog( "open" );
    }
);
$( "#fofo" ).animate({
    color: "gray",
    backgroundColor: "rgb(214, 214, 194)"
});

