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
    name: eachFile,
    filePath,
    contents,
  })
})

console.log(`Processed ${abcSongs.length} abc files`);


fs.writeFileSync(
  path.join('./src/arrangements', 'abc-songs.json'),
  JSON.stringify(abcSongs, null, 2),
)
