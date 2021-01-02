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
    Key,
    Person
} from 'react-ionicons-icon';
import Logo from '@bit/guya-ltd.gcss.molecules.logo';
import Cookies from 'universal-cookie';
import Blockquote from '@bit/guya-ltd.gcss.molecules.blockquote';
import { Redirect } from 'react-router-dom';

const LOGIN_URL = '/api/v1/sessions';

const LoginModal = (props) => {
    const locale = 'en';

    const cookies = new Cookies();

    const EXPIRE_DATE = 30; // 30 Days

    const expires = new Date(Date.now() + EXPIRE_DATE * 24 * 60 * 60 * 1000)

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
            if(response.status == 201)
                // Resturn stream response data
                return response.json()
            else
                setLoginError(true)

            // Alway return decoded data
            setPassword("");
            return response.json();
        })
        .then(data => {
            console.log(data);
            // Save the token and redirect
            if(error == undefined && data.status_code == 201){
                if(data.data.token != null) {
                    console.log("Enteredd");
                    cookies.set('loged_in', true, { path: '/shop', expires:  expires });
                    cookies.set('email', email, { path: '/shop', expires:  expires });
                    cookies.set('name', email.split('@')[0], { path: '/shop', expires:  expires });
                    cookies.set('token', data.data.token, { path: '/shop', expires:  expires });
                    setLoginRedirect(true)
                } else {
                    setLoginError(true);
                }
            }else {
                setLoginError(true);
            }
        } );

    /* Async api call */
    const { isPending, error, run } = useAsync({ deferFn: auth })

    /* State hooks */
    const [email, setEmail] = useState("");

    /* State hooks */
    const [password, setPassword] = useState("");

    /* Login Erro */
    const [loginError, setLoginError] = useState(false);

    /* Login Redirect */
    const [loginRedirect, setLoginRedirect] = useState(false);
    
    /* Empty fields */
    const [loginEmpty, setLoginEmpty] = useState(false);

    const handleLogin = event => {
        event.preventDefault();
        // Reste Errors
        setLoginEmpty(false);

        if(email == "" || password == "")
            setLoginEmpty(true);
        else
            run(email, password);
    }

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
                    {error && console.log(error)}
                    {error &&  <Redirect push to={`/${locale}/error?status_code=500&stack_trace=L1&message=${error.message}`} />}
                    {loginError && <Blockquote
                                    type='notification'
                                    theme='royal-blue'
                                    variant='danger'
                                    header={ <I18n t="login_failed" /> }
                                    body={ <I18n t="login_failed_description" /> }
                                />
                    }
                    {loginEmpty && <Blockquote
                                    type='notification'
                                    theme='royal-blue'
                                    variant='danger'
                                    header={ <I18n t="login_field_empty" /> }
                                    body={ <I18n t="login_field_empty_description" /> }
                                />
                    }
                    {loginRedirect && <Redirect to='/home/orders' />}
                    </div>
                    <div>
                        <Formcontrol onSubmit={handleLogin}>
                            <Field
                                type='text'
                                label={ <I18n t="email_or_phone_number" /> }
                                placeholder='Email or phone number'
                                theme='cornflower-blue'
                                addon={ 
                                    {
                                        left: <div className="icon icon--sm"><Person size="20px" /></div>,
                                    } 
                                }
                                value={email} 
                                onChange={event => setEmail(event.target.value)}
                            />
                            <Field
                                type='password'
                                label={ <I18n t="password" /> }
                                placeholder='Password'
                                theme='cornflower-blue'
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