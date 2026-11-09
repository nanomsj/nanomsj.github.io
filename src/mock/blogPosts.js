const publishedPosts = [
  {
    slug: 'steak',
    date: '2026-11-09',
    title: '牛排',
    category: 'Recipe',
    lang: 'zh-CN',
    body: [
      '煎牛排教程',
      '1. 牛排需先用厨房纸擦干水分，两面适当撒上盐和黑胡椒粉，最好撒粉后静置几分钟\n2. 使用平底锅。把锅烧热\n3. 倒油，油要和牛排差不多大小，晃一晃使油均匀分布\n4. 用手离油面20cm高，感觉烫手时可以下牛排。牛排竖着拿，一侧先接触锅，慢慢放下，自然滑到锅底（防止溅油）\n5. 转中火等30秒，翻面等30秒\n6. 翻面等1分钟，再翻面等1分钟，如果可以的话往牛排的上面铲点油（6、7两步若牛排比较薄可以每面减去10秒）\n7. 翻面等45秒，再翻面等45秒，如果可以的话往牛排的上面铲点油\n8. 翻面等15秒，再翻面等15秒\n9. 用夹子拿出牛排放在锡纸上，用锡纸把牛排完全包起来，等5分钟（没有锡纸的话下牛排前烧一壶开水，把开水倒在一个可以放下牛排的餐盘里。牛排快好的时候把水倒了，牛排好了放餐盘里然后找个盖子盖上等5分钟）\n就能得到一块接近全熟的牛排！\n特别感谢 @半北 的教程。',
      '第一次尝试如图，很好吃！总结经验是调味要多撒些，火要大些。',
    ],
    image: '/blog-images/pan-seared-steak.jpg',
    imageAlt: '这次煎好的牛排，盛在白色餐盘里',
  },
];

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
