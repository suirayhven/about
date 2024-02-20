// Sentences to display
const sentences = [
    "This is the first hidden paragraph.",
    "This is the second hidden paragraph.",
    "This is the third hidden paragraph.",
    "This is the fourth hidden paragraph.",
    "This is the fifth hidden paragraph.",
    "This is the sixth hidden paragraph.",
    "This is the seventh hidden paragraph.",
    "This is the eighth hidden paragraph.",
    "This is the ninth hidden paragraph.",
    "This is the tenth hidden paragraph.",
    "This is the eleventh hidden paragraph."
];

let currentSentenceIndex = 0; // Index to keep track of the current sentence
let previousParagraphs = []; // Array to store previous paragraphs
let previousSvgs = []; // Array to store previous SVG elements

// Function to display the next sentence with typing animation
function displayNextSentence() {
    const textBody = document.getElementById("textBody");

    // Remove SVG elements from all previous paragraphs
    previousSvgs.forEach(svg => {
        svg.parentNode.removeChild(svg);
    });
    previousSvgs = [];

    if (currentSentenceIndex < sentences.length) {
        const sentence = sentences[currentSentenceIndex];
        const paragraph = document.createElement("p");

        textBody.appendChild(paragraph);

        let charIndex = 0;
        const typingInterval = setInterval(() => {
            paragraph.textContent += sentence[charIndex];
            charIndex++;
            if (charIndex === sentence.length) {
                clearInterval(typingInterval);
                // After typing is complete, append the ellipsis SVG to the paragraph
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
                paragraph.appendChild(ellipsisSvg);
                // Show the paragraph
                paragraph.style.display = "block";
                // Scroll to the newly displayed paragraph
                paragraph.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                // Store the paragraph and SVG element in arrays
                previousParagraphs.push(paragraph);
                previousSvgs.push(ellipsisSvg);
            }
        }, 20); // Typing speed (adjust as needed)

        currentSentenceIndex++; // Move to the next sentence
    }
}

// Call the function to display the first sentence when the page loads
document.addEventListener('DOMContentLoaded', function() {
    displayNextSentence();
});

// Handle click events on the document to display the next sentence
document.addEventListener('click', function() {
    displayNextSentence();
});
