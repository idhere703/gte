import moment from 'moment';
const CommentModel = {};

CommentModel.formatCommentDate = (date) => {
    return moment(date).format('MMMM DD YYYY');
};

const comments = [
    {
        commentId: 0,
        postedBy: 'My girl my girl my girl',
        postedAt: CommentModel.formatCommentDate(new Date(2016, 8, 24)),
        postId: 0,
        content: ('I made some comments!')
    },
    {
        commentId: 1,
        postedBy: 'Other person',
        postedAt: CommentModel.formatCommentDate(new Date(2016, 8, 25)),
        postId: 0,
        content: ('So did I!')
    },
    {
        commentId: 2,
        postedBy: 'My girl my girl my girl',
        postedAt: CommentModel.formatCommentDate(new Date(2016, 8, 26)),
        postId: 1,
        content: ('I made some comments!')
    },
    {
        commentId: 3,
        postedBy: 'Other person',
        postedAt: CommentModel.formatCommentDate(new Date(2016, 8, 27)),
        postId: 1,
        content: ('... Hey, didn\'t you already comment that on another post?')
    },
    {
        commentId: 4,
        postedBy: 'My girl my girl my girl',
        postedAt: CommentModel.formatCommentDate(new Date(2016, 8, 28)),
        postId: 2,
        content: ('I made some comments!')
    },
    {
        commentId: 5,
        postedBy: 'Other person',
        postedAt: CommentModel.formatCommentDate(new Date(2016, 8, 29)),
        postId: 2,
        content: ('Ah, you\'re one of those....')
    },
    {
        commentId: 6,
        postedBy: 'Other person',
        postedAt: CommentModel.formatCommentDate(new Date(2016, 8, 30)),
        postId: 3,
        content: ('Huh, I guess he finally got tired of posting the same comment over and over again. Well alright.')
    },
    {
        commentId: 7,
        postedBy: 'My girl my girl my girl',
        postedAt: CommentModel.formatCommentDate(new Date(2016, 8, 30)),
        postId: 3,
        content: ('I made some comments!')
    },
    {
        commentId: 8,
        postedBy: 'Other person',
        postedAt: CommentModel.formatCommentDate(new Date(2016, 8, 30)),
        postId: 3,
        content: ('I hate you.')
    },
];


CommentModel.getComments = (postId) => {
    return comments.filter(comment => comment.postId.toString() === postId.toString());
};

CommentModel.addComment = (comment) => {
    // Should probably validate this. And also hook up the backend.
    comments.push(comment);
};

export default CommentModel;

