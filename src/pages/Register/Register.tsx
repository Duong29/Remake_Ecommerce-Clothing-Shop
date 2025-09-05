import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  type RegisterSchema,
} from "../../schemas/register.schema";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { BASE_API_URL } from "../../lib/api";
const Register = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileBase64, setFileBase64] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    reset,
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const file = watch("avatar");
  // Convert file to base 64
  const fileToDataURL = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error("Failed to read file"));
      reader.readAsDataURL(file);
    });
  };
  // Chạy lại useEffect mỗi khi người dùng chọn file mới
  useEffect(() => {
    if (file instanceof File) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);

      fileToDataURL(file)
        .then((dataUrl) => setFileBase64(dataUrl))
        .catch((err) => {
          console.log("Error converting base64", err);
          toast("Error when processing file");
          setFileBase64(null);
        });
      return () => URL.revokeObjectURL(url);
    }
    setPreviewUrl(null);
    setFileBase64(null);
  }, [file]);
  const obSubmit = async (data: RegisterSchema) => {
    if (!fileBase64) {
      toast.error("Please add a profile picture");
      return;
    }

    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      address: data.address,
      country: data.country,
      level: 0,
      avatar: fileBase64, // data:image/jpeg;base64,......
    };

    try {
      const res = await BASE_API_URL.post("/register", payload, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log(res.data);
      toast("Registration successful");
      setPreviewUrl(null);
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
      setFileBase64(null);
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Registration failed");
    }
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

            <Controller
              name="avatar"
              control={control}
              render={({ field: { name, ref, onBlur, onChange } }) => (
                <input
                  type="file"
                  accept="image/jpeg,image/png"
                  name={name}
                  ref={ref}
                  onBlur={onBlur}
                  // QUAN TRỌNG: lấy File rồi onChange(File)
                  onChange={(e) => {
                    const selectedFile = (e.target as HTMLInputElement)
                      .files?.[0];
                    onChange(selectedFile);
                  }}
                  className="border rounded px-3 py-2 w-full"
                />
              )}
            />
            {errors.avatar?.message && (
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.avatar.message as string}
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
            >
              {previewUrl ? (
                <img src={previewUrl} style={{ height: "100%" }} />
              ) : (
                "No image"
              )}
            </div>
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
