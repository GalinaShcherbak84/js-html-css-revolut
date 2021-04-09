$(document).ready(function(){
//console.log('jquery', jQuery);
var dropDown = $('.dropdown');
var dropLinks = dropDown.children('a');
//console.log(dropLinks);
var dropMenus = dropDown.children('ul');
//console.log(dropMenus);
dropLinks.click(function(){
    var actualMenu = $(this).next('ul');
    dropMenus.not(actualMenu).hide();
    actualMenu.toggle();
})


    
//fine document ready    
});