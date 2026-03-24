document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && ['c', 'a', 'u', 's', 'p'].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
  if (e.key === 'F12') e.preventDefault();
});

document.addEventListener('dragstart', function(e) {
  e.preventDefault();
});

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('selectionchange', function() {
  document.getSelection().removeAllRanges();
});
