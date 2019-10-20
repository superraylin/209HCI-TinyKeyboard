var tapped = false;
function Init(){
 ["pointerdown", "pointerup"].forEach(function(e) {
            document.getElementById("button_abc").addEventListener(e, PointerHandlerABC);
            document.getElementById("button_def").addEventListener(e, PointerHandlerDEF);
            document.getElementById("button_ghi").addEventListener(e, PointerHandlerGHI);
            document.getElementById("button_jkl").addEventListener(e, PointerHandlerJKL);
            document.getElementById("button_mn").addEventListener( e,  PointerHandlerMN);
            document.getElementById("button_opq").addEventListener(e, PointerHandlerOPQ);
            document.getElementById("button_rst").addEventListener(e, PointerHandlerRST);
            document.getElementById("button_uvw").addEventListener(e, PointerHandlerUVW);
            document.getElementById("button_xyz").addEventListener(e, PointerHandlerXYZ);
            
        });
}

function PointerHandlerABC(event){

  event.preventDefault();
  console.log(event);
  //console.log(event.button,event.buttons);
  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_rst").firstChild.data = "a";
      document.getElementById("button_xyz").firstChild.data = "b";
      document.getElementById("button_ghi").firstChild.data = "c";
  }
  if (event.type === "pointerup"){
    let current_text = document.getElementById("button_abc").firstChild.data; 
    if (current_text !== "abc" && current_text !== " "){document.getElementById("txt_area").value += current_text;}
    restoreall();
  }
}
function PointerHandlerDEF(event){
    event.preventDefault();
  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_abc").firstChild.data = "d";
      document.getElementById("button_uvw").firstChild.data = "e";
      document.getElementById("button_ghi").firstChild.data = "f";
  }
  if (event.type === "pointerup"){
    let current_text = document.getElementById("button_def").firstChild.data; 
    if (current_text !== "def" && current_text !== " ") {document.getElementById("txt_area").value += current_text;}
    restoreall();
  }
}
function PointerHandlerGHI(event){
    event.preventDefault();
  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_abc").firstChild.data = "g";
      document.getElementById("button_rst").firstChild.data = "h";
      document.getElementById("button_xyz").firstChild.data = "i";
  }
  if (event.type === "pointerup"){
    let current_text = document.getElementById("button_ghi").firstChild.data; 
    if (current_text !== "ghi" && current_text !== " ") {document.getElementById("txt_area").value += current_text;}
    restoreall();
  }
}

function PointerHandlerJKL(event){
    event.preventDefault();
  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_abc").firstChild.data = "j";
      document.getElementById("button_opq").firstChild.data = "k";
      document.getElementById("button_rst").firstChild.data = "l";
  }
  if (event.type === "pointerup"){
    let current_text = document.getElementById("button_jkl").firstChild.data; 
    if (current_text !== "jkl" && current_text !== " ") {document.getElementById("txt_area").value += current_text;}
    restoreall();
  }
}

function PointerHandlerMN(event){
    event.preventDefault();
  if (event.type === "pointerdown"){
      if(!tapped){
        tapped = setTimeout(function(){
          document.getElementById("button_jkl").firstChild.data = "m";
          document.getElementById("button_opq").firstChild.data = "n";
          tapped = null;
        }, 300);

      }else{
        clearTimeout(tapped); //stop single tap callback
        tapped=null;
        document.getElementById("txt_area").value += " ";
      }
      hideall();

      
  }
  if (event.type ==="pointerup"){
    let current_text = document.getElementById("button_mn").firstChild.data; 
    if (current_text !== "mn" && current_text !== " ") {document.getElementById("txt_area").value += current_text;}
    restoreall();
  }
}

function PointerHandlerOPQ(event){
    event.preventDefault();
  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_ghi").firstChild.data = "o";
      document.getElementById("button_jkl").firstChild.data = "p";
      document.getElementById("button_xyz").firstChild.data = "q";
  }
  if (event.type === "pointerup"){
    let current_text = document.getElementById("button_opq").firstChild.data; 
    if (current_text !== "opq" && current_text !== " ") {document.getElementById("txt_area").value += current_text;}
    restoreall();
  }
}

function PointerHandlerRST(event){
    event.preventDefault();
    console.log(event.type,event.target);
  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_abc").firstChild.data = "r";
      document.getElementById("button_ghi").firstChild.data = "s";
      document.getElementById("button_xyz").firstChild.data = "t";
  }
  if (event.type === "pointerup"){
    let current_text = document.getElementById("button_rst").firstChild.data; 
    if (current_text !== "rst" && current_text !== " ") {document.getElementById("txt_area").value += current_text;}
    restoreall();
  }
}

function PointerHandlerUVW(event){
    event.preventDefault();
  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_rst").firstChild.data = "u";
      document.getElementById("button_def").firstChild.data = "v";
      document.getElementById("button_xyz").firstChild.data = "w";
  }
  if (event.type ==="pointerup"){
    let current_text = document.getElementById("button_uvw").firstChild.data; 
    if (current_text !== "uvw" && current_text !== " ") {document.getElementById("txt_area").value += current_text;}
    restoreall();
  }
}
function PointerHandlerXYZ(event){
    event.preventDefault();
  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_rst").firstChild.data = "x";
      document.getElementById("button_abc").firstChild.data = "y";
      document.getElementById("button_ghi").firstChild.data = "z";
  }
  if (event.type === "pointerup"){
    let current_text = document.getElementById("button_xyz").firstChild.data; 
    if (current_text !== "xyz" && current_text !== " ") {document.getElementById("txt_area").value += current_text;}
    restoreall();
  }
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
//     let current_text = single_button.firstChild.data
    let str = single_button.id
    let next_text = str.substring(7,str.length)

    single_button.firstChild.data = next_text;
})
}



