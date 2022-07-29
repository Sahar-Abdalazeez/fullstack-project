var select = document.getElementById('city-select');
var city = select.options[select.selectedIndex].value;
var cTemp, fTemp ,cTime;
var date;
var t;

fun();
async function fun() {
    await currentTemp();
    await futureTemp();
    await time();
}

select.addEventListener('change', function fun() {
    city = select.options[select.selectedIndex].value;
    currentTemp(city);
    futureTemp();
    time();
});

//---------------------------------------------------------------------------------
async function currentTemp() {
    var response = await fetch(`https://api.weatherbit.io/v2.0/current?key=52738c8456a2461587a18162d778676c&city=${city}`);
    cTemp = await response.json();
    cTemp = cTemp.data[0];
    date = (cTemp.ob_time).substring(0, 10);

    displayTemp();
}


function displayTemp() {
    document.getElementById('c-temp').innerHTML = cTemp.temp + "°";
    document.getElementById('windspeed').innerHTML = cTemp.wind_spd;
    document.getElementById('windDeg').innerHTML = cTemp.wind_dir + "°";
    document.getElementById('windDir').innerHTML = cTemp.wind_cdir_full;
    document.getElementById('sunrice').innerHTML = cTemp.sunrise.replace("02", "05");
    var iconcode = cTemp.weather.icon;
    var iconurl = `https://www.weatherbit.io/static/img/icons/${iconcode}.png`;
    document.getElementById('wimg').setAttribute('src', iconurl);
    document.getElementById('sunset').innerHTML = cTemp.sunset;
    document.getElementById('c-temp-info').innerHTML = cTemp.weather.description;
    document.getElementById('clouds').innerHTML = cTemp.clouds;
}

// ---------------

async function time(){
    t=city;
    if(t=="City of London"){
        t="Europe/London";
    }else{
        t=`Asia/${t}`;
    }
    var response = await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=3TECML1T9XB9&format=json&by=zone&zone=${t}`);
    cTime = await response.json();

    displayTime();
}

function displayTime(){
    
    document.getElementById('time').innerHTML=cTime.formatted;
    // displayTime();
}

    setInterval(time,1000);
//-----------------------------------------
//for temp on future time 
function ed() {
    var edate = date.substring(0, 8) + (Number(date.substring(8, 11)) + 1);
    return edate;
}


async function futureTemp() {
    var response = await fetch(`https://api.weatherbit.io/v2.0/history/hourly?key=52738c8456a2461587a18162d778676c&city=${city}&start_date=${date}&end_date=${ed()}`);
    fTemp = await response.json();
    fTemp = fTemp.data;
    displayFutureTemp();
}

function displayFutureTemp() {
    for (var i = 0; i < 24; i++) {
        var c = fTemp[i].timestamp_local.substring(11, 13);
        if (c == 03) {
            var iconcode = fTemp[i].weather.icon;
            var iconurl = `https://www.weatherbit.io/static/img/icons/${iconcode}.png`;
            document.getElementById('3').innerHTML = `<h3>3 am</h3>
            <img id="wimg" src="${iconurl}" class="wimg  " alt="weather stats"/>
            <p id="f-temp">${fTemp[i].temp}</p>`
        }else if (c==06){
            var iconcode = fTemp[i].weather.icon;
            var iconurl = `https://www.weatherbit.io/static/img/icons/${iconcode}.png`;
            document.getElementById('6').innerHTML = `<h3>6 am</h3>
            <img id="wimg" src="${iconurl}" class="wimg  " alt="weather stats"/>
            <p id="f-temp">${fTemp[i].temp}</p>`
        }else if(c==12){
            var iconcode = fTemp[i].weather.icon;
            var iconurl = `https://www.weatherbit.io/static/img/icons/${iconcode}.png`;
            document.getElementById('12').innerHTML = `<h3>12 pm</h3>
            <img id="wimg" src="${iconurl}" class="wimg  " alt="weather stats"/>
            <p id="f-temp">${fTemp[i].temp}</p>`
        }else if (c==09){
            var iconcode = fTemp[i].weather.icon;
            var iconurl = `https://www.weatherbit.io/static/img/icons/${iconcode}.png`;
            document.getElementById('9').innerHTML = `<h3>9 am</h3>
            <img id="wimg" src="${iconurl}" class="wimg  " alt="weather stats"/>
            <p id="f-temp">${fTemp[i].temp}</p>`
        }else if(c==15){
            var iconcode = fTemp[i].weather.icon;
            var iconurl = `https://www.weatherbit.io/static/img/icons/${iconcode}.png`;
            document.getElementById('15').innerHTML = `<h3>3 pm</h3>
            <img id="wimg" src="${iconurl}" class="wimg  " alt="weather stats"/>
            <p id="f-temp">${fTemp[i].temp}</p>`
        }else if(c==18){
            var iconcode = fTemp[i].weather.icon;
            var iconurl = `https://www.weatherbit.io/static/img/icons/${iconcode}.png`;
            document.getElementById('18').innerHTML = `<h3>6 pm</h3>
            <img id="wimg" src="${iconurl}" class="wimg  " alt="weather stats"/>
            <p id="f-temp">${fTemp[i].temp}</p>`
        }
    }
}
//------------------------------------------------







