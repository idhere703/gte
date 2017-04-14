import Post from './components/post';
import LandingPage from './components/main';

export default [
    {
        path: '/',
        component: LandingPage
    },
    {
        path: '/post/:id',
        component: Post
    }
];