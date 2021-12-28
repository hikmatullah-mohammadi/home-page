var time_elem = document.getElementById("time");
var dat_elem = document.getElementById("date");
let updat_time = function () {
  time_elem.innerHTML = new Date().toLocaleTimeString();
  dat_elem.innerHTML = new Date().toDateString();
};
setInterval(updat_time, 100);
