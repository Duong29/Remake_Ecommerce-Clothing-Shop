import React from "react";
import * as z from "zod";
const Register = () => {
  const registerSchema = z.object({
    name: z.string().trim().min(1, {
      message: "Tên không được bỏ trống",
    }),
    email: z.email().min(1, {
      message: "Email không được bỏ trống",
    }),
    password: z.string().trim().min(6, {
      message: "Mật khẩu tối thiểu 6 kí tự",
    }),
    phone: z
      .string()
      .trim()
      .min(1, {
        message: "Số điện thoại không được bỏ trống",
      })
      .regex(/^0\d{9}$/, {
        message: "Số điện thoại phải bắt đầu bằng 0 và có đúng 10 chữ số",
      }),
    address: z.string().trim().min(1, {
      message: "Địa chỉ không được bỏ trống",
    }),
    country: z.string().trim().min(1, {
      message: "Thành phố không được bỏ trống",
    }),
    level: z.coerce
      .number()
      .int({
        message: "Cấp bậc chỉ được là 0 (member) hoặc 1 (admin)",
      })
      .default(0),
  });
  return (
    <div className="row justify-content-center align-items-start">
      <div className="signup-form" style={{ width: "500px" }}>
        <h2>New user signup!</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button type="submit" class="btn btn-default">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
