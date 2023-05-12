import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, getPosts } from './redux/postsSlice';

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="postTitle">{post.title}</div>
      <div className="postBody">{post.body}</div>
    </div>
  );
};

const Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });

  const handleChange = (key) => (e) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    dispatch(addPost(formData));
  };

  return (
    <div>
      <form>
        <div className="form">
          <label hmtlFor="title">Title:</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange('title')}
          />
        </div>
        <div className="form">
          <label htmlFor="body">Body:</label>
          <input
            id="body"
            name="body"
            type="text"
            value={formData.body}
            onChange={handleChange('body')}
          />
        </div>
        <div className="form">
          <button type="submit" onClick={handleSend}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  console.log(posts);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(getPosts());
    }
  }, [status, dispatch]);

  return (
    <div>
      <Form />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
