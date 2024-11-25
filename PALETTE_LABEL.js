//カラーパレットのラベル
let col1 = document.getElementById("lab_cp1");
let col2 = document.getElementById("lab_cp2");
let col3 = document.getElementById("lab_cp3");
let col4 = document.getElementById("lab_cp4");
let col5 = document.getElementById("lab_cp5");
let col6 = document.getElementById("lab_cp6");
let col7 = document.getElementById("lab_cp7");
let col8 = document.getElementById("lab_cp8");
let col9 = document.getElementById("lab_cp9");
let col10 = document.getElementById("lab_cp10");
let col11 = document.getElementById("lab_cp11");
let col12 = document.getElementById("lab_cp12");
let col13 = document.getElementById("lab_cp13");
let col14 = document.getElementById("lab_cp14");
let colLabels = document.getElementsByClassName("lab_cp");//ラベルの配列
let colPals = document.getElementsByClassName("cp");//ラジオボタンの配列
//色
let body_yerrow = '#fff3b3';
let body_pink = '#ffd6dc';
let body_green = "#949c7f";
let body_sky = "#c0d1de";
let body_black = "#525252";
let body_purple = "#b795bc";
let body_brown = "#967d55";
let body_orange = "#c8742a";
let body_gray = "#838383";
let body_brown2 = "#503f25";
let body_green2 = "#4b8f52";
let body_blue = "#5794bf";
let body_pink2 = "#ffa0ad";
let beak_yerrow = "#ffd95c";
let beak_gray = "#dcd9cf";
let beak_pink = "#ff735d";
let beak_black = "#3a3a3a";
let beak_brown = "#47341f";
let beak_orange = "#ffad42";
let beak_blue = "#4e6186";
let beak_green = "#53776d";
let beak_purple = "#702b46";
let beak_babypink = "#ff858b";
let beak_brown2 = "#720001";
let beak_blue2 = "#003772";
let cheek_blue = "#6175bc";
let cheek_babypink = "#ffa7b3";
let head_purple = "#6a486c";
let head_red = "#d3251b";
let item_gray = "#a69fa1";
let item_red = "#964145";
let white = '#ffffff';

//色非表示
function delElement(el){
    el.style.display = "none";
}
//色表示（非表示を戻す）
function showElement(el){
    el.style.display = "block";
}
//パレットに指定色セット
function set_palette(colArr){
    for(var i = 0; i < colArr.length; i++){
        colLabels[i].style.color = colArr[i];
        showElement(colLabels[i]);
    }
    for(var i = colArr.length; i < colPals.length; i++){
        delElement(colLabels[i]);
    }
}
//体パーツ選択時のカラーパレット
function set_body_palette(){
    var cols = [white, body_yerrow, body_pink, body_purple, body_sky, body_green, body_brown, body_black];
    set_palette(cols);
}
//体2パーツ選択時のカラーパレット
function set_tone_palette(){
    var cols = [body_blue, body_brown2, body_green2, body_gray, body_orange, body_pink2];
    set_palette(cols);
}
//尾パーツ選択時のカラーパレット
function set_tail_palette(){
    var cols = [white, body_yerrow, body_pink, body_purple, body_sky, body_green, body_brown, body_black, body_blue, body_brown2, body_green2, body_gray, body_orange, body_pink2];
    set_palette(cols);
}