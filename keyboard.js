var tapped = false;
function Init(){
  console.log('something');
 ["pointerdown", "pointerup","pointermove"].forEach(function(e) {
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
  //console.log(event);
  //console.log(event.button,event.buttons);
  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_rst").firstChild.data = "a";
      document.getElementById("button_xyz").firstChild.data = "b";
      document.getElementById("button_ghi").firstChild.data = "c";
      //document.getElementById("button_ghi").style.display = "none";
  }
  if (event.type === "pointerup"){
    let current_text = document.getElementById("button_abc").firstChild.data; 
    let cursor_pos = position_button(event.clientX,event.clientY);
    console.log(cursor_pos);
    switch(cursor_pos){
      case 1: document.getElementById("txt_area").value += "c";
              break;
      case 2: break;
      case 3: document.getElementById("txt_area").value += "a";
              break;
      case 4: document.getElementById("txt_area").value += "b";
              break;
    }

    //if (current_text !== "abc" && current_text !== " "){document.getElementById("txt_area").value += current_text;}
    //document.getElementById("button_ghi").style.display = "block";
    restoreall();
  }
//   if(event.type === "pointermove"){
//     console.log("offset:"+ event.offsetX+ " "+  event.offsetY);
//     console.log("Client:"+ event.clientX+ " "+  event.clientY);
//   }
}
function PointerHandlerDEF(event){
    event.preventDefault();
  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_rst").firstChild.data = "d";
      document.getElementById("button_xyz").firstChild.data = "e";
      document.getElementById("button_ghi").firstChild.data = "f";
  }
  if (event.type === "pointerup"){
    let current_text = document.getElementById("button_def").firstChild.data; 
    let cursor_pos = position_button(event.clientX,event.clientY);
    console.log(cursor_pos);
    switch(cursor_pos){
      case 1: document.getElementById("txt_area").value += "f";
              break;
      case 2: break;
      case 3: document.getElementById("txt_area").value += "d";
              break;
      case 4: document.getElementById("txt_area").value += "e";
              break;
    }
    //if (current_text !== "def" && current_text !== " ") {document.getElementById("txt_area").value += current_text;}
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
    let cursor_pos = position_button(event.clientX,event.clientY);
    console.log(cursor_pos);
    switch(cursor_pos){
      case 1: break;
      case 2: document.getElementById("txt_area").value += "g";
              break;
      case 3: document.getElementById("txt_area").value += "h";
              break;
      case 4: document.getElementById("txt_area").value += "i";
              break;
    }
    //if (current_text !== "ghi" && current_text !== " ") {document.getElementById("txt_area").value += current_text;}
    restoreall();
  }
    if(event.type === "pointermove"){
    console.log("offset:"+ event.offsetX+ " "+  event.offsetY);
    console.log("Client:"+ event.clientX+ " "+  event.clientY);
  }
}

function PointerHandlerJKL(event){
    event.preventDefault();
  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_rst").firstChild.data = "j";
      document.getElementById("button_xyz").firstChild.data = "k";
      document.getElementById("button_ghi").firstChild.data = "l";
  }
  if (event.type === "pointerup"){
    let current_text = document.getElementById("button_jkl").firstChild.data; 
    let cursor_pos = position_button(event.clientX,event.clientY);
    console.log(cursor_pos);
    switch(cursor_pos){
      case 1: document.getElementById("txt_area").value += "l";
              break;
      case 2: break;
      case 3: document.getElementById("txt_area").value += "j";
              break;
      case 4: document.getElementById("txt_area").value += "k";
              break;
    }
    //if (current_text !== "jkl" && current_text !== " ") {document.getElementById("txt_area").value += current_text;}
    restoreall();
  }
}

