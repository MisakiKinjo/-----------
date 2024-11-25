//photocard
const photocardList = document.getElementsByClassName("photocard");
let idList = [11, 12, 13, 21, 22, 31, 32, 33, 34, 35, 41, 42, 43, 51, 52, 53, 54, 55, 56, 57, 58, 59];
var pList = [];
//pop  img_th_img
const img_th_list = document.getElementsByClassName("img_th_img");

for(var i = 0; i < photocardList.length; i++){
    photocardList[i].addEventListener('click',function(){
        //ポップ表示
        photoinfo_pop.classList.remove("pop_none");
        photoinfo_pop.classList.add("pop_show");
        back_grey.style.display = "block";
        back_grey.style.opacity = "1";
        //back_grey.style.width = "100%";

        //押されたカードのid
        var id = Number(this.id.substring(4));
        pop_content.classList.add(this.id);
        // if(img_th_list[0].classList.length != 1) img_th_list[0].classList[1].remove();
        // img_th_list[0].classList.add(this.id); //id情報をポップのサムネ画像に渡す

        //写真セット
        var imgList = get_imgList(id);
        var imgmovList = get_imgmovList(id);
        var pList = get_pList(id);
        pop_img.src = imgList[0];
        pop_mov.src = imgmovList[0];
        pop_p.textContent = pList[0];
        if(imgList[0] == imgmovList[0]) pop_mov.style.visibility = "hidden";
        else pop_mov.style.visibility = "visible";

        for(var a = 0; a < imgList.length; a++){
            var img_th = document.getElementById("img_th" + (a + 1));
            img_th.style.display = "inline-block";
            img_th.src = imgList[a];
            img_th.classList.add(imgmovList[a]);//画像ソースのパス情報をクラスに渡す
        }
        for(var a = 0; a < 5 - imgList.length; a++){
            var img_th = document.getElementById("img_th" + (imgList.length + a + 1));
            img_th.style.display = "none";
        }
        
        //サムネの写真クリック処理追加
        th1.addEventListener('click', th1_Click, false);
        th2.addEventListener('click', th2_Click, false);
        th3.addEventListener('click', th3_Click, false);
        th4.addEventListener('click', th4_Click, false);
        th5.addEventListener('click', th5_Click, false);
        // for(var a = 0; a < imgList.length; a++){
        //     img_th_list[a].onclick = () => {
        //         //pop_img.src = imgList[a];
        //         //pop_img.src = img_th_list[a].classList[1];//画像ソースのパスをクラスから取得
        //     }
        // }
        
    },false);
    photocardList[i].id = "card" + idList[i];
}

function img_th_Click(imgList, a){
    pop_img.src = imgList[a];
}
// for(var a = 0; a < img_th_list.length; a++){
//     img_th_list[a].addEventListener('click', function(){
//         var id = Number(img_th_list[0].classList[1].substring(4));
//         var imgList = get_imgList(id);
//         pop_img.src = imgList[a];
//     }, false);
// }

//button_popclose
const button_popclose = document.getElementById("button_popclose");
button_popclose.onclick = button_popclose_Click;
//photoinfo_pop
const photoinfo_pop = document.getElementById("photoinfo_pop");
//back_grey
const back_grey = document.getElementById("back_grey");
//pop_img
const pop_img = document.getElementById("pop_img");
const pop_mov = document.getElementById("pop_mov");
const th1 = document.getElementById("img_th1");
const th2 = document.getElementById("img_th2");
const th3 = document.getElementById("img_th3");
const th4 = document.getElementById("img_th4");
const th5 = document.getElementById("img_th5");
//pop_p
const pop_p = document.getElementById('pop_p');
//pop_content
const pop_content = document.getElementById('pop_content');

