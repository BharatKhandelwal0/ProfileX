import { useState } from "react";
import thanos from "../../assets/thanos.jpeg";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password
    }
  
    const result = await loginUser(loginData)
    console.log(result);

    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  const loginUser = async (loginData)=>{
    const res = await fetch('http://localhost:1100/user/login',{
      method:'POST',
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify(loginData)
    })
    return res.json()
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <img
        src={thanos}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md mx-4">
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
          {/* Logo / Brand */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}>
              {/* <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg> */}
            </div>
            <h1 className="text-white text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-white/50 text-sm mt-1">Sign in to your account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">

            {/* Email */}
            <div>
              <label className="block text-white/70 text-xs font-medium mb-1.5 tracking-wide uppercase">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
                onFocus={e => e.target.style.border = "1px solid rgba(255,255,255,0.4)"}
                onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.12)"}
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-white/70 text-xs font-medium tracking-wide uppercase">
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs text-white/50 hover:text-white transition-colors duration-150"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full rounded-lg px-4 py-3 pr-11 text-sm text-white placeholder-white/30 outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                  onFocus={e => e.target.style.border = "1px solid rgba(255,255,255,0.4)"}
                  onBlur={e => e.target.style.border = "1px solid rgba(255,255,255,0.12)"}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 transition-colors duration-150"
                >
                  {showPassword ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 mt-2 flex items-center justify-center gap-2"
              style={{
                background: loading ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.92)",
                color: loading ? "rgba(255,255,255,0.7)" : "#111827",
              }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  <span>Signing in…</span>
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
            <span className="text-white/30 text-xs">or</span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
          </div>

          {/* Create account */}
          <p className="text-center text-sm text-white/50">
            Don't have an account?{" "}
            <button
              type="button"
              className="text-white font-medium hover:underline underline-offset-2 transition-all duration-150"
            >
              Create one
            </button>
          </p>
        </div>

        {/* Footer note */}
        <p className="text-center text-white/25 text-xs mt-6">
          By signing in, you agree to our Terms & Privacy Policy.
        </p>
      </div>
    </div>
  );
}
