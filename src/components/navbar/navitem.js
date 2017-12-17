import React from 'react'
import styled from 'styled-components'
import NavAnchor from './navanchor'

const items = [
    {home: 'budicon-home-1'}, 
    {portfolio: 'budicon-image'}, 
    {about: 'budicon-author'}, 
    {contact: 'budicon-profile'}, 
    {blog: 'budicon-book-1'}, 
    {elements: 'budicon-setting'}, 
    {elsewhere: 'icon-heart-empty-1'}
]

function buildNav(units) {
    
    var navItems = []

    for (var u in units) {

    let ucItem = u.charAt(0).toUpperCase() + u.slice(1)

    let href = '#' + u

    navItems.push(
            <NavAnchor
            key={u}
            href={href}
            className="hint--right" 
            data-hint={ucItem}
            />
    )
    
    }

    return (
        <NavAnchor/>
    )
}


const NavLi = styled.li

// const FullItems = items.map((item) => <NavAnchor key={item} href={'#' + items[item]}/>)

const NavItem = () => {
    return (
        <NavLi>
            <NavAnchor/>
        </NavLi>
    )
}

export default NavItem




