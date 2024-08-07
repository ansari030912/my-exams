"use client";
/* eslint-disable @next/next/no-img-element */
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [ip, setIp] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const fetchIP = async () => {
    try {
      const response = await axios.get(`${Base_URL}/v1/my-ip`, {
        headers: {
          "x-api-key": X_API_Key,
        },
      });
      setIp(response.data);
    } catch (error) {
      console.error("Error fetching IP:", error);
    }
  };

  useEffect(() => {
    fetchIP();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required");
    }

    if (!password) {
      setPasswordError("Password is required");
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }
    if (emailError || passwordError) {
      return;
    }

    try {
      const response = await axios.post(
        `${Base_URL}/v1/account/login`,
        {
          email,
          password,
          ip,
        },
        {
          headers: {
            "x-api-key": X_API_Key,
          },
        }
      );
      setIsLogin(response.data);
      setOpenSnackbar(true);

      if (response.data.is_logged_in) {
        const currentTime = Date.now();
        const twoHoursInMillis = 2 * 60 * 60 * 1000;
        const expiryTime = currentTime + twoHoursInMillis;

        if (typeof localStorage !== "undefined") {
          // Use localStorage
          localStorage.setItem(
            "loginResponse",
            JSON.stringify({ ...response.data, expiryTime })
          );
        } else {
          console.error("localStorage is not available.");
        }
        window.location.reload();
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };
  return (
    <>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={isLogin?.is_logged_in ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {isLogin && isLogin?.message}
        </Alert>
      </Snackbar>
      <section
        class="py-24 md:py-32 bg-white"
        style={{
          backgroundImage: `url('/pattern-white.png')`,
        }}
      >
        <div class="container px-4 mx-auto">
          <div class="max-w-sm mx-auto">
            <div class="mb-6 text-center">
              <h3 class="mb-4 text-2xl md:text-3xl font-bold">
                Join to save progress
              </h3>
              <p class="text-lg text-coolGray-500 font-medium">
                Start your journey with our product
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div class="mb-6">
                <label class="block mb-2  font-medium">Email*</label>
                <input
                  class="appearance-none block w-full p-3 leading-5 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="name"
                  placeholder="email@example.com"
                  onChange={(e) => {
                    setEmail(e.target.value), setEmailError("");
                  }}
                />
                {emailError && (
                  <span style={{ color: "red" }} className="text-sm">
                    {emailError}
                  </span>
                )}
              </div>
              <div class="mb-4">
                <label class="block mb-2  font-medium">Password*</label>
                <input
                  class="appearance-none block w-full p-3 leading-5 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="password"
                  placeholder="************"
                  onChange={(e) => {
                    setPassword(e.target.value), setPasswordError("");
                  }}
                />
                {passwordError && (
                  <span style={{ color: "red" }} className="text-sm -my-10">
                    {passwordError}
                  </span>
                )}
              </div>
              <div class="flex flex-wrap items-center justify-end mb-6">
                <div class="w-full md:w-auto mt-1">
                  <Link
                    class="inline-block text-xs font-medium text-green-500 hover:text-green-600"
                    href="/forgot-password"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <button
                class="inline-block py-3 px-7 mb-4 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                type="submit"
              >
                Log In
              </button>
              <p class="text-center">
                <span class="text-xs font-medium">Not have an account?</span>{" "}
                <Link
                  class="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline"
                  href="/register"
                >
                  Register Now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
