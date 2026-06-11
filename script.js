/* =====================================================
ACADEMIC PRESENTATION WEBSITE
Ancient Indian Values in Girish Karnad's Plays
===================================================== */

/* ==========================================
PASSWORDS
========================================== */

const START_PRESENTATION_PASSWORD =
"KARNAD2026_PRESENT";

const PREPARATION_CORNER_PASSWORD =
"ETHICAL_VALUES_2026";

/* ==========================================
SLIDE VARIABLES
========================================== */

let currentSlide = 0;

const slides =
document.querySelectorAll(".slide");

const slideCounter =
document.getElementById("slideCounter");

const progressBar =
document.getElementById("progressBar");

/* ==========================================
DETAIL MODAL DATA
========================================== */

const modalContent = {

introModal: `
<h2>Introduction</h2>

<p>
The synopsis positions Girish Karnad as one of the most important playwrights of modern Indian drama.
</p>

<p>
His plays engage with myth, folklore, ritual, history and cultural traditions while addressing modern ethical concerns.
</p>

<p>
The proposed research investigates ancient Indian values in selected English-translated plays.
</p>

<div class="citation-box">
Citation: Synopsis PDF, Introduction Section
</div>
`,

problemModal: `
<h2>Statement of the Problem</h2>

<ul>
<li>Existing studies focus heavily on myth, history and politics.</li>
<li>Ancient Indian ethical values have not received sustained scholarly attention.</li>
<li>A focused ethical framework remains underexplored.</li>
</ul>

<div class="citation-box">
Citation: Synopsis PDF, Problem Statement Section
</div>
`,

significanceModal: `
<h2>Significance of the Study</h2>

<ul>
<li>Contribution to Karnad criticism.</li>
<li>Contribution to Indian English drama.</li>
<li>Contribution to ethical literary criticism.</li>
<li>Contribution to Indian Knowledge Systems.</li>
<li>Social relevance through ethical reflection.</li>
</ul>

<div class="citation-box">
Citation: Synopsis PDF, Pages 15–18
</div>
`,

literatureModal: `
<h2>Review of Literature</h2>

<p>
Existing scholarship examines Karnad through mythological, historical,
political, feminist, existential and cultural perspectives.
</p>

<p>
The synopsis identifies the need for an ethical-value-centered study.
</p>

<div class="citation-box">
Citation: Synopsis PDF, Literature Review Section
</div>
`,

gapModal: `
<h2>Research Gap</h2>

<ol>
<li>Insufficient ethical investigation.</li>
<li>Ancient Indian values not treated as central framework.</li>
<li>English-translated plays require focused analysis.</li>
<li>Ethical criticism remains limited.</li>
</ol>

<div class="citation-box">
Citation: Synopsis PDF, Research Gap Section
</div>
`,

objectiveModal: `
<h2>Objectives of the Study</h2>

<ol>
<li>Identify ancient Indian values.</li>
<li>Analyze ethical dimensions in selected plays.</li>
<li>Interpret dramatic conflict through ethical frameworks.</li>
<li>Study relation between ancient values and modern concerns.</li>
<li>Assess significance of translations.</li>
</ol>

<div class="citation-box">
Citation: Synopsis PDF, Objectives Section
</div>
`,

questionModal: `
<h2>Research Questions</h2>

<p>
The synopsis proposes multiple research questions examining:
</p>

<ul>
<li>Ancient Indian values</li>
<li>Ethical responsibility</li>
<li>Dharma</li>
<li>Satya</li>
<li>Ahimsa</li>
<li>Karma</li>
<li>Translation and ethical transmission</li>
<li>Modern relevance</li>
</ul>

<div class="citation-box">
Citation: Synopsis PDF, Pages 8–9
</div>
`,

scopeModal: `
<h2>Scope & Delimitation</h2>

<ul>
<li>Selected English-translated plays only.</li>
<li>No linguistic comparison with Kannada originals.</li>
<li>Ethical and literary focus.</li>
<li>Limited corpus of selected plays.</li>
</ul>

<div class="citation-box">
Citation: Synopsis PDF, Scope and Delimitation
</div>
`,

methodModal: `
<h2>Methodology</h2>

<ul>
<li>Qualitative Research</li>
<li>Analytical Method</li>
<li>Descriptive Method</li>
<li>Textual Analysis</li>
<li>Ethical Criticism</li>
<li>Hermeneutic Interpretation</li>
<li>Translation-Aware Reading</li>
</ul>

<div class="citation-box">
Citation: Synopsis PDF, Pages 11–15 and Chapter 4 Description
</div>
`,

chapterModal: `
<h2>Tentative Chapterization</h2>

<ol>
<li>Introduction</li>
<li>Review of Literature</li>
<li>Conceptual Framework</li>
<li>Methodology</li>
<li>Myth, Desire, Duty and Moral Responsibility</li>
<li>Ritual, Sacrifice, Violence and Moral Contradiction</li>
<li>Political Ethics, Kingship and Justice</li>
<li>Findings, Conclusion and Recommendations</li>
</ol>

<div class="citation-box">
Citation: Synopsis PDF, Pages 18–22
</div>
`,

outcomeModal: `
<h2>Expected Outcomes</h2>

<ul>
<li>Identify major ancient Indian values.</li>
<li>Develop ethical framework.</li>
<li>Contribute to Karnad scholarship.</li>
<li>Fill research gap.</li>
<li>Contribute to Indian Knowledge Systems.</li>
<li>Support future research.</li>
</ul>

<div class="citation-box">
Citation: Synopsis PDF, Pages 22–24
</div>
`,

bibliographyModal: `
<h2>Selected Bibliography</h2>

<p><strong>Primary Sources:</strong></p>

<ul>
<li>Collected Plays Volume One</li>
<li>Collected Plays Volume Two</li>
<li>Yayati</li>
<li>Hayavadana</li>
<li>Naga-Mandala</li>
<li>Tughlaq</li>
<li>The Fire and the Rain</li>
<li>Bali: The Sacrifice</li>
<li>Tale-Danda</li>
<li>The Dreams of Tipu Sultan</li>
</ul>

<p><strong>Secondary Sources:</strong></p>

<ul>
<li>Aparna Bhargava Dharwadker</li>
<li>K. R. Srinivasa Iyengar</li>
<li>M. K. Naik</li>
<li>Suresh Awasthi</li>
<li>Kaustav Chakraborty</li>
<li>Jaydipsinh Dodiya</li>
</ul>

<div class="citation-box">
Citation: Synopsis PDF, Pages 24–26
</div>
`
};