function button_popclose_Click(){
    
    //ポップの画像サムネのクリックイベントを削除
    th1.removeEventListener('click', th1_Click, false);
    th2.removeEventListener('click', th2_Click, false);
    th3.removeEventListener('click', th3_Click, false);
    th4.removeEventListener('click', th4_Click, false);
    th5.removeEventListener('click', th5_Click, false);
    if(th1.style.display != "none") th1.classList.remove(th1.classList[th1.classList.length - 1]);
    if(th2.style.display != "none") th2.classList.remove(th2.classList[th2.classList.length - 1]);
    if(th3.style.display != "none") th3.classList.remove(th3.classList[th3.classList.length - 1]);
    if(th4.style.display != "none") th4.classList.remove(th4.classList[th4.classList.length - 1]);
    if(th5.style.display != "none") th5.classList.remove(th5.classList[th5.classList.length - 1]);
    pop_content.classList.remove(pop_content.classList[1]);
    // var id = Number(img_th_list[0].classList[1].substring(4));
    // var imgList = get_imgList(id);
    // for(var i = 0; i < imgList.length; i++){
    //     img_th_list[i].classList.remove(imgList[i]);
    //     img_th_list[i].onclick = () => {
    //         return false;
    //     }
    // }

    //ポップ閉じる
    photoinfo_pop.classList.remove("pop_show");
    photoinfo_pop.classList.add("pop_none");
    back_grey.style.display = "none";
}

function th1_Click(){
    var src = th1.classList[th1.classList.length - 1];
    if(src.includes("images")){
        pop_mov.style.visibility = "hidden";
        pop_img.src = src;
    }
    else{
        pop_mov.style.visibility = "visible";
        pop_mov.src = src;
    }
    var id = pop_content.classList[1].substring(4);
    var pList = get_pList(Number(id));
    pop_p.textContent = pList[0];
}
function th2_Click(){
    var src = th2.classList[th2.classList.length - 1];
    if(src.includes("images")){
        pop_mov.style.visibility = "hidden";
        pop_img.src = src;
    }
    else{
        pop_mov.style.visibility = "visible";
        pop_mov.src = src;
    }
    var id = pop_content.classList[1].substring(4);
    var pList = get_pList(Number(id));
    pop_p.textContent = pList[1];
}
function th3_Click(){
    var src = th3.classList[th3.classList.length - 1];
    if(src.includes("images")){
        pop_mov.style.visibility = "hidden";
        pop_img.src = src;
    }
    else{
        pop_mov.style.visibility = "visible";
        pop_mov.src = src;
    }
    var id = pop_content.classList[1].substring(4);
    var pList = get_pList(Number(id));
    pop_p.textContent = pList[2];
}
function th4_Click(){
    var src = th4.classList[th4.classList.length - 1];
    if(src.includes("images")){
        pop_mov.style.visibility = "hidden";
        pop_img.src = src;
    }
    else{
        pop_mov.style.visibility = "visible";
        pop_mov.src = src;
    }
    var id = pop_content.classList[1].substring(4);
    var pList = get_pList(Number(id));
    pop_p.textContent = pList[3];
}
function th5_Click(){
    var src = th5.classList[th5.classList.length - 1];
    if(src.includes("images")){
        pop_mov.style.visibility = "hidden";
        pop_img.src = src;
    }
    else{
        pop_mov.style.visibility = "visible";
        pop_mov.src = src;
    }
    var id = pop_content.classList[1].substring(4);
    var pList = get_pList(Number(id));
    pop_p.textContent = pList[4];
}

