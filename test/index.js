/* globals describe it */
const assert = require('assert')
const { getBestCombinations } = require('../')

const players = [
  { nick: 'alvaro', name: 'Álvaro Crespo', score: 3.5, gk: false },
  { nick: 'chalo', name: 'Gonzalo García', score: 4.0, gk: true },
  { nick: 'claudio', name: 'Claudio Graiño', score: 4.0, gk: false },
  { nick: 'diego', name: 'Diego Kenny', score: 3.6, gk: false },
  { nick: 'puma', name: 'Ezequiel Erbaro', score: 3.6, gk: false },
  { nick: 'gonchu', name: 'Gonzalo Beviglia', score: 3.4, gk: false },
  { nick: 'guasho', score: 3.8, gk: false },
  { nick: 'gus', name: 'Gustavo Báez', score: 2.7, gk: true },
  { nick: 'juan', name: 'Juan Barreneche', score: 2.8, gk: false },
  { nick: 'leanucci', name: 'Leandro Marcucci', score: 3.5, gk: false },
  { nick: 'juanlg', score: 3.2, gk: false },
  { nick: 'licha', name: 'Nicolás Gleichgerrcht', score: 2.0, gk: false },
  { nick: 'luk', name: 'Lucas Vidal', score: 3.0, gk: false },
  { nick: 'magui', name: 'Magdalena Barrenese', score: 2.5, gk: false },
  { nick: 'marianf', name: 'Mariano Fernandez', score: 2.1, gk: false },
  { nick: 'marianoc', name: 'Mariano C.', score: 2.5, gk: false },
  { nick: 'mati', name: '', score: 3.7, gk: false },
  { nick: 'miauro', name: '', score: 4.1, gk: true },
  { nick: 'nicoc', name: '', score: 4.5, gk: false },
  { nick: 'nicoa', name: '', score: 3.1, gk: false },
  { nick: 'nicor', name: '', score: 3.5, gk: false },
  { nick: 'rivi', name: '', score: 3.1, gk: false },
  { nick: 'rodri', name: '', score: 3.1, gk: false },
  { nick: 'roma', name: '', score: 2.7, gk: false },
  { nick: 'santi', name: '', score: 3.0, gk: false },
  { nick: 'tano', name: '', score: 3.0, gk: false },
  { nick: 'tast', name: '', score: 3.0, gk: false },
  { nick: 'jose', name: '', score: 3.0, gk: false },
  { nick: 'js', name: '', score: 3.1, gk: false }
]

describe('Possible combinations', () => {
  const combinations = getBestCombinations(players.slice(0, 10))

  it('first combination is the best', done => {
    const first = combinations[0]
    assert(combinations.every(({ diff }) => Math.abs(diff) >= Math.abs(first.diff)))
    done()
  })
})

describe('Best combination', () => {
  const { team1, team2 } = getBestCombinations(players.slice(0, 10))[0]

  it('each team has 5 players', done => {
    assert.equal(team1.players.length, 5)
    assert.equal(team2.players.length, 5)
    done()
  })

  it('each team has one goalkeeper', done => {
    assert.equal(team1.players.filter(({ gk }) => gk).length, 1)
    assert.equal(team2.players.filter(({ gk }) => gk).length, 1)
    done()
  })
})
