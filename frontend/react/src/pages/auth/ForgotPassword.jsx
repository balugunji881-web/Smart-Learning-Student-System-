function ForgotPassword() {
  return (
    <div className="auth-container">

      <h1>
        Forgot Password
      </h1>

      <input
        type="email"
        placeholder="Enter Email"
      />

      <button>
        Send Reset Link
      </button>

    </div>
  );
}

export default ForgotPassword;