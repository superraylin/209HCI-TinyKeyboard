var tapped = false;
var click = false;
function Init(){
    //init();
}
function showabc(){
      if(click === false){
        hideall();
        document.getElementById("button_rst").firstChild.data = "a";
        document.getElementById("button_xyz").firstChild.data = "b";
        document.getElementById("button_ghi").firstChild.data = "c";

        click = true;
      }else{
        restoreabc();
      }


}


function showdef(){
    if(click === false){
    hideall();
    document.getElementById("button_abc").firstChild.data = "d";
    document.getElementById("button_uvw").firstChild.data = "e";
    document.getElementById("button_ghi").firstChild.data = "f";
    click = true;   
    }
    else{
        restoredef();
    }
}
function showghi(){
    if(click === false){
      hideall();
      document.getElementById("button_abc").firstChild.data = "g";
      document.getElementById("button_rst").firstChild.data = "h";
      document.getElementById("button_xyz").firstChild.data = "i";
      click = true;
    }
    else{
        restoreghi();
    }
}
function showjkl(){
    if(click === false){
      hideall();
      document.getElementById("button_abc").firstChild.data = "j";
      document.getElementById("button_opq").firstChild.data = "k";
      document.getElementById("button_rst").firstChild.data = "l";
      click = true;
    }
    else{
        restorejkl();
    }
}
function showmn(){
    if(click === false){
      hideall();
      document.getElementById("button_jkl").firstChild.data = "m";
      document.getElementById("button_opq").firstChild.data = "n";
      document.getElementById("button_mn").firstChild.data ="sp";
      click = true;
    }else{
        restoremn();
    }

}
function showopq(){
    if(click === false){
      hideall();
      document.getElementById("button_ghi").firstChild.data = "o";
      document.getElementById("button_jkl").firstChild.data = "p";
      document.getElementById("button_xyz").firstChild.data = "q";
      click = true;
    }
    else{
        restoreopq();
    }
}
function showrst(){
    if(click === false){
      hideall();
      document.getElementById("button_abc").firstChild.data = "r";
      document.getElementById("button_ghi").firstChild.data = "s";
      document.getElementById("button_xyz").firstChild.data = "t";
      click = true;
    }else{
        restorerst();
    }
}
function showuvw(){
    if(click === false){
      hideall();
      document.getElementById("button_rst").firstChild.data = "u";
      document.getElementById("button_def").firstChild.data = "v";
      document.getElementById("button_xyz").firstChild.data = "w";
      click = true;
    }
    else{
        restoreuvw();
    }
}
function showxyz(){
    if(click === false){
      hideall();
      document.getElementById("button_rst").firstChild.data = "x";
      document.getElementById("button_abc").firstChild.data = "y";
      document.getElementById("button_ghi").firstChild.data = "z";
      click = true;
    }else{
        restorexyz();
    }
}


function restoreabc(){
    let current_text = document.getElementById("button_abc").firstChild.data; 
    if (current_text !== "abc" && current_text !== " " && click === true){document.getElementById("txt_area").value += current_text;}
    restoreall();
}
function restoredef(){
    let current_text = document.getElementById("button_def").firstChild.data; 
    if (current_text !== "def" && current_text !== " " && click === true) {document.getElementById("txt_area").value += current_text;}
    restoreall();
}
function restoreghi(){
    let current_text = document.getElementById("button_ghi").firstChild.data; 
    if (current_text !== "ghi" && current_text !== " " && click === true) {document.getElementById("txt_area").value += current_text;}
    restoreall();
}
function restorejkl(){
    let current_text = document.getElementById("button_jkl").firstChild.data; 
    if (current_text !== "jkl" && current_text !== " " && click === true) {document.getElementById("txt_area").value += current_text;}
    restoreall();
}
function restoremn(){
    let current_text = document.getElementById("button_mn").firstChild.data; 
    if(current_text === "sp") {document.getElementById("txt_area").value += " ";}
    else if (current_text !== "mn" && current_text !== " " && click === true) {document.getElementById("txt_area").value += current_text;}
    restoreall();
}
function restoreopq(){
    let current_text = document.getElementById("button_opq").firstChild.data; 
    if (current_text !== "opq" && current_text !== " " && click === true) {document.getElementById("txt_area").value += current_text;}
    restoreall();
}
function restorerst(){
    let current_text = document.getElementById("button_rst").firstChild.data; 
    if (current_text !== "rst" && current_text !== " " && click === true) {document.getElementById("txt_area").value += current_text;}
    restoreall();
}
function restoreuvw(){
    let current_text = document.getElementById("button_uvw").firstChild.data; 
    if (current_text !== "uvw" && current_text !== " " && click === true) {document.getElementById("txt_area").value += current_text;}
    restoreall();
}
function restorexyz(){
    let current_text = document.getElementById("button_xyz").firstChild.data; 
    if (current_text !== "xyz" && current_text !== " " && click === true) {document.getElementById("txt_area").value += current_text;}
    restoreall();
}



function hideall(){
    let all_buttons = document.getElementsByClassName("keyboard_key");
    Array.prototype.forEach.call(all_buttons, function(single_button) {
    single_button.firstChild.data = " ";
    
})
}

function restoreall(){
    let all_buttons = document.getElementsByClassName("keyboard_key");
    Array.prototype.forEach.call(all_buttons, function(single_button) {
    let str = single_button.id
    let next_text = str.substring(7,str.length)

    single_button.firstChild.data = next_text;
    click = false;
})
}


function touchHandler(event)
{
    var touches = event.changedTouches,
        first = touches[0],
        type = "";
         switch(event.type)
    {
        case "touchstart": type = "click"; break;
        //case "touchmove":  type="mousemove"; break;        
        //case "touchend":   type="mouseup"; break;
        default: return;
    }
 
    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1, 
                              first.screenX, first.screenY, 
                              first.clientX, first.clientY, false, 
                              false, false, false, 0/*left*/, null);
    first.target.dispatchEvent(simulatedEvent);
    //event.preventDefault();
}
 
function init() 
{
    document.addEventListener("touchstart", touchHandler, true);
    //document.addEventListener("touchmove", touchHandler, true);
    //document.addEventListener("touchend", touchHandler, true);
    //document.addEventListener("touchcancel", touchHandler, true);    
}
