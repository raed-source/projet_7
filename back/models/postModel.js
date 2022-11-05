
const postSchema = mongoose.Schema({
    title: { type: String },
    content: { type: String, required: true },
    imgUrl: { type: String },
    like: { type: String },
    dislike: { type: String },
    dateCreate: { type: Date }
});


module.exports = mongoose.model('Post', postSchema);