import React, { useState } from 'react';
import Shophome from '@bit/guya-ltd.gcss.templates.shophome';
import Navbar from '@bit/guya-ltd.gcss.molecules.navbar';
import Logo from '@bit/guya-ltd.gcss.molecules.logo';
import Link from '@bit/guya-ltd.gcss.atoms.link';
import Search from '@bit/guya-ltd.gcss.atoms.search';
import Button from '@bit/guya-ltd.gcss.atoms.button';
import Nav from '@bit/guya-ltd.gcss.molecules.nav';
import Notification from '@bit/guya-ltd.gcss.molecules.notification';
import Hero from '@bit/guya-ltd.gcss.molecules.hero';
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
import Chat from 'pages/Chat';
import LoginModal from 'pages/LoginModal';
import RegisterModal from 'pages/RegisterModal';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const Index = (props) => {
    /* Localization */
    const locale = props.match.params.locale == null ? 'en' : props.match.params.locale;

    const [visibleLoginModal, setVisibleLoginModal] = useState(false);

    const [visibleRegisterModal, setVisibleRegisterModal] = useState(false);

    const hideLoginModal = event => {
        event.preventDefault();
        setVisibleLoginModal(false);
    }

    const showLoginModal = event => {
        event.preventDefault();
        setVisibleLoginModal(true);
    }

    const showRegisterModal = event => {
        event.preventDefault();
        setVisibleRegisterModal(true);
    }

    const hideRegisterModal = event => {
        event.preventDefault();
        setVisibleRegisterModal(false);
    }

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
        left: <Search
                theme='cornflower-blue'
                variant="nav"
                icon={<SearchIcon size="20px" />}
              />,
        right: <span>
                    <Link theme="cornflower-blue" cls="link--nav-cornflower" onClick={showRegisterModal}><I18n t="sign_up" /></Link>
                    <Link theme="cornflower-blue" cls="link--nav-cornflower" onClick={showLoginModal}><I18n t="login" /></Link>
                    <div className="divider-vr" />
                    <a className='link link--xs link--light-gh theme-red' style={{marginLeft: "0px",  verticalAlign: "sub"}}>
                        <Dropdown
                            type="is-hoverable"
                            trigger={
                                <Language size="27px" fill="#858585" />
                            }
                            >
                            <NavLink ignoreLocale to="/en" className="link link-md theme-read linkdropdown-item">
                                English
                            </NavLink>
                            <NavLink ignoreLocale to="/am" className="link link-md theme-read linkdropdown-item">
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

    const notification = <Notification 
                            size="sm"
                            href="a"
                            variant="bottom-border"
                            cls="row center-xs"
                            message={
                                <span>
                                    <span>Money Back Guarantee.</span>
                                </span>
                            }
                        />

    const hero = <Hero
                    variant="light"
                    left={
                        <div class='row'>
                            <div class='col-xs-4'></div>
                            <div class='col-xs-8'>
                                <span class=''>
                                    <h1 className="theme-cornflower-blue typography typography--header-2">Sell on Guya Easy</h1>
                                </span>
                            </div>
                        </div>
                    }
                    right={
                        <div class="row ">
                            <img src={process.env.PUBLIC_URL + "/images/lux-sell-desktop.png"} />
                        </div>
                    }
                />

    const services = <div class='row'>
                        <div class='col-xs-1'></div>
                        <div class='col-md col-xs-12'>
                            <div class='row it'>
                                <div class='col-xs-2 it__icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="64" viewBox="0 0 65 64" fill="none">
                                        <path d="M32.6602 64C50.3333 64 64.6602 49.6731 64.6602 32C64.6602 14.3269 50.3333 0 32.6602 0C14.987 0 0.660156 14.3269 0.660156 32C0.660156 49.6731 14.987 64 32.6602 64Z" fill="#ECEDF1"/>
                                        <path d="M25.5609 11.52H41.2986C42.0285 11.5665 42.7583 11.8922 43.2601 12.4506C43.7163 12.9624 43.99 13.6138 43.99 14.2652V50.5577C43.9444 51.3021 43.625 52.0001 43.1233 52.5119C42.6215 53.0237 41.9372 53.3029 41.253 53.3494H25.5153C24.7398 53.3029 24.01 52.9306 23.5082 52.3723C23.052 51.8605 22.8239 51.2091 22.7783 50.5577V14.3117C22.8239 13.6138 23.0976 12.8694 23.5994 12.4041C24.1924 11.8457 24.8767 11.5665 25.5609 11.52ZM24.603 13.3812C24.3293 13.6603 24.1924 14.0791 24.1924 14.4979C24.1924 15.475 24.1924 16.4521 24.1924 17.4292C30.3963 17.4292 36.5545 17.4292 42.7583 17.4292C42.7583 16.4055 42.7583 15.4284 42.7583 14.4048C42.7127 13.6138 42.0285 12.9159 41.253 12.9159C36.0983 12.9159 30.9437 12.9159 25.7434 12.9159C25.3328 12.8694 24.8767 13.0555 24.603 13.3812ZM24.1924 18.732C24.1924 27.5725 24.1924 36.4594 24.1924 45.2999C30.3963 45.2999 36.5545 45.2999 42.7583 45.2999C42.7583 36.4594 42.7583 27.5725 42.7583 18.732C36.5089 18.732 30.3507 18.732 24.1924 18.732ZM24.1924 46.6958C24.1924 47.9986 24.1924 49.3014 24.1924 50.6042C24.238 51.3952 24.9223 52.0931 25.6978 52.0931C30.8981 52.0931 36.0527 52.0931 41.253 52.0931C42.0285 52.0931 42.7127 51.3952 42.7583 50.6042C42.7583 49.3014 42.7583 47.9986 42.7583 46.6958C36.5089 46.6958 30.3507 46.6958 24.1924 46.6958Z" fill="black"/>
                                        <path d="M24.1924 14.4977C24.1924 14.079 24.3292 13.6602 24.6029 13.3811C24.8766 13.0554 25.3328 12.8692 25.7433 12.9158H41.2529C42.0284 12.9158 42.7127 13.6137 42.7583 14.4047V17.4291H24.1924V14.4977Z" fill="white"/>
                                        <path d="M24.1924 45.2998V18.7319H42.7583V45.2998H24.1924Z" fill="white"/>
                                        <path d="M24.1924 50.6041V46.6957H42.7583V50.6041C42.7127 51.3951 42.0284 52.093 41.2529 52.093H25.6977C24.9222 52.093 24.238 51.3951 24.1924 50.6041Z" fill="white"/>
                                        <path d="M24.1924 45.2999V18.7319H42.7583V45.2999H24.1924Z" fill="#F47900"/>
                                        <path d="M31.0347 14.6837C31.126 14.6372 31.1716 14.6372 31.2628 14.6372C32.7225 14.6372 34.1823 14.6372 35.642 14.6372C35.8701 14.6372 36.0982 14.8233 36.0982 15.1025C36.0982 15.3351 35.9157 15.5678 35.642 15.5678C34.1823 15.5678 32.7225 15.5678 31.2172 15.5678C30.9891 15.5678 30.8067 15.3817 30.761 15.149C30.7154 14.9629 30.8523 14.7768 31.0347 14.6837Z" fill="black"/>
                                        <path d="M32.9974 47.5337C33.4535 47.4406 33.9097 47.5337 34.2746 47.7664C34.6852 47.999 34.9589 48.3712 35.0957 48.8365C35.2326 49.3018 35.187 49.8136 35.0045 50.2324C34.7764 50.6977 34.4115 51.0234 33.9553 51.1629C33.4992 51.3491 32.9518 51.3025 32.4956 51.0234C32.0851 50.7907 31.7201 50.372 31.5833 49.9067C31.4464 49.3949 31.492 48.8365 31.7657 48.3712C32.0394 47.9059 32.4956 47.6268 32.9974 47.5337ZM33.0886 48.4643C32.7693 48.5573 32.4956 48.8365 32.4044 49.2087C32.3131 49.581 32.45 49.9532 32.7693 50.1858C33.043 50.4185 33.4079 50.465 33.7272 50.3254C34.0466 50.1858 34.2746 49.9067 34.3203 49.5344C34.3659 49.2087 34.229 48.883 34.0009 48.6504C33.7729 48.3712 33.3623 48.3247 33.0886 48.4643Z" fill="black"/>
                                        <path d="M27.8801 31.3602L32.3601 35.8402L38.7601 28.1602" stroke="white" stroke-width="2"/>
                                        </svg>
                                </div>
                                <div class='col-xs'>
                                    <p class='it__text'>Sell it.</p>
                                    <p class='it__text'><b>List in minutes.</b> Take a few photos.</p>
                                    <p class='it__text'>Add a description. Set your price</p>
                                </div>
                            </div>
                        </div>
                        <div class='col-md col-xs-12'>
                            <div class='row it'>
                                <div class='col-xs-2 it__icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="64" viewBox="0 0 65 64" fill="none">
                                        <path d="M32.6602 64C50.3333 64 64.6602 49.6731 64.6602 32C64.6602 14.3269 50.3333 0 32.6602 0C14.987 0 0.660156 14.3269 0.660156 32C0.660156 49.6731 14.987 64 32.6602 64Z" fill="#ECEDF1"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8005 18.3062H43.8805V44.5461H13.8005V18.3062Z" fill="black"/>
                                        <path d="M15.0806 19.5859V43.2659H42.6006V19.5859H15.0806Z" fill="white"/>
                                        <path d="M42.6006 24.7061H52.2006L56.6806 34.3061V44.5461H42.6006V24.7061Z" fill="black"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M43.8804 25.9863V43.2663H55.4004V34.5905L51.385 25.9863H43.8804Z" fill="#F47900"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M49.6404 34.3063H56.6804V35.5863H48.3604V25.9863H49.6404V34.3063Z" fill="black"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M49.6404 25.9863V34.3063H55.2685L51.385 25.9863H49.6404Z" fill="white"/>
                                        <path d="M24.0405 48.3863C22.8524 48.3863 21.7129 47.9143 20.8727 47.0741C20.0325 46.2339 19.5605 45.0944 19.5605 43.9063C19.5605 42.7181 20.0325 41.5786 20.8727 40.7384C21.7129 39.8983 22.8524 39.4263 24.0405 39.4263C25.2287 39.4263 26.3682 39.8983 27.2084 40.7384C28.0485 41.5786 28.5205 42.7181 28.5205 43.9063C28.5205 45.0944 28.0485 46.2339 27.2084 47.0741C26.3682 47.9143 25.2287 48.3863 24.0405 48.3863ZM45.1605 48.3863C43.9724 48.3863 42.8329 47.9143 41.9927 47.0741C41.1525 46.2339 40.6805 45.0944 40.6805 43.9063C40.6805 42.7181 41.1525 41.5786 41.9927 40.7384C42.8329 39.8983 43.9724 39.4263 45.1605 39.4263C46.3487 39.4263 47.4882 39.8983 48.3284 40.7384C49.1685 41.5786 49.6405 42.7181 49.6405 43.9063C49.6405 45.0944 49.1685 46.2339 48.3284 47.0741C47.4882 47.9143 46.3487 48.3863 45.1605 48.3863Z" fill="black"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0406 47.1061C23.1919 47.1061 22.378 46.7689 21.7778 46.1688C21.1777 45.5687 20.8406 44.7548 20.8406 43.9061C20.8406 43.0574 21.1777 42.2434 21.7778 41.6433C22.378 41.0432 23.1919 40.7061 24.0406 40.7061C24.8893 40.7061 25.7032 41.0432 26.3033 41.6433C26.9034 42.2434 27.2406 43.0574 27.2406 43.9061C27.2406 44.7548 26.9034 45.5687 26.3033 46.1688C25.7032 46.7689 24.8893 47.1061 24.0406 47.1061ZM45.1606 47.1061C44.3119 47.1061 43.4979 46.7689 42.8978 46.1688C42.2977 45.5687 41.9606 44.7548 41.9606 43.9061C41.9606 43.0574 42.2977 42.2434 42.8978 41.6433C43.4979 41.0432 44.3119 40.7061 45.1606 40.7061C46.0093 40.7061 46.8232 41.0432 47.4233 41.6433C48.0234 42.2434 48.3606 43.0574 48.3606 43.9061C48.3606 44.7548 48.0234 45.5687 47.4233 46.1688C46.8232 46.7689 46.0093 47.1061 45.1606 47.1061Z" fill="white"/>
                                        <path d="M5.48047 37.5062H18.2805V38.7862H5.48047V37.5062ZM8.04047 33.6662H18.2805V34.9462H8.04047V33.6662ZM10.6005 29.8262H18.2805V31.1062H10.6005V29.8262Z" fill="black"/>
                                        </svg>
                                </div>
                                <div class='col-xs'>
                                    <p class='it__text'>Ship it.</p> 
                                    <p class='it__text'><b>No meetups.</b> Printable shipping.</p>
                                    <p class='it__text'>label emailed to seller.</p>
                                </div>
                            </div>
                        </div>
                        <div class='col-md col-xs-12'>
                            <div class='row it'>
                                <div class='col-xs-2 it__icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none">
                                        <path d="M32 64.9999C49.6731 64.9999 64 50.4955 64 32.6035C64 14.7114 49.6731 0.207031 32 0.207031C14.3269 0.207031 0 14.7114 0 32.6035C0 50.4955 14.3269 64.9999 32 64.9999Z" fill="#ECEDF1"/>
                                        <path d="M53.4867 33.0354C53.4867 44.8236 44.0498 54.365 32.4267 54.365C20.8037 54.365 11.3667 44.8236 11.3667 33.0354C11.3667 21.2473 20.8037 11.7059 32.4267 11.7059C44.0498 11.7059 53.4867 21.2473 53.4867 33.0354Z" fill="#F47900" stroke="black" stroke-width="1.4"/>
                                        <path d="M37.4139 26.74L37.1411 27.129L37.4139 26.74C36.4586 26.07 35.1032 25.5322 33.8503 25.285V22.8174V22.3174H33.3503H32.4954H31.9954V22.8174V25.1422C30.6882 25.2151 29.6143 25.6158 28.8383 26.2945C27.9699 27.054 27.538 28.1076 27.538 29.2533C27.538 29.9762 27.7042 30.5984 28.0186 31.1316C28.3306 31.6606 28.7675 32.0665 29.2581 32.3915C30.1373 32.974 31.2745 33.3463 32.3426 33.6959L32.3828 33.7091L32.6237 33.7881L32.625 33.7885L32.6844 33.8078L32.6844 33.8078C33.8753 34.1957 34.8407 34.5147 35.5292 34.9884C35.8649 35.2193 36.1102 35.4723 36.2745 35.7665C36.4375 36.0583 36.5412 36.4267 36.5412 36.92C36.5412 37.7283 36.1954 38.3294 35.6184 38.7493C35.0208 39.1842 34.1432 39.4427 33.0999 39.4427C31.5322 39.4427 29.9607 38.7619 28.8035 37.6356L28.6795 37.5149L28.3246 37.1696L27.9758 37.5211L27.312 38.1901L26.9506 38.5545L27.3242 38.9063L27.4501 39.0248C28.7495 40.2483 30.3376 40.9929 31.9956 41.2272V43.5511V44.0511H32.4956H33.3506H33.8506V43.5511V41.2727C35.1523 41.1592 36.2267 40.7379 37.0135 40.0559C37.9389 39.2536 38.407 38.1406 38.407 36.9201C38.407 35.3155 37.7312 34.2603 36.6967 33.5255C35.7783 32.8732 34.5737 32.4745 33.4283 32.0953L33.3836 32.0805L33.2233 32.0274L33.2214 32.0268L33.0461 31.9695L33.0461 31.9695C31.9889 31.6241 31.0834 31.3249 30.418 30.9014C30.0804 30.6866 29.834 30.4572 29.6709 30.199C29.5111 29.9461 29.4151 29.6403 29.4151 29.2424C29.4151 28.5133 29.7179 27.9769 30.2175 27.6036C30.7368 27.2157 31.5065 26.9804 32.4361 26.9804C32.9748 26.9804 33.6757 27.1083 34.3844 27.3415C35.092 27.5743 35.7583 27.896 36.2387 28.2498L36.3655 28.3431L36.7276 28.6098L37.031 28.2779L37.6533 27.5971L38.0371 27.1772L37.5713 26.8505L37.4139 26.74Z" fill="white" stroke="white"/>
                                        </svg>
                                </div>
                                <div class='col-xs'>
                                    <p class='it__text'>Get paid.</p> 
                                    <p class='it__text'><b>Listings are free.</b>Flat 10% selling fee.</p>
                                    <p class='it__text'>charged when sale completes.</p>
                                </div>
                            </div>
                        </div>
                    </div>

    return (
        <>
            <div>
                <Rodal visible={visibleLoginModal} onClose={hideLoginModal} height="270">
                    <LoginModal />
                </Rodal>

                <Rodal visible={visibleRegisterModal} onClose={hideRegisterModal} height="570">
                    <RegisterModal />
                </Rodal>
            </div>
            <Chat />
            <Shophome
                header={header}
                notification={notification}
                hero={hero}
                services={services}
            >
            </Shophome>
        </>
    )
}

export default Index;