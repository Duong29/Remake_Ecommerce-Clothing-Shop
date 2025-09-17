import { BASE_API_URL, URL_BLOG_IMAGE } from "../../lib/api";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    BASE_API_URL.get("/blog")
      .then((res) => {
        setBlogs(res.data.blog.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  }, []);
  return (
    <div className="blog-post-area">
      <h2 className="title text-center">Latest From our Blog</h2>
      {loading
        ? Array(3)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="single-blog-post"
                style={{ marginBottom: 20 }}
              >
                <Skeleton
                  height={400}
                  width="100%"
                  style={{ marginBottom: 10 }}
                />
                <Skeleton count={2} />
                <Skeleton width={100} height={30} style={{ marginTop: 10 }} />
              </div>
            ))
        : blogs.map((blog) => (
            <div key={blog.id} className="single-blog-post">
              <h3>{blog.title}</h3>
              <div className="post-meta">
                <ul>
                  <li>
                    <i className="fa fa-user" /> Mac Doe
                  </li>
                  <li>
                    <i className="fa fa-clock-o" /> 1:33 pm
                  </li>
                  <li>
                    <i className="fa fa-calendar" /> DEC 5, 2013
                  </li>
                </ul>
                <span>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half-o" />
                </span>
              </div>
              <a href="">
                <img src={`${URL_BLOG_IMAGE}/${blog.image}`} alt="" />
              </a>
              <p>{blog.description}</p>
              <Link to={`/blog/detail/${blog.id}`} className="btn btn-primary">
                Read More
              </Link>
            </div>
          ))}

      <div className="pagination-area">
        <ul className="pagination">
          <li>
            <a href="" className="active">
              1
            </a>
          </li>
          <li>
            <a href="">2</a>
          </li>
          <li>
            <a href="">3</a>
          </li>
          <li>
            <a href="">
              <i className="fa fa-angle-double-right" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
