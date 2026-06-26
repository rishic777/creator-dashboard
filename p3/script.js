// ----------------------
// 30 CREATORS DATA
// ----------------------

const creators = [
{
name:"Molly Jhamb", brand:"Luma", campaign:"Luma India",
status:"Warning", reason:"Other", summary:"Creator asked for email",
priority:"Urgent"
},
{
name:"Rosa Aline", brand:"UGC Brazil", campaign:"8x UGC",
status:"Rejected", reason:"Bot failure", summary:"Bot could not load",
priority:"Urgent"
},
{
name:"Emma Johnson", brand:"Nova Skincare", campaign:"US Campaign",
status:"Approved", reason:"Good match", summary:"High quality content",
priority:"High"
},
{
name:"Olivia Brown", brand:"GlowUp", campaign:"UK Campaign",
status:"Warning", reason:"More review", summary:"Needs content samples",
priority:"High"
},
{
name:"Sophia Miller", brand:"FitLife", campaign:"Canada", status:"On Hold",
reason:"Waiting info", summary:"Waiting creator details",
priority:"Medium"
}
];

// duplicate to make 30
while(creators.length < 30){
creators.push({
name:"Creator "+creators.length,
brand:"Brand X",
campaign:"Campaign Y",
status:["Approved","Rejected","Warning","On Hold"][Math.floor(Math.random()*4)],
reason:"Auto",
summary:"Auto generated profile",
priority:"Medium"
});
}

// ----------------------
// RENDER TABLE
// ----------------------

const tableBody = document.getElementById("tableBody");

function render(){
tableBody.innerHTML = "";

creators.forEach((c,i)=>{

tableBody.innerHTML += `
<tr class="row"
data-name="${c.name}"
data-brand="${c.brand}"
data-campaign="${c.campaign}"
data-status="${c.status}"
data-reason="${c.reason}"
data-summary="${c.summary}"
data-priority="${c.priority}">

<td>${c.priority}</td>
<td>${c.name}</td>
<td>${c.brand}</td>
<td>${c.campaign}</td>
<td><span class="status">${c.status}</span></td>
<td>${c.reason}</td>
<td>${c.summary}</td>

</tr>
`;

});
}

render();

// ----------------------
// SEARCH
// ----------------------

document.getElementById("search").addEventListener("input",function(){
let val=this.value.toLowerCase();

document.querySelectorAll("tbody tr").forEach(row=>{
row.style.display=row.innerText.toLowerCase().includes(val)?"":"none";
});
});

// ----------------------
// STATUS COLORS
// ----------------------

function styleStatus(){
document.querySelectorAll(".status").forEach(s=>{
let t=s.innerText.toLowerCase();

if(t.includes("approved")) s.style.background="#dcfce7", s.style.color="#166534";
if(t.includes("warning")) s.style.background="#fef3c7", s.style.color="#92400e";
if(t.includes("rejected")) s.style.background="#fee2e2", s.style.color="#991b1b";
if(t.includes("hold")) s.style.background="#dbeafe", s.style.color="#1e40af";
});
}

setTimeout(styleStatus,100);

// ----------------------
// HOVER PROFILE CARD
// ----------------------

const card=document.getElementById("profileCard");

document.querySelectorAll(".row").forEach(row=>{

row.addEventListener("mouseenter",e=>{
card.classList.remove("hidden");

card.innerHTML=`
<h3>${row.dataset.name}</h3>
<p><b>Brand:</b> ${row.dataset.brand}</p>
<p><b>Campaign:</b> ${row.dataset.campaign}</p>
<p><b>Status:</b> ${row.dataset.status}</p>
<p>${row.dataset.summary}</p>
`;
});

row.addEventListener("mousemove",e=>{
card.style.left=e.pageX+20+"px";
card.style.top=e.pageY+20+"px";
});

row.addEventListener("mouseleave",()=>{
card.classList.add("hidden");
});
});