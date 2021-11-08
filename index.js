const day = document.querySelector(".day")
const hour = document.querySelector(".hours")
const minute = document.querySelector(".minutes")
const second = document.querySelector(".seconds")



function counter () {
    let time = new Date();
	let target = new Date("Dec 31, 2021 23:59:59");
	let now = {
        day: time.getDate(),
        month: time.getMonth(),
        hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds(),
	};
	let targetTime = {
        day: target.getDate(),
        month: target.getMonth(),
		hour: target.getHours(),
		minute: target.getMinutes(),
		second: target.getSeconds(),
    };

    day.innerHTML = ((targetTime.month - now.month) * 30) + (targetTime.day - now.day) + 3;
    hour.innerHTML = (targetTime.hour - now.hour) - parseInt(now.day / 24);
    minute.innerHTML = (targetTime.minute - now.minute);
    second.innerHTML = (targetTime.second - now.second);
}

setInterval(() => {
    counter();
}, 1000);

