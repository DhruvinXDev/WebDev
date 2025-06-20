let b = document.querySelector(".box");
let c = document.querySelector(".container");

b.innerText
// 'hey i am box one'

document.querySelector(".container").innerText;
// '\n hey i am box one'

document.querySelector(".container").outerHTML;
'<div class="container">\n        <div class="box">hey i am box one</div>\n        <div class="box">hey i am box two</div>\n    </div>'

c.tagName;
'DIV'

c.nodeName;
'DIV'

c.textContent;
'\n        hey i am box one\n        hey i am box two\n    '

// c.hidden = true;
// hide container 

b.innerHTML = "hey this is inner HTML";
// change innter html text => hey this is inner HTML

b.hasAttribute("style");
// retrun true if they have 

b.getAttribute("style");
// 'display: flex;' only get inline css

b.setAttribute("style", "display : inline")
// change to inline 

b.attributes;
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}

// b.removeAttribute("style");
// remove style

// document.designMode ="on"
//we can change in website 

b.dataset;
// DOMStringMap {created: 'dhruvin', logic: 'dhruvin logic'}

c.classList;
// DOMTokenList(3) ['container', 'hello', 'red', value: 'container hello red']

c.className;
// 'container hello red'

c.classList.add("dhurvin");
//add dhruvin class

c.classList.remove("dhruvin");
// remove dhruvin class