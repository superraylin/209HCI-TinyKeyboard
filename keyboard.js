var tapped = false;

//for 2touch
let two_touch = false;
let touch_counts = 0;

/******load event listener to each keyboar_key*******/
function Init(){
  document.addEventListener('contextmenu', event => event.preventDefault());
 ["pointerdown", "pointerup"].forEach(function(e) {
            document.getElementById("button_abc").addEventListener(e, PointerHandlerABC);
            document.getElementById("button_def").addEventListener(e, PointerHandlerDEF);
            document.getElementById("button_ghi").addEventListener(e, PointerHandlerGHI);
            document.getElementById("button_jkl").addEventListener(e, PointerHandlerJKL);
            document.getElementById("button_mno").addEventListener( e,  PointerHandlerMN);
            document.getElementById("button_pqr").addEventListener(e, PointerHandlerOPQ);
            document.getElementById("button_stu").addEventListener(e, PointerHandlerRST);
            document.getElementById("button_vwx").addEventListener(e, PointerHandlerUVW);
            document.getElementById("button_yz").addEventListener(e, PointerHandlerXYZ);
            
        });
}

/**************Pointer Handler begin******************/

function PointerHandlerABC(event){
  event.preventDefault();

  if (event.type === "pointerdown"){
      hideall();
      showButtonText("a","b","c");
      delete_swipe_down(event);
  }
  if(event.type ==="pointerup") touch_counts -=1;
  if (event.type === "pointerup" && event.isPrimary){
    enter_text(event,"c","b","a","");
  }
}

function PointerHandlerDEF(event){
    event.preventDefault();
  if (event.type === "pointerdown"){
      hideall();
      showButtonText("d","e","f");

      delete_swipe_down(event);
  }
  if(event.type ==="pointerup") touch_counts -=1;
  if (event.type === "pointerup"&& event.isPrimary){
    enter_text(event,"f","e","d","");
  }
}

function PointerHandlerGHI(event){
  event.preventDefault();
  if (event.type === "pointerdown"){
      hideall();
      showButtonText("g","h","i");
      delete_swipe_down(event);

  }
  if(event.type ==="pointerup") touch_counts -=1;
  if (event.type === "pointerup"&& event.isPrimary){

    if(!delete_swipe_up(event)){
      enter_text(event,"i","h","g","");

    }
  }
}

function PointerHandlerJKL(event){
  event.preventDefault();
  if (event.type === "pointerdown"){
      hideall();
      showButtonText("j","k","l");

      delete_swipe_down(event);
  }
  if(event.type ==="pointerup") touch_counts -=1;
  if (event.type === "pointerup"&& event.isPrimary){
    enter_text(event,"l","k","j","");

  }
}

function PointerHandlerMN(event){
  event.preventDefault();
  if (event.type === "pointerdown"){

          hideall();
          showButtonText("m","n","o");

          delete_swipe_down(event);
      
  }
  if(event.type ==="pointerup") touch_counts -=1;
  if (event.type ==="pointerup"&& event.isPrimary){
    enter_text(event,"o","n","m","");
  }
}

function PointerHandlerOPQ(event){
  event.preventDefault();
  if (event.type === "pointerdown"){
      hideall();
      showButtonText("p","q","r");
      delete_swipe_down(event);
  }
    if(event.type ==="pointerup") touch_counts -=1;
  if (event.type === "pointerup"&& event.isPrimary){
     if(!delete_swipe_up(event)){
       enter_text(event,"r","q","p","");
      }
  }
}

function PointerHandlerRST(event){
  event.preventDefault();

  if (event.type === "pointerdown"){
      hideall();
      showButtonText("s","t","u");

      delete_swipe_down(event);
  }
  if(event.type ==="pointerup") touch_counts -=1;
  if (event.type === "pointerup"&& event.isPrimary){
    enter_text(event,"u","t","s","");
  }
}

function PointerHandlerUVW(event){
    event.preventDefault();
  if (event.type === "pointerdown"){
      hideall();
      showButtonText("v","w","x");
      delete_swipe_down(event);
  }
  if(event.type ==="pointerup") touch_counts -=1;
  if (event.type ==="pointerup"&& event.isPrimary){
    enter_text(event,"x","w","v","");

  }
}
function PointerHandlerXYZ(event){
    event.preventDefault();
  if (event.type === "pointerdown"){
      
      /*Delay for double tap*/
    if(!tapped){
      tapped = setTimeout(function(){
      hideall();
      showButtonText("del","y","z");

          delete_swipe_down(event);
          tapped = null;
        }, 200);

      }else{
        clearTimeout(tapped); //stop timeout callback
        tapped=null;
        document.getElementById("txt_area").value += " ";
      }

  }
  if(event.type ==="pointerup") touch_counts -=1;
  if (event.type === "pointerup"&& event.isPrimary){
     if(!delete_swipe_up(event)){
       enter_text(event,"z","y","del","");
      }
  }
}


/**************Pointer Handler end***********************/


/***************double tap function begin ****************/
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
/***************double tap function end ****************/


/***********enter/delete text respect to pointerup position****/
function enter_text(event,ch1,ch2,ch3,ch4){
    let button_name = event.target.id
    let current_text = document.getElementById(button_name).firstChild.data; 
    let cursor_pos = position_button(event.clientX,event.clientY);
//     console.log(cursor_pos);
    switch(cursor_pos){
      case 1: document.getElementById("txt_area").value +=  ch1;
              break;
      case 2: document.getElementById("txt_area").value +=  ch2;
              break;
      case 3: if(ch3 == "del"){
                let str = document.getElementById("txt_area").value;
                document.getElementById("txt_area").value = str.substring(0, str.length - 1);
              }else{
                document.getElementById("txt_area").value += ch3;
              }
              break;
      case 4: document.getElementById("txt_area").value += ch4;
              break;
    }
    restoreall();
}


/********************assign letter to corner keys*****/
function showButtonText(stu_ch,abc_ch,ghi_ch){
      document.getElementById("button_abc").firstChild.data = abc_ch;
      document.getElementById("button_ghi").firstChild.data = ghi_ch;
      document.getElementById("button_stu").firstChild.data = stu_ch;

}

/***********clrear all key text**************/
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
    let str = single_button.id
    let next_text = str.substring(7,str.length)

    single_button.firstChild.data = next_text;
})
}

// return (1~4) quadrant on release cursor position
function position_button(x,y){
  var rect = document.getElementById("keyboardbox").getBoundingClientRect();
  console.log(rect.left, rect.right,rect.top, rect.bottom, );

  let x_mid = (rect.left+ rect.right)/2;
  let y_mid = (rect.top+ rect.bottom)/2;

  if (x >= rect.left && x <= x_mid){
    if(y >= 123 && y<= y_mid){
      return 2; //second quadrant
    }else if(y > y_mid && y< rect.bottom){
      return 3; //third quadrant
    } else return 0; //out of bound
  }
   else if(x > x_mid && x < rect.right){

      if(y >= rect.top && y<= y_mid){
        return 1; //first quadrant
      }else if(y > y_mid && y< rect.bottom){
        return 4; //fourth quadrant
      } else return 0; //out of bound
  }
   else { return 0; //out of bound}
  }
}
