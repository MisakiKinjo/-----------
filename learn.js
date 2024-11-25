//introduce_okame 色　詳しく
const btn_color_info = document.getElementById("btn_color_info");
btn_color_info.onclick = btn_color_info_Click;
const div_color = document.getElementById("div_color_category");
function btn_color_info_Click(){
    if(div_color.classList.contains("open")){
        div_color.classList.add("close");
        div_color.classList.remove("open");
        btn_color_info.textContent = "閉じる";
    }
    else{
        div_color.classList.add("open");
        div_color.classList.remove("close");
        btn_color_info.textContent = "詳しく";
    }
    
}

window.addEventListener("scroll", function () {
    const okamecomment = document.getElementById('okamecomment');
    const scroll = window.scrollY;
    if (scroll > 4600 && scroll < 5400) {
      okamecomment.style.opacity = "1";
      okamecomment.style.zIndex = "3";
      // console.log(scroll);
    } else {
      okamecomment.style.opacity = "0";
      okamecomment.style.zIndex = "-1";
      // console.log(scroll);
    }
});


//okamehover
const okamehover = document.getElementById('okamehover');
const okameheart1 = document.getElementById('okameheart1');
const okameheart2 = document.getElementById('okameheart2');
okamehover.onclick = okamehover_Click;
function okamehover_Click(){
    // okameheart1.style.display = 'block';
    // okameheart2.style.display = 'block';
    // okameheart1.style.opacity = '1';
    okameheart1.classList.remove('hideheart');
    okameheart2.classList.remove('hideheart');
    okameheart1.classList.add('showheart');
    okameheart2.classList.add('showheart');
    okameheart1.style.opacity = '0';
    var count = 0;
    var intervalID = setInterval(() =>{
        okameheart1.style.display = 'block';
        okameheart2.style.display = 'block';
        if(okameheart1.style.opacity == '1'){
            okameheart1.style.opacity = '0';
            okameheart2.style.opacity = '1';
        }
        else{
            okameheart1.style.opacity = '1';
            okameheart2.style.opacity = '0';
        }
        count++;
        if(count > 6){
            okameheart1.style.display = 'none';
            okameheart2.style.display = 'none';
            okameheart1.classList.remove('showheart');
            okameheart2.classList.remove('showheart');
            okameheart1.classList.add('hideheart');
            okameheart2.classList.add('hideheart');
            clearInterval(intervalID);
        }
    }, 500);

    
}