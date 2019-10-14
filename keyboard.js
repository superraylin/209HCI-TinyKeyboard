function showabc(event) {
  hideall();
  console.log(event)
  document.getElementById("button_rst").firstChild.data = "a";
  document.getElementById("button_xyz").firstChild.data = "b";
  document.getElementById("button_ghi").firstChild.data = "c";
  //console.log(document.getElementById("button_abc").id.substring(7,10))
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

//     if(next_text !== current_text && current_text !== " " )
//     {
//       document.getElementById("txt_area").value += current_text;
//     }

    single_button.firstChild.data = next_text;
    //console.log(single_button.id);
})
}

function restorerst(){
    let current_text = document.getElementById("button_rst").firstChild.data 
    //console.log(current_text)
    if (current_text !== "rst"){
      restoreall();
      document.getElementById("txt_area").value += current_text;
      document.getElementById("button_rst").firstChild.data = "rst";

    };
}

function restorexyz(){
    let current_text = document.getElementById("button_xyz").firstChild.data 
    //console.log(current_text)
    if (current_text !== "xyz"){
      restoreall();
      document.getElementById("txt_area").value += current_text;
      document.getElementById("button_rst").firstChild.data = "rst";

    };
}

function restoreghi(){
    let current_text = document.getElementById("button_ghi").firstChild.data 
    //console.log(current_text)
    if (current_text !== "ghi"){
      restoreall();
      document.getElementById("txt_area").value += current_text;
      document.getElementById("button_rst").firstChild.data = "ghi";

    };
}

function dosomething(){
  document.getElementById("button_abc").firstChild.data = "A";
  console.log("dosomething");
}

function xy_report(e){
  //console.log(e)
  document.getElementById("demo").innerHTML = " " + e.clientX +", " + e.clientY;
}