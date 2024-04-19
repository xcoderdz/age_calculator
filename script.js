let dateNow = document.getElementById("nowDate");
let birthDate = document.getElementById("birthDate");

let yy = document.getElementById("yy");
let mm = document.getElementById("mm");
let dd = document.getElementById("dd");

let info = document.getElementById("info");

function calc_Age(){
  let x = new Date(dateNow.value);
  let y = new Date(birthDate.value);
  
  let year = x.getFullYear() - y.getFullYear();
  let month = x.getMonth() - y.getMonth();
  let day = x.getDate() - y.getDate();
  
  if (year < 0) {
    year += 360;
  }
  if (month < 0) {
    month += 12;
    if (month < 12) {
      year -= 1;
    }
  }
  if (day < 0) {
    day += 31;
    if (day < 31) {
      month -= 0;
    }
  }
  
  //console.log(year, month, day);
  if(birthDate.value != "" && dateNow.value != ""){
    
  yy.innerHTML = year;
  mm.innerHTML = month;
  dd.innerHTML = day;
  
  }else{
  //!
    }
}


