import { cn } from "@/lib/utils";
import React from "react";

interface CardFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

type InputConfig = {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "select" | "tel";
  placeholder?: string; // Jadi opsional dengan tanda ?
  customClass?: string; // Jadi opsional
  options?: InputOption[];
};

type InputOption = {
  label: string;
  value: string;
};
export const allInput: InputConfig[] = [
  {
    name: "Nama lengkap",
    label: "Nama Lengkap",
    type: "text",
    placeholder: "Masukkan Nama Lengkap",
    customClass: "text-[#333333AD]",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Masukkan Email",
    customClass: "text-[#333333AD]",
  },
  {
    name: "gender",
    label: "Jenis Kelamin",
    type: "select",
    options: [
      { label: "Laki-laki", value: "L" },
      { label: "Wanita", value: "P" },
    ],
    customClass: "text-[#333333AD]",
  },
  {
    name: "No.Hp",
    label: "No.Hp",
    type: "tel",
    placeholder: "Masukkan No.Hp",
    customClass: "text-[#333333AD]",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Masukkan Password",
    customClass: "text-[#333333AD]",
  },
  {
    name: "confirm-password",
    label: "Konfirmasi Password",
    type: "password",
    placeholder: "Masukkan Konfirmasi Password",
    customClass: "text-[#333333AD]",
  },
];

export const CardForm = React.memo(function CardForm({
  label,
  className,
  type,
  options,
  ...props
}: CardFormProps & {
  type: string;
  options?: { label: string; value: string }[];
}) {
  const [showPassword, setShowPassword] = React.useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <section className={cn("flex flex-col gap-1 ", className)}>
      <label className="text-[14px] font-semibold flex gap-1">
        {label} <span className="text-red-500">*</span>
      </label>

      {/* DROP DOWN */}
      {type === "select" ? (
        <div className="relative">
          <select
            className={cn(
              "appearance-none border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition-all w-full bg-white",
              className
            )}
            {...(props as any)}
          >
            {options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      ) : type === "tel" ? (
        /* PHONE NUMBER */
        <div className="flex gap-2">
          <div className="relative w-[120px] shrink-0">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-xl">🇮🇩</span>
            </div>
            <select className="border border-gray-300 rounded-lg pl-10 pr-8 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition-all w-full bg-gray-50 appearance-none">
              <option value="+62">+62</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <input
            type="tel"
            {...props}
            className={cn(
              "border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition-all w-full",
              className
            )}
          />
        </div>
      ) : (
        /* DEFAULT INPUT (Text, Email, Password) */
        <div className="relative">
          <input
            type={inputType}
            {...props}
            className={cn(
              "border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 transition-all w-full",
              className
            )}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? (
                // Eye Off Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7c.44 0 .87-.03 1.29-.09" />
                  <line x1="2" x2="22" y1="2" y2="22" />
                </svg>
              ) : (
                // Eye Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          )}
        </div>
      )}
    </section>
  );
});
