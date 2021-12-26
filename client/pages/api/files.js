import formidable from 'formidable'
import { readFileSync, writeFileSync, unlinkSync } from 'fs'

export const config = {
  api: {
    bodyParser: false
  }
}

async function post (req, res) {
  const form = new formidable.IncomingForm()
  form.parse(req, async function (err, fields, files) {
    if (err) throw new Error(err)

    await saveFile(files.file)
    return res.status(201).send('File uploaded')
  })
}

async function saveFile ({ path, name }) {
  const data = readFileSync(path)
  writeFileSync(`./public/imgs/${name}`, data)
  await unlinkSync(path)
}

export default (req, res) => {
  switch (req.method) {
  case 'POST':
    return post(req, res)
  default:
    return res.status(405).send(`Method ${req.method} not allowed`)
  }
}
