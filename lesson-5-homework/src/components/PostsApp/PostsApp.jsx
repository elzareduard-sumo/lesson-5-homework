import React, { useState, useEffect} from "react";
import axios from "axios";
import "./PostsApp.css";    
const PostsApp = () => {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState("");
    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading (true);
            try {
                const response = await axios.get("https://dummyjson.com/posts");
                setPosts(response.data.posts);
            } catch (error) {
                console.error("[LOG] Ошибка при загрузке постов:", error);

            } finally {
                setIsLoading(false);
            }   
        }
        fetchPosts()
    }, []);
    const handleСreatePost = async (e) => {
        e.preventDefault();
        setFormError("");
        if (!title.trim() || !body.trim()) {
            setFormError("Пожалуйста, заполните все поля перед отправкой.");
            return 
        }
        setIsSubmitting(true);
        try {
            const response = await axios.post("https://dummyjson.com/posts/add", {
                title: title,
                body: body,
                userId: 1
        })
        console.log("[LOG] Пост успешно добавлен:", response.data);
        alert("Пост успешно добавлен!");
        setPosts ((prevPosts) => [response.data, ...prevPosts]);
        setTitle("");
        setBody("");
        } catch (error) {
            console.error("[LOG] Ошибка при добавлении поста:", error);
            setFormError("Произошла ошибка при добавлении поста. Пожалуйста, попробуйте еще раз.");
        } finally {
            setIsSubmitting(false); 
        }
    }
    const handleDeletePost = (idToDelete) => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== idToDelete));
    }
    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    return (
        <div className="posts-container">
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Посты</h2>
            <form className="post-form" onSubmit={handleСreatePost}>
            <h3>Добавить пост</h3>
                <input type="text" 
                placeholder="Заголовок" 
                value={title}
                onChange={(e) => setTitle(e.target.value)} className="post-input"/>
                <textarea
          placeholder="Текст поста..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="post-textarea"
          rows="4"
        />

        {formError && <span className="error-text">{formError}</span>}

        <button 
          type="submit" 
          className="submit-post-btn" 
          disabled={isSubmitting} // Блокировка кнопки (Доп. задание)
        >
          {isSubmitting ? 'Отправка...' : 'Отправить пост'}
        </button>
      </form>
      <hr className="divider" />
      <div className="posts-list-section">
        <input
          type="text"
          placeholder="🔍 Поиск по заголовку..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />

        {isLoading ? (
          <div className="loader">Загрузка постов...</div>
        ) : (
          <div className="posts-grid">
            {filteredPosts.map(post => (
              <div key={post.id} className="post-card">
                <div className="post-card-header">
                  <h4 className="post-title">{post.title}</h4>
                  <button 
                    onClick={() => handleDeletePost(post.id)}
                    className="delete-btn"
                    title="Удалить пост"
                  >
                    ✖
                  </button>
                </div>
                <p className="post-body">{post.body}</p>
              </div>
            ))}
            {filteredPosts.length === 0 && !isLoading && (
              <p style={{ textAlign: 'center', color: '#888' }}>Посты не найдены.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostsApp;





        