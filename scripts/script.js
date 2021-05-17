let form = document.getElementById("order-form");
let orderButton = document.getElementById("order-button-desk");
let apply = document.getElementById("apply");
let yourName = document.getElementById("your-name");
let yourPhon = document.getElementById("your-phon");
let notValidNum = /[0-9]/g;
let formBlock = 0;

yourName.oninput = function () {
  this.value = this.value.replace(notValidNum, "");
};

yourName.onfocus = function () {
  yourName.className = "your-name";
  yourName.placeholder = "Ваше имя";
};

yourPhon.onfocus = function () {
  yourPhon.className = "your-phon";
  yourPhon.placeholder = "Телефон";
};

orderButton.onclick = function () {
  if (yourName.value == "") {
    yourName.className = "your-name-error";
    yourName.placeholder = "  Нет имени";
    formBlock++;
  }

  if (yourPhon.value == "") {
    yourPhon.className = "your-phon-error";
    yourPhon.placeholder = "  Не указан номер";
    formBlock++;
  }

  if (apply.checked && formBlock == 0) {
    form.submit();
  }

  event.preventDefault();
  formBlock = 0;
};

let inputCity = document.getElementById("input-city");
let selectCity = document.getElementById("select-city");
inputCity.onchange = function () {
  if (inputCity.value != "") {
    let newOption = new Option(
      inputCity.value,
      String(selectCity.options.length + 1)
    );
    selectCity.append(newOption);
  }
  event.preventDefault();
};

inputCity.oninput = function () {
  this.value = this.value.replace(notValidNum, "");
};

let hiderButton = document.getElementById("hider-button");
let additionService = document.getElementById("addition-service");
hiderButton.onclick = function () {
  hiderButton.classList.toggle("hider-button-active");
  additionService.hidden = additionService.hidden != true;
};

let timerBlock = document.getElementById("timer");
let hours;
let minutes;
let seconds;
let period = 21600;
let timeResult;

timer = setInterval(function () {
  hours = Math.floor((period / 60 / 60) % 60);
  hours = hours < 10 ? "0" + hours : hours;
  minutes = Math.floor((period / 60) % 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = Math.floor(period % 60);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  if (period <= 0) {
    clearInterval(timer);
    timerBlock.className = "timer-end";
    timeResult = "Время вышло";
  } else {
    timeResult = hours + ":" + minutes + ":" + seconds;
  }
  timerBlock.innerHTML = timeResult;
  --period;
}, 1000);

ShareVK = function (purl, ptitle, pimg, text) {
  url = "http://vkontakte.ru/share.php?";
  url += "url=" + encodeURIComponent(purl);
  url += "&title=" + encodeURIComponent(ptitle);
  url += "&image=" + encodeURIComponent(pimg);
  url += "&description=" + encodeURIComponent(text);
  url += "&noparse=true";
  window.open(url, ptitle);
};

ShareFB = function (purl, ptitle, pimg, text) {
  url = "http://www.facebook.com/sharer.php?s=100";
  url += "&p[title]=" + encodeURIComponent(ptitle);
  url += "&p[summary]=" + encodeURIComponent(text);
  url += "&p[url]=" + encodeURIComponent(purl);
  url += "&p[images][0]=" + encodeURIComponent(pimg);
  window.open(url, ptitle);
};

let elementForward = document.getElementById("elementForward");
let elementBack = document.getElementById("elementBack");
let current = 0;
let transport = [
  ['gazel',"Газель 3 метра","Ширина 2 м","Высота 2 м","Объем 16 м³","Грузоподъемность 1,5 т","img/gazel.png"],
  ['kabluk',"Каблук 2 метра ","Ширина 1.8 м","Высота 1.2 м","Объем 8 м³","Грузоподъемность 0.8 т","img/kabluk.png"],
  ['gruzov',"Грузовик 3 метра","Ширина 3 м","Высота 3 м","Объем 20 м³","Грузоподъемность 2 т","img/gruzovik.png"],
  ['gazel',"Газель 3 метра","Ширина 2 м","Высота 2 м","Объем 16 м³","Грузоподъемность 1,5 т","img/gazel.png"],
  ['kabluk',"Каблук 2 метра ","Ширина 1.8 м","Высота 1.2 м","Объем 8 м³","Грузоподъемность 0.8 т","img/kabluk.png"],
  ['gruzov',"Грузовик 3 метра","Ширина 3 м","Высота 3 м","Объем 20 м³","Грузоподъемность 2 т","img/gruzovik.png"]
];

elementForward.onclick = function () {
  document.getElementById(transport[current][0]).className = "car-type";
  current = current > (transport.length-2) ? 0 : ++current;
  document.getElementById(transport[current][0]).className = "car-type-active";
  document.getElementById("transport-title").innerHTML = transport[current][1];
  document.getElementById("transport-1").innerHTML = transport[current][2];
  document.getElementById("transport-2").innerHTML = transport[current][3];
  document.getElementById("transport-3").innerHTML = transport[current][4];
  document.getElementById("transport-4").innerHTML = transport[current][5];
  document.getElementById("transport-picture").src =
    transport[current][6];
  console.log(current);
};

elementBack.onclick = function () {
  document.getElementById(transport[current][0]).className = "car-type";
  current = current == 0 ? (transport.length-1) : --current;
  document.getElementById(transport[current][0]).className = "car-type-active";
  document.getElementById("transport-title").innerHTML = transport[current][1];
  document.getElementById("transport-1").innerHTML = transport[current][2];
  document.getElementById("transport-2").innerHTML = transport[current][3];
  document.getElementById("transport-3").innerHTML = transport[current][4];
  document.getElementById("transport-4").innerHTML = transport[current][5];
  document.getElementById("transport-picture").src =
    transport[current][6];
  console.log(current);
};
