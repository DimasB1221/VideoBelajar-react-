import { CardForm } from "@/components/ui/cardForm";
import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";
import { Button } from "@/components/ui/button";
import { allInput } from "@/components/ui/cardForm";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

interface LoginFormData {
  email: string;
  password: string;
}

function LoginPage() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        throw error;
      }
      if (data.user) {
        navigate("/admin/dashboard");
      }
      console.log(data, error);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const selectedInput = [1, 4];
  const loginInput = allInput.filter((_, index) =>
    selectedInput.includes(index)
  );
  return (
    <>
      <Navbar01 />
      <main className=" w-[100%] flex items-center flex translate-y-1/2">
        <section className="bg-background w-[90vw] h-auto min-h-[40vh] pb-8 mx-auto border border-[#F1F1F1] rounded-[8px] md:w-[600px]">
          <h1 className="font-bold text-center mt-2">Masuk ke Akun </h1>
          <p className="sub-heading text-center mt-1">
            Yuk, lanjutin belajarmu di videobelajar.
          </p>
          <form
            onSubmit={handleAuth}
            className="relative w-[80vw] mx-auto md:w-[500px]"
          >
            {loginInput.map((input) => (
              <CardForm
                key={input.name}
                name={input.name}
                label={input.label}
                type={input.type}
                placeholder={input.placeholder}
                className={input.customClass}
                value={formData[input.name as keyof LoginFormData]}
                onChange={handleChange}
              />
            ))}
            <a
              href=""
              className="text-[#333333AD] mt-2 absolute right-2 top-36"
            >
              Lupa Password?
            </a>
            {error && (
              <div className="text-red-500 text-sm text-center mt-2 mb-2 bg-red-50 p-2 rounded">
                {error}
              </div>
            )}
            <Button
              className="w-full mt-15 text-background font-bold"
              variant="green"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Masuk...
                </>
              ) : (
                "Masuk"
              )}
            </Button>
            <Button
              className="w-full mt-2  font-bold mb-2"
              variant="youngGreen"
            >
              Daftar
            </Button>
            <hr className="w-[36vw] absolute bottom-15 md:w-[500px]" />
            <hr className="w-[36vw] absolute bottom-15 right-0 md:w-[500px]" />
            <p className="text-center relative  top-1">atau</p>
            <Button
              className="w-full mt-5 font-bold border-[#F1F1F1]"
              variant="outline"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="24px"
                height="24px"
                className="mr-2"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.223,0-9.654-3.343-11.303-8l-6.571,4.827C9.656,39.663,16.318,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              Daftar dengan Google
            </Button>
          </form>
        </section>
      </main>
    </>
  );
}

export default LoginPage;
