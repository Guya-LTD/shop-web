import React, { useState } from 'react';
import Breadcrumb from '@bit/guya-ltd.gcss.molecules.breadcrumb';
import Link from '@bit/guya-ltd.gcss.atoms.link';
import Typography from '@bit/guya-ltd.gcss.atoms.typography';
import HomeLayout from 'pages/HomeLayoutPlain';
import I18n from 'I18n';
import Async, { useFetch, useAsync } from 'react-async';
import Button from '@bit/guya-ltd.gcss.atoms.button';
import {
    CloseOutline
} from 'react-ionicons-icon';
import Cookies from 'universal-cookie';

const CARTS_URL = '/api/v1/carts';

const loadProduct = async ({ productId }, { signal }) => {
    const res = await fetch(`/api/v1/users/${productId}`, { signal })
    if (!res.ok) throw new Error(res.statusText)
    console.log(res);
    return res.json()
  }

const ItemView = (props) => {
    /* Localization */
    const locale = props.match.params.locale == null ? 'en' : props.match.params.locale;

    const cookies = new Cookies();

    const headers = { Accept: 'application/json', Authorization: 'Bearer ' + cookies.get('token') }

    const { data, error, isPending, run } = useFetch(CARTS_URL, { headers })

    return(
            <HomeLayout locale={locale} route_location={'carts'}>
                {error && console.log(error)}
                <div className="row">
                    <div className="col-xs-12 col-md-1" />
                    <div className="col-xs-12 col-md-2">
                        <br />
                        <Breadcrumb
                            lists={
                                [
                                { state: 'none', link: <Link href="#" theme="cornflower-blue" size='sm'><I18n t="home" />&nbsp;</Link>},
                                    { state: 'active', link: <Link href="#" theme="cornflower-blue" size='sm'><I18n t="cart"/></Link>}
                                ]
                            }
                        />
                    </div>
                    <div className="col-xs-0 col-md-1"/>
                    <div className="col-xs-6">
                        <br /><br />
                        
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-xs-1 col-md-1" />
                    <div className="col-xs-10">
                        <div className="row">
                            <div className="col-xs-12 col-md-2">
                            </div>
                            <div className="col-xs-10 col-md-10">
                                {(data) || (data != undefined) ? 
                                    data.data[0].items.map(item => (
                                        <Async promiseFn={loadProduct} productId={item.product_id}>
                                            <Async.Pending>Loading...</Async.Pending>
                                            <Async.Fulfilled>
                                            {data => (
                                                <div className="row">
                                                    <div className="col-xs-1"> 
                                                        <img src={process.env.PUBLIC_URL + '/images/product/1.jpg'} style={{width: "120px", height: '120px', background: '#ecedf1', borderRadius: '8px'}}/>
                                                    </div>
                                                    <div className="col-xs-2" style={{marginLeft: "40px", marginTop: "2px"}}>
                                                        <p className="typography theme-cornflower-blue" style={{color: '#4c4c4c', marginTop: '0', marginBottom: '9px', fontSize: '26px', fontWeight: '600'}}>{data.data}</p>
                                                        <p className="typography theme-cornflower-blue" style={{color: '#4c4c4c', marginTop: '0', fontSize: '16px', fontWeight: '600'}}>50Birr</p>
                                                    </div>
                                                    <div className="col-xs-4" />
                                                    <div className="col-xs-3">
                                                        <Link href="#"><CloseOutline size="20px" /></Link>
                                                    </div>
                                                </div>
                                            )}
                                            </Async.Fulfilled>
                                            <Async.Rejected>{error => `Something went wrong: ${error.message}`}</Async.Rejected>
                                        </Async>
                                    )) 
                                    : 'No Item found in cart'
                                }
                            <br /><br /><br /><br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </HomeLayout>
    )
}

export default ItemView;