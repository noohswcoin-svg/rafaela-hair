const fades=document.querySelectorAll(".fade");

const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting)e.target.classList.add("show");
});
});

fades.forEach(f=>observer.observe(f));

window.onload=()=>{
setTimeout(()=>document.getElementById("loader").style.display="none",1500);
};

const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=innerWidth;
canvas.height=innerHeight;

let dots=[];
for(let i=0;i<60;i++){
dots.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2+1,
vx:Math.random()-.5,
vy:Math.random()-.5
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
dots.forEach(d=>{
d.x+=d.vx;
d.y+=d.vy;
if(d.x<0||d.x>canvas.width)d.vx*=-1;
if(d.y<0||d.y>canvas.height)d.vy*=-1;
ctx.beginPath();
ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
ctx.fillStyle="rgba(255,255,255,.5)";
ctx.fill();
});
requestAnimationFrame(animate);
}
animate();

const modal=document.getElementById("modal");
const modalImg=document.getElementById("modalImg");

document.querySelectorAll(".gallery img").forEach(img=>{
img.onclick=()=>{
modal.style.display="flex";
modalImg.src=img.src;
};
});

modal.onclick=()=>modal.style.display="none";

document.querySelectorAll(".float").forEach(btn=>{
btn.addEventListener("click",()=>{
if(navigator.vibrate)navigator.vibrate(50);
});
});
