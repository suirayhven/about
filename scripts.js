document.addEventListener('DOMContentLoaded', function() {
    const containerDiv = document.querySelector('.container');
    const contentDiv = containerDiv.querySelector('#textBody');

    // Display the first paragraph
    const firstParagraph = contentDiv.querySelector('p');
    firstParagraph.style.display = 'block';

    // Append ellipsis and SVG to the first paragraph
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

    // Append ellipsis and SVG to the first paragraph
    firstParagraph.appendChild(ellipsisSvg);

    // Hide ellipsis and SVG for other paragraphs
    const paragraphs = contentDiv.querySelectorAll('p');
    for (const paragraph of paragraphs) {
        if (paragraph !== firstParagraph) {
            const ellipsisSvg = paragraph.querySelector('svg');
            if (ellipsisSvg) {
                ellipsisSvg.style.display = 'none';
            }
        }
    }

    // Handle click events on contentDiv
    contentDiv.addEventListener('click', function() {
        console.log('click event fired'); // Log to check if the click event is firing
        
        // Find the next paragraph to display
        const nextParagraph = contentDiv.querySelector('p:not([style="display: block;"])');
        if (nextParagraph) {
            // Show the next paragraph
            nextParagraph.style.display = 'block';

            // Hide ellipsis and SVG for other paragraphs
            for (const paragraph of paragraphs) {
                if (paragraph !== nextParagraph) {
                    const ellipsisSvg = paragraph.querySelector('svg');
                    if (ellipsisSvg) {
                        ellipsisSvg.style.display = 'none';
                    }
                }
            }

            // Append ellipsis and SVG to the next paragraph
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

            // Append ellipsis and SVG to the next paragraph
            nextParagraph.appendChild(ellipsisSvg);
        }
    });
});
