import React from 'react'
import styled from 'styled-components'

const StyledAnchor = styled.a

const NavAnchor = ({navItem, navHref, hint}) => {
    let newHref = '#' + navHref

    return(
        <StyledAnchor
        href={newHref}
        ><i className="budicon-image"></i><span>Portfolio</span></StyledAnchor>
    )
}

export default NavAnchor