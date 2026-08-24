const fs = require('fs');
const html = fs.readFileSync('e:\\D\\study\\AirBnB_Clone\\photo_tour.html', 'utf8');

const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/);
if (styleMatch) {
    // Add newlines after closing braces to make CSS readable
    const formattedCss = styleMatch[1].replace(/}/g, '}\n');
    fs.writeFileSync('e:\\D\\study\\AirBnB_Clone\\airbnb-clone\\extracted_styles.css', formattedCss);
    console.log('Saved extracted_styles.css');
}

const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
if (bodyMatch) {
    // Add newlines after tags to make HTML readable
    const formattedHtml = bodyMatch[1].replace(/></g, '>\n<');
    fs.writeFileSync('e:\\D\\study\\AirBnB_Clone\\airbnb-clone\\extracted_body.html', formattedHtml);
    console.log('Saved extracted_body.html');
}
