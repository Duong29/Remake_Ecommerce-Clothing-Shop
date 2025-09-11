import "@smastrom/react-rating/style.css";
import { Rating, ThinStar } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "../store";
import { setBlogRating } from "../slices/ratingSlice";
import { BASE_API_URL } from "../lib/api";
const includedShapesStyles = [ThinStar].map((itemShapes) => ({
  itemShapes,
  activeFillColor: "#f59e0b",
  inactiveFillColor: "#ffedd5",
}));
export const RatingBlog = ({ blogId }) => {
  const [rating, setRating] = useState(0);
  const { isLoggedIn, token, user } = useSelector((s: RootState) => s.auth);
  const { ratedBlogs } = useSelector((s: RootState) => s.rating);
  const dispatch = useDispatch();

  
  
  const handleRating = async (newRating: number) => {
    if (!isLoggedIn || !user) {
      toast.error("Please login before rating");
      return;
    }

    const alreadyRated = ratedBlogs.some(
      (r) => r.user_id === user.id && r.blog_id === Number(blogId)
    );
    if (alreadyRated) {
      toast.error("Bạn đã đánh giá blog này rồi!");
      return;
    }

    setRating(newRating);

    const payload = {
      user_id: Number(user.id),
      blog_id: Number(blogId),
      rate: Number(newRating),
    };

    dispatch(setBlogRating(payload));

    try {
      const ratingRes = await BASE_API_URL.post(
        `blog/rate/${blogId}`,
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (ratingRes.status === 200) {
        toast.success("Rate this article successfully");
      }
    } catch (err) {
      console.error(err);
      toast.error("Có lỗi xảy ra khi đánh giá");
      // rollback nếu cần thiết
    }
  };

  return (
    <>
      <div className="rating-area">
        <ul
          className="ratings"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <li className="rate-this">Rate this item:</li>
          {includedShapesStyles.map((itemStyles, index) => (
            <Rating
              style={{ maxWidth: 130 }}
              key={`shape_${index}`}
              value={rating}
              onChange={handleRating}
              itemStyles={itemStyles}
            />
          ))}
        </ul>
        <ul className="tag">
          <li>TAG:</li>
          <li>
            <a className="color" href="">
              Pink <span>/</span>
            </a>
          </li>
          <li>
            <a className="color" href="">
              T-Shirt <span>/</span>
            </a>
          </li>
          <li>
            <a className="color" href="">
              Girls
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
