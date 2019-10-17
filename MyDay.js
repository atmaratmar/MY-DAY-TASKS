

var date = new Date();
function FormateDate(DATES) {
    var weekday = new Array(7);
    weekday[0] = "Sunday";weekday[1] = "Monday";weekday[2] = "Tuesday";weekday[3] = "Wednesday";weekday[4] = "Thursday";
    weekday[5] = "Friday";weekday[6] = "Saturday";

    var weekDays = weekday[DATES.getDay()];
    var date = DATES.getDate() + "th";
    var months = new Date().toLocaleString("en-us", { month: "long" });
    var year = DATES.getFullYear();
    return weekDays + " " + date + " " + months + " " + year;
}

var dateText = FormateDate(date);
document.getElementById("Date").innerHTML = "Today is " + dateText;
var Time = new Date();
function FormateTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + '.' + minutes + ' ' + ampm;
    return strTime;
}

var TimeText = FormateTime(Time);
document.getElementById("Time").innerHTML = "The time is " + TimeText;


function buildaTimeTable(labels, objects, container) {
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    var theadTr = document.createElement('tr');
    for (var i = 0; i < labels.length; i++) {
        var theadTh = document.createElement('th');
        theadTh.innerHTML = labels[i];
        theadTr.appendChild(theadTh);    }
    thead.appendChild(theadTr);
    //table.appendChild(thead);

    function getDayOfWeek(date) {
        var dayOfWeek = new Date(date).getDay();
        return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    }

    var today = getDayOfWeek(new Date());
    for (j = 0; j < objects.length; j++) {
        if (today === objects[j].day) {
           
            var tbodyTr = document.createElement('tr');
            for (k = 0; k < labels.length; k++) {
                var tbodyTd = document.createElement('td');
                tbodyTd.innerHTML = objects[j][labels[k].toLowerCase()];
                tbodyTr.appendChild(tbodyTd);
            }
            tbody.appendChild(tbodyTr);
        }

    }
    table.appendChild(tbody);

    container.appendChild(table);
}

var Key = [ 'time', 'description'];

var Value = [
    {
        "id": 1,
        "day": "Monday",
        "time": "08:00",
        "description": "Laugh to Your Heart’s Content"
    },
    {
        "id": 2,
        "day": "Monday",
        "time": "11:00",
        "description": "Dance Like No One’s Watching"
    },
    {
        "id": 3,
        "day": "Monday",
        "time": "16:00",
        "description": "Make Dinner for homeless guy"
    },
    {
        "id": 4,
        "day": "Tuesday",
        "time": "07:00",
        "description": "Change Your Morning Routine"
    },
    {
        "id": 5,
        "day": "Tuesday",
        "time": "10:00",
        "description": "Go People Watching"
    },
    {
        "id": 6,
        "day": "Tuesday",
        "time": "18:00",
        "description": "Do Something Stupid"
    },
    {
        "id": 7,
        "day": "Wednesday",
        "time": "08:00",
        "description": "Sing in the Shower"
    },
    {
        "id": 8,
        "day": "Wednesday",
        "time": "13:00",
        "description": "Listen to Nature Sounds"
    },
    {
        "id": 9,
        "day": "Wednesday",
        "time": "15:00",
        "description": "Join a Club"
    },
    {
        "id": 10,
        "day": "Thursday",
        "time": "06:00",
        "description": "Strike a Pose"
    },
    {
        "id": 11,
        "day": "Thursday",
        "time": "09:00",
        "description": " Challenge Yourself"
    },
    {
        "id": 12,
        "day": "Thursday",
        "time": "20:00",
        "description": "Reconnect with an Old Friend"
    },
    {
        "id": 13,
        "day": "Friday",
        "time": "09:00",
        "description": "Learn a Joke"
    },
    {
        "id": 14,
        "day": "Friday",
        "time": "12:00",
        "description": "Become an Expert"
    },
    {
        "id": 15,
        "day": "Friday",
        "time": "19:00",
        "description": "Take a Class"
    },
    {
        "id": 16,
        "day": "Saturday",
        "time": "07:00",
        "description": "Change Your Look"
    },
    {
        "id": 17,
        "day": "Saturday",
        "time": "12:00",
        "description": "Excite Your Palate"
    },
    {
        "id": 18,
        "day": "Saturday",
        "time": "21:00",
        "description": "Begin a Diary"
    },
    {
        "id": 19,
        "day": "Sunday",
        "time": "10:00",
        "description": "Embrace Your Curiosity"
    },
    {
        "id": 20,
        "day": "Sunday",
        "time": "11:00",
        "description": "Pretend to Be a Tourist"
    },
    {
        "id": 21,
        "day": "Sunday",
        "time": "17:00",
        "description": "Drive Away with No Destination in Mind"
    }
];

//line 202 
//Find index of specific object using findIndex method.    
 objIndex = Value.findIndex((obj => obj.id == 10));
  
 //Log object to Console.
 console.log("Before update: ", Value[objIndex])
 
 //Update object's time property.
 Value[objIndex].time = "15:00"
 
 //Log object to console again.
 console.log("After update: ", Value[objIndex])
//line 214

buildaTimeTable(Key, Value, document.getElementById('TodayTask'));


      
 


function ChangTitleButton() {
 if(document.getElementById('txtModCode').value!==""){
    var text = document.getElementById('txtModCode').value;

    document.getElementById("Page-Title").innerHTML = text;
    document.getElementById("Title-Bar").innerHTML = text;
 }
    
}

function ChooseColor(SelectedColor) {
    document.bgColor = SelectedColor;
}





function buildaTimeTable1(labels, objects, container) {
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    var theadTr = document.createElement('tr');
    for (var i = 0; i < labels.length; i++) {
        var theadTh = document.createElement('th');
        theadTh.innerHTML = labels[i];
        theadTr.appendChild(theadTh);
    }
    thead.appendChild(theadTr);
    table.appendChild(thead);



function getDayOfWeek(date) {
    var dayOfWeek = new Date(date).getDay()+1;
    return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

var today = getDayOfWeek(new Date());
for (j = 0; j < objects.length; j++) {
    if (today === objects[j].day) {
       
        var tbodyTr = document.createElement('tr');
        for (k = 0; k < labels.length; k++) {
            var tbodyTd = document.createElement('td');
            tbodyTd.innerHTML = objects[j][labels[k].toLowerCase()];
            tbodyTr.appendChild(tbodyTd);
        }
        tbody.appendChild(tbodyTr);
    }

}


table.appendChild(tbody);

container.appendChild(table);

}

buildaTimeTable1(Key, Value, document.getElementById('TodayTask1'));


function ChangeDate() {
    
    document.getElementById("TodayTask1").hidden=false;
    document.getElementById("Remove").hidden=false;
    document.getElementById("NextDay").hidden=true;
    
}
function ChangeDateBack() {
    
    document.getElementById("TodayTask1").hidden=true;
    document.getElementById("Remove").hidden=true;
    document.getElementById("NextDay").hidden=false;
    
}

function slideUp(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "all 2s ease-in-out";
    elem.style.height = "0px";
    document.getElementById("box").hidden=true;
    document.getElementsByClassName("block").hidden=true;
    document.getElementsByClassName("block-down").hidden=false;
    

}

function slideDown(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "all 2s ease-in-out";
    elem.style.height = "100px";
    document.getElementById("box").hidden=false;
    document.getElementsByClassName("block-down").hidden=true;
    document.getElementsByClassName("block").hidden=false;
}


