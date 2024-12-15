// Get references to DOM elements
const markdownInput = document.getElementById('markdown-input');
const markdownPreview = document.getElementById('markdown-preview');
const downloadHtmlButton = document.getElementById('download-html');
const clearInputButton = document.getElementById('clear-input');

// Function to update the Markdown preview
function updatePreview() {
  const markdownText = markdownInput.value;
  markdownPreview.innerHTML = marked.parse(markdownText);
}

// Function to download the preview as an HTML file
function downloadHTML() {
  const htmlContent = markdownPreview.innerHTML;
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'markdown-preview.html';
  a.click();
  URL.revokeObjectURL(url); // Clean up the object URL
}

// Function to clear the Markdown input and preview
function clearInput() {
  markdownInput.value = '';
  markdownPreview.innerHTML = '<p><em>Your Markdown preview will appear here...</em></p>';
}

// Attach event listeners
markdownInput.addEventListener('input', updatePreview);
downloadHtmlButton.addEventListener('click', downloadHTML);
clearInputButton.addEventListener('click', clearInput);
