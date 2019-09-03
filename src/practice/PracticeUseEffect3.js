import React from 'react';
const postIds = [1, 2, 3, 4, 5, 6, 7, 8];

export default function PracticeUseEffect3() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [postId, setPostId] = React.useState(postIds[0]);
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    async function fetchPost() {
      try {
        const response = await window.fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        const post = await response.json();
        setPost(post);
      } catch (error) {
        setError(error);
      } finally {
        // runs last only under try/pass condiiton
        setIsLoading(false);
      }
    }

    // set the loading flag & make api call
    setIsLoading(true);
    fetchPost();
  }, [postId]); // only re-render on postId change

  const Post = props => {
    const { title, body, id } = props.postData;
    return (
      <>
        <p>{title}</p>
        <p>{body}</p>
        <button onClick={() => setPostId(id + 1 === 8 ? 1 : id + 1)}>
          NEXT
        </button>
      </>
    );
  };

  return isLoading ? (
    'loading...'
  ) : error ? (
    'ERROR!'
  ) : post ? (
    <Post postData={post} />
  ) : null;
}
