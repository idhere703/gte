const CommentModel = {};
const comments = [
    {
        commentId: 0,
        postedBy: ' My girl my girl my girl ',
        postedAt: ' on September 24, 2018 ',
        postId: 0,
        content: ('I made some comments!')
    },
    {
        commentId: 1,
        postedBy: ' Other person ',
        postedAt: ' on September 25, 2018 ',
        postId: 0,
        content: ('So did I!')
    },
    {
        commentId: 2,
        postedBy: ' My girl my girl my girl ',
        postedAt: ' on September 26, 2018 ',
        postId: 1,
        content: ('I made some comments!')
    },
    {
        commentId: 3,
        postedBy: ' Other person ',
        postedAt: ' on September 27, 2018 ',
        postId: 1,
        content: ('... Hey, didn\'t you already comment that on another post?')
    },
    {
        commentId: 4,
        postedBy: ' My girl my girl my girl ',
        postedAt: ' on September 28, 2018 ',
        postId: 2,
        content: ('I made some comments!')
    },
    {
        commentId: 5,
        postedBy: ' Other person ',
        postedAt: ' on September 29, 2018 ',
        postId: 2,
        content: ('Ah, you\'re one of those....')
    },


    {
        commentId: 6,
        postedBy: ' Other person ',
        postedAt: ' on September 30, 2018 ',
        postId: 3,
        content: ('Huh, I guess he finally got tired of posting the same comment over and over again. Well alright.')
    },
    {
        commentId: 7,
        postedBy: ' My girl my girl my girl ',
        postedAt: ' on September 30, 2018 ',
        postId: 3,
        content: ('I made some comments!')
    },
    {
        commentId: 8,
        postedBy: ' Other person ',
        postedAt: ' on September 30, 2018 ',
        postId: 3,
        content: ('I hate you.')
    },


];


CommentModel.getComments = (postId) => {
    return comments.filter(comment => comment.postId.toString() === postId.toString());
};

export default CommentModel;

