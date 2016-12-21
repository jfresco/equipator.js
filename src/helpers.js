module.exports.score = players => players.map(({ score }) => score)
  .reduce((total, score) => {
    total += score
    return total
  }, 0)

module.exports.notIn = (arr1, arr2) => arr1.filter(e => !arr2.includes(e))

module.exports.hasGK = team => team.players.filter(({ gk }) => gk).length > 0
