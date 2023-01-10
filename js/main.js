$(document).ready(function(){
    let currentPage = "HOME";
    let currentNavLink = $("#nav-ul").children().first().children()[0];
    
    $("#ABOUT").hide();
    $("#CV").hide();
    $("#PROJECTS").hide();
    

    $(".nav-link").click(function(e){
        $(`#${currentPage}`).fadeOut(100)
        $(`#${e.currentTarget.innerHTML}`).fadeIn(500)

        currentPage = e.currentTarget.innerHTML

        $(currentNavLink).removeClass("selected");
        $(this).addClass("selected");
        
        currentNavLink = this;
    })
    
})