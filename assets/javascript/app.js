var date = moment().format('MMMM Do YYYY, h:mm:ss a');
//var date2 = moment().format('MMMM Do YYYY, H:mm:ss a');
console.log(date);
//console.log(date2);
$("#date").append(date);

// $(".inp").css({
//     // "height": "50px",
//     "color": "#fff"
// })

// var cal = moment("08:00 PM", "h:mm A").format("HH:mm")
// console.log(cal);
// var time = "08:00 PM";
// var time2 = moment(time, "h:mm A").format("HH:mm");
// console.log(time2);
// var time3 = moment().format('HH:00');
// console.log(time3);

// if(time2 > time3){
//     console.log("You still have time");
// } else{
//     console.log("You are too late");
// }
var elem;
var time = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"];
// var timeSlot0 = $("#time-8am").attr('data-time');
// var timeSlot1 = $("#time-9am").attr('data-time');
// var timeSlot2= $("#time-10am").attr('data-time');
// var timeSlot3 = $("#time-11am").attr('data-time');
// var timeSlot4 = $("#time-12pm").attr('data-time');
// var timeSlot5 = $("#time-1pm").attr('data-time');
// var timeSlot6 = $("#time-2pm").attr('data-time');
// var timeSlot7 = $("#time-3pm").attr('data-time');
// var timeSlot8 = $("#time-4pm").attr('data-time');
// var timeSlot9 = $("#time-5pm").attr('data-time');
// var timeSlot10 = $("#time-6pm").attr('data-time');
//$("#timeSlot[i]")
//console.log(timeSlot0);
//var scheduleTime = moment(timeSlot1, "h:mm A").format("HH:mm");
var currentTime = moment().format('HH:00');

function setColor(timeArray, currentTime) {
    for (i = 0; i < timeArray.length; i++) {
        var scheduleTime = moment(timeArray[i], "h:mm A").format("HH:mm");
        console.log("schedule time is " + scheduleTime);
        console.log("the current time is " + currentTime);
        // var inpKey = "timeArray[i]";
        // var inpVal = document.getElementById('timeSlot' + [i]);
        // var val = inpVal.value;

        // localStorage.setItem(inpKey, val);
        // localStorage.getItem(name);
        // console.log(val)
        //   destination = $("#dest-input").val().t
        if (scheduleTime > currentTime) { // 8:00 am > 3:00 am  The future

            elem = document.getElementById('timeSlot' + [i]);
            elem.style.backgroundColor = "#e4d5a4";
            // elem.append.val;
            // console.log(elem.append.val);
        } else if (scheduleTime < currentTime) {// the past
            elem = document.getElementById('timeSlot' + [i]);
            elem.style.backgroundColor = "#acbbbf";
            //elem.append.val(val);
        } else if (
            scheduleTime === currentTime) {  // the present
            elem = document.getElementById('timeSlot' + [i]);
            elem.style.backgroundColor = "#c3e5e2";
           // elem.append.val;
        }
        console.log(elem);
        getLocalStorage(timeArray[i], elem);

        //         $("#timeSlot"'+ [i]').css({
        //             "background-color": "red"
        //         })
    }
}
function getLocalStorage(time, element){
    
      var a =  localStorage.getItem(time);
      console.log( " a = " + a);
     // document.getElementById("p1").innerHTML = "New text!";
    // document.getElementById('timeSlot' + [i]).innerHTML = a;
     element.innerHTML = a;
      

}
setColor(time, currentTime);

// if(scheduleTime > currentTime) //the future 12:00pm > 10:00pm 8:00 am 2:00am
// {
//     $("timeSlot[i]").css({
//         "background-color": "#002B36"
//     });
// }else if(scheduleTime < currentTime){
//     $(".form-control").css({
//         "background-color": "#acbbbf"
//     });
// } else if(
//     scheduleTime === currentTime){
//         $(".form-control").css({
//             "background-color": "c3e5e2"
//         });
//     }
//     $("#add-user").on("click", function() {
$("#btn-1").on("click", function () {
    var event = $("#timeSlot0").val().trim();
    var eventTime = $("#time-8am").attr('data-time');
    //destination = $("#dest-input").val().trim();
    console.log(event);
    localStorage.setItem(eventTime, event);
    //localStorage.setItem("time", eventTime)
   // $("timeSlot0").html(event)

});
$("#btn-2").on("click", function () {
    var event = $("#timeSlot1").val().trim();
    var eventTime = $("#time-9am").attr('data-time');

    console.log(event);
    localStorage.setItem(eventTime, event);

});
$("#btn-3").on("click", function () {
    var event = $("#timeSlot2").val().trim();
    var eventTime = $("#time-10am").attr('data-time');

    console.log(event);
    localStorage.setItem(eventTime, event);

});
$("#btn-4").on("click", function () {
    var event = $("#timeSlot3").val().trim();
    var eventTime = $("#time-11am").attr('data-time');

    console.log(event);
    localStorage.setItem(eventTime, event);

});
$("#btn-5").on("click", function () {
    var event = $("#timeSlot4").val().trim();
    var eventTime = $("#time-12pm").attr('data-time');

    console.log(event);
    localStorage.setItem(eventTime, event);

});
$("#btn-6").on("click", function () {
    var event = $("#timeSlot5").val().trim();
    var eventTime = $("#time-1pm").attr('data-time');

    console.log(event);
    localStorage.setItem(eventTime, event);

});
$("#btn-7").on("click", function () {
    var event = $("#timeSlot6").val().trim();
    var eventTime = $("#time-2pm").attr('data-time');

    console.log(event);
    localStorage.setItem(eventTime, event);

});
$("#btn-8").on("click", function () {
    var event = $("#timeSlot7").val().trim();
    var eventTime = $("#time-3pm").attr('data-time');

    console.log(event);
    localStorage.setItem(eventTime, event);

});
$("#btn-9").on("click", function () {
    var event = $("#timeSlot8").val().trim();
    var eventTime = $("#time-4pm").attr('data-time');

    console.log(event);
    localStorage.setItem(eventTime, event);

});
$("#btn-10").on("click", function () {
    var event = $("#timeSlot9").val().trim();
    var eventTime = $("#time-5pm").attr('data-time');

    console.log(event);
    localStorage.setItem(eventTime, event);

});
$("#btn-11").on("click", function () {
    var event = $("#timeSlot10").val().trim();
    var eventTime = $("#time-6pm").attr('data-time');

    console.log(event);
    localStorage.setItem(eventTime, event);

});
