import Post from './components/post';
import About from './components/about';

export default [
    {
        path: '/about',
        component: About
    },
    {
        path: '/post/:id',
        component: Post
    }
];