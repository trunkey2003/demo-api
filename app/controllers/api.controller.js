const Post = require('./models/post.model');

class ApiController{
    showPost(req,res,next){
        Post.find({}) 
        .then((posts) => res.json(posts))
    }
}

module.exports = new ApiController;