import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/post.json');
        if (!res.ok) throw new Error("Lỗi fetch dữ liệu");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Lỗi:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []); 
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <h3>Đang tải danh sách bài viết...</h3>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Post Lists</h2>

      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ 
          width: '100%', 
          padding: '12px', 
          marginBottom: '20px',
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <div key={post.id} style={{ 
              border: '1px solid #456', 
              padding: '15px', 
              borderRadius: '8px',
            }}>
              <h3 style={{ margin: '0 0 10px 0', }}>
                {post.title}
              </h3>
              <p style={{ margin: 0 }}>{post.body}</p>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center' }}>
            Cannot Find: <strong>"{searchTerm}"</strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;