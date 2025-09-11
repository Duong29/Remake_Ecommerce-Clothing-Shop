import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RatedBlog {
  blog_id: number;
  user_id: number;
  rate: number;
}

interface RatingState {
  ratedBlogs: RatedBlog[];
}
const initialState: RatingState = {
  ratedBlogs: JSON.parse(localStorage.getItem("ratedBlogs") || "[]"),
};

const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    setBlogRating: (
      state,
      action: PayloadAction<{
        user_id: number;
        blog_id: number;
        rate: number;
      }>
    ) => {
      const { user_id, blog_id, rate } = action.payload;
      const alreadyRated = state.ratedBlogs.some(
        (r) => r.user_id === user_id && r.blog_id === blog_id
      );
      if (!alreadyRated) {
        state.ratedBlogs.push({ user_id, blog_id, rate });
        localStorage.setItem("ratedBlogs", JSON.stringify(state.ratedBlogs));
      }
    },
  },
});

export const { setBlogRating } = ratingSlice.actions;
export default ratingSlice.reducer;
