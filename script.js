// 1. Try to load saved counts from Local Storage or URL parameters
const urlParams = new URLSearchParams(window.location.search);
let whiteCount = parseInt(urlParams.get('white')) || parseInt(localStorage.getItem('whiteCount')) || 0;
let blackCount = parseInt(urlParams.get('black')) || parseInt(localStorage.getItem('blackCount')) || 0;

function updateDisplay() {
  document.getElementById('white-count').innerText = whiteCount;
  document.getElementById('black-count').innerText = blackCount;

  // Render visual beans
  document.getElementById('white-jar').innerHTML = '⚪ '.repeat(whiteCount);
  document.getElementById('black-jar').innerHTML = '⚫ '.repeat(blackCount);

  // Save progress automatically to browser storage
  localStorage.setItem('whiteCount', whiteCount);
  localStorage.setItem('blackCount', blackCount);
}

function addBean(type) {
  if (type === 'white') whiteCount++;
  if (type === 'black') blackCount++;
  updateDisplay();
}

function resetJars() {
  whiteCount = 0;
  blackCount = 0;
  localStorage.removeItem('whiteCount');
  localStorage.removeItem('blackCount');
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
