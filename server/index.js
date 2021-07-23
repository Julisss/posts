const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const app = express();
const data = require('./data.json');

app.use(cors())
app.use(express.json())

app.get('/data', (req, res) => {
    let data = require('./data.json');

    res.status(200).json(data);
})


app.get('/posts/:id', (req, res) => {
    let data = require('./data.json');

    const {id} = req.params;
    if(id) {
        let post = data.find(item => item.id === +id)

        res.status(200).json(post);
    }
})

// post
app.post('/newpost', (req, res) => {
    let data = require('./data.json');

    const {post} = req.body;
    
    if(post) {
        let posts = []
        posts = data

        let id = Date.now();
        post.id = id;

        posts.push(post);
        fs.writeFile('data.json', JSON.stringify(posts), (err) => {
            if(err) {
                throw err;
            }
             else {
                console.log(post)

                res.status(201).json('Post was created');
            }
        })

    }
})

// put
app.put('/update/:id', (req, res) => { 
    let data = require('./data.json');

    const {id} = req.params;
    const {postChanges} = req.body;

    if(id) {
        let posts = data.map(elem => {
            if(elem.id === +id) {
                elem.title = postChanges.title; 
                elem.text = postChanges.text;
                return elem
            } else {
                return elem
            }
        })
        console.log(posts)
        fs.writeFile('data.json', JSON.stringify(posts), (err) => {
            if(err) {
                throw err;
            }
             else {

                res.status(201).json(`Post ${id} was updated.`);
            }
        })
    }
})

// delete
app.delete('/delete/:id', (req, res) => {
    let data = require('./data.json');

    const {id} = req.params;
    console.log(id)

    if(id) {
        let posts = data.filter(item => item.id !== +id)
        fs.writeFile('data.json', JSON.stringify(posts), (err) => {
            if(err) {
                throw err;
            }
             else {

                res.send(posts);
            }
        })
    }
})

// app.get('/pictures', (req, res) => {
//     let pictures = require('./pictures')
//     cosnole.log(pictures)
//     res.json('ok')

// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))

