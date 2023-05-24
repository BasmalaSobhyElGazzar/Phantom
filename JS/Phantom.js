/*global $*/

/*The variables*/
var close = $('#close'),
    open = $('#open'),
    sideMenu = $('nav .sideMenu'),
    overlayDiv = $('header').parent('div');

/*To open the side menu when click on the "#open" button*/
open.click(function () {
    'use strict';
    
    overlayDiv.addClass('overlay');
    sideMenu.show(700);
    open.hide(700);
    close.show(700);
});

/*To close the side menu when click on the "#close" button*/
close.click(function () {
    'use strict';
    
    overlayDiv.removeClass('overlay');
    sideMenu.hide(700);
    close.hide(700);
    open.show(700);
    
});