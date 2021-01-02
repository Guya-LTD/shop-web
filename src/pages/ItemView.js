import React, { useState } from 'react';
import Breadcrumb from '@bit/guya-ltd.gcss.molecules.breadcrumb';
import Link from '@bit/guya-ltd.gcss.atoms.link';
import Typography from '@bit/guya-ltd.gcss.atoms.typography';
import HomeLayout from 'pages/HomeLayoutPlain';
import I18n from 'I18n';
import { useFetch, useAsync } from 'react-async';

const PRODUCTS_URL = '/api/v1/products/';

const ItemView = (props) => {
    /* Localization */
    const locale = props.match.params.locale == null ? 'en' : props.match.params.locale;

    const headers = { Accept: 'application/json' }

    const { data, error, isPending, run } = useFetch(PRODUCTS_URL + props.match.params.id, { headers })

    return(
            <HomeLayout locale={locale} route_location={'item/' + props.match.params.id}>
                <div className="row">
                    <div className="col-xs-12 col-md-1" />
                    <div className="col-xs-12 col-md-2">
                        <br />
                        <Breadcrumb
                            lists={
                                [
                                { state: 'none', link: <Link href="#" theme="cornflower-blue" size='sm'><I18n t="home" />&nbsp;</Link>},
                                    { state: 'active', link: <Link href="#" theme="cornflower-blue" size='sm'><I18n t="item"/></Link>}
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
                    <div className="col-xs-1 col-md-2" />
                    <div className="col-xs-10">
                        <div className="row">
                            <div className="col-xs-12 col-md-1">
                            </div>
                            <div className="col-xs-10 col-md-11">
                                <div className="row">
                                    <div className="col-xs-12 col-md-4">
                                        {(data) || (data != undefined) ? 
                                            <img src={process.env.PUBLIC_URL + '/images/product/' + data.data.assets.images[0].src} /> 
                                            : 'Loading...'
                                        }
                                    </div>
                                    <div className="col-xs-12 col-md-4">
                                        <h5 className="typography theme-red" style={{color: '#5e6df2'}}>
                                            {(data) || (data != undefined) ? 
                                                data.data.category_name
                                                : 'Loading...'
                                            }
                                        </h5>
                                        <h1 className="typography theme-red" style={{color: '#4c4c4c'}}>
                                            {(data) || (data != undefined) ? 
                                                data.data.names.en
                                                : 'Loading...'
                                            }
                                        </h1>
                                    </div>
                                </div>
                            <br /><br /><br /><br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </HomeLayout>
    )
}

export default ItemView;