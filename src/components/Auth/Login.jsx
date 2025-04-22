
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../store/userSlice";
import axiosInstance from "../../services/axiosInstance";

const questions = [
  {
    name: "email",
    question: "What's your email?",
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    validate: (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Please enter a valid email",
  },
  {
    name: "password",
    question: "Enter your password",
    type: "password",
    validate: (value) => value.length >= 6 || "Password must be at least 6 chars",
  },
];




const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [position, setPosition] = useState(0);
  const [answers, setAnswers] = useState({});
  const [progress, setProgress] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);


  const {
    register,
    setValue,
    trigger,
    formState: { errors },
  } = useForm();

  const current = questions[position];

  const handleNext = async () => {
    const isValid = await trigger(current.name);
    if (!isValid) return;

    const updatedAnswers = { ...answers, [current.name]: inputValue };
    setAnswers(updatedAnswers);
    setValue(current.name, inputValue);
    setInputValue("");
    setProgress(((position + 1) / questions.length) * 100);

    if (position + 1 < questions.length) {
      setPosition((prev) => prev + 1);
    } else {
      handleSubmit(updatedAnswers);
    }
  };

  const handleSubmit = async (data) => {
    setSubmitting(true);
  
    try {
      const resultAction = await dispatch(loginThunk(data));
  
      if (loginThunk.fulfilled.match(resultAction)) {
        const token = resultAction.payload.token;
  
        //  Her durumda header’a token koy
        axiosInstance.defaults.headers.common["Authorization"] = token;
  
        //  Sadece Remember Me işaretliyse localStoragea yaz, değilse sil
        if (rememberMe) {
          localStorage.setItem("token", token);
        } else {
          localStorage.removeItem("token");
        }
  
        toast.success("Login successful!");
        await new Promise((r) => setTimeout(r, 1500));
        setCompleted(true);
        history.push("/");
      } else {
        throw new Error(resultAction.payload);
      }
    } catch (err) {
      toast.error(err.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };
  

  return (
    <div className="relative w-full min-h-[320px] bg-[#25A3FF] flex items-center justify-center rounded-xl">
      <div
        className="absolute top-0 left-0 h-full bg-[#0069ec] transition-all duration-300 rounded-xl"
        style={{ width: `${progress}vw` }}
      />

      {completed ? (
        <h1 className="text-white text-3xl font-bold animate-fade-in-up z-10 text-center">
          Welcome back!
        </h1>
      ) : (
        <div className="relative z-10 w-full max-w-[420px] bg-white p-6 rounded-xl shadow-md">
          <label className="block text-lg font-semibold mb-2 text-gray-700">
            {current.question}
          </label>

          <input
            key={position}
            type={current.type || "text"}
            value={inputValue}
            {...register(current.name, {
              required: "This field is required",
              validate: current.validate,
            })}
            onChange={(e) => {
              const val = e.target.value;
              setInputValue(val);
              setValue(current.name, val);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleNext();
              }
            }}
            autoFocus
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
          />

{errors[current.name] && (
  <p className="text-sm text-red-500 mb-2">
    {errors[current.name].message}
  </p>
)}

<div className="flex items-center mt-3 mb-1">
  <input
    id="remember"
    type="checkbox"
    checked={rememberMe}
    onChange={() => setRememberMe(!rememberMe)}
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
  />
  <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-700">
    Remember me
  </label>
</div>


          <div className="flex justify-between items-center mt-4">
            {position > 0 ? (
              <button
                onClick={() => {
                  setPosition((prev) => prev - 1);
                  const prevQ = questions[position - 1];
                  setInputValue(answers[prevQ.name] || "");
                  setProgress(((position - 1) / questions.length) * 100);
                }}
                className="text-[#25a3ff] hover:text-gray-800"
              >
                <ArrowLeft className="w-7 h-7" />
              </button>
            ) : (
              <span className="w-7 h-7" />
            )}

            <button
              onClick={handleNext}
              disabled={submitting}
              className={`text-[#25a3ff] hover:text-gray-800 transition-opacity duration-300 ${
                submitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {submitting ? (
                <div className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-[#25a3ff]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  <span className="text-sm text-[#25a3ff]">Logging in...</span>
                </div>
              ) : (
                <ArrowRight className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
