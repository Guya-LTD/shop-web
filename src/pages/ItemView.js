import React, { useState } from 'react';
import Breadcrumb from '@bit/guya-ltd.gcss.molecules.breadcrumb';
import Link from '@bit/guya-ltd.gcss.atoms.link';
import Typography from '@bit/guya-ltd.gcss.atoms.typography';
import HomeLayout from 'pages/HomeLayoutPlain';
import I18n from 'I18n';

const ItemView = (props) => {
    /* Localization */
    const locale = props.match.params.locale == null ? 'en' : props.match.params.locale;

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
                            <div className="col-xs-12 col-md-2">
                                Filter by
                            </div>
                            <div className="col-xs-0 col-md-1"/>
                            <div className="col-xs-10 col-md-8">

                            <br /><br /><br /><br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </HomeLayout>
    )
}

export default ItemView;