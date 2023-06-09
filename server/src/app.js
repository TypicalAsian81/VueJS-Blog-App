const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var Post = require("../models/post")
var mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Blog'
mongoose.connect(url ,{ 

    useNewUrlParser: true,
    useUnifiedTopology: true
   });
var db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error"));
db.once("open",function(callback){
    console.log("connection succeeded");
});


app.get('/posts',(req,res) => {
    Post.find({}, 'title description', function (error, posts) {
        if (error){
            console.error(error);
        }
        res.send({
          posts: posts
        })
      }).sort({_id:-1})
})

app.post('/posts',(req,res) => {
    var db = req.db;
    var title = req.body.title;
    var description = req.body.description;
    var new_post = new Post({
        title : title,
        description : description
    })

    new_post.save(function(error) {
        if(error){
            console.log(error);
        }
        res.send({
            success : true,
            message : 'Post saved successfully!'
        })
    })
})

app.listen(process.env.PORT || 8081)
