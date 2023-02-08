const express = require('express')
const app = express()
const openai = require('openai')

openai.apiKey = "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";

app.get('/', (req, res) => {
  return  
})

app.post('/search', (req, res) => {
    const { query } = req.body
    openai.completions.create({
      prompt: `search ${query}`,
      model: "text-davinci-002",
      temperature: 0.5
    }).then(response => {
      res.send(response.choices[0].text)
    });
  
  })
  
app.use(express.json())

app.listen(4000, () => {
    console.log('Server started on port 4000')
})