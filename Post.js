import moongose from 'mongoose'


const Post = new moongose.Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    picture: { type: String },
})


export default moongose.model('Post', Post)