// Parse initial count from URL parameters if someone shared a link
const urlParams = new URLSearchParams(window.location.search);
let whiteCount = parseInt(urlParams.get('white')) || 0;
let blackCount = parseInt(urlParams.get('black')) || 0;

function updateDisplay() {
  document.getElementById('white-count').innerText = whiteCount;
  document.getElementById('black-count').innerText = blackCount;

  // Render visual beans
  document.getElementById('white-jar').innerHTML = '⚪ '.repeat(whiteCount);
  document.getElementById('black-jar').innerHTML = '⚫ '.repeat(blackCount);
}

function addBean(type) {
  if (type === 'white') whiteCount++;
  if (type === 'black') blackCount++;
  updateDisplay();
}

function resetJars() {
  whiteCount = 0;
  blackCount = 0;
  updateDisplay();
}

function shareState() {
  // Generate a shareable URL with current counts
  const shareableUrl = `${window.location.origin}${window.location.pathname}?white=${whiteCount}&black=${blackCount}`;
  
  navigator.clipboard.writeText(shareableUrl).then(() => {
    alert("Shareable link copied to clipboard!");
  });
}

// Initial render on load
updateDisplay();
