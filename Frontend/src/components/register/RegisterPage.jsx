import { useState } from "react";
import { Eye,EyeOff } from 'lucide-react'
import {Link} from 'react-router-dom'

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) return;
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);

    const registerData ={
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password,
    }

    const result = await registerUser(registerData)
    console.log(result);
  };

  const registerUser = async (registerData)=>{
    const res = await fetch('http://localhost:1100/user/register',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(registerData)
    })
    return res.json()
  }

  const passwordMatch =
    form.confirmPassword === "" || form.password === form.confirmPassword;

  const EyeIcon = ({ open }) => 
    {return open ?  <EyeOff size={16} /> :  <Eye size={16} /> }

  const inputStyle = {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
  };

  const handleFocus = (e) => (e.target.style.border = "1px solid rgba(255,255,255,0.4)");
  const handleBlur = (e) => (e.target.style.border = "1px solid rgba(255,255,255,0.12)");

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/62" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md mx-4 my-8">
        <div
          className="rounded-2xl p-10"
          style={{
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.4)",
          }}
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <div
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h1 className="text-white text-2xl font-semibold tracking-tight">Create an account</h1>
            <p className="text-white/50 text-sm mt-1">Fill in the details below to get started</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name Row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-white/70 text-xs font-medium mb-1.5 tracking-wide uppercase">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label className="block text-white/70 text-xs font-medium mb-1.5 tracking-wide uppercase">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                  className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-white/70 text-xs font-medium mb-1.5 tracking-wide uppercase">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-white/70 text-xs font-medium mb-1.5 tracking-wide uppercase">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Min. 8 characters"
                  required
                  minLength={8}
                  className="w-full rounded-lg px-4 py-3 pr-11 text-sm text-white placeholder-white/30 outline-none transition-all duration-200"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 transition-colors duration-150"
                >
                  <EyeIcon open={showPassword} />
                </button>
              </div>

              {/* Password Strength */}
              {form.password.length > 0 && (
                <div className="mt-2 flex gap-1">
                  {[1, 2, 3, 4].map((i) => {
                    const strength =
                      form.password.length >= 12 && /[A-Z]/.test(form.password) && /[0-9]/.test(form.password) && /[^A-Za-z0-9]/.test(form.password)
                        ? 4
                        : form.password.length >= 10 && /[A-Z]/.test(form.password) && /[0-9]/.test(form.password)
                        ? 3
                        : form.password.length >= 8
                        ? 2
                        : 1;
                    const colors = ["", "rgba(239,68,68,0.8)", "rgba(234,179,8,0.8)", "rgba(59,130,246,0.8)", "rgba(34,197,94,0.8)"];
                    return (
                      <div
                        key={i}
                        className="flex-1 h-1 rounded-full transition-all duration-300"
                        style={{ background: i <= strength ? colors[strength] : "rgba(255,255,255,0.12)" }}
                      />
                    );
                  })}
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-white/70 text-xs font-medium mb-1.5 tracking-wide uppercase">
                Confirm password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                  required
                  className="w-full rounded-lg px-4 py-3 pr-11 text-sm text-white placeholder-white/30 outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: !passwordMatch
                      ? "1px solid rgba(239,68,68,0.6)"
                      : "1px solid rgba(255,255,255,0.12)",
                  }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 transition-colors duration-150"
                >
                  <EyeIcon open={showConfirm} />
                </button>
              </div>
              {!passwordMatch && (
                <p className="text-red-400 text-xs mt-1.5">Passwords do not match.</p>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3 pt-1">
              <button
                type="button"
                onClick={() => setAgreed(!agreed)}
                className="shrink-0 w-4 h-4 rounded mt-0.5 flex items-center justify-center transition-all duration-150"
                style={{
                  background: agreed ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.08)",
                  border: agreed ? "1px solid rgba(255,255,255,0.9)" : "1px solid rgba(255,255,255,0.25)",
                }}
              >
                {agreed && (
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="2,6 5,9 10,3" />
                  </svg>
                )}
              </button>
              <p className="text-white/50 text-xs leading-relaxed">
                I agree to the{" "}
                <span className="text-white/80 cursor-pointer hover:text-white transition-colors">Terms of Service</span>
                {" "}and{" "}
                <span className="text-white/80 cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !agreed || !passwordMatch}
              className="w-full py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 mt-1 flex items-center justify-center gap-2"
              style={{
                background:
                  loading || !agreed || !passwordMatch
                    ? "rgba(255,255,255,0.18)"
                    : "rgba(255,255,255,0.92)",
                color:
                  loading || !agreed || !passwordMatch
                    ? "rgba(255,255,255,0.5)"
                    : "#111827",
                cursor: !agreed || !passwordMatch ? "not-allowed" : "pointer",
              }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  <span>Creating account…</span>
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
            <span className="text-white/30 text-xs">or</span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
          </div>

          {/* Sign In link */}
          <p className="text-center text-sm text-white/50">
            Already have an account?{" "}
            <Link to='/login'>
            <button
              type="button"
              className="text-white font-medium hover:underline underline-offset-2 transition-all duration-150"
            >
              Sign in
            </button>
            </Link>
          </p>
        </div>

        <p className="text-center text-white/25 text-xs mt-6">
          By creating an account, you agree to our Terms & Privacy Policy.
        </p>
      </div>
    </div>
  );
}
