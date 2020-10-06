const fs = require("fs")

type Data = {
  word: string
  meaning: string
}

const data: Data[] = require("./gre.json")

const improvedData = data
  .map((datainside) => {
    return { ...datainside, word: datainside.word.charAt(0).toUpperCase() + datainside.word.slice(1) }
  })
  .sort(function (a, b) {
    var textA = a.word
    var textB = b.word
    return textA < textB ? -1 : textA > textB ? 1 : 0
  })

const toWrite = JSON.stringify(improvedData)
fs.writeFileSync("student-2.json", toWrite)

console.log(improvedData)
