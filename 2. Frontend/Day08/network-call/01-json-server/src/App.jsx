import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState({id: null, title: '', views: 0});
  
  useEffect(() => {
    async function fetchData(){
      try {
        // --- using manual ---
        // const response = await fetch('http://localhost:3000/posts');
        // const data = await response.json();
        // setPosts(data);

        // -- using axios
        const {data} = await axios.get('http://localhost:3000/posts');
        setPosts(data);
      }
      catch(error){
        console.error(error);
      }
    }
    fetchData();
  }, []);

  async function handleAdd(e){
    e.preventDefault();
    try {
      // -- using axios
      const {data} = await axios.post('http://localhost:3000/posts', {...content, id: uuidv4()});
      setPosts([...posts, data]);
      setContent({id: null, title: '', views: 0});
    }
    catch(error){
      console.error(error);
    }
  }

  async function handleDelete(id){
    try {
      // -- using manual
      // const response = await fetch(`http://localhost:3000/posts/${id}`, {
      //   method: 'DELETE'
      // });

      // -- using axios
      await axios.delete(`http://localhost:3000/posts/${id}`);
      const newPosts = posts.filter(post => post.id !== id);
      setPosts(newPosts);
    }
    catch(error){
      console.error(error);
    }
  }

  return (
    <>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.views}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </div>
        ))}

        <hr />

        <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleAdd}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={content.title} onChange={e => setContent({...content, title: e.target.value})} />

          <label htmlFor="views">Views</label>
          <input type="number" id="views" value={content.views} onChange={e => setContent({...content, views: e.target.value})} />

          <button type="submit">Add</button>
        </form>
    </>
  )
}

export default App;
