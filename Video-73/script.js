let title = prompt("Enter title of video");
let cName = prompt("Enter your channel name");
let views = prompt("Enter you View's");
let monthsOld = prompt("Enter month before you publish");
let duration = prompt("Enter duration of you video");
let thumbnail = prompt("Enter thumbnail URL");

createCard(title, cName, views, monthsOld, duration, thumbnail);

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    document.querySelector(".title").innerText = title;
    document.querySelector(".view").innerText = formatView(views);
    document.querySelector(".cname").innerText = cName;
    document.querySelector(".duration").innerText = duration;
    document.querySelector(".months").innerText = monthsOld + " months ago";
    document.getElementById("img").src = thumbnail;
}

function formatView(num) {
    if (num >= 1_000_000) return Math.round(num / 1_000_000) + 'M' + " views";
    if (num >= 1_000) return Math.round(num / 1_000) + 'k' + " views";
    return num.toString() + " views";
}


// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 200000, 7, "31:22", "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q")

// createCard("this is dhruvin video", "dhruvin", 200000, 10, "30:00", "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces")

