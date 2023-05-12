import { appState } from "../AppState.js"

function drawPlayers() {
  let template = ''

  appState.players.forEach(player => {
    template += `
      <div>
        ${player.name} - ${player.picture}
        <div>
          <button
            class="btn btn-danger"
            onclick="app.heroesController.b('${hero.name}')"
          >B</button>
        </div>
      </div>`
  }
  )
}

export class PlayerController {
  constructor() {
    console.log('is this controller working?')
    drawPlayers()
  }
  a() {
    console.log('you did the things', 'nicely done')
  }
  b(playerName) {
    console.log('better things', 'betterly done')
  }
}