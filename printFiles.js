const fs = require('fs');
const path = require('path');
const ActiveXObject = require('winax').ActiveXObject;

// Folder path for your Word files
const folderPath = 'C:\\KAIS\\C0623';

// Create an instance of Word
const word = new ActiveXObject('Word.Application');
word.Visible = false;  // Make Word invisible

// Get all files in the folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  // Filter to get only .docx files
  const wordFiles = files.filter(file => file.endsWith('.docx'));

  wordFiles.forEach(file => {
    const filePath = path.join(folderPath, file);
    console.log(`Printing ${filePath}...`);

    // Open the document
    const document = word.Documents.Open(filePath);
    document.PrintOut();  // Print the document
    document.Close(false); // Close the document without saving
  });

  // Quit Word
  word.Quit();
});
