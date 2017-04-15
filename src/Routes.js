import Post from './components/post';
import About from './components/about';
import Contact from './components/contact';

export default [
    {
        path: '/about',
        component: About
    },
    {
        path: '/post/:id',
        component: Post
    },
    {
        path: '/contact',
        component: Contact
    }
];