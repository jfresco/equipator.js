# Equipator

## How to use it
Run this in a terminal:
```
npm install --save equipator
```

Then in your Node app run:
```js
const { getBestCombinations } = require('equipator')
const best = getBestCombinations(players)
```

The first item in the `best` array contains the teams for the fairest match.

## Data
The `players` variable should be an array with the following structure:

```js
const players = [
  { nick: 'alvaro', name: 'Álvaro Crespo', score: 3.5, gk: false },
  { nick: 'chalo', name: 'Gonzalo García', score: 4.0, gk: true },
  { nick: 'claudio', name: 'Claudio Graiño', score: 4.0, gk: false },
  ...
]
```

## Contributing
Issues and PRs are welcomed!

## Credits
This is a port of @alejandrodumas' `equipator` Ruby library.
