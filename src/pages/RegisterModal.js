import React, { useState } from 'react';
import Typography from '@bit/guya-ltd.gcss.atoms.typography';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import I18n from 'I18n';
import Formcontrol from '@bit/guya-ltd.gcss.organisms.formcontrol';
import Field from '@bit/guya-ltd.gcss.molecules.field';
import Button from '@bit/guya-ltd.gcss.atoms.button';
import { useAsync } from 'react-async';
import { Redirect } from 'react-router-dom';
import {
    Mail,
    Key,
    Person
} from 'react-ionicons-icon';
import Logo from '@bit/guya-ltd.gcss.molecules.logo';
import Blockquote from '@bit/guya-ltd.gcss.molecules.blockquote';

const { REACT_APP_API_GATEWAY } = process.env;

const REGISTER_URL = '/api/v1/users';

const RegisterModal = (props) => {
    const [fullname, setFullname] = useState("");

    const [identity, setIdentity] = useState("");

    const [password, setPassword] = useState("");

    const [registerError, setRegisterError] = useState(false);

    const [registerEmpty, setRegisterEmpty] = useState(false);

    const [registerRedirect, setRegisterRedirect] = useState(false);

    /* Rest API Authenticator function */
    const auth = ([fullname, identity, password], { signal }) => 
        fetch(REGISTER_URL, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'name': fullname,
                'identity': identity,
                'password': password,
                'email': '',
                'pnum': '',
                'uti': 'CU_2210'
            })
        }, signal)
        .then(response => {
            if(response.status == 201){
                // Resturn stream response data
                setRegisterRedirect(true);
                return response.json()
            } else {
                setRegisterError(true)
            }

            setPassword("");
            //console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
        } );

    const handleRegister = event => {
        event.preventDefault();
        // Reste Errors
        setRegisterEmpty(false);

        if(fullname == "" || identity == "" || password == "")
            setRegisterEmpty(true);
        else
            run(fullname, identity, password);
    }

    /* Async api call */
    const { isPending, error, run } = useAsync({ deferFn: auth })

    return (
        <div className="row">
            {registerRedirect && <Redirect to={`/home`} />}
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
                        {registerError && <Blockquote
                                    type='notification'
                                    theme='royal-blue'
                                    variant='danger'
                                    header={ <I18n t="login_failed" /> }
                                    body={ <I18n t="login_failed_description" /> }
                                />
                        }
                        {registerEmpty && <Blockquote
                                        type='notification'
                                        theme='royal-blue'
                                        variant='danger'
                                        header={ <I18n t="login_field_empty" /> }
                                        body={ <I18n t="login_field_empty_description" /> }
                                    />
                        }
                    </div>
                    <div>
                        <Formcontrol onSubmit={handleRegister}>
                            <Field
                                    type='text'
                                    label={ <I18n t="full_name" /> }
                                    placeholder='Email or phone number'
                                    theme='red'
                                    addon={ 
                                        {
                                            left: <div className="icon icon--sm"><Person size="20px" /></div>,
                                        } 
                                    }
                                    value={fullname} 
                                    onChange={event => setFullname(event.target.value)}
                                />
                            <Field
                                    type='text'
                                    label={ <I18n t="email_or_phone_number" /> }
                                    placeholder='Email or phone number'
                                    theme='red'
                                    addon={ 
                                        {
                                            left: <div className="icon icon--sm"><Person size="20px" /></div>,
                                        } 
                                    }
                                    value={identity} 
                                    onChange={event => setIdentity(event.target.value)}
                                />
                            <Field
                                type='password'
                                label={ <I18n t="password" /> }
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
                                    <Button type='submit' disable={isPending} block theme='royal-blue' variant='primary'><I18n t='sign_up' /></Button>
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

export default RegisterModal;