import React from 'react'
import './App.css'

const Register = () => {
  return (
    <div>
        

<body>

<div class="container">
  <form class="registration-form" method='GET'>
    <h2>Register</h2>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type='text' id='name' name='name' />
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required />
    </div>
    <div class="form-group">
      <label for="confirm-password">Confirm Password:</label>
      <input type="password" id="confirm-password" name="confirm-password" required />
    </div>
    <button type="submit">Register</button>
  </form>
</div>

</body>



    </div>
  )
}

export default Register