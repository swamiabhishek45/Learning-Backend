import express from 'express'

const app = express();

// middleware
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.send("Server is ready")
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "A Joke",
            content: "This is a joke"
        },
        {
            id: 2,
            title: "A Joke",
            content: "This is a joke"
        },
        {
            id: 3,
            title: "A Joke",
            content: "This is a joke"
        },
        {
            id: 4,
            title: "A Joke",
            content: "This is a joke"
        },
        {
            id: 5,
            title: "A Joke",
            content: "This is a joke"
        },
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serves at http://localhost:${port}`);
    
})