class CARD_DATA{
    constructor(imgList, pList){
        this.imgList = imgList;
        this.pList = pList;
    }
}
function get_imgList(id){
    var imgList = [];
    switch(id){
        case 11:
            imgList.push('gallery_images/nade1th.PNG');
            imgList.push('gallery_images/nade1th.PNG');
            imgList.push('gallery_images/nade13.PNG');
            break;
        case 12:
            imgList.push('gallery_images/nade2th.PNG');
            break;
        case 13:
            imgList.push('gallery_images/nade3.png');
            break;
        case 21:
            imgList.push('gallery_images/idou1th.PNG');
            imgList.push('gallery_images/idou12th.PNG');
            break;
        case 22:
            imgList.push('gallery_images/idou2th.PNG');
            break;
        case 31:
            imgList.push('gallery_images/itazura1th.PNG');
            break;
        case 32:
            imgList.push('gallery_images/itazura2th.PNG');
            break;
        case 33:
            imgList.push('gallery_images/itazura3th.PNG');
            break;
        case 34:
            imgList.push('gallery_images/itazura4th.PNG');
            break;
        case 35:
            imgList.push('gallery_images/itazura5th.PNG');
            break;
        case 41:
            imgList.push('gallery_images/ten11th.PNG');
            imgList.push('gallery_images/ten12th.PNG');
            imgList.push('gallery_images/ten13th.PNG');
            imgList.push('gallery_images/ten14th.PNG');
            break;
        case 42:
            imgList.push('gallery_images/ten2th.PNG');
            break;
        case 43:
            imgList.push('gallery_images/ten31th.PNG');
            imgList.push('gallery_images/ten32th.PNG');
            break;
        case 51:
            imgList.push('gallery_images/tadano1.JPG');
            imgList.push('gallery_images/tadano12.png');
            break;
        case 52:
            imgList.push('gallery_images/tadano2th.PNG');
            break;
        case 53:
            imgList.push('gallery_images/tadano3th.PNG');
            break;
        case 54:
            imgList.push('gallery_images/tadano41.JPG');
            imgList.push('gallery_images/tadano42.JPG');
            imgList.push('gallery_images/tadano43.JPG');
            imgList.push('gallery_images/tadano44.JPG');
            imgList.push('gallery_images/tadano45.JPG');
            break;
        case 55:
            imgList.push('gallery_images/tadano51.JPG');
            imgList.push('gallery_images/tadano52.JPG');
            break;
        case 56:
            imgList.push('gallery_images/tadano6th.PNG');
            imgList.push('gallery_images/tadano62.PNG');
            imgList.push('gallery_images/tadano63.JPG');
            break;
        case 57:
            imgList.push('gallery_images/tadano7th.PNG');
            break;
        case 58:
            imgList.push('gallery_images/tadano8.png');
            break;
        case 59:
            imgList.push('gallery_images/tadano9th.PNG');
            imgList.push('gallery_images/tadano92.PNG');
            break;
    }
    return imgList;
}

function get_imgmovList(id){
    var imgList = [];
    switch(id){
        case 11:
            imgList.push('gallery_movies/nade11.mov');
            imgList.push('gallery_movies/nade12.mov');
            imgList.push('gallery_movies/nade13.mov');
            break;
        case 12:
            imgList.push('gallery_movies/nade2.mov');
            break;
        case 13:
            imgList.push('gallery_images/nade3.png');
            break;
        case 21:
            imgList.push('gallery_movies/idou11.mov');
            imgList.push('gallery_movies/idou12.MOV');
            break;
        case 22:
            imgList.push('gallery_movies/idou2.mov');
            break;
        case 31:
            imgList.push('gallery_movies/itazura1.MOV');
            break;
        case 32:
            imgList.push('gallery_movies/itazura2.mp4');
            break;
        case 33:
            imgList.push('gallery_movies/itazura3.mov');
            break;
        case 34:
            imgList.push('gallery_movies/itazura4.mov');
            break;
        case 35:
            imgList.push('gallery_movies/itazura5.mov');
            break;
        case 41:
            imgList.push('gallery_movies/ten11.mov');
            imgList.push('gallery_movies/ten12.mov');
            imgList.push('gallery_movies/ten13.mov');
            imgList.push('gallery_movies/ten14.mov');
            break;
        case 42:
            imgList.push('gallery_movies/ten2.mov');
            break;
        case 43:
            imgList.push('gallery_movies/ten31.mov');
            imgList.push('gallery_movies/ten32.mov');
            break;
        case 51:
            imgList.push('gallery_images/tadano1.JPG');
            imgList.push('gallery_images/tadano12.png');
            break;
        case 52:
            imgList.push('gallery_movies/tadano2.mov');
            break;
        case 53:
            imgList.push('gallery_movies/tadano3.mov');
            break;
        case 54:
            imgList.push('gallery_images/tadano41.JPG');
            imgList.push('gallery_images/tadano42.JPG');
            imgList.push('gallery_images/tadano43.JPG');
            imgList.push('gallery_images/tadano44.JPG');
            imgList.push('gallery_images/tadano45.JPG');
            break;
        case 55:
            imgList.push('gallery_images/tadano51.JPG');
            imgList.push('gallery_images/tadano52.JPG');
            break;
        case 56:
            imgList.push('gallery_movies/tadano61.mov');
            imgList.push('gallery_images/tadano62.PNG');
            imgList.push('gallery_images/tadano63.JPG');
            break;
        case 57:
            imgList.push('gallery_movies/tadano7.mov');
            break;
        case 58:
            imgList.push('gallery_images/tadano8.png');
            break;
        case 59:
            imgList.push('gallery_images/tadano9th.PNG');
            imgList.push('gallery_images/tadano92.PNG');
            break;
    }
    return imgList;
}

