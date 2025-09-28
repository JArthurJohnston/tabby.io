import fs from 'fs'
import path from 'path'

const tunesDir = './public/tunes'
const abcSongs = []

const songFiles = fs.readdirSync(tunesDir)
songFiles.forEach((eachFile) => {
  console.log('Processing ' + eachFile);
  
  const filePath = path.join(tunesDir, eachFile)
  const contents = fs.readFileSync(filePath, 'utf-8')
  abcSongs.push({
    name: eachFile.split('.abc')[0],
    filePath,
    contents,
  })
})

console.log(`Processed ${abcSongs.length} abc files`);

const sorted = abcSongs.sort((a, b) => a.name >b.name)

fs.writeFileSync(
  path.join('./src/arrangements', 'abc-songs.json'),
  JSON.stringify(sorted, null, 2),
)
