document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('players-list')) {
      fetch('data.json')
        .then(res => res.json())
        .then(players => {
          const container = document.getElementById('players-list');
          players.forEach(player => {
            container.innerHTML += `
              <div>
                <img src="${player.photo}" width="100">
                <h3><a href="player.html?id=${player.id}">${player.name}</a></h3>
                <p>FIDE Rating: ${player.rating}</p>
              </div>
            `;
          });
        });
    }
  
    if (document.getElementById('player-profile')) {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      fetch('data.json')
        .then(res => res.json())
        .then(players => {
          const player = players.find(p => p.id === id);
          const container = document.getElementById('player-profile');
          if (player) {
            container.innerHTML = `
              <img src="${player.photo}" width="200"><br>
              <h2>${player.name}</h2>
              <p>FIDE Rating: ${player.rating}</p>
              <h3>Tournaments</h3>
              <ul>
                ${player.tournaments.map(t => `<li>${t}</li>`).join('')}
              </ul>
            `;
          }
        });
    }
  });
  