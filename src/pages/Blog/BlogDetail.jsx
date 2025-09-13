import social from "../../assets/images/socials.png";
import { BASE_API_URL, URL_BLOG_IMAGE } from "../../lib/api";
import { Comment } from "../../components/Comment";
import { RatingBlog } from "../../components/RatingBlog";
import { ListComment } from "../../components/ListComment";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
const BlogDetail = () => {
  let params = useParams();
  const [blogDetails, setBlogDetails] = useState([]);
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);
  useEffect(() => {
    if (!params.id) return;
    BASE_API_URL.get(`/blog/detail/${params.id}`)
      .then((res) => {
        setBlogDetails(res.data.data);
        setComments(res.data.data.comment);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);
  console.log(comments);
  useEffect(() => {
    BASE_API_URL.get(`/blog/rate/${params.id}`)
      .then((res) => {
        let items = res.data.data;
        if (!Array.isArray(items)) {
          items = Object.values(items);
        }
        const total = items.reduce((acc, item) => acc + item.rate, 0);
        const averageRating = total / items.length
        setRating(averageRating)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);
  return (
    <>
      <div className="blog-post-area">
        <h2 className="title text-center">Latest From our Blog</h2>
        <div className="single-blog-post">
          <h3>{blogDetails.title}</h3>
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
            <img src={`${URL_BLOG_IMAGE}/${blogDetails.image}`} alt="" />
          </a>
          <p>{blogDetails.content}</p>

          <div className="pager-area">
            <ul className="pager pull-right">
              <li>
                <a href="#">Pre</a>
              </li>
              <li>
                <a href="#">Next</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <RatingBlog blogId={params.id} rating={rating}/>
      <ListComment />
      <div className="socials-share">
        <a href="">
          <img src={social} alt="" />
        </a>
      </div>
      <Comment />
    </>
  );
};

export default BlogDetail;
