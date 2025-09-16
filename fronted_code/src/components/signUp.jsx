import Navbar from "./Navbar";
const SignUp = () => {
  return (
    <>
    <Navbar />
    <div className="flex items-center justify-center h-[580px] bg-gray-200">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">🙎‍♂️ Sign Up</h1>
        <form className="space-y-4">
          <div>
            <label className="text-gray-700 font-bold mb-1">Username</label>
            <input type="text" placeholder="Choose a username" className="w-full px-4 py-2 border rounded-lg"/>
          </div>
          <div>
            <label className="text-gray-700 font-bold mb-1">Email</label>
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-lg"/>
          </div>
          <div>
            <label className="text-gray-700 font-bold mb-1">Password</label>
            <input type="password" placeholder="Create a password" className="w-full px-4 py-2 border rounded-lg"/>
          </div>
          <div>
            <label className="text-gray-700 font-bold mb-1">Confirm Password</label>
            <input type="password" placeholder="Confirm your password" className="w-full px-4 py-2 border rounded-lg"/>
          </div>
          <button type="submit" className="w-full bg-[#3a4664] text-white py-2 rounded-lg">
            Sign Up
          </button>
        </form>

        <p className="text-md text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/signin" className="text-[#3a4664] hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  </>
  );
};

export default SignUp;
