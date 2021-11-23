$( ".MenuItemDropdown" ).click(function() {
    $( this ).toggleClass( "DropdownVisible" );
  });

  $( "#hamburgermenu" ).click(function() {
    $(this).toggleClass("MenuVisible");
    $( ".MenuTree" ).toggleClass( "MenuVisible" );
  });

  