import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!");
      navigate("/"); // Redirect to home or another page on successful login
    } catch (error) {
      toast.error("Failed to login. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      toast.success(`Logged in as ${result.user.displayName}`);
      navigate("/upload"); // Redirect to home or another page on successful login
    } catch (error) {
      toast.error("Failed to login with Google.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      <form onSubmit={handleLogin} className="w-full">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-3 border border-gray-300 rounded-lg w-full"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-3 border border-gray-300 rounded-lg w-full"
          required
        />
        <button
          type="submit"
          className={`p-3 bg-blue-500 text-white rounded-lg w-full ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>

      <p className="mt-4">
        Don't have an account? <a href="/register" className="text-blue-500">Register</a>
      </p>

      <div className="flex items-center justify-center w-full mt-6">
        <button
          className="flex items-center justify-center bg-white border border-gray-300 shadow-md hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded-lg w-full"
          onClick={signInWithGoogle}
          disabled={loading}
        >
          <img
            src="google.png"
            alt="Google Logo"
            className="h-6 w-9 mr-2"
          />
          {loading ? "Signing in..." : "Sign in with Google"}
        </button>
      </div>
    </div>
  );
}

export default Login;
