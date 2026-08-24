const fs = require('fs');
const path = require('path');

const PROMPTS_DIR = path.join(__dirname, 'Hil_Kalathiya_Airbnb_Clone_TakeHome', 'ai-workflow', 'prompts');
const OUTPUT_FILE = path.join(__dirname, 'Hil_Kalathiya_Airbnb_Clone_TakeHome', 'ai-workflow', 'ALL_PROMPTS_COMBINED.md');

const promptFiles = [
  "Airbnb Clone — Master Project Brief & AI Engineering Instructions.md",
  "Chunk 0 — Reference Assets & Visual Specification.md",
  "CHUNK 0.5 — Validate Reference Specification Against Complete Screenshots.md",
  "CHUNK 1 — Project Foundation, Data Layer & Asset Wiring.md",
  "CHUNK 1.1 — Fix Data Model and Restore Clean Validation.md",
  "CHUNK 2 — Architecture, Component System & ESLint Foundation.md",
  "CHUNK 3 — Header, Global Visual Shell & Page Container.md",
  "CHUNK 3.1 — Header Visual Correction and Reference Lock.md",
  "CHUNK 3.2 — Airbnb Cereal Font Integration and Header Typography Lock.md",
  "CHUNK 3.5 — Reference HTML Forensics, Exact Header Reconstruction & Photo Tour Source Analysis.md",
  "CHUNK 3.8 — Reference Runtime Geometry Lock.md",
  "CHUNK 4 — Exact Listing Title + Hero Gallery Implementation.md",
  "CHUNK 4.1 — Hero Title Typography and Show All Photos Pixel Correction.md",
  "CHUNK 4.2 — Exact Scroll-State Sticky Header.md",
  "CHUNK 5 — Exact Photo Tour Implementation.md",
  "chunk 5.1.md",
  "chunk 5.2.md",
  "chunk 6.md",
  "Chunk 6.1.md",
  "chunk 7.md",
  "chunk7.1.md",
  "chunk7.2.md",
  "chunk8.md",
  "chunk9.md",
  "chunk10.md",
  "chunk11.md",
  "chunk12.md",
  "final_subbmition.md"
];

let combinedContent = "# 📚 Airbnb Clone — Master AI Workflow & Prompt History\n\n";
combinedContent += "This document contains the complete, uncut sequence of all AI engineering prompts used to iteratively build this project from foundation to final submission. Each section perfectly mirrors the exact context instructions passed to the agent.\n\n";
combinedContent += "---\n\n";

for (const file of promptFiles) {
  const filePath = path.join(PROMPTS_DIR, file);
  if (fs.existsSync(filePath)) {
    console.log(`Processing: ${file}`);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Clean up filename to be a nice header title without .md
    let sectionTitle = file.replace('.md', '');
    
    combinedContent += `## 🔹 ${sectionTitle}\n\n`;
    combinedContent += `${content.trim()}\n\n`;
    combinedContent += `\n---\n\n`;
  } else {
    console.log(`Warning: File not found - ${file}`);
  }
}

fs.writeFileSync(OUTPUT_FILE, combinedContent, 'utf8');
console.log(`\n✅ Successfully generated ALL_PROMPTS_COMBINED.md!`);
console.log(`Location: ${OUTPUT_FILE}`);
