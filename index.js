const express = require('express');
const cors = require('cors');


const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());


app.get('/', (req, res) => {
    res.send('<h1>hello blah blah blah blah</h1>')
})

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01788888' },
    { id: 2, name: 'Sumaiya', email: 'sumaiya@gmail.com', phone: '01788888' },
    { id: 3, name: 'Shathi', email: 'shathi@gmail.com', phone: '01788888' },
    { id: 4, name: 'Fahima', email: 'Fahima@gmail.com', phone: '01788888' },
    { id: 5, name: 'Abc', email: 'abc@gmail.com', phone: '01788888' },
    { id: 6, name: 'Rakibul', email: 'rakibul@gmail.com', phone: '01788888' },
    { id: 7, name: 'Sabina', email: 'sabina@gmail.com', phone: '01788888' },
]

app.get('/users', (req, res) => {
    // filter search query
    if (req.query.name) {
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLowerCase().includes( search.toLowerCase()))
        res.send(matched)
    }
    else {
        res.send(users)
        
    }
})

app.get('/user/:id', (req, res) => {

    const id = req.params.id;
    const user = users.find(user => user.id == id)
    console.log(req.path)
    res.send(user)

})



app.post('/user', (req, res) => {
    console.log('request:', req.body)

    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    console.log('request:', req)
    res.send(user)

})

// app.get('/quran/:id', async (req, res)=>{
//     const id = req.params.id
//     const re = await fetch(`https://quran-sim.netlify.app/data/surah/bn/${id}.json`)
//     const data = await re.json()
//     res.send(data)

// })


app.get('*', (req, res) => {
    res.send('sorry not found')
})

app.listen(port, () => {
    console.log('port done')
})