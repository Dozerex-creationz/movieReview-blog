const nava=document.getElementById("nava");

function changeNav()
{
var scrol=window.scrollY;

if(scrol<200)
{
nava.classList.remove('navabg');
nava.classList.add('navn');

}
else
{
nava.classList.add('navabg');
nava.classList.remove('navn');
}
}

window.addEventListener('scroll',changeNav);





const left=document.querySelector("#left");
const right=document.querySelector('#right');
const move=document.querySelector('#wrape');


function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'lefti'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}




left.onclick=function(){sideScroll(move,'lefti',30,200,10);};

right.onclick=function(){sideScroll(move,'lef',30,200,10);};




const board=document.querySelector(".result");


var rating=0;
var users=0;
const s1=document.querySelector('#s1');
const s2=document.querySelector('#s2');
const s3=document.querySelector('#s3');
const s4=document.querySelector('#s4');
const s5=document.querySelector('#s5');

if(localStorage.getItem('rating')!=null)
{
console.log(localStorage.getItem('rating'));
rating=JSON.parse(localStorage.getItem('rating'));
users=JSON.parse(localStorage.getItem('users'));
board.innerHTML=`The rating is ${rating} given by ${users} users across the World!`;
}
else
{
rating=0;users=0;
console.log(`${rating} ${users}this way`);
board.innerHTML='Be the first one to rate this movie!'
}
const calc=(key,rating,users)=>{
rating=Math.round((((rating*users) + key)/(users+1))*10)/10;
users++;
console.log(rating);
localStorage.setItem('rating',JSON.stringify(rating));
localStorage.setItem('users',JSON.stringify(users));
board.innerHTML=`The rating is ${rating} given by ${users} users across the World!`;
}


s1.addEventListener('click',()=>calc(1,rating,users));
s2.addEventListener('click',()=>calc(2,rating,users));
s3.addEventListener('click',()=>calc(3,rating,users));
s4.addEventListener('click',()=>calc(4,rating,users));
s5.addEventListener('click',()=>calc(5,rating,users));



const cal=(a)=>{
board.innerHTML=`you are giveing this movie a rating of ${a}/5`;

}

s1.addEventListener('mouseover',()=>cal(1));
s2.addEventListener('mouseover',()=>cal(2));
s3.addEventListener('mouseover',()=>cal(3));
s4.addEventListener('mouseover',()=>cal(4));
s5.addEventListener('mouseover',()=>cal(5));


