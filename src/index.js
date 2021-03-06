const { combination } = require('js-combinatorics')
const { notIn, score, hasGK } = require('./helpers')

const isValid = (players, teamSize) => {
  if (players.length !== teamSize * 2) {
    throw new Error(`You must provide ${teamSize * 2} players`)
  }

  return true
}

module.exports.getBestCombinations = (players, teamSize = 5) => isValid(players, teamSize) &&
  combination(players, teamSize)
  .toArray()
  .map(players1 => ({
    players1,
    players2: notIn(players, players1)
  }))
  .map(({ players1, players2 }) => ({
    team1: {
      players: players1,
      score: score(players1)
    },
    team2: {
      players: players2,
      score: score(players2)
    },
    diff: score(players1) - score(players2)
  }))
  .sort((a, b) => Math.abs(a.diff) - Math.abs(b.diff))
  .filter(({ team1, team2 }) => hasGK(team1) && hasGK(team2))
