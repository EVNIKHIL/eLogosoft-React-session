const Login = ({ setAuthenticated }) => {
  return (
    <div>
      <p>Login</p>
      <div>
        <button onClick={setAuthenticated}>Authenticate</button>
      </div>
    </div>
  );
};

export default Login;
