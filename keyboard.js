var tapped = false;

//for 2touch
let two_touch = false;
let touch_counts = 0;


function Init(){
  document.addEventListener('contextmenu', event => event.preventDefault());
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

  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_rst").firstChild.data = "a";
      document.getElementById("button_xyz").firstChild.data = "b";
      document.getElementById("button_ghi").firstChild.data = "c";
      delete_swipe_down(event);
  }
  if(event.type ==="pointerup") touch_counts -=1;
  if (event.type === "pointerup" && event.isPrimary){
    enter_text(event,"c","","a","b");
  }
}
function PointerHandlerDEF(event){
    event.preventDefault();
  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_rst").firstChild.data = "d";
      document.getElementById("button_xyz").firstChild.data = "e";
      document.getElementById("button_ghi").firstChild.data = "f";
      delete_swipe_down(event);
  }
    if(event.type ==="pointerup") touch_counts -=1;
  if (event.type === "pointerup"&& event.isPrimary){
    //delete_swipe_up(event);
    enter_text(event,"f","","d","e");

  }
}
function PointerHandlerGHI(event){
  event.preventDefault();
  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_abc").firstChild.data = "g";
      document.getElementById("button_rst").firstChild.data = "h";
      document.getElementById("button_xyz").firstChild.data = "i";
      delete_swipe_down(event);
      console.log(touch_counts);
  }
  if(event.type ==="pointerup") touch_counts -=1;
  if (event.type === "pointerup"&& event.isPrimary){

    if(!delete_swipe_up(event)){
      enter_text(event,"","g","h","i");

    }
  }
}

function PointerHandlerJKL(event){
  event.preventDefault();
  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_rst").firstChild.data = "j";
      document.getElementById("button_xyz").firstChild.data = "k";
      document.getElementById("button_ghi").firstChild.data = "l";
      delete_swipe_down(event);
  }
  if(event.type ==="pointerup") touch_counts -=1;
  if (event.type === "pointerup"&& event.isPrimary){
    enter_text(event,"l","","j","k");

  }
}

function PointerHandlerMN(event){
  event.preventDefault();
  if (event.type === "pointerdown"){
//       if(!tapped){
//         tapped = setTimeout(function(){
          hideall();
          document.getElementById("button_rst").firstChild.data = "m";
          document.getElementById("button_ghi").firstChild.data = "n";
          document.getElementById("button_xyz").firstChild.data = "sp";
          delete_swipe_down(event);
//           tapped = null;
//         }, 300);

//       }else{
//         clearTimeout(tapped); //stop single tap callback
//         tapped=null;
//         document.getElementById("txt_area").value += " ";
//       }

      
  }
  if(event.type ==="pointerup") touch_counts -=1;
  if (event.type ==="pointerup"&& event.isPrimary){
    enter_text(event,"n","","m"," ");
  }
}

function PointerHandlerOPQ(event){
    event.preventDefault();
  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_abc").firstChild.data = "o";
      document.getElementById("button_rst").firstChild.data = "p";
      document.getElementById("button_xyz").firstChild.data = "q";
      delete_swipe_down(event);
  }
    if(event.type ==="pointerup") touch_counts -=1;
  if (event.type === "pointerup"&& event.isPrimary){
     if(!delete_swipe_up(event)){
       enter_text(event,"","o","p","q");
      }
  }
}

function PointerHandlerRST(event){
  event.preventDefault();
  //console.log(event.type);
  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_abc").firstChild.data = "r";
      document.getElementById("button_ghi").firstChild.data = "s";
      document.getElementById("button_xyz").firstChild.data = "t";
      delete_swipe_down(event);
  }
  if(event.type ==="pointerup") touch_counts -=1;
  if (event.type === "pointerup"&& event.isPrimary){
    enter_text(event,"s","r","","t");
  }
}

function PointerHandlerUVW(event){
    event.preventDefault();
  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_abc").firstChild.data = "u";
      document.getElementById("button_ghi").firstChild.data = "v";
      document.getElementById("button_xyz").firstChild.data = "w";
      delete_swipe_down(event);
  }
  if(event.type ==="pointerup") touch_counts -=1;
  if (event.type ==="pointerup"&& event.isPrimary){
    enter_text(event,"v","","u","w");

  }
}
function PointerHandlerXYZ(event){
    event.preventDefault();
  if (event.type === "pointerdown"){
      hideall();
      document.getElementById("button_rst").firstChild.data = "x";
      document.getElementById("button_abc").firstChild.data = "y";
      document.getElementById("button_ghi").firstChild.data = "z";
      delete_swipe_down(event);
  }
  if(event.type ==="pointerup") touch_counts -=1;
  if (event.type === "pointerup"&& event.isPrimary){
     if(!delete_swipe_up(event)){
       enter_text(event,"z","y","x","");
      }
  }
}

function delete_swipe_down(event){
  touch_counts += 1;
  if (touch_counts >=2){
      two_touch = true;
      hideall();
      document.getElementById("button_abc").firstChild.data = "d";
      document.getElementById("button_jkl").firstChild.data = "e";
      document.getElementById("button_rst").firstChild.data = "l";
  }
}

function delete_swipe_up(event){
  console.log(touch_counts)
  //touch_counts -=1;
  if(two_touch === true && event.isPrimary === true){
    let cursor_pos = position_button(event.clientX,event.clientY);
    if(cursor_pos === 2 || cursor_pos ===3){
          let str = document.getElementById("txt_area").value;
          document.getElementById("txt_area").value = str.substring(0, str.length - 1);
          two_touch = false;
    }
    restoreall();
    return true;
  }
}

function enter_text(event,ch1,ch2,ch3,ch4){
    let button_name = event.target.id
    let current_text = document.getElementById(button_name).firstChild.data; 
    let cursor_pos = position_button(event.clientX,event.clientY);
    //console.log(cursor_pos);
    switch(cursor_pos){
      case 1: document.getElementById("txt_area").value +=  ch1;
              break;
      case 2: document.getElementById("txt_area").value +=  ch2;
              break;
      case 3: document.getElementById("txt_area").value += ch3;
              break;
      case 4: document.getElementById("txt_area").value += ch4;
              break;
    }
    restoreall();
}


//clrear all key text
function hideall(){
    let all_buttons = document.getElementsByClassName("keyboard_key");
    Array.prototype.forEach.call(all_buttons, function(single_button) {
    single_button.firstChild.data = " ";
    
})
}

// restore all key text
function restoreall(){
    let all_buttons = document.getElementsByClassName("keyboard_key");
    Array.prototype.forEach.call(all_buttons, function(single_button) {
//     let current_text = single_button.firstChild.data
    let str = single_button.id
    let next_text = str.substring(7,str.length)

    single_button.firstChild.data = next_text;
})
}

// return quardant on release cursor position
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
