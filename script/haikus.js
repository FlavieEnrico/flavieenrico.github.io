export function haikusLoad(data) {
  const haikusContainer = document.getElementById('haikus_js');
  haikusContainer.innerHTML = '';

  data.haikus.forEach(haiku => {
    const haikuDiv = document.createElement('div');
    haikuDiv.className = 'haiku';
    haikuDiv.innerHTML = `
      <p>${haiku.haiku}</p>
    `;
    haikusContainer.appendChild(haikuDiv);
  });
}