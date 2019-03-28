$(function (){
    isNavBarHidden = true;
    $('body > header .nav_two .nav_links .menu_icon').click(function (){
      if(isNavBarHidden){
          $('body > header .nav_two .nav_bar').fadeIn("slow");
          isNavBarHidden = false;
      }
      else{
          $('body > header .nav_two .nav_bar').fadeOut("slow");
          isNavBarHidden = true;
      }
   });
});