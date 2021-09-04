function updateClock(){
  var now = new Date();
  var dname = now.getDay(),
  mo = now.getMonth(),
  dnum = now.getDate(),
  yr = now.getFullYear(),
  hou = now.getHours(),
  min = now.getMinutes(),
  sec = now.getSeconds(),
  pe = "AM";

  if(hou == 0){
    hou = 12;
  }
  if (hou > 12){
    hou = hou - 12;
    pe = "PM";
  }

  Number.prototype.pad = function(digits){
    for(var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  }

  var months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"];
  var week = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Jumma", "Shanba"];
  var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
  var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
  for (var i = 0; i < ids.length; i++)
  document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock(){
  updateClock();
  window.setInterval("updateClock()", 1);
}