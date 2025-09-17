import { useSelector } from "react-redux";
import { RootState } from "../store";
import { toast } from "react-toastify";
import { type CommentSchema, commentSchema } from "../schemas/comment.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BASE_API_URL } from "../lib/api";
import { useParams } from "react-router";
export const Comment = ({
  blogId,
  onCommentSuccess,
}: {
  blogId: number;
  onCommentSuccess: (newComment: string) => void;
}) => {
  const { isLoggedIn, user, token } = useSelector((s: RootState) => s.auth);
  const { id } = useParams();
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentSchema>({
    resolver: zodResolver(commentSchema),
  });
  const onSubmit = async (data: CommentSchema) => {
    const payload = {
      id_blog: blogId,
      id_comment: 0,
      comment: data.comment,
      id_user: user?.id,
      name_user: user?.name,
      image_user: user?.avatar,
    };
    console.log(payload);
    try {
      const res = await BASE_API_URL.post(`/blog/comment/${id}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      });
      const newComment = res.data.data;
      onCommentSuccess(newComment);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isLoggedIn) {
      toast("Please sign in to leave a comment");
      return;
    }
    // Nếu đã login → mới validate bằng RHF + Zod
    handleSubmit(onSubmit)(e);
  };

  return (
    <>
      <div className="replay-box">
        <div className="row">
          <div className="col-sm-12">
            <h2>Leave a replay</h2>
            <div className="text-area">
              <div className="blank-arrow">
                <label>Your Name</label>
              </div>
              <span>*</span>
              <form onSubmit={handleCommentSubmit}>
                <textarea
                  {...register("comment")}
                  rows={11}
                  defaultValue={""}
                />
                {errors.comment && isLoggedIn && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "13px",
                      marginTop: "10px",
                    }}
                  >
                    *{errors.comment?.message}
                  </p>
                )}
                <button type="submit" className="btn btn-primary">
                  Post comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
