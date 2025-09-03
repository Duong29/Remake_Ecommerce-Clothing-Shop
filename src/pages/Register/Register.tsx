import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchema } from "../../schemas/register.schema";
import { ToastContainer, toast } from "react-toastify";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: { level: 0 },
  });
  const obSubmit = (data: RegisterSchema) => {
    console.log(data);
    toast("Sign up successful");
  };

  return (
    <div className="row justify-content-center align-items-start">
      <ToastContainer />
      <div className="signup-form" style={{ width: "500px" }}>
        <h2>New user signup!</h2>
        <form onSubmit={handleSubmit(obSubmit)}>
          <input {...register("name")} placeholder="Name" />
          {errors.name?.message && (
            <p style={{ color: "red", fontSize: "13px" }}>
              *{errors.name.message}
            </p>
          )}
          <input {...register("email")} placeholder="Email" />
          {errors.email?.message && (
            <p style={{ color: "red", fontSize: "13px" }}>
              *{errors.email.message}
            </p>
          )}
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          {errors.password?.message && (
            <p style={{ color: "red", fontSize: "13px" }}>
              *{errors.password.message}
            </p>
          )}
          <input {...register("phone")} placeholder="Phone" />
          {errors.phone?.message && (
            <p style={{ color: "red", fontSize: "13px" }}>
              *{errors.phone.message}
            </p>
          )}
          <input {...register("address")} placeholder="Address" />
          {errors.address?.message && (
            <p style={{ color: "red", fontSize: "13px" }}>
              *{errors.address.message}
            </p>
          )}
          <input {...register("country")} placeholder="Country" />
          {errors.country?.message && (
            <p style={{ color: "red", fontSize: "13px" }}>
              *{errors.country.message}
            </p>
          )}

          {/* Upload file */}
          <div style={{ marginTop: 16 }}>
            <p style={{ display: "block", marginBottom: 8 }}>Avatar</p>

            {/* Nút chọn file */}

            <input {...register("avatar")} type="file" />
            {errors.avatar?.message && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.avatar.message}
              </p>
            )}
            {/* Khung preview (UI placeholder, chưa hiển thị ảnh) */}
            <div
              style={{
                marginBottom: 10,
                marginTop: 12,
                height: 160,
                border: "2px dashed #d0d0d0",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#888",
                fontSize: 14,
                background: "#fafafa",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 16,
            }}
          >
            <button type="submit" className="btn btn-default">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
