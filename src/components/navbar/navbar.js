import React from 'react'
// import NavItem from './navitem'

const items = [
    {home: 'budicon-home-1'}, 
    {portfolio: 'budicon-image'}, 
    {about: 'budicon-author'}, 
    {contact: 'budicon-profile'}, 
    {blog: 'budicon-book-1'}, 
    {elements: 'budicon-setting'}, 
    {elsewhere: 'icon-heart-empty-1'}
]

const listItems = items.map((n, index) => {
 return <li key={index}>{Object.keys(n)[0]}</li>   
})

const Nav = () => {
    return (
    <ul className="nav navbar-nav">
       {listItems}
    </ul>
    )
}

export default Nav

/* 

<li className="current"><a href="#home" className="hint--right" data-hint="Home"><i className="budicon-home-1"></i><span>Home</span></a></li>
<li><a href="#portfolio" className="hint--right" data-hint="Portfolio"><i className="budicon-image"></i><span>Portfolio</span></a></li>
<li><a href="#about" className="hint--right" data-hint="About"><i className="budicon-author"></i><span>About</span></a></li>
<li><a href="#contact" className="hint--right" data-hint="Contact"><i className="budicon-profile"></i><span>Contact</span></a></li>
<li><a href="blog.html" className="hint--right" data-hint="Blog"><i className="budicon-book-1"></i><span>Blog</span></a></li>
<li><a href="elements.html" className="hint--right" data-hint="Elements"><i className="budicon-setting"></i><span>Elements</span></a></li>
<li><a href="#elsewhere" className="hint--right fancybox-inline" data-hint="Elsewhere" data-fancybox-width="325" data-fancybox-height="220"><i className="icon-heart-empty-1"></i><span>Elsewhere</span></a></li>

*/