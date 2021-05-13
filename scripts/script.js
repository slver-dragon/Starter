//Работа с формой
let order_button = document.getElementById("order-button-desk");
let apply = document.getElementById("apply");
let your_name = document.getElementById("your-name");
let your_phon = document.getElementById("your-phon");
let input_city = document.getElementById("input-city");
let select_city = document.getElementById("select-city");
let not_valid_num = /[0-9]/g;
let form_block = 0;

input_city.oninput = function () {
  this.value = this.value.replace(not_valid_num, "");
};

your_name.oninput = function () {
  this.value = this.value.replace(not_valid_num, "");
};

input_city.onchange = function () {
  let new_option = new Option(
    input_city.value,
    String(select_city.options.length + 1)
  );
  select_city.append(new_option);
};

your_name.onfocus = function () {
  your_name.className = "your-name";
  your_name.placeholder = "Ваше имя";
};

your_phon.onfocus = function () {
  your_phon.className = "your-phon";
  your_phon.placeholder = "Телефон";
};

order_button.onclick = function () {
  if (your_name.value == "") {
    your_name.className = "your-name-error";
    your_name.placeholder = "  Нет имени";
    form_block++;
  }

  if (your_phon.value == "") {
    your_phon.className = "your-phon-error";
    your_phon.placeholder = "  Не указан номер";
    form_block++;
  }

  if (!apply.checked) {
    form_block++;
  }

  if (form_block == 0) {
    /*submit*/
  }
  console.log(form_block);
};

//Таймер набросок
let hours;
let minutes;
let seconds;
let period = 10;
let timeResult;

timer = setInterval(function() {
    hours = Math.floor(period / 60 / 60 % 60);
    hours = hours < 10 ? '0' + hours : hours;
    minutes = Math.floor(period / 60 % 60);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = Math.floor(period % 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    if (period <= 0) {
        clearInterval(timer);
        timeResult = "Время вышло"
    }
    else {
        timeResult = hours + ":" + minutes + ":" + seconds;
    }
    document.getElementById("timer").innerHTML = timeResult;
    --period;
}, 1000)