import React, { useState } from 'react';
import Typography from '@bit/guya-ltd.gcss.atoms.typography';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import I18n from 'I18n';
import Formcontrol from '@bit/guya-ltd.gcss.organisms.formcontrol';
import Field from '@bit/guya-ltd.gcss.molecules.field';
import Button from '@bit/guya-ltd.gcss.atoms.button';
import { useAsync } from 'react-async';
import {
    Mail,
    Key
} from 'react-ionicons-icon';
import Logo from '@bit/guya-ltd.gcss.molecules.logo';

const { REACT_APP_API_GATEWAY } = process.env;

const LOGIN_URL = REACT_APP_API_GATEWAY + '/api/v1/sessions';

const LoginModal = (props) => {
    /* State hooks */
    const [email, setEmail] = useState("");

    /* State hooks */
    const [password, setPassword] = useState("");

    /* Rest API Authenticator function */
    const auth = ([email, password], { signal }) => 
        fetch(LOGIN_URL, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'identity': email,
                'password': password
            })
        }, signal)
        .then(response => {
            
            return response.json();
        })
        .then(data => {

        } );

    const handleLogin = event => {
        event.preventDefault();
        // Reste Errors
        //setLoginEmpty(false);

        /*if(email == "" || password == "")
            setLoginEmpty(true);
        else
            run(email, password);*/
    }

    /* Async api call */
    const { isPending, error, run } = useAsync({ deferFn: auth })

    return(
        <div className="row">
            <div className="row">
                <div className="col-md-10"/>
                <div className="col-md-2">
                    <Logo src={process.env.PUBLIC_URL + "/images/guya-shop-white.png"} size="sm"/>
                    <br /><br />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12" style={{marginLeft: "38px"}}>
                    <div>
                        <Formcontrol onSubmit={handleLogin}>
                            <Field
                                type='text'
                                label={ <I18n t="credential.email" /> }
                                placeholder='Email'
                                theme='red'
                                addon={ 
                                    {
                                        left: <div className="icon icon--sm"><Mail size="20px" /></div>,
                                    } 
                                }
                                value={email} 
                                onChange={event => setEmail(event.target.value)}
                            />
                            <Field
                                type='password'
                                label={ <I18n t="credential.password" /> }
                                placeholder='Password'
                                theme='royal-blue'
                                addon={ 
                                    {
                                        left: <div className="icon icon--sm"><Key size="20px" /></div>
                                    } 
                                }
                                value={password} 
                                onChange={event => setPassword(event.target.value)}/>
                                {!isPending &&
                                    <Button type='submit' disable={isPending} block theme='royal-blue' variant='primary'><I18n t='login' /></Button>
                                }
                                {!isPending || 
                                    <Button block theme='red' variant='primary'>
                                        <svg width="25px" height="25px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                        <circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
                                        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                                        </circle>
                                        </svg>
                                    </Button>
                                }
                        </Formcontrol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;