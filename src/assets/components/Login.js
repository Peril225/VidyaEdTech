import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
}
from 'mdb-react-ui-kit';
import axios from "axios";


function Login() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const handleLoginSubmit = async (e) => {
    const data = {
      email,
      password
  };
  axios.get('http://localhost:3000/api/login', data)
      .then((res) => {
          console.log(res.config.email)
          console.log(res.config.password)
      }).catch((error) => {
          console.log(error)
      });
      setLogin(true);
  }

  const handleRegisterSubmit = async (e) => {
    const data = {
      name,
      email,
      username,
      password
  };
  axios.post('http://localhost:3000/api/register', data)
      .then((res) => {
          console.log(res.config.data)
      }).catch((error) => {
          console.log(error)
      });
      setRegister(true);

  }
  
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-25">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>
          <br></br>
          <MDBInput wrapperClass='mb-4' required label='Email address' id='form1' type='email' name='email' value={email} placeholder='@example.com' onChange={(e) => setEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' required label='Password' id='form2' type='password' name='password' value={password} placeholder='********' onChange={(e) => setPassword(e.target.value)}/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" type='submit' onClick={(e) => handleLoginSubmit(e)}>Sign in</MDBBtn>

        </MDBTabsPane>
        
        <MDBTabsPane show={justifyActive === 'tab2'}>
          <br></br>
          <MDBInput wrapperClass='mb-4' label='Name' id='name' type='text' name='name' value={name} placeholder='e.g. John Doe' onChange={(e) => setName(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Username' id='username' type='text' name='username' value={username} placeholder='e.g. johndoe122' onChange={(e) => setUsername(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email' name='email' value={email} placeholder='example@text.com' onChange={(e) => setEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' name='password' value={password} placeholder='********' onChange={(e) => setPassword(e.target.value)}/>

          <MDBBtn className="mb-4 w-100" onClick={(e) => handleRegisterSubmit(e)}>Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Login;