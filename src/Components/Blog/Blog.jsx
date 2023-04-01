import React, { useEffect, useState } from "react";
import "./Blog.css";
import Cart from "../Cart/Cart";

const Blog = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);
  return (
    <div className="blog-container">
      <div >
        {
            carts.map(cart=><Cart key={cart.id}
            cart={cart}></Cart>)
        }
      </div>
      <div className="bookmark-blog">
        <h2>Bookmark-Blog:{}</h2>
      </div>
    </div>
  );
};

export default Blog;
