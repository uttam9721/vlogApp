import Post from './models/Post.js';

export const createPost = async (req, res) => {
  const { title, content } = req.body;
  const post = await Post.create({ title, content, author: req.user });
  res.status(201).json(post);
};

export const getPosts = async (req, res) => {
  const posts = await Post.find().populate('author', 'name');
  res.json(posts);
};

export const getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id).populate('author', 'name');
  res.json(post);
};

export const updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.author.toString() !== req.user) return res.status(403).json({ message: 'Forbidden' });

  post.title = req.body.title;
  post.content = req.body.content;
  await post.save();
  res.json(post);
};

export const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.author.toString() !== req.user) return res.status(403).json({ message: 'Forbidden' });

  await post.remove();
  res.json({ message: 'Post removed' });
};
