import { useForm } from "react-hook-form";
import { loginSchema, type LoginSchema } from "../../schemas/login.schema";
import { BASE_API_URL } from "../../lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../slices/authSlice";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { useEffect } from "react";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      const payload = {
        email: data.email,
        password: data.password,
        level: 0,
      };
      const res = await BASE_API_URL.post("/login", payload);
      const resData = res.data;
      if (resData?.token) {
        dispatch(loginSuccess(resData.token));
        toast("Login successful");
        navigate("/");
      } else {
        toast.error("Password or email are not correctly. Please try again.");
      }
    } catch (error) {
      // Nếu API trả về lỗi từ server (400, 401, 500,...)
      const errorMessage =
        error?.response?.data?.message || "Something went wrong";
      toast.error(errorMessage);
      console.error("Login error:", error);
    }
  };
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    console.log("isLoggedIn:", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div className="row justify-content-center align-items-start">
      <div className="login-form" style={{ width: "500px" }}>
        <h2>Login to your account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email")}
            type="email"
            className="form-control mb-2"
            placeholder="Email Address"
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "13px" }}>
              *{errors.email?.message}
            </p>
          )}
          <input
            {...register("password")}
            type="password"
            className="form-control mb-3"
            placeholder="Password"
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "13px" }}>
              *{errors.password?.message}
            </p>
          )}
          <button type="submit" className="btn btn-warning w-100">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
