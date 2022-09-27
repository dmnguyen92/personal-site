import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import BlogRow from '../components/Blog/BlogRow';

import blogDescripts from '../data/blog/blog_descripts';

const Blog = () => (
  <Main
    title="Blog"
    description="Dang Minh's Blog Posts"
  >
    <article className="post" id="blog">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/blog">Blog</Link></h2>
          <p>&ldquo;Sharing the knowledge I learned.&rdquo;</p>
        </div>
      </header>
      {blogDescripts.map((blogDescript) => (
        <BlogRow
          data={blogDescript}
          key={blogDescript.index}
        />
      ))}
    </article>
  </Main>
);

export default Blog;
