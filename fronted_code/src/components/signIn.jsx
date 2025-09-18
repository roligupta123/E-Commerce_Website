import Navbar from "./Navbar";

const SignIn = () => {
  return (
    <>
    <Navbar />
    <div className="flex items-center justify-center h-[580px] bg-gray-200">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">🙎‍♂️ Sign In</h1>
        <form className="space-y-5">
          <div>
            <label className="text-gray-700 mb-1 font-bold">Username</label>
            <input type="text" placeholder="Enter your username" className="w-full px-4 py-2 border rounded-lg"/>
          </div>
          <div>
            <label className="text-gray-700 font-bold mb-1">Password</label>
            <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 border rounded-lg"/>
          </div>
          <button type="submit" className="w-full bg-[#3a4664] font-bold text-white py-2 rounded-lg">
            Sign In
          </button>
        </form>
        <p className="text-md text-center text-gray-600 mt-4">
          If don't have an account?{" "}
          <a href="/signup" className="text-[#3a4664] hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
 </>
  );
};

export default SignIn;