function PointerHandlerMN(event){
    event.preventDefault();
  if (event.type === "pointerdown"){
      if(!tapped){
        tapped = setTimeout(function(){
          document.getElementById("button_rst").firstChild.data = "m";
          document.getElementById("button_ghi").firstChild.data = "n";
          document.getElementById("button_xyz").firstChild.data = "sp";
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
    let cursor_pos = position_button(event.clientX,event.clientY);
    console.log(cursor_pos);
    switch(cursor_pos){
      case 1: document.getElementById("txt_area").value += "n";
              break;
      case 2: break;
      case 3: document.getElementById("txt_area").value += "m";
              break;
      case 4: document.getElementById("txt_area").value += " ";
              break;
    }
    //if (current_text !== "mn" && current_text !== " ") {document.getElementById("txt_area").value += current_text;}
    restoreall();
  }
}

function PointerHandlerOPQ(event){
    event.preventDefault();
  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_abc").firstChild.data = "o";
      document.getElementById("button_rst").firstChild.data = "p";
      document.getElementById("button_xyz").firstChild.data = "q";
  }
  if (event.type === "pointerup"){
    let current_text = document.getElementById("button_opq").firstChild.data; 
    let cursor_pos = position_button(event.clientX,event.clientY);
    console.log(cursor_pos);
    switch(cursor_pos){
      case 1: break;
      case 2: document.getElementById("txt_area").value += "o";
              break;
      case 3: document.getElementById("txt_area").value += "p";
              break;
      case 4: document.getElementById("txt_area").value += "q";
              break;
    }
    //if (current_text !== "opq" && current_text !== " ") {document.getElementById("txt_area").value += current_text;}
    restoreall();
  }
}

function PointerHandlerRST(event){
    event.preventDefault();
    console.log(event.type);
  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_abc").firstChild.data = "r";
      document.getElementById("button_ghi").firstChild.data = "s";
      document.getElementById("button_xyz").firstChild.data = "t";
  }
  if (event.type === "pointerup"){
    let current_text = document.getElementById("button_rst").firstChild.data; 
    let cursor_pos = position_button(event.clientX,event.clientY);
    console.log(cursor_pos);
    switch(cursor_pos){
      case 1: document.getElementById("txt_area").value += "s";
              break;
      case 2: document.getElementById("txt_area").value += "r";
              break;
      case 3: break;
      case 4: document.getElementById("txt_area").value += "t";
              break;
    }
    //if (current_text !== "rst" && current_text !== " ") {document.getElementById("txt_area").value += current_text;}
    restoreall();
  }
   if(event.type === "pointermove"){
    console.log("offset:"+ event.offsetX+ " "+  event.offsetY);
    console.log("Client:"+ event.clientX+ " "+  event.clientY);
  }
}

function PointerHandlerUVW(event){
    event.preventDefault();
  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_abc").firstChild.data = "u";
      document.getElementById("button_ghi").firstChild.data = "v";
      document.getElementById("button_xyz").firstChild.data = "w";
  }
  if (event.type ==="pointerup"){
    let current_text = document.getElementById("button_uvw").firstChild.data; 
    let cursor_pos = position_button(event.clientX,event.clientY);
    console.log(cursor_pos);
    switch(cursor_pos){
      case 1: document.getElementById("txt_area").value += "v";
              break;
      case 2: document.getElementById("txt_area").value += "u";
              break;
      case 3: break;
      case 4: document.getElementById("txt_area").value += "w";
              break;
    }
    //if (current_text !== "uvw" && current_text !== " ") {document.getElementById("txt_area").value += current_text;}
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
    let cursor_pos = position_button(event.clientX,event.clientY);
    console.log(cursor_pos);
    switch(cursor_pos){
      case 1: document.getElementById("txt_area").value += "z";
              break;
      case 2: document.getElementById("txt_area").value += "y";
              break;
      case 3: document.getElementById("txt_area").value += "x";
              break;
      case 4: break;
    }
    //if (current_text !== "xyz" && current_text !== " ") {document.getElementById("txt_area").value += current_text;}
    restoreall();
  }
  if(event.type === "pointermove"){
    console.log("offset:"+ event.offsetX+ " "+  event.offsetY);
    console.log("Client:"+ event.clientX+ " "+  event.clientY);
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


function position_button(x,y){
  if (x >= 12 && x <= 62){
    if(y >= 123 && y<= 170){
      return 2; //second quatrum
    }else if(y > 170 && y< 217){
      return 3; //third quartum
    } else return 0; //out of bound
  }
   else if(x > 62 && x < 123){

       if(y >= 123 && y<= 170){
        return 1; //second quatrum
      }else if(y > 170 && y< 217){
        return 4; //third quartum
      } else return 0; //out of bound
  }
   else { return 0; //out of bound}
  }
}
