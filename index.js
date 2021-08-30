var snake_head = document.getElementById("snake_head");
var food = document.getElementById('food');
console.log(window.getComputedStyle(food,null).getPropertyValue('left'));

var playg = document.getElementById('playg');
var playground_width = parseInt(window.getComputedStyle(playg,null).getPropertyValue('width'));
var playground_height = parseInt(window.getComputedStyle(playg,null).getPropertyValue('height'));
console.log("playground width = ",playground_width," ",playground_height);
// var score = 0;

var right_interval, btm_interval, left_interval, top_interval, interval;


const all_mov = (direction, val,orientation) => {
  clearInterval(interval);

  let direction2 = direction;

//   setOrientation(direction,val,orientation);

  interval = setInterval(() => {
    let top_pos = window
      .getComputedStyle(snake_head, null)
      .getPropertyValue(direction2);
    let next_pos = parseInt(top_pos) + val;
    snake_head.style[direction2] = next_pos + "px";

    //getting food position
    let snake_left = parseInt(window.getComputedStyle(snake_head, null).getPropertyValue("left"));
    let snake_top = parseInt(window.getComputedStyle(snake_head, null).getPropertyValue("top"));
    let food_left = parseInt(window.getComputedStyle(food, null).getPropertyValue("left"));
    let food_top = parseInt(window.getComputedStyle(food, null).getPropertyValue("top"));

    console.log(snake_left," ",snake_top," ",food_left," ",food_top);
    if(snake_left===food_left && snake_top===food_top){
        // clearInterval(interval);

        //score increment
        let score_elm =document.getElementById('score');
        score_elm.innerHTML = parseInt(score_elm.innerHTML) + 1;
        //<!--score increment

        // //tail increment
        // let new_width = parseInt(getComputedStyle(snake_head,null).getPropertyValue('width'))+20;
        // snake_head.style.width= new_width+"px";
        //<!--tail increment
        console.log("food eaten at ",snake_left," ",snake_top," ",food_left," ",food_top)
        let nl = Math.floor(Math.random()*(playground_width - 0)+ 0);
        let nt = Math.floor(Math.random()*(playground_height - 0)+ 0);
        let nl2 = Math.round(nl/20) *20;
        let nt2 = Math.round(nt/20) *20;
        food.style.left = nl2+"px";
        food.style.top = nt2+"px";
    }
    //<!--food eaten logic-->

    //logic for out of wall
    if (direction === "left") {
      if (val === 20 && next_pos > playground_width) {
        snake_head.style[direction2] = "0px";
      }
      if (val === -20 && next_pos < 1) {
        snake_head.style[direction2] = "800px";
      }
    } else {
      if (val === 20 && next_pos > playground_height) {
        snake_head.style[direction2] ="0px";
      }
      if (val === -20 && next_pos < 1) {
        snake_head.style[direction2] = "600px";
      }
    }
  }, 100);
};


//stop the snake
const movStop = () => {
  clearInterval(interval);
};


// const setOrientation = (direction,val,orientation)=>{

//     if (direction === "left") {
//         if (val === 20 && next_pos > playground_width) {
//           snake_head.style[direction2] = "0px";
//         }
//         if (val === -20 && next_pos < 1) {
//           snake_head.style[direction2] = "800px";
//         }
//       } else {
//         if (val === 20 && next_pos > playground_height) {
//           snake_head.style[direction2] ="0px";
//         }
//         if (val === -20 && next_pos < 1) {
//           snake_head.style[direction2] = "600px";
//         }
//       }
// }