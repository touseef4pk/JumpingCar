var car = document.getElementById("car");
var ball = document.getElementById("ball");
var soundJump = document.getElementById("soundJump");
var soundDie = document.getElementById("soundDie");

var counter = 0;

//will write this event later on to show space bar click jump
document.body.onkeyup = function (e) {
    if (e.key == " " ||
        e.code == "Space" ||
        e.keyCode == 32
    ) {
        jump();
    }
}


function jump() {
    soundJump.play();
    if (car.classList == "animate") { return }
    car.classList.add("animate");

    //after 300 mili seconds we will remove the animate class so that car element doens't say in air
    setTimeout(function () {
        car.classList.remove("animate");
    }, 300);

}

setInterval(function () {

    let carTop = parseInt(window.getComputedStyle(car).getPropertyValue("top"));
    let carDistanceLeft = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
    //alert(carDistanceLeft);

    //Here first we are getting the left distance of the ball from the car and height of the bal
    //if left distance of the ball from the car is less than 20 and top (jump) of the car
    //is less than the top position of the ball then it means ball hit the car. so Game over

    if (carDistanceLeft < 20 && carDistanceLeft > -20 && carTop >= 130) {
        ball.style.animation = "none";
        soundDie.play();
        alert("Sorry Game Over  \n Points: " + Math.floor(counter / 100));
        counter = 0;
        ball.style.animation = "ball 1s infinite linear";
    } else {
        counter++;
        document.getElementById("points").innerHTML = Math.floor(counter / 100);
    }
}, 10);




/* function OuterFunction(params) {
    var outerVal = "Code Canvas with Touseef";

    function innerFunction(params) {
            console.log(outerVal);
    }
    return innerFunction;

    var myClosure = OuterFunction();
    myClosure(); //Output: "Code Canvas with Touseef"
} */