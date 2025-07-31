// import Post from './models/Post.js';

// export const createPost = async (req, res) => {
//   const { title, content } = req.body;
//   const post = await Post.create({ title, content, author: req.user });
//   res.status(201).json(post);
// };

// export const getPosts = async (req, res) => {
//   const posts = await Post.find().populate('author', 'name');
//   res.json(posts);
// };

// export const getPostById = async (req, res) => {
//   const post = await Post.findById(req.params.id).populate('author', 'name');
//   res.json(post);
// };

// export const updatePost = async (req, res) => {
//   const post = await Post.findById(req.params.id);
//   if (post.author.toString() !== req.user) return res.status(403).json({ message: 'Forbidden' });

//   post.title = req.body.title;
//   post.content = req.body.content;
//   await post.save();
//   res.json(post);
// };

// export const deletePost = async (req, res) => {
//   const post = await Post.findById(req.params.id);
//   if (post.author.toString() !== req.user) return res.status(403).json({ message: 'Forbidden' });

//   await post.remove();
//   res.json({ message: 'Post removed' });
// };



import Post from '../models/Post.js'; // ✅ corrected path

export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.create({ title, content, author: req.user._id }); // ✅ added ._id
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create post', error: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'name');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch posts', error: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('author', 'name');
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch post', error: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    post.title = req.body.title;
    post.content = req.body.content;
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update post', error: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    await post.remove();
    res.json({ message: 'Post removed' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete post', error: error.message });
  }
};
