import React from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../services/axiosInstance";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/signup", data);
      console.log("Signup success:", response.data);
      // sonra burada toastify mesajı + yönlendirme yap
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

  {/* Name */}
  <input
    type="text"
    placeholder="Name"
    {...register("name", {
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Name must be at least 3 characters",
      },
    })}
    className="w-full border px-3 py-2 rounded mb-1"
  />
  {errors.name && (
    <p className="text-red-500 text-sm mb-3">{errors.name.message}</p>
  )}

  {/* Email */}
  <input
    type="email"
    placeholder="Email"
    {...register("email", {
      required: "Email is required",
      pattern: {
        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Invalid email address",
      },
    })}
    className="w-full border px-3 py-2 rounded mb-1"
  />
  {errors.email && (
    <p className="text-red-500 text-sm mb-3">{errors.email.message}</p>
  )}

  {/* Password */}
  <input
    type="password"
    placeholder="Password"
    {...register("password", {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters",
      },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\-\/]).{8,}$/,
        message: "Password must contain uppercase, lowercase, number and a valid special character",
      }
      
      
      ,
    })}
    className="w-full border px-3 py-2 rounded mb-1"
  />
  {errors.password && (
    <p className="text-red-500 text-sm mb-3">{errors.password.message}</p>
  )}

  {/* Submit */}
  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-3"
  >
    {isSubmitting ? "Submitting..." : "Sign Up"}
  </button>
</form>
  );
};

export default SignUp;
