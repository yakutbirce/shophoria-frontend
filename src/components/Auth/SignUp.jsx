import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../services/axiosInstance";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { ArrowLeft, ArrowRight } from "lucide-react";

const questions = [
  {
    name: "name",
    question: "What's your first name?",
    validate: (value) =>
      value.length >= 3 || "Name must be at least 3 characters long",
  },
  {
    name: "surname",
    question: "What's your last name?",
    validate: (value) =>
      value.length >= 2 || "Surname must be at least 2 characters long",
  },
  {
    name: "email",
    question: "What's your email?",
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    validate: (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Please enter a valid email",
  },
  {
    name: "password",
    question: "Create your password",
    type: "password",
    pattern:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]).{8,}$/,
    validate: (value) =>
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]).{8,}$/.test(
        value
      ) ||
      "Password must contain uppercase, lowercase, number, special char, and be at least 8 characters",
  },
  {
    name: "confirmPassword",
    question: "Confirm your password",
    type: "password",
    validate: (value, answers) =>
      value === answers.password || "Passwords do not match",
  },
];

const SignUp = () => {
  const history = useHistory();
  const inputRef = useRef(null);

  const [position, setPosition] = useState(0);
  const [answers, setAnswers] = useState({ role_id: 1 });
  const [progress, setProgress] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [completed, setCompleted] = useState(false);
  const [roles, setRoles] = useState([]);
  const [submitting, setSubmitting] = useState(false);


  const isStore = answers.role_id === 2;

  const allQuestions = isStore
    ? [
        ...questions,
        {
          name: "store_name",
          question: "Store name",
          validate: (v) => v.length >= 3 || "Store name ≥3 chars",
        },
        {
          name: "phone",
          question: "Store phone (0 5xx…)",
          pattern: /^0(5\d{2}\s?\d{3}\s?\d{2}\s?\d{2})$/,
          validate: (v) =>
            /^0(5\d{9})$/.test(v.replace(/\s/g, "")) || "Invalid TR phone",
        },
        {
          name: "tax_no",
          question: "Store tax ID (T + 11)",
          pattern: /^T\d{11}$/,
          validate: (v) => /^T\d{11}$/.test(v) || "T + 11 digits",
        },
        {
          name: "bank_account",
          question: "Store IBAN (TR + 24)",
          pattern: /^TR\d{24}$/,
          validate: (v) => /^TR\d{24}$/.test(v) || "26‑char IBAN",
        },
      ]
    : questions;

  const {
    register,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm();

  const current = allQuestions[position];

  useEffect(() => {
    axiosInstance
      .get("/roles")
      .then((res) => setRoles(res.data))
      .catch(() => toast.error("Cannot fetch roles"));
  }, []);

  useEffect(() => {
    if (completed) {
      const t = setTimeout(() => history.push("/"), 3500); 
      return () => clearTimeout(t);
    }
  }, [completed, history]);
  
  

  const handleNext = async () => {
    const isValid = await trigger(current.name);
    if (!isValid) return;

    const updatedAnswers = { ...answers, [current.name]: inputValue };
    setAnswers(updatedAnswers);
    setValue(current.name, inputValue);
    setInputValue("");
    setProgress(((position + 1) / allQuestions.length) * 100);

    if (position + 1 < allQuestions.length) {
      setPosition((prev) => prev + 1);
    } else {
      handleSubmit(updatedAnswers);
    }
  };

  const handleSubmit = async (data) => {
    setSubmitting(true); 
  
    const {
      confirmPassword,
      surname,
      store_name,
      phone,
      tax_no,
      bank_account,
      ...rest
    } = data;
  
    const payload = {
      ...rest,
      name: `${data.name} ${surname}`,
      role_id: data.role_id,
    };
  
    if (isStore) {
      payload.store = {
        name: store_name,
        phone,
        tax_no,
        bank_account,
      };
    }
  
    try {
      await axiosInstance.post("/signup", payload);
      toast.success("You need to click the link in your email to activate your account!");
      await new Promise((r) => setTimeout(r, 1500)); 
      setCompleted(true);
    }
     catch (err) {
      console.error("Signup error:", err.response?.data || err);
      toast.error(
        err.response?.data?.message ||
          JSON.stringify(err.response?.data) ||
          "Something went wrong!"
      );
    } finally {
      setSubmitting(false); 
    }
  };
  

  return (
    <div className="relative w-full min-h-[320px] bg-[#25A3FF] flex items-center justify-center rounded-xl">
      {/* progress bar */}
      <div
        className="absolute top-0 left-0 h-full bg-[#0069ec] transition-all duration-300 rounded-xl"
        style={{ width: `${progress}vw` }}
      />

      {completed ? (
        <h1 className="text-white text-3xl font-bold animate-fade-in-up z-10 text-center">
          Welcome {answers.name}!
        </h1>
      ) : (
        <div
          className={`relative z-10 w-full max-w-[420px] bg-white p-6 rounded-xl shadow-md`}
        >
          {/* ROLE SELECT */}
          <select
            value={answers.role_id}
            onChange={(e) => {
              const id = Number(e.target.value);
              setAnswers({ role_id: id });
              setPosition(0);
              setProgress(0);
              setInputValue("");
            }}
            className="w-full border px-2 py-1 rounded mb-4 text-gray-700"
          >
            {roles.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>

          <label className="block text-lg font-semibold mb-2 text-gray-700">
            {current.question}
          </label>

          <input
  key={`${answers.role_id}-${position}`}
  type={current.type || "text"}
  value={inputValue}
  {...register(current.name, {
    required: "This field is required",
    validate: (v) =>
      typeof current.validate === "function"
        ? current.validate(v, answers)
        : current.pattern
        ? current.pattern.test(v) || "Invalid format"
        : true,
  })}
  onChange={(e) => {
    const val = e.target.value;
    setInputValue(val);
    setValue(current.name, val); // BU SATIR DERTLERİ ÇÖZÜYOR
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

          <div className="flex justify-between items-center mt-4">
            {position > 0 ? (
              <button
                onClick={() => {
                  setPosition((prev) => prev - 1);
                  const prevQ = allQuestions[position - 1];
                  setInputValue(answers[prevQ.name] || "");
                  setProgress(((position - 1) / allQuestions.length) * 100);
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
    <span className="text-sm text-[#25a3ff]">Submitting...</span>
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

export default SignUp;
