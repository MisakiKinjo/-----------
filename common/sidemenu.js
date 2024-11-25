//sidemenu
//menuButton
let menuButton = document.getElementById("menuButton");
let sidemenu = document.getElementById("sidemenu");
menuButton.onclick = menuButton_Click;
var menuButton_sts = 0;
function menuButton_Click(){
    // if(menuButton_sts == 0){
    //     menuButton_sts = 1;
    //     sidemenu.style.display = "block";
    // }
    // else{
    //     menuButton_sts = 0;
    //     sidemenu.style.display = "none";
    // }
    if(sidemenu.classList.contains("SlideOut")){
        sidemenu.classList.remove("SlideOut");
        sidemenu.classList.add("SlideIN");
    }
    else{
        sidemenu.classList.remove("SlideIN");
        sidemenu.classList.add("SlideOut");
    }
}