// -----------------------------
// CREATE 30 CREATORS
// -----------------------------
const creators = [];

for(let i=1;i<=30;i++){
creators.push({
name:`Creator ${i}`,
brand:`Brand ${Math.ceil(i/3)}`,
campaign:`Campaign ${i}`,
status:["Approved","Rejected","Warning","On Hold"][i%4],
summary:"Auto generated profile data"
});
}

// -----------------------------
// RENDER TABLE
// -----------------------------
const tableBody = document.getElementById("tableBody");

function render(){
tableBody.innerHTML="";

creators.forEach(c=>{
tableBody.innerHTML += `
<tr>
    <td><span class="creator-name"
        data-name="${c.name}"
        data-brand="${c.brand}"
        data-campaign="${c.campaign}"
        data-status="${c.status}"
        data-summary="${c.summary}">
        ${c.name}
    </span></td>

    <td>${c.brand}</td>
    <td>${c.campaign}</td>
    <td><span class="status">${c.status}</span></td>
    <td>${c.summary}</td>
</tr>
`;
});
}

render();

// -----------------------------
// SEARCH
// -----------------------------
document.getElementById("search").addEventListener("input",function(){
let val=this.value.toLowerCase();

document.querySelectorAll("tbody tr").forEach(row=>{
row.style.display=row.innerText.toLowerCase().includes(val)?"":"none";
});
});

// -----------------------------
// STATUS COLORS
// -----------------------------
setTimeout(()=>{
document.querySelectorAll(".status").forEach(s=>{
let t=s.innerText.toLowerCase();

if(t==="approved") s.style.background="#16a34a";
if(t==="warning") s.style.background="#f59e0b";
if(t==="rejected") s.style.background="#ef4444";
if(t==="on hold") s.style.background="#3b82f6";

s.style.color="white";
});
},100);

// -----------------------------
// HOVER ONLY ON NAME
// -----------------------------
const card=document.getElementById("profileCard");

document.querySelectorAll(".creator-name").forEach(el=>{

el.addEventListener("mouseenter",(e)=>{
card.classList.remove("hidden");

card.innerHTML=`
<h3>${el.dataset.name}</h3>
<p><b>Brand:</b> ${el.dataset.brand}</p>
<p><b>Campaign:</b> ${el.dataset.campaign}</p>
<p><b>Status:</b> ${el.dataset.status}</p>
<p>${el.dataset.summary}</p>
`;
});

el.addEventListener("mousemove",(e)=>{
card.style.left=e.pageX+15+"px";
card.style.top=e.pageY+15+"px";
});

el.addEventListener("mouseleave",()=>{
card.classList.add("hidden");
});
});