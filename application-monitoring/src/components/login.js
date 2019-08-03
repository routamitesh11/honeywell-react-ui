import React, { useState } from 'react';
import Dashboard from './dashboard';

function Login() {
    const [user, setUser] = useState();
    const [submitted, setSubmit] = useState(false);

    let usernameChangeHandler = (e) => {
        setUser(e.target.value);
    };

    let usernameSubmitHandler = (e) => {
        e.preventDefault();
        setSubmit(true);
        console.log('Submitted');

    }
    if (submitted) {
        return <Dashboard user={user} />;
        // return 'hello';
    }
    return (
        <form onSubmit={usernameSubmitHandler}>
        <div className='row'>
            <div className='offset-sm-3 col-sm-6 offset-sm-3'>
                <h1 className="text-center">React Application Monitoring System</h1>
            </div>
        </div>
        <div className="row">
            <div className='offset-sm-3 col-sm-6 offset-sm-3'>
                <input className='form-control'
                    type="text"
                    onChange={usernameChangeHandler}
                    placeholder="Enter a username..."
                    required />
            </div>
            <div className='pull-right'>
                <input className='btn btn-primary' type="submit" value="Submit" />
            </div>
        </div>
        </form >
    );
}

export default Login;
