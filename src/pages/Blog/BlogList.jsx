import blogOne from '../../assets/images/blog-one.jpg'
import blogTwo from '../../assets/images/blog-two.jpg'
import blogThree from '../../assets/images/blog-three.jpg'
export const BlogList = () => {
  return (
    <div className="blog-post-area">
      <h2 className="title text-center">Latest From our Blog</h2>
      <div className="single-blog-post">
        <h3>Girls Pink T Shirt arrived in store</h3>
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
          <img src={blogOne} alt="" />
        </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <a className="btn btn-primary" href="">
          Read More
        </a>
      </div>
      <div className="single-blog-post">
        <h3>Girls Pink T Shirt arrived in store</h3>
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
          <img src={blogTwo} alt="" />
        </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <a className="btn btn-primary" href="">
          Read More
        </a>
      </div>
      <div className="single-blog-post">
        <h3>Girls Pink T Shirt arrived in store</h3>
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
          <img src={blogThree} alt="" />
        </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <a className="btn btn-primary" href="">
          Read More
        </a>
      </div>
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
