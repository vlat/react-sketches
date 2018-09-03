import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({loading}) => {
    return (
        <div>
            <div className="bp-widget-body">
                <div className="bd-structured-content-widget site-header">
                    <div className="bp-g-include">
                        <div className="lg-menu">
                            <div className="kit-grid kit-grid_fixed">
                                <div className="kit-row">
                                    <div className="kit-col kit-col_xs_10 header__wrapper lg-menu__row">

                                        <div className="header__logo" role="banner"><h1
                                            className="kit-hidden kit-hidden_screen kit-hidden_print">Домой</h1>
                                            <NavLink className="header__logo-link" to="/" >
                                                <img className="header__logo-image"
                                                     alt="Home"
                                                     src="logosber.svg"
                                                     aria-hidden="true"/>
                                            </NavLink>
                                        </div>


                                        <ul className="lg-menu__list">
                                            <li className="lg-menu__item"><span className="lg-menu__link"><span
                                                className="lg-menu__text">
                                                <NavLink className="segments__dropdown_link" to="/accounts" activeClassName="active">Список счетов</NavLink>
                                            </span></span>
                                            </li>
                                            <li className="lg-menu__item"><span className="lg-menu__link"><span
                                                className="lg-menu__text">
                                                <NavLink className="segments__dropdown_link" to="/admin" activeClassName="active">Страница администратора</NavLink>
                                            </span></span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="kit-col kit-col_xs_2 lg-menu__additional">
                                        <div className="lg-search header__search" id="lg-search">
                                            <div className="ya-site-form ya-site-form_inited_yes" id="ya-site-form0">
                                                <div className="ya-site-form__form">
                                                    <table className="ya-site-form__wrap" cellSpacing="0" cellPadding="0">
                                                        <tbody>
                                                        <tr>
                                                            <td className="ya-site-form__search-wrap">
                                                                <table className="ya-site-form__search" cellSpacing="0"
                                                                       cellPadding="0">
                                                                    <tbody>
                                                                    <tr>
                                                                        <td className="ya-site-form__search-input">
                                                                            <table
                                                                                className="ya-site-form__search-input-layout">
                                                                                <tbody>
                                                                                <tr>
                                                                                    <td className="ya-site-form__search-input-layout-l">
                                                                                        <div className="ya-site-form__input">
                                                                                            <input name="text"
                                                                                                   className="ya-site-form__input-text"
                                                                                                   placeholder="Поиск"
                                                                                                   autoComplete="off"
                                                                                                   type="search"/>
                                                                                            <div
                                                                                                className="ya-site-suggest">
                                                                                                <div
                                                                                                    className="ya-site-suggest-popup"
                                                                                                    style={{display: 'none'}}>
                                                                                                    <i className="ya-site-suggest__opera-gap"></i>
                                                                                                    <div
                                                                                                        className="ya-site-suggest-list">
                                                                                                        <div
                                                                                                            className="ya-site-suggest__iframe"></div>
                                                                                                        <ul className="ya-site-suggest-items"></ul>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div></div>
                                                                                    </td>
                                                                                    <td className="ya-site-form__search-input-layout-r">
                                                                                        <input
                                                                                            className="ya-site-form__submit ya-site-form__submit_type_image"
                                                                                            value="" type="button"/></td>
                                                                                </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="ya-site-form__gap">
                                                                            <div className="ya-site-form__gap-i"></div>
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="ya-site-form-search__button ya-site-form-search_visible"></div>
                                        </div>

                                        <div className="lg-menu__item-sbol"><a className="lg-menu__sbol lg-menu__sbol_link"
                                                                               href="/login"
                                                                               rel="noopener">Вход&nbsp;в систему</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg-menu-cap"></div>
                    </div>
                </div>


                <div className="bp-g-include" proxy="false" src="$(contextRoot)/contenttemplates/soy">
                    <div className="noscroll"><input id="hamburger" className="xs-m-hamburger__check"
                                                     type="checkbox"/><label htmlFor="hamburger"
                                                                             className="xs-m-hamburger">
                        <div className="xs-m-hamburger__line"></div>
                        <div className="xs-m-hamburger__line"></div>
                        <div className="xs-m-hamburger__line"></div>
                    </label>
                        <div className="xs-menu-overlay">
                            <div className="xs-menu">
                                <div className="xs-m-menu">
                                    <div className="kit-grid">
                                        <div className="kit-row">
                                            <div className="kit-col kit-col_xs_12 kit-col_md_6 xs-menu-col">
                                                <ul className="xs-m-menu__list">
                                                    <li className="xs-m-menu__item">
                                                        <div className="xs-m-menu__link"><NavLink className="segments__dropdown_link" to="/accounts" activeClassName="active">Список счетов</NavLink></div>
                                                    </li>
                                                    <li className="xs-m-menu__item">
                                                        <div className="xs-m-menu__link"><NavLink className="segments__dropdown_link" to="/admin" activeClassName="active">Страница администратора</NavLink></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div></div>
                </div>

            </div>


        </div>
    );
};


export default Header;