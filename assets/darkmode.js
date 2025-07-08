const toggle = document.getElementById('darkmode-toggle');
toggle.onclick = function() {
  document.body.classList.toggle('light');
  if (document.body.classList.contains('light')) {
    document.documentElement.style.setProperty('--bg', '#f7f7f7');
    document.documentElement.style.setProperty('--fg', '#121212');
    document.documentElement.style.setProperty('--card', '#fff');
    document.documentElement.style.setProperty('--nav', '#e5e7eb');
  } else {
    document.documentElement.style.setProperty('--bg', '#121212');
    document.documentElement.style.setProperty('--fg', '#f7f7f7');
    document.documentElement.style.setProperty('--card', '#222');
    document.documentElement.style.setProperty('--nav', '#191919');
  }
};
