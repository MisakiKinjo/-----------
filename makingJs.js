


//完成ボタン
let button_birdFin = document.getElementById('button_birdFin');
button_birdFin.onclick = button_birdFin_Click;
function button_birdFin_Click(){
    location.href = 'fin.html';
}

//作ってる鳥の画像
let img_body = document.getElementById('bird_img1');
let img_tone = document.getElementById('bird_img2');
let img_tail = document.getElementById('bird_img3');
let img_eye = document.getElementById('bird_img4');
let img_beak = document.getElementById('bird_img5');
let img_cheek = document.getElementById('bird_img6');
let img_head = document.getElementById('bird_img7');
let img_item = document.getElementById('bird_img8');

var body_funcs = [Button_Body1_Click, Button_Body2_Click, Button_Body3_Click, BUtton_Body4_Click, BUtton_Body5_Click, BUtton_Body6_Click];
var tone_funcs = [Button_Tone1_Click, Button_Tone2_Click, Button_Tone_Empty_Click];
var tail_funcs = [Button_Tail1_Click, Button_Tail2_Click, Button_Tail3_Click, Button_Tail_Empty_Click];
var eye_funcs = [Button_Eye1_Click, Button_Eye2_Click, Button_Eye3_Click, Button_Eye4_Click, Button_Eye5_Click, Button_Eye6_Click];
var beak_funcs = [Button_Beak1_Click, Button_Beak2_Click, Button_Beak3_Click, Button_Beak4_Click, Button_Beak5_Click, Button_Beak6_Click, Button_Beak7_Click, Button_Beak8_Click];
var cheek_funcs = [Button_Cheek1_Click, Button_Cheek2_Click, Button_Cheek3_Click, Button_Cheek_Empty_Click];
var head_funcs = [Button_Head1_Click, Button_Head2_Click, Button_Head3_Click, Button_Head4_Click, Button_Head5_Click, Button_Head_Empty_Click];
var item_funcs = [Button_Item1_Click, Button_Item2_Click, Button_Item3_Click, Button_Item4_Click, Button_Item5_Click, Button_Item6_Click, Button_Item_Empty_Click];
AsignClickFunc(button_body, body_funcs);
AsignClickFunc(button_tone, tone_funcs);
AsignClickFunc(button_tail, tail_funcs);
AsignClickFunc(button_eye, eye_funcs);
AsignClickFunc(button_beak, beak_funcs);
AsignClickFunc(button_cheek, cheek_funcs);
AsignClickFunc(button_head, head_funcs);
AsignClickFunc(button_item, item_funcs);
var cp_funcs = [cp1_Click, cp2_Click, cp3_Click, cp4_Click, cp5_Click, cp6_Click, cp7_Click, cp8_Click, cp9_Click, cp10_Click, cp11_Click, cp12_Click, cp13_Click, cp14_Click];
AsignClickFunc(colLabels, cp_funcs);
set_body_palette();//デフォルトのカラーパレット
var currentItem = "body_1"; //選択したアイテム

//ボタンにクリック機能割り当て
function AsignClickFunc(buttons, funcs){
    for(var i = 0; i < funcs.length; i++){
        buttons[i].onclick = funcs[i];
    }
}