function get_pList(id){
    var pList = [];
    switch(id){
        case 11:
            pList.push('手を出されると自ら頭を下げます');
            pList.push('ほっぺや首回りをなでてもらうのが好き。');
            pList.push('指に乗ってる時でもなでてほしいインコ');
            break;
        case 12:
            pList.push('なでられるためならこれでもかってくらい頭を下げちゃう');
            break;
        case 13:
            pList.push('絶賛指を堪能してるところ。首はほぼ後ろ向き。');
            break;
        case 21:
            pList.push('何回歩いても飽きない家の散歩');
            pList.push('よたよたしててかわいい');
            break;
        case 22:
            pList.push('鳥かごの中も行ったり来たりの散歩');
            break;
        case 31:
            pList.push('うめは盲目なのでこのいたずらもばれてないと思ってます');
            break;
        case 32:
            pList.push('いたずらがばれてることに気づき、悟るインコ');
            break;
        case 33:
            pList.push('開封を手伝ってくれるフリでした。');
            break;
        case 34:
            pList.push('机の上のものすべてがおもちゃです。');
            break;
        case 35:
            pList.push('ご飯を奪いに来るので閉じ込めたら、案外楽しんでるようす');
            break;
        case 41:
            pList.push('ミッキーマウスマーチを結構上手に歌っています');
            pList.push('騒ぐのも得意です');
            pList.push('相棒の鈴を見てテンション上がるインコ');
            pList.push('自己流のミッキーマウスマーチを奏でるインコ');
            break;
        case 42:
            pList.push('摩擦音を聞いてテンション上がるインコ');
            break;
        case 43:
            pList.push('自分で歌いながら混乱してるところ');
            pList.push('自信満々です');
            break;
        case 51:
            pList.push('うめの幼少期。顔がグレー、嘴も短く、全体的にふわふわ。');
            pList.push('今ではとさかも立派になり、凛々しく仕上がりました。');
            break;
        case 52:
            pList.push('ひゅっ');
            break;
        case 53:
            pList.push('放鳥時に地震が来てしまい、びっくりして壁に張り付くインコ');
            break;
        case 54:
            pList.push('ごはんタイム');
            pList.push('お昼寝タイム');
            pList.push('相棒の鈴とうめ');
            pList.push('ソファでくつろぎタイム');
            pList.push('ふれあいタイム');
            break;
        case 55:
            pList.push('後ろから見た羽が蝶っぽい');
            pList.push('横から見ると迫力があります');
            break;
        case 56:
            pList.push('緊張MAXなので、とさかの反りもMAX');
            break;
        case 57:
            pList.push('こんなリッチなオカメはいかが？');
            pList.push('正面もこんなにイケメンです！');
            break;
        case 58:
            pList.push('仲間だと感じた相手には毛づくろいをする習性があります。');
            break;
        case 59:
            pList.push('身震いをするところ。');
            pList.push('体が膨らんでるのがかわいい');
            pList.push('顔まで膨らむインコ');
            break;
    }
    return pList;
}

function set_data(){

}

function returnFalse(){
    return false;
}

//カードを開いてるとき、現在選択されているサムネ番号に応じた画像と文章を表示
//サムネをクリックしたとき、クリックされたサムネ番号を取得
//idをもとにあらかじめ取得したimgListとpListから表示