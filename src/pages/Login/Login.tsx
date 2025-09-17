import { useForm } from "react-hook-form";
import { loginSchema, type LoginSchema } from "../../schemas/login.schema";
import { BASE_API_URL } from "../../lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../slices/authSlice";
import type { User } from "../../slices/authSlice";
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
    const payload = {
      email: data.email,
      password: data.password,
      level: 0,
    };
    try {
      const res = await BASE_API_URL.post("/login", payload);
      console.log(res);
      if (res.data?.token && res.data?.Auth) {
        const token: string = res.data.token;
        const user: User = res.data.Auth;
        dispatch(loginSuccess({ token, user }));
        toast.success("Login successful");
        navigate("/");
      } else {
        toast.error("Password or email are not correctly. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="row justify-content-center align-items-start">
      <div className="login-form" style={{ width: "400px" }}>
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
