// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Disable developer tools shortcuts
document.addEventListener('keydown', function(e) {
    // F12
    if (e.key === 'F12') {
        e.preventDefault();
    }
    // Ctrl+Shift+I (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
    }
    // Ctrl+Shift+C (Inspect Element - alternate)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
    }
    // Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
    }
    // Ctrl+Shift+K (Console - alternate)
    if (e.ctrlKey && e.shiftKey && e.key === 'K') {
        e.preventDefault();
    }
    // Ctrl+Shift+M (Device toolbar)
    if (e.ctrlKey && e.shiftKey && e.key === 'M') {
        e.preventDefault();
    }
});
