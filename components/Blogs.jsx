import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Mehedi Hasan - Blog Coming Soon</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">📝 Blog Coming Soon</h1>
            <p className="py-6">
              I'm writing blog posts about frontend, backend, React, and full-stack development.<br />
              Stay tuned for new content!
            </p>
            <Link to="/" className="btn btn-primary">Go to Home</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
