function InitializeApp(){
 ["pointerdown", "pointerup"].forEach(function(e) {
            document.getElementById("button_abc").addEventListener(e, PointerHandlerABC);
//             document.getElementById("button_rst").addEventListener(e, PointerHandler);
//             document.getElementById("button_xyz").addEventListener(e, PointerHandler);
//             document.getElementById("button_ghi").addEventListener(e, PointerHandler);
        });
  
}

function PointerHandlerABC(event){
  console.log('abc')
}
// function PointerHandler(event) {
//     event.preventDefault();

//     if (event.type == "pointerdown" && event.button === 0)
//         mousePressed = true;

//     if (mousePressed || event.type == "pointerup" || (event.buttons & 1)) {
//         var fakeTouch = {
//             identifier: event.pointerId,
//             pageX : event.pageX,
//             pageY : event.pageY,
//             radiusX : event.width / 2,
//             radiusY : event.height / 2 ,
//             force : event.pressure,
//         };
//         var eventType = event.type == "pointerdown" ? "touchstart" :
//             event.type == "pointerup" ? "touchend" : "touchmove";
//         event.preventDefault();

//         console.log(event.pageX,event.pageY);
//         //drawTouch(fakeTouch, eventType, false);

// //         if (drawCoalesced && event.getCoalescedEvents) {
// //             var points = event.getCoalescedEvents();
// //             for(let coalesced of points) {
// //                 fakeTouch.pageX = coalesced.pageX;
// //                 fakeTouch.pageY = coalesced.pageY + 50;
// //                 fakeTouch.radiusX = coalesced.width / 2;
// //                 fakeTouch.radiusY = coalesced.height / 2;
// //                 fakeTouch.force = coalesced.pressure;

// //                 drawTouch(fakeTouch, eventType, true);
// //             }
// //         }
//     }

//     if (event.type == "pointerup")
//         mousePressed = false;
// }


function showabc(event) {
  hideall();
  //console.log(event)
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

function restoreabc(){
  
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


function xy_report(e){
  //console.log(e)
  document.getElementById("demo").innerHTML = " " + e.clientX +", " + e.clientY;
}