import React from 'react'
import loginBG from '../assets/login_bg.png'

function Login() {
  return (
    <section className="w-full bg-neutral-200 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative w-full overflow-hidden rounded-3xl bg-white shadow-xl md:bg-transparent">
          <img
            src={loginBG}
            alt="Login background"
            className="hidden h-full w-full object-cover md:block"
          />
          <div className="relative z-10 flex justify-center px-6 py-10 md:absolute md:inset-0 md:items-center md:px-10 md:py-0">
            <form className="w-full max-w-md space-y-5 rounded-[40px] bg-white px-8 py-8 text-center shadow-lg md:px-10 md:bg-white/80 md:backdrop-blur-md">
              <h2 className="text-xl font-semibold text-gray-800">Welcome back</h2>
              <div className="space-y-3">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-full border border-transparent bg-white px-6 py-3 text-sm text-gray-700 shadow focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
                />
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-full border border-transparent bg-white px-6 py-3 text-sm text-gray-700 shadow focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
                />
              </div>
              <button
                type="submit"
                className="mx-auto inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login