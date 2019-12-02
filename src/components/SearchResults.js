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
    const response = await axios.get(
      `http://sykkelmagasinet.indexportal.no/wp-json/gamifications/v1/events`
    );

    setPosts(response.data);
  };

  useEffect(() => {
    fetchUsers(posts);
  }, [posts]);

  return (
    <div className="search-results">
      {posts.map(post => (
        <div>
          <ul>
            <li key={post.link}>
              <strong>
                {post.title}
              </strong>
            </li>
            <li>{post.link}</li>
            <img
              width="100px"
              height="100px"
              src={post.image_url}
            />
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
