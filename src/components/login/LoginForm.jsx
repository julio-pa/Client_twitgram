

const LoginForm = () => {
  return (
    <div className=' w-3/4 p-3 flex flex-col justify-center gap-3'>
      <form className="flex flex-col gap-3 ">
        <label className="font-semibold text-lg">Username</label>
        <input type="text" maxLength="64" className="text-black rounded-full border-4 border-transparent p-1 outline-none focus:border-cyan-400" placeholder="Username" required />
        <label className="font-semibold text-lg">Email</label>
        <input type="email" className="text-black rounded-full border-4 border-transparent p-1 outline-none focus:border-cyan-400" placeholder="Email" required />
        <label className="font-semibold text-lg">Password</label>

        <input type="password" className="text-black rounded-full border-4 border-transparent p-1 outline-none focus:border-cyan-400" placeholder="Password" required />
        <button type="submit" className="bg-cyan-400 rounded-full p-3 font-semibold text-xl hover:bg-blue-400">Create Account</button>
      </form>
      <p className=" text-gray-400 text-xs">By registering, you agree to the Terms of Service and Privacy Policy, including the Use of Cookies policy.</p>
      <div className="text-2xl font-semibold">Already have an account?</div>
      <button className="bg-transparent border rounded-full p-3 font-semibold text-xl hover:bg-blue-400">Sign in</button>
    </div>
  );
}

export default LoginForm;
