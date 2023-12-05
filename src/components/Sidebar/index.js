import React from 'react'
import { CloseIcon, Icon, SideBtnWrap, SidebarContainer, SidebarLink, SidebarMenu, SidebarWraper, SiderbarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWraper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
                <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SiderbarRoute to='/signin'>Sign In</SiderbarRoute>
            </SideBtnWrap>
        </SidebarWraper>
    </SidebarContainer>
  )
}

export default Sidebar;