//体パーツ選択時
function Button_Body_Click(){
    var pushedButton = Event.target;
    if(pushedButton == button_body1) img_body.src = "bird_images/body/body1_wh.png";
    else if(pushedButton == button_body2) img_body.src = "bird_images/body/body1_wh.png";
}
//体
function Button_Body1_Click(){
    currentItem = "body_1";
    img_body.src = 'bird_images/body/body1_wh.png';
    set_body_palette();
}
function Button_Body2_Click(){
    currentItem = "body_2";
    img_body.src = 'bird_images/body/body2_wh.png';
    set_body_palette();
}
function Button_Body3_Click(){
    currentItem = "body_3"
    img_body.src = 'bird_images/body/body3_wh.png';
    set_body_palette();
}
function BUtton_Body4_Click(){
    currentItem = "body_4";
    img_body.src = 'bird_images/body/body4_wh.png';
    set_body_palette();
}
function BUtton_Body5_Click(){
    currentItem = "body_5";
    img_body.src = 'bird_images/body/body5_wh.png';
    set_body_palette();
}
function BUtton_Body6_Click(){
    currentItem = "body_6";
    img_body.src = 'bird_images/body/body6_wh.png';
    set_body_palette();
}
//体2
function Button_Tone1_Click(){
    currentItem = "tone_1";
    img_tone.src = "bird_images/tone/tone1_blue.png";
    set_tone_palette();
}
function Button_Tone2_Click(){
    currentItem = "tone_2";
    img_tone.src = "bird_images/tone/tone2_blue.png";
    set_tone_palette();
}
//尾
function Button_Tail1_Click(){
    currentItem = "tail_1";
    img_tail.src = "bird_images/tail/tail1_wh.png";
    set_tail_palette();
}
function Button_Tail2_Click(){
    currentItem = "tail_2";
    img_tail.src = "bird_images/tail/tail2_wh.png";
    set_tail_palette();
}
function Button_Tail3_Click(){
    currentItem = "tail_3";
    img_tail.src = "bird_images/tail/tail3_wh.png";
    set_tail_palette();
}
//目
function Button_Eye1_Click(){
    currentItem = "eye_1";
    img_eye.src = "bird_images/eye/eye1.png";
    set_palette([]);
}
function Button_Eye2_Click(){
    currentItem = "eye_2";
    img_eye.src = "bird_images/eye/eye2.png";
    set_palette([]);
}
function Button_Eye3_Click(){
    currentItem = "eye_3";
    img_eye.src = "bird_images/eye/eye3.png";
    set_palette([]);
}
function Button_Eye4_Click(){
    currentItem = "eye_4";
    img_eye.src = "bird_images/eye/eye4.png";
    set_palette([]);
}
function Button_Eye5_Click(){
    currentItem = "eye_5";
    img_eye.src = "bird_images/eye/eye5.png";
    set_palette([]);
}
function Button_Eye6_Click(){
    currentItem = "eye_6";
    img_eye.src = "bird_images/eye/eye6.png";
    set_palette([]);
}
//嘴
function Button_Beak1_Click(){
    currentItem = "beak_1";
    img_beak.src = "bird_images/beak/beak1_ye.png";
    var cols = [beak_yerrow, beak_pink, beak_green, beak_black];
    set_palette(cols);
}
function Button_Beak2_Click(){
    currentItem = "beak_2";
    img_beak.src = "bird_images/beak/beak2_ye.png";
    var cols = [beak_yerrow, beak_babypink, beak_gray];
    set_palette(cols);
}
function Button_Beak3_Click(){
    currentItem = "beak_3";
    img_beak.src = "bird_images/beak/beak3_ye.png";
    var cols = [beak_yerrow, beak_pink, beak_gray, beak_brown2, beak_blue2, beak_black];
    set_palette(cols);
}
function Button_Beak4_Click(){
    currentItem = "beak_4";
    img_beak.src = "bird_images/beak/beak4_ye.png";
    var cols = [beak_yerrow, beak_babypink, beak_black];
    set_palette(cols);
}
function Button_Beak5_Click(){
    currentItem = "beak_5";
    img_beak.src = "bird_images/beak/beak5_or.png";
    var cols = [beak_orange, beak_pink, beak_black];
    set_palette(cols);
}
function Button_Beak6_Click(){
    currentItem = "beak_6";
    img_beak.src = "bird_images/beak/beak6_ye.png";
    var cols = [beak_yerrow, beak_purple, beak_babypink, beak_gray, beak_green, beak_black];
    set_palette(cols);
}
function Button_Beak7_Click(){
    currentItem = "beak_7";
    img_beak.src = "bird_images/beak/beak7_ye.png";
    var cols = [beak_yerrow, beak_pink, beak_blue, beak_black];
    set_palette(cols);
}
function Button_Beak8_Click(){
    currentItem = "beak_8";
    img_beak.src = "bird_images/beak/beak8_ye.png";
    var cols = [beak_yerrow, beak_pink, beak_orange, beak_gray, beak_brown, beak_black];
    set_palette(cols);
}
//ほっぺ
function Button_Cheek1_Click(){
    currentItem = "cheek_1";
    img_cheek.src = "bird_images/cheek/cheek1_pi.png";
    var cols = [beak_green, beak_blue2, beak_pink];
    set_palette(cols);
}
function Button_Cheek2_Click(){
    currentItem = "cheek_2";
    img_cheek.src = "bird_images/cheek/cheek2_pi.png";
    var cols = [beak_pink, beak_orange, cheek_blue, beak_black];
    set_palette(cols);
}
function Button_Cheek3_Click(){
    currentItem = "cheek_3";
    img_cheek.src = "bird_images/cheek/cheek3_pi.png";
    var cols = [beak_pink, body_brown, cheek_babypink, beak_green];
    set_palette(cols);
}
//頭
function Button_Head1_Click(){
    currentItem = "head_1";
    img_head.src = "bird_images/head/head1_ye.png";
    var cols = [beak_yerrow, head_purple, body_gray];
    set_palette(cols);
}
function Button_Head2_Click(){
    currentItem = "head_2";
    img_head.src = "bird_images/head/head2_re.png";
    var cols = [head_red, beak_pink, beak_yerrow, beak_blue, beak_gray, beak_black];
    set_palette(cols);
}
function Button_Head3_Click(){
    currentItem = "head_3";
    img_head.src = "bird_images/head/head3_pi.png";
    var cols = [beak_pink, body_gray, cheek_blue];
    set_palette(cols);
}
function Button_Head4_Click(){
    currentItem = "head_4";
    img_head.src = "bird_images/head/head4_wh.png";
    set_body_palette();
}
function Button_Head5_Click(){
    currentItem = "head_5";
    img_head.src = "bird_images/head/head5.png";
    set_palette([]);
}
//アイテム
function Button_Item1_Click(){
    currentItem = "item_1";
    img_item.src = "bird_images/item/item1_blue.png";
    var cols = [beak_blue2, item_red, beak_black];
    set_palette(cols);
}
function Button_Item2_Click(){
    currentItem = "item_2";
    img_item.src = "bird_images/item/item2.png";
    set_palette([]);
}
function Button_Item3_Click(){
    currentItem = "item_3";
    img_item.src = "bird_images/item/item3_bl.png";
    set_palette([beak_black, item_red]);
}
function Button_Item4_Click(){
    currentItem = "item_4";
    img_item.src = "bird_images/item/item4_grey.png";
    set_palette([beak_gray, body_orange, beak_blue2]);
}
function Button_Item5_Click(){
    currentItem = "item_5";
    img_item.src = "bird_images/item/item5_pi.png";
    var cols = [beak_pink, beak_babypink, beak_orange, beak_purple, body_gray, white];
    set_palette(cols);

}
function Button_Item6_Click(){
    currentItem = "item_6";
    img_item.src = "bird_images/item/item6_pi.png";
    set_palette([beak_pink, head_purple]);
}
//から画像
function Button_Tone_Empty_Click(){
    currentItem = "tone_e";
    img_tone.src = 'bird_images/empty.png';
    set_palette([]);
}
function Button_Tail_Empty_Click(){
    currentItem = "tail_e";
    img_tail.src = 'bird_images/empty.png';
    set_palette([]);
}
function Button_Cheek_Empty_Click(){
    currentItem = "cheek_e";
    img_cheek.src = 'bird_images/empty.png';
    set_palette([]);
}
function Button_Head_Empty_Click(){
    currentItem = "head_e";
    img_head.src = 'bird_images/empty.png';
    set_palette([]);
}
function Button_Item_Empty_Click(){
    currentItem = "item_e";
    img_item.src = 'bird_images/empty.png';
    set_palette([]);
}