/* ==========================================
PASSWORD VERIFICATION
========================================== */

function verifyPresentationPassword() {

const password =
document
.getElementById("presentationPassword")
.value
.trim();

if(password === START_PRESENTATION_PASSWORD){

document
.getElementById("loginScreen")
.classList
.add("hidden");

document
.getElementById("presentationArea")
.classList
.remove("hidden");

showSlide(0);

}
else{

document
.getElementById("presentationError")
.textContent =
"Incorrect password. Please try again.";

}

}

/* ==========================================
PREPARATION LOGIN
========================================== */

function openPreparationLogin(){

document
.getElementById("prepLoginModal")
.style.display = "block";

}

function verifyPrepPassword(){

const password =
document
.getElementById("prepPassword")
.value
.trim();

if(password === PREPARATION_CORNER_PASSWORD){

document
.getElementById("prepLoginModal")
.style.display = "none";

document
.getElementById("preparationCorner")
.classList
.remove("hidden");

document
.getElementById("preparationCorner")
.scrollIntoView({
behavior:"smooth"
});

}
else{

document
.getElementById("prepError")
.textContent =
"Incorrect Preparation Password.";

}

}

/* ==========================================
SLIDE NAVIGATION
========================================== */

function showSlide(index){

slides.forEach(slide=>{
slide.classList.remove("active");
});

slides[index].classList.add("active");

currentSlide = index;

updateCounter();

updateProgress();

window.scrollTo({
top:0,
behavior:"smooth"
});

}

function nextSlide(){

if(currentSlide < slides.length - 1){

showSlide(currentSlide + 1);

}

}

function prevSlide(){

if(currentSlide > 0){

showSlide(currentSlide - 1);

}

}

function goHome(){

showSlide(0);

}

/* ==========================================
COUNTER
========================================== */

function updateCounter(){

if(slideCounter){

slideCounter.textContent =
`Slide ${currentSlide + 1} / ${slides.length}`;

}

}

/* ==========================================
PROGRESS BAR
========================================== */

function updateProgress(){

if(progressBar){

const progress =
((currentSlide + 1) / slides.length) * 100;

progressBar.style.width =
progress + "%";

}

}

/* ==========================================
FULLSCREEN
========================================== */

function toggleFullscreen(){

if(!document.fullscreenElement){

document.documentElement.requestFullscreen();

}
else{

document.exitFullscreen();

}

}

/* ==========================================
MODALS
========================================== */

function openModal(modalId){

const modal =
document.getElementById("detailsModal");

const body =
document.getElementById("modalBody");

body.innerHTML =
modalContent[modalId] ||
"<p>No information available.</p>";

modal.style.display = "block";

}

function closeModal(){

document.getElementById(
"detailsModal"
).style.display = "none";

}

/* ==========================================
CLICK OUTSIDE MODAL
========================================== */

window.onclick = function(event){

const details =
document.getElementById("detailsModal");

const prep =
document.getElementById("prepLoginModal");

if(event.target === details){

details.style.display = "none";

}

if(event.target === prep){

prep.style.display = "none";

}

};

/* ==========================================
KEYBOARD SHORTCUTS
========================================== */

document.addEventListener(
"keydown",
function(event){

switch(event.key){

case "ArrowRight":
nextSlide();
break;

case "ArrowLeft":
prevSlide();
break;

case "Home":
showSlide(0);
break;

case "End":
showSlide(slides.length - 1);
break;

case "Escape":
closeModal();
break;

case "f":
case "F":
toggleFullscreen();
break;

default:
break;

}

}
);

/* ==========================================
ENTER KEY SUPPORT
========================================== */

const presentationPasswordField =
document.getElementById(
"presentationPassword"
);

if(presentationPasswordField){

presentationPasswordField
.addEventListener(
"keypress",
function(event){

if(event.key === "Enter"){

verifyPresentationPassword();

}

}
);

}

const prepPasswordField =
document.getElementById(
"prepPassword"
);

if(prepPasswordField){

prepPasswordField
.addEventListener(
"keypress",
function(event){

if(event.key === "Enter"){

verifyPrepPassword();

}

}
);

}

/* ==========================================
INITIALIZE
========================================== */

document.addEventListener(
"DOMContentLoaded",
function(){

updateCounter();
updateProgress();

}
);

/* ==========================================
ACCESSIBILITY
========================================== */

document.addEventListener(
"keydown",
function(event){

if(
event.key === "Tab" &&
document.getElementById("detailsModal")
.style.display === "block"
){

const focusable =
document
.querySelectorAll(
'#detailsModal button'
);

if(focusable.length){

focusable[0].focus();

}

}

}
);

/* ==========================================
CONSOLE CREDIT
========================================== */

console.log(
"Academic Presentation Website Loaded Successfully"
);
