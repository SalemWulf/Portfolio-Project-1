//Good Morning//
    var now = new Date();
    var hours = now.getHours();
    var ft = now.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    });
    if (5 <= hours && hours < 8) {
        var type = ' <i class="fa-solid fa-sun"></i>   Good Morning';
    }
    if (8 <= hours && hours < 17) {
        var type = ' <i class="fa-solid fa-sun"></i>   Good Day';
    }
    if (17 <= hours && hours < 19) {
        var type =' <i class="fa-regular fa-moon"></i>  Good Evening';
    }
    if (19 <= hours && hours < 5) {
        var type = '<i class="fa-regular fa-moon"></i> Good Night ';
    }
    document.getElementById('greeting').innerHTML = ` ${type}`;
//Good Morning//
//Date//
var date = new Date();
var titleDate = date.toDateString();
document.getElementById('date').innerHTML = ` ${titleDate}`;
//Date//

//number//
const number = document.getElementById('number');
const generate = document.getElementById('generate');

const numberGenerator = () => {
    const random = Math.floor(Math.random() * 100 + 1);
    
    number.textContent = random;
};
generate.addEventListener('click',numberGenerator);
numberGenerator();
//number//

//timer//
const time_el = document.querySelector('.watch .time');
const set = document.getElementById('stop');
const start =  document.getElementById('start');
const reset = document.getElementById('restart');

let seconds = 0;
let interval = null;

set.addEventListener('click', stop1);
start.addEventListener('click', start1);
reset.addEventListener('click', reset1);


function timer (){
    seconds++;
 
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    if (hrs < 10) hrs = "0" + hrs;
    if (mins < 10 ) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    time_el.innerText = `${hrs}:${mins}:${secs}`;
}
function start1(){
    if (interval){
        return
    }

    interval = setInterval(timer, 1000);
}
function stop1(){
    clearInterval(interval);
    interval = null;
}
function reset1(){
stop1();
seconds = 0;
time_el.innerText = '00:00:00';
}
//timer//
//dark mode//
var icon = document.getElementById("darkMode");
icon.onclick = function(){
    document.body.classList.toggle("darkmode");}
    
//dark mode//
//pink mode//
var icon1 = document.getElementById("pinkMode");
icon1.onclick = function(){
    document.body.classList.toggle("pinkmode");
}
//pink mode//
//clock//
function Time(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var secs = dateTime.getSeconds();
    var section = document.getElementById('section');

    if (hrs >= 12){
        section.innerHTML ='PM';
    }else{
        section.innerHTML ='AM'
    }
if( hrs > 12){
    hrs = hrs - 12;
}

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = secs;
}
setInterval(Time, 10);
//clock//
//to-do list//
window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');
        task_content_el.classList.add('task-content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
        task_edit_el.classList.add('CSS-buttons');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
        task_delete_el.classList.add('CSS-buttons');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});

//to-do list//

//quotes//
var quotes =[ "When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt",
   "Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson",
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin",
    "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller",
    "It is during our darkest moments that we must focus to see the light. -Aristotle"];
   function Quotes(){
    const random = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML =quotes[random];
   }
Quotes();
//quotes// 
//custom//
const colors = document.getElementsByClassName('colors');
let i;
for (i=0;i<colors.length;i++){
    colors[i].addEventListener('click', change)
}

function change(){
let color= this.getAttribute('data-color');
document.documentElement.style.setProperty('--background1', color);
}
//custom//
//Daily//
var fortune =[ "This is your day to make short work of tasks!",
"Today is a good day for you, but remain focused!",
"Things may take longer than you want, but trust the process.",
"Today should be spent resting or treating yourself.",
"Make sure to evaluate your passions and goals today!",
"Today is a good day for you, keep optimistic and enjoy it!",
"Be cautious with your money and reevaluate your priotiies.",
"Today is a good day for you, keep optimistic and enjoy it!",
"Best to keep cautious and be mindful of those around you.",
"Life can be unpredictable today but take things slowly.",
"It's time to bring more energy into your life. be exciting!",];
   function FortuneQuote(){
    const random = Math.floor(Math.random() * (fortune.length));
    const random1 = Math.floor(Math.random() * (fortune.length));
    const random2 = Math.floor(Math.random() * (fortune.length));
    const random3 = Math.floor(Math.random() * (fortune.length));
    const random4 = Math.floor(Math.random() * (fortune.length));
    const random5 = Math.floor(Math.random() * (fortune.length));
    const random6 = Math.floor(Math.random() * (fortune.length));
    const random7 = Math.floor(Math.random() * (fortune.length));
    const random8 = Math.floor(Math.random() * (fortune.length));
    const random9 = Math.floor(Math.random() * (fortune.length));
    const random10 = Math.floor(Math.random() * (fortune.length));
    const random11 = Math.floor(Math.random() * (fortune.length));


    document.getElementById("fortune-text").innerHTML = fortune[random];
    document.getElementById("fortune-text1").innerHTML = fortune[random1];
    document.getElementById("fortune-text2").innerHTML = fortune[random2];
    document.getElementById("fortune-text3").innerHTML = fortune[random3];
    document.getElementById("fortune-text4").innerHTML = fortune[random4];
    document.getElementById("fortune-text5").innerHTML = fortune[random5];
    document.getElementById("fortune-text6").innerHTML = fortune[random6];
    document.getElementById("fortune-text7").innerHTML = fortune[random7];
    document.getElementById("fortune-text8").innerHTML = fortune[random8];
    document.getElementById("fortune-text9").innerHTML = fortune[random9];
    document.getElementById("fortune-text10").innerHTML = fortune[random10];
    document.getElementById("fortune-text11").innerHTML = fortune[random11];
   }
FortuneQuote();
//Daily//
//Once a day//
setInterval(FortuneQuote, 1000 * 60 * 60 * 24);
//Once a day//