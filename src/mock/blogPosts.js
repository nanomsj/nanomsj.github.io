const publishedPosts = [];

const previewPosts = [
  {
    slug: 'after-the-rain',
    date: '2026-11-08',
    title: 'After the Rain',
    body: [
      'The campus paths were still wet when I went out. The trees had emptied most of their leaves onto the pavement, and for once I took the longer way home.',
      'I stopped at the gate to look back. The lights had just come on.',
    ],
  },
  {
    slug: 'the-window-seat',
    date: '2026-11-02',
    title: 'The Window Seat',
    body: ['I opened my notebook on the train and spent the whole ride watching the fields.'],
  },
  {
    slug: 'a-quiet-sunday',
    date: '2026-10-25',
    title: 'A Quiet Sunday',
    body: ['I made tea, put my phone away, and finished the book I started in September.'],
  },
  {
    slug: 'the-long-way-home',
    date: '2026-10-12',
    title: 'The Long Way Home',
    body: ['A bakery was still open on the street I usually pass without noticing.'],
  },
];

const posts =
  process.env.NODE_ENV === 'development' ? [...publishedPosts, ...previewPosts] : publishedPosts;

module.exports = [...posts].sort((first, second) => second.date.localeCompare(first.date));
