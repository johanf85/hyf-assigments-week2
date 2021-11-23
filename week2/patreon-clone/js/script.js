$( ".MenuItemDropdown a" ).click(function() {
    $( this ).toggleClass( "toggleon" );
    $( ".MenuItemDropdown ul" ).toggleClass( "DropdownVisible" );
  });