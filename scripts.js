import sentences from './scripts/stories/recap.js';

let currentSentenceIndex = 0;
let previousSvgs = [];

function displayNextSentence() {
    const textBody = document.getElementById("textBody");

    previousSvgs.forEach(svg => {
        svg.parentNode.removeChild(svg);
    });
    previousSvgs = [];

    if (currentSentenceIndex < sentences.length) {
        const currentSentence = sentences[currentSentenceIndex];

        if (currentSentence.html) {
            // If the sentence contains HTML, append it directly to the text body
            textBody.innerHTML += currentSentence.html;

            if (currentSentence.html !== "" && currentSentence.html !== "!!end") {
                // After HTML is added, append the ellipsis SVG if necessary
                appendEllipsisSVG(textBody.lastChild);
            }
        } else {
            // If it's plain text, create a paragraph element and append it
            const paragraph = document.createElement("p");
            paragraph.textContent = currentSentence.text;
            paragraph.id = currentSentence.id;
            textBody.appendChild(paragraph);

            if (currentSentence.text.trim() !== "" && currentSentence.text !== "!!end") {
                // After plain text is added, append the ellipsis SVG if necessary
                appendEllipsisSVG(paragraph);
            }
        }

        if (currentSentence.html === '!!end') {
            // If the sentence contains the end code word, clear the text body
            textBody.innerHTML = "";
            currentSentenceIndex++;
            displayNextSentence();
        } 
        else if (!currentSentence.html && currentSentence.html !== '') {
            // If the HTML property is missing or empty, treat it as an empty line
            const emptyLine = document.createElement("p");
            emptyLine.innerHTML = "&nbsp;"; // Empty line
            textBody.appendChild(emptyLine);
            currentSentenceIndex++; // Increment immediately
            // Print the next sentence
            displayNextSentence();
        } 
        else {
            // Move to the next sentence
            currentSentenceIndex++;
        }
        
    }
}

function appendEllipsisSVG(element) {
    // Append the ellipsis SVG directly into the provided element
    const ellipsisSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    ellipsisSvg.setAttribute("version", "1.1");
    ellipsisSvg.setAttribute("id", "next");
    ellipsisSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    ellipsisSvg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    ellipsisSvg.setAttribute("x", "0px");
    ellipsisSvg.setAttribute("y", "0px");
    ellipsisSvg.setAttribute("viewBox", "0 0 612 792");
    ellipsisSvg.setAttribute("style", "enable-background:new 0 0 612 792;");
    ellipsisSvg.setAttribute("width", "38px");
    ellipsisSvg.setAttribute("height", "38px");
    ellipsisSvg.setAttribute("xml:space", "preserve");
    ellipsisSvg.innerHTML = `<style type="text/css"> .st0{fill:#353535;} </style> 
    <path class="st0" d="M288,141.89L167.78,318L288,689l120.22-371L288,141.89z M288,331.83c-23.66,0-42.83-19.17-42.83-42.83 c0-23.66,19.17-42.83,42.83-42.83s42.83,19.17,42.83,42.83C330.83,312.66,311.66,331.83,288,331.83z"/>`;
    element.appendChild(ellipsisSvg);
    // Store the SVG element in the array
    previousSvgs.push(ellipsisSvg);
}

document.addEventListener('DOMContentLoaded', function () {
    displayNextSentence();
});

document.body.addEventListener('click', function (event) {
    const header = document.querySelector('.header');
    if (!header.contains(event.target)) {
        displayNextSentence();
    }
});
