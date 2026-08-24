const fs = require('fs');

const css = fs.readFileSync('e:\\D\\study\\AirBnB_Clone\\airbnb-clone\\extracted_styles.css', 'utf8');

function getRules(className) {
    // Escaping dot for regex if present
    const cleanClass = className.replace('.', '\\.');
    const regex = new RegExp(cleanClass + '[^{]*{[^}]+}', 'g');
    const matches = css.match(regex);
    return matches ? matches.join('\n') : `No rules found for ${className}`;
}

let report = `# Photo Tour Runtime Specification (Static Forensics)\n\n`;
report += `*Note: Extracted from photo_tour.html CSS because browser is frozen.*\n\n`;

report += `## 1. Outer Container (Lightbox / Modal)\n\`\`\`css\n`;
report += getRules('._KpcKWX');
report += `\n\`\`\`\n\n`;

report += `## 2. Photo Tour Header\n\`\`\`css\n`;
report += getRules('._TCWfOg');
report += `\n`;
report += getRules('._bNHEUf');
report += `\n\`\`\`\n\n`;

report += `## 3. Two-Column Layout (Info + Gallery)\n\`\`\`css\n`;
report += getRules('._AWcqip');
report += `\n\`\`\`\n\n`;

report += `## 4. Left Column (Sticky)\n\`\`\`css\n`;
report += getRules('._yZYwUW'); // the left column
report += `\n`;
report += getRules('._AnkvRF'); // Title
report += `\n\`\`\`\n\n`;

report += `## 5. Right Column (Gallery Grid)\n\`\`\`css\n`;
report += getRules('._wdcjGJ'); // Image container
report += `\n`;
report += getRules('._GXrMIo'); // Image wrapper
report += `\n`;
report += getRules('._gKVFNL'); // Another wrapper type?
report += `\n\`\`\`\n\n`;

fs.writeFileSync('e:\\D\\study\\AirBnB_Clone\\airbnb-clone\\photo_tour_specs.md', report);
console.log("Done generating photo_tour_specs.md");
