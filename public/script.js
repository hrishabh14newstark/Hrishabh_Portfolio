const displayArea = document.getElementById('display-area');
const navButtons = document.querySelectorAll('.nav-btn');

async function loadSection(sectionName) {
  try {
    displayArea.innerHTML = '<p class="loader">Loading...</p>';
    const response = await fetch(`/api/section/${encodeURIComponent(sectionName)}`);
    const data = await response.json();

    if (data.success) {
      displayArea.innerHTML = data.content;
    } else {
      displayArea.innerHTML = '<p>Content unavailable.</p>';
    }
  } catch (error) {
    displayArea.innerHTML = '<p>Failed to connect to backend server.</p>';
  }
}

navButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    navButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const section = btn.getAttribute('data-section');
    loadSection(section);
  });
});

// Initial load
loadSection('about');
