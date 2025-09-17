import "@smastrom/react-rating/style.css";
import { Rating, ThinStar } from "@smastrom/react-rating";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "../store";
import { setBlogRating } from "../slices/ratingSlice";
import { BASE_API_URL } from "../lib/api";

export const RatingBlog = ({ blogId, rating}: {blogId: number;rating: number;}) => {
  const { isLoggedIn, token, user } = useSelector((s: RootState) => s.auth);
  const { ratedBlogs } = useSelector((s: RootState) => s.rating);
  const dispatch = useDispatch();

  const roundedUp = Math.ceil(rating);
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
          <Rating
            style={{ maxWidth: 130 }}
            value={roundedUp}
            items={5}
            onChange={handleRating}
            itemStyles={{
              itemShapes: ThinStar,
              activeFillColor: "#f59e0b",
              inactiveFillColor: "#ffedd5",
            }}
          />
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
