import React from 'react';
import Shopview from '@bit/guya-ltd.gcss.templates.shopview';
import Navbar from '@bit/guya-ltd.gcss.molecules.navbar';
import Logo from '@bit/guya-ltd.gcss.molecules.logo';
import Link from '@bit/guya-ltd.gcss.atoms.link';
import Search from '@bit/guya-ltd.gcss.atoms.search';
import Button from '@bit/guya-ltd.gcss.atoms.button';
import Nav from '@bit/guya-ltd.gcss.molecules.nav';
import Dropdown from '@bit/guya-ltd.gcss.molecules.dropdown';
import {
    Search as SearchIcon,
    MenuOutline,
    CloseOutline,
    Language
} from 'react-ionicons-icon';
import { Redirect, NavLink as RouterNavLink } from 'react-router-dom';
import { NavLink } from 'react-router-i18n';
import I18n from 'I18n';
import { CategorySearch } from '@appbaseio/reactivesearch';

const HomeLayout = (props) => {
    const { children, locale, route_location } = props;

    /* Index Header open icon */
    const headerOpen =  <MenuOutline size="45px"/>

    const headerClose = <CloseOutline size="20px" />

    const headerBrand = {
        small: <Logo src={process.env.PUBLIC_URL + "/images/guya-shop-white.png"} size="sm"/>,
        large: <Logo src={process.env.PUBLIC_URL + "/images/guya-shop-white.png"} size="sm"/>
    }

    const headerSearch = {
        sticky: <Search
                    theme='cornflower-blue'
                    icon={
                        <SearchIcon size="20px" />
                    }
                />
    }

    const headerCollapse = {
        search: null,
        left: <CategorySearch
            componentId="searchbox"
            dataField="customer_full_name"
            categoryField="email"
            placeholder="Search for cars"
        />,
        right: <span>
                    <Link theme="cornflower-blue" cls="link--nav-cornflower"><I18n t="sign_up" /></Link>
                    <Link theme="cornflower-blue" cls="link--nav-cornflower"><I18n t="login" /></Link>
                    <div className="divider-vr" />
                    <a className='link link--xs link--light-gh theme-red' style={{marginLeft: "0px",  verticalAlign: "sub"}}>
                        <Dropdown
                            type="is-hoverable"
                            trigger={
                                <Language size="27px" fill="#858585" />
                            }
                            >
                            <NavLink ignoreLocale to={"/en/" + route_location} className="link link-md theme-read linkdropdown-item">
                                English
                            </NavLink>
                            <NavLink ignoreLocale to={"/am/" + route_location}  className="link link-md theme-read linkdropdown-item">
                                እማርኛ
                            </NavLink>
                        </Dropdown>
                    </a>
                    <a href="#" className="link nav-cornflower" style={{ marginLeft: "2px", verticalAlign: "bottom"}}>
                        <span>
                            <svg height="27px" xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='176' cy='416' r='16' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/><circle cx='400' cy='416' r='16' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M48 80h64l48 272h256'/><path d='M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/></svg>
                        </span>
                    </a>
                    
                    <Button theme='cornflower-blue' variant="primary">Sell</Button>
                </span> 
    }

    const headerNavNavs = [
        {
            'type': 'single',
            'nav':  <RouterNavLink to={'/' + locale + '/category/women'} className='link theme-cornflower-blue'><I18n t='women' /></RouterNavLink>
        },
        {
            'type': 'single',
            'nav': <RouterNavLink to={'/' + locale + '/category/men'} className='link theme-cornflower-blue'><I18n t='men' /></RouterNavLink>
        },
        {
            'type': 'single',
            'nav': <RouterNavLink to={'/' + locale + '/category/electronics'} className='link theme-cornflower-blue'><I18n t='electronics' /></RouterNavLink>
        },
        {
            'type': 'single',
            'nav': <RouterNavLink to={'/' + locale + '/category/toys'} className='link theme-cornflower-blue'><I18n t='toys' /></RouterNavLink>
        },
        {
            'type': 'single',
            'nav': <RouterNavLink to={'/' + locale + '/category/beauty'} className='link theme-cornflower-blue'><I18n t='beauty' /></RouterNavLink>
        },
        {
            'type': 'single',
            'nav': <RouterNavLink to={'/' + locale + '/category/kids'} className='link theme-cornflower-blue'><I18n t='kids' /></RouterNavLink>
        },
        {
            'type': 'single',
            'nav': <RouterNavLink to={'/' + locale + '/category/vintage'} className='link theme-cornflower-blue'><I18n t='vintage' /></RouterNavLink>
        },
        {
            'type': 'single',
            'nav': <RouterNavLink to={'/' + locale + '/category/sports'} className='link theme-cornflower-blue'><I18n t='sports' /></RouterNavLink>
        },
        {
            'type': 'single',
            'nav': <RouterNavLink to={'/' + locale + '/category/handmade'} className='link theme-cornflower-blue'><I18n t='handmade' /></RouterNavLink>
        }
    ]

    const headerNav = <Nav
                        type="single"
                        navs={headerNavNavs}
                        />
    
    const header = <Navbar
                        theme='cornflower-blue'
                        open={headerOpen} 
                        close={headerClose} 
                        brand={headerBrand}
                        search={headerSearch}
                        collapse={headerCollapse}
                        nav={headerNav}
                    />

    return(
        <Shopview header={header}>
            {children}
        </Shopview>
    )
}

export default HomeLayout;