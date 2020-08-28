import React, { useState } from 'react';
import { useAsync } from 'react-async';

const Signup = () => {
    /* Rest API Singup function */
    const signup = ([identity, password], { signal }) => {
    }

    /* Async api call */
    const { isPending, error, run } = useAsync({ deferFn: signup })

    /* State hooks */
    const [password, setPassword] = useState('');

    const [identity, setIdentity] = useState('');

    const handleSignup = event => {
        event.preventDefault();
        run(identity, password);
    }

    return (
        <form onSubmit={handleSignup}>
            {isPending && <div>Please Wait</div>}
            {error && <div>error</div>}
            <input type='text' value={identity} onChange={event => setIdentity(event.target.value)} />
            <br />
            <input type='password' value={password} onChange={event => setPassword(event.target.value)} />
            <br />
            <button type='submit' disabled={isPending}>Signup</button>
        </form>
    )
}


export default Signup;