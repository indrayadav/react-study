import React, {
  useState,
  useEffect
} from "react";

import axios from "axios";

const SearchResults = () => {
  const [posts, setPosts] = useState(
    []
  );

  const fetchUsers = async () => {
    const query_text = document.getElementById(
      "query_text"
    ).value;
    const response = await axios.get(
      `https://test.waituk.com/wp-json/entrada/v1/articles/?query=` +
        query_text
    );

    setPosts(response.data);
  };

  useEffect(() => {
    fetchUsers(posts);
  }, [posts]);

  return (
    <div className="search-box">
      <form>
        <label htmlFor="location">
          Search Post
        </label>
        <input
          type="text"
          id="query_text"
        />

        <button
          onClick={() =>
            fetchUsers(posts)
          }
        >
          Search
        </button>
      </form>
      <div className="search-results">
        {posts.map(post => (
          <div key={post.link}>
            <ul>
              <li>
                <strong>
                  {post.title}
                </strong>
              </li>
              <li>{post.link}</li>
              <img
                width="100px"
                height="100px"
                src={
                  post.images.thumbnail
                }
              />
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
