// src/pages/SignIn.jsx
import Navbar from "../components/Navbar";

export default function SignIn() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-[80vh]">
        <form className="border p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
          <input type="email" placeholder="Email" className="w-full border p-2 mb-2" />
          <input type="password" placeholder="Password" className="w-full border p-2 mb-4" />
          <button className="bg-black text-white p-2 w-full">Sign In</button>
        </form>
      </div>
    </div>
  )
}
