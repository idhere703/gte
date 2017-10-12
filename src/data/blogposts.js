import moment from 'moment';
const PostModel = {};

PostModel.formatPostDate = (date) => {
  return moment(date).format('MMMM DD YYYY');
};

const posts = [
  {
    title: 'Man must explore, and this is exploration at its greatest',
    subtitle: 'Problems look mighty small from 150 miles up',
    postedBy: ' My girl my girl my girl ',
    active: true,
    postedAt: PostModel.formatPostDate(new Date(2016, 9, 24)),
    postId: 0,
    imgClass: 'post-header-space',
    content: ('<div><p>Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman\'s earth, if free men make it, will be truly round: a globe in practice, not in theory.</p> <p>Science cuts two ways, of course; its products can be used for both good and evil. But there\'s no turning back from science. The early warnings about technological dangers also come from science.</p> <p>What was most significant about the lunar voyage was not that man set foot on the Moon but that they set eye on the earth.</p> <p>A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors rather than her violators. That\'s how I felt seeing the Earth for the first time. I could not help but love and cherish her.</p> <p>For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.</p> <h2 className="section-heading">The Final Frontier</h2> <p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p> <p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p> <blockquote>The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next ten.</blockquote> <p>Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development.</p> <h2 className="section-heading">Reaching for the Stars</h2> <p>As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.</p> <a href="#"></a> <span className="caption text-muted">To go places and do things that have never been done before – that’s what living is all about.</span> <p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.</p> <p>As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore, and this is exploration at its greatest.</p> <p>Placeholder text by <a href="http://spaceipsum.com/">Space Ipsum</a>. Photographs by <a href="https://www.flickr.com/photos/nasacommons/">NASA on The Commons</a>.</p></div>')
  }, {
    title: 'No one rejects, dislikes, or avoids pleasure itself, because it is pleasure',
    subtitle: 'but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',
    postedBy: ' Other persona ',
    active: true,
    postedAt: PostModel.formatPostDate(new Date(2016, 9, 18)),
    postId: 1,
    imgClass: 'post-header-cisero',
    content: ('<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p> <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p> <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?</p> <p>But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee</p>')

  }, {
    title: 'A wonderful serenity has taken possession of my entire soul',
    subtitle: 'like these sweet mornings of spring which I enjoy with my whole heart.',
    postedBy: ' Someone ',
    active: true,
    postedAt: PostModel.formatPostDate(new Date(2016, 8, 24)),
    postId: 2,
    imgClass: 'post-header-werther',
    content: ('<p>I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.</p> <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.</p> <p>When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath</p>')
  }, {
    title: 'One morning, when Gregor Samsa woke from troubled dreams',
    subtitle: 'he found himself transformed in his bed into a horrible vermin.',
    postedBy: ' Kafka ',
    active: true,
    postedAt: PostModel.formatPostDate(new Date(2016, 8, 15)),
    postId: 3,
    imgClass: 'post-header-kafka',
    content: ('<p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p> <p>His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me? " he thought. It wasn\'t a dream.</p> <p>His room, a proper human room although a little too small, lay peacefully between its four familiar walls.</p> <p>A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops</p>')
  }
];


PostModel.getPosts = () => {
  return posts.filter(post => post.active === true);
};

/**
 * Gets a single post.
 * @param {String} id   A post id passed as a string.
 * @return {Object}     The post that matches the passed id. Or undefined if not found.
 */
PostModel.getPost = (id) => {
  return posts.find((post) => id === post.postId.toString() && post.active === true);
};

PostModel.getMostRecentPost = () => {
  // Normally we would do this by postedAt. But I don't feel like mocking the data _that_ well.
  // #lazyDemo? I actually hate the '#' craze that's going on right now. That was a sarcastic '#'.
  return posts[0];
};

export default PostModel;

