import React, { Component, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import MetisMenu from 'react-metismenu';
import { ProductoNav, CajaNav, AccesoNav, AdminNav } from './NavItems';

class Nav extends Component {
    state = {};
 
    generateMenu = (navItems, title) => (
        <Fragment>
            <h5 className="app-sidebar__heading">{title}</h5>
            
            <MetisMenu
                content={navItems}
                activeLinkFromLocation
                LinkComponent={props => (
                    <Link className="metismenu-link" to={props.to}>
                        <i className={`metismenu-icon ${this.getIcon(props, navItems)}`}></i>
                        {props.label}
                    </Link>
                )}
                className="vertical-nav-menu"
                iconNamePrefix=""
                classNameStateIcon="pe-7s-angle-down"
            />
        </Fragment>
    );

    render() {
        const menus = [
            { navItems: AccesoNav, title: 'Acceso' },
            { navItems: ProductoNav, title: 'Productos' },
            { navItems: CajaNav, title: 'Caja' },
            { navItems: AdminNav, title: 'Administración' },
        ];

        return (
            <div>
                {menus.map((menu, index) => (
                    <Fragment key={index}>{this.generateMenu(menu.navItems, menu.title)}</Fragment>
                ))}
            </div>
        );
    }

    isPathActive(path) {
        return this.props.location.pathname.startsWith(path);
    }

    getIcon(props, navItems) {
        return navItems.find((item) => item.label === props.label).icon;
    }
}

export default withRouter(Nav);
