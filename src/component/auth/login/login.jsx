import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input placeholder={'login'}/>
        </div>
        <div>
          <input placeholder={'password'}/>
        </div>
        <div>
          <input type={'checkbox'}/> remember me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
