let img1 = new Image();
img1.src = "img/1.png";
img1.style.height = '450px';
img1.style.width = '650px';

let img2 = new Image();
img2.src = "img/2.png";
img2.style.height = '450px';
img2.style.width = '650px';

let img3 = new Image();
img3.src = "img/3.png";
img3.style.height = '450px';
img3.style.width = '650px';

let img4 = new Image();
img4.src = "img/4.png";
img4.style.height = '450px';
img4.style.width = '650px';

let img5 = new Image();
img5.src = "img/5.png";
img5.style.height = '450px';
img5.style.width = '650px';

let img6 = new Image();
img6.src = "img/6.png";
img6.style.height = '450px';
img6.style.width = '650px';

let img7 = new Image();
img7.src = "img/7.png";
img7.style.height = '450px';
img7.style.width = '650px';

let img8 = new Image();
img8.src = "img/8.png";
img8.style.height = '450px';
img8.style.width = '650px';

let img9 = new Image();
img9.src = "img/9.png";
img9.style.height = '450px';
img9.style.width = '650px';

let img10 = new Image();
img10.src = "img/10.png";
img10.style.height = '450px';
img10.style.width = '650px';

let quest = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
let right_answer = [a2,a3,a4,a2,a4,a4,a3,a4,a3,a2];
img1.style.height = '450px';
img1.style.width = '650px';

let num_img = 0;
let num_ans = 0;
let sum = 0;

document.body.appendChild(quest[num_img]);
btn.addEventListener("click", check);

function check(){
    document.body.removeChild(quest[num_img]);
    num_img++;
    document.body.appendChild(quest[num_img]);
    }

btn.addEventListener("click", img);

function img(){
    console.log(a1.checked);
    console.log(a2.checked);
    console.log(a3.checked);
    console.log(a4.checked);
    if (right_answer[num_ans].checked){  
        alert("Right answer");
        sum++;
    } else {
        alert("Wrong answer");
    }
    num_ans++;
if (num_ans == right_answer.length){
    document.body.remove(table);
    alert("Total sum:" + sum);
	character();
    }
}

function character(){
	if (sum <= 3){
    alert("You are Chewbacca!");
    window.location.replace("https://starwars.fandom.com/wiki/Chewbacca");
		}
	else if(sum>3 && sum<=5){
		alert("You are Jabba the Hutt!");
		window.location.replace("https://starwars.fandom.com/wiki/Jabba_Desilijic_Tiure");
		}
	else if(sum>5 && sum<=7){
		alert("You are Obi-Wan Kenobi!");
		window.location.replace("https://starwars.fandom.com/wiki/Obi-Wan_Kenobi");
		}
	else if(sum>7 && sum<=9){
		alert("You are Yoda!");
		window.location.replace("https://starwars.fandom.com/wiki/Yoda");
		}
	else{
		alert("Master Vejder! We were waiting for you...");
		window.location.replace("https://starwars.fandom.com/wiki/Anakin_Skywalker");
		}
}