//カラーパレットクリック時
function cp1_Click(){
    var l = currentItem.substring(currentItem.length - 1); //currentItemの最後の文字
    if(currentItem.includes("body")){
        var s = "bird_images/body/body" + l + "_wh.png";
        img_body.src = s;
    }
    else if(currentItem.includes("tone")){
        var s = "bird_images/tone/tone" + l + "_blue.png";
        img_tone.src = s;
    }
    else if(currentItem.includes("tail")){
        var s = "bird_images/tail/tail" + l + "_wh.png";
        img_tail.src = s;
    }
    else if(currentItem.includes("beak")){
        if(l == "5") img_beak.src = "bird_images/beak/beak5_or.png";
        else img_beak.src = "bird_images/beak/beak" + l + "_ye.png";
    }
    else if(currentItem.includes("cheek")){
        if(l == "1") img_cheek.src = "bird_images/cheek/cheek1_gr.png";
        else img_cheek.src = "bird_images/cheek/cheek" + l + "_pi.png";
    }
    else if(currentItem.includes("head")){
        var s = "bird_images/head/head";
        if(l == "1") s += "1_ye.png";
        else if(l == "2") s += "2_re.png";
        else if(l == "3") s += "3_pi.png";
        else if(l == "4") s += "4_wh.png";
        img_head.src = s;
    }
    else if(currentItem.includes("item")){
        var s = "bird_images/item/item";
        if(l == "1") s += "1_blue.png";
        else if(l == "3") s += "3_bl.png";
        else if(l == "4") s += "4_grey.png";
        else if(l == "5") s += "5_pi.png";
        else if(l == "6") s += "6_pi.png";
        img_item.src = s;
    }
}
function cp2_Click(){
    var l = currentItem.substring(currentItem.length - 1); //currentItemの最後の文字
    if(currentItem.includes("body")){
        var s = "bird_images/body/body" + l + "_ye.png";
        img_body.src = s;
    }
    else if(currentItem.includes("tone")){
        var s = "bird_images/tone/tone" + l + "_br.png";
        img_tone.src = s;
    }
    else if(currentItem.includes("tail")){
        var s = "bird_images/tail/tail" + l + "_ye.png";
        img_tail.src = s;
    }
    else if(currentItem.includes("beak")){
        if(l == "6") img_beak.src = "bird_images/beak/beak6_pu.png";
        else img_beak.src = "bird_images/beak/beak" + l + "_pi.png";
    }
    else if(currentItem.includes("cheek")){
        var s = "bird_images/cheek/cheek";
        if(l == "1") s += "1_blue.png";
        else if(l == "2") s += "2_or.png";
        else if(l == "3") s += "3_br.png";
        img_cheek.src = s;
    }
    else if(currentItem.includes("head")){
        var s = "bird_images/head/head";
        if(l == "1") s += "1_pu.png";
        else if(l == "2") s += "2_pi.png";
        else if(l == "3") s += "3_grey.png";
        else if(l == "4") s += "4_ye.png";
        img_head.src = s;
    }
    else if(currentItem.includes("item")){
        var s = "bird_images/item/item";
        if(l == "1") s += "1_re.png";
        else if(l == "3") s += "3_red.png";
        else if(l == "4") s += "4_or.png";
        else if(l == "5") s += "5_bp.png";
        else if(l == "6") s += "6_pu.png";
        img_item.src = s;
    }
}
function cp3_Click(){
    var l = currentItem.substring(currentItem.length - 1); //currentItemの最後の文字
    if(currentItem.includes("body")){
        var s = "bird_images/body/body" + l + "_pi.png";
        img_body.src = s;
    }
    else if(currentItem.includes("tone")){
        var s = "bird_images/tone/tone" + l + "_gr.png";
        img_tone.src = s;
    }
    else if(currentItem.includes("tail")){
        var s = "bird_images/tail/tail" + l + "_pi.png";
        img_tail.src = s;
    }
    else if(currentItem.includes("beak")){
        var s = "bird_images/beak/beak";
        if(l == "1") s += "1_gr.png";
        else if(l == "2") s += "2_bl.png";
        else if(l == "3") s += l + "_grey.png";
        else if(l == "4" || l == "5") s += l + "_bl.png";
        else if(l == "6") s += "6_pi.png";
        else if(l == '7') s += "7_blue.png";
        else if(l == '8') s += "8_or.png";
        img_beak.src = s;
    }
    else if(currentItem.includes("cheek")){
        var s = "bird_images/cheek/cheek";
        if(l == "1") s += "1_pi.png";
        else if(l == "2") s += "2_blue.png";
        else if(l == "3") s += "3_bp.png";
        img_cheek.src = s;
    }
    else if(currentItem.includes("head")){
        var s = "bird_images/head/head";
        if(l == "1") s += "1_grey.png";
        else if(l == "2") s += "2_ye.png";
        else if(l == "3") s += "3_blue.png";
        else if(l == "4") s += "4_pi.png";
        img_head.src = s;
    }
    else if(currentItem.includes("item")){
        var s = "bird_images/item/item";
        if(l == "1") s += "1_bl.png";
        else if(l == "4") s += "4_blue.png";
        else if(l == "5") s += "5_or.png";
        img_item.src = s;
    }
}
function cp4_Click(){
    var l = currentItem.substring(currentItem.length - 1); //currentItemの最後の文字
    if(currentItem.includes("body")){
        var s = "bird_images/body/body" + l + "_pu.png";
        img_body.src = s;
    }
    else if(currentItem.includes("tone")){
        var s = "bird_images/tone/tone" + l + "_grey.png";
        img_tone.src = s;
    }
    else if(currentItem.includes("tail")){
        var s = "bird_images/tail/tail" + l + "_pu.png";
        img_tail.src = s;
    }
    else if(currentItem.includes("beak")){
        var s = "bird_images/beak/beak";
        if(l == "1") s += "1_bl.png";
        else if(l == "3") s += l + "_br.png";
        else if(l == "6" || l == "8") s += l + "_grey.png";
        else if(l == '7') s += "7_bl.png";
        img_beak.src = s;
    }
    else if(currentItem.includes("cheek")){
        var s = "bird_images/cheek/cheek";
        if(l == "2") s += "2_bl.png";
        else if(l == "3") s += "3_gr.png";
        img_cheek.src = s;
    }
    else if(currentItem.includes("head")){
        var s = "bird_images/head/head";
        if(l == "2") s += "2_blue.png";
        else if(l == "4") s += "4_pu.png";
        img_head.src = s;
    }
    else if(currentItem.includes("item")){
        var s = "bird_images/item/item";
        if(l == "5") s += "5_pu.png";
        img_item.src = s;
    }
}
function cp5_Click(){
    var l = currentItem.substring(currentItem.length - 1); //currentItemの最後の文字
    if(currentItem.includes("body")){
        var s = "bird_images/body/body" + l + "_sk.png";
        img_body.src = s;
    }
    else if(currentItem.includes("tone")){
        var s = "bird_images/tone/tone" + l + "_or.png";
        img_tone.src = s;
    }
    else if(currentItem.includes("tail")){
        var s = "bird_images/tail/tail" + l + "_sk.png";
        img_tail.src = s;
    }
    else if(currentItem.includes("beak")){
        var s = "bird_images/beak/beak";
        if(l == "3") s += l + "_blue.png";
        else if(l == "6") s += l + "_gr.png";
        else if(l == '8') s += "7_br.png";
        img_beak.src = s;
    }
    else if(currentItem.includes("head")){
        var s = "bird_images/head/head";
        if(l == "2") s += "2_grey.png";
        else if(l == "4") s += "4_sk.png";
        img_head.src = s;
    }
    else if(currentItem.includes("item")){
        var s = "bird_images/item/item";
        if(l == "5") s += "5_grey.png";
        img_item.src = s;
    }
}
function cp6_Click(){
    var l = currentItem.substring(currentItem.length - 1); //currentItemの最後の文字
    if(currentItem.includes("body")){
        var s = "bird_images/body/body" + l + "_gr.png";
        img_body.src = s;
    }
    else if(currentItem.includes("tone")){
        var s = "bird_images/tone/tone" + l + "_pi.png";
        img_tone.src = s;
    }
    else if(currentItem.includes("tail")){
        var s = "bird_images/tail/tail" + l + "_gr.png";
        img_tail.src = s;
    }
    else if(currentItem.includes("beak")){
        var s = "bird_images/beak/beak";
        if(l == "3" || l == '6' || l == '8') s += l + "_bl.png";
        img_beak.src = s;
    }
    else if(currentItem.includes("head")){
        var s = "bird_images/head/head";
        if(l == "2") s += "2_bl.png";
        else if(l == "4") s += "4_gr.png";
        img_head.src = s;
    }
    else if(currentItem.includes("item")){
        var s = "bird_images/item/item";
        if(l == "5") s += "5_wh.png";
        img_item.src = s;
    }
}
function cp7_Click(){
    var l = currentItem.substring(currentItem.length - 1); //currentItemの最後の文字
    if(currentItem.includes("body")){
        var s = "bird_images/body/body" + l + "_br.png";
        img_body.src = s;
    }
    else if(currentItem.includes("tail")){
        var s = "bird_images/tail/tail" + l + "_br.png";
        img_tail.src = s;
    }
    else if(currentItem.includes("head")){
        var s = "bird_images/head/head";
        if(l == "4") s += "4_br.png";
        img_head.src = s;
    }
}
function cp8_Click(){
    var l = currentItem.substring(currentItem.length - 1); //currentItemの最後の文字
    if(currentItem.includes("body")){
        var s = "bird_images/body/body" + l + "_bl.png";
        img_body.src = s;
    }
    else if(currentItem.includes("tail")){
        var s = "bird_images/tail/tail" + l + "_bl.png";
        img_tail.src = s;
    }
    else if(currentItem.includes("head")){
        var s = "bird_images/head/head";
        if(l == "4") s += "4_bl.png";
        img_head.src = s;
    }
}
function cp9_Click(){
    var l = currentItem.substring(currentItem.length - 1); //currentItemの最後の文字
    if(currentItem.includes("tail")){
        var s = "bird_images/tail/tail" + l + "_blue.png";
        img_tail.src = s;
    }
}
function cp10_Click(){
    var l = currentItem.substring(currentItem.length - 1); //currentItemの最後の文字
    if(currentItem.includes("tail")){
        var s = "bird_images/tail/tail" + l + "_br2.png";
        img_tail.src = s;
    }
}
function cp11_Click(){
    var l = currentItem.substring(currentItem.length - 1); //currentItemの最後の文字
    if(currentItem.includes("tail")){
        var s = "bird_images/tail/tail" + l + "_gr2.png";
        img_tail.src = s;
    }
}
function cp12_Click(){
    var l = currentItem.substring(currentItem.length - 1); //currentItemの最後の文字
    if(currentItem.includes("tail")){
        var s = "bird_images/tail/tail" + l + "_grey.png";
        img_tail.src = s;
    }
}
function cp13_Click(){
    var l = currentItem.substring(currentItem.length - 1); //currentItemの最後の文字
    if(currentItem.includes("tail")){
        var s = "bird_images/tail/tail" + l + "_or.png";
        img_tail.src = s;
    }
}
function cp14_Click(){
    var l = currentItem.substring(currentItem.length - 1); //currentItemの最後の文字
    if(currentItem.includes("tail")){
        var s = "bird_images/tail/tail" + l + "_pi2.png";
        img_tail.src = s;
    }
}