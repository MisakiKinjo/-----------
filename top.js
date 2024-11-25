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
            count = 0;
            clearInterval(intervalID);
        }
    }, 500);
    
}