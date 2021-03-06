import React, { useState } from 'react';
import styled from 'styled-components';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { programicon } from '../../Assets/Images/programicon.js';
import { myreporticon } from '../../Assets/Images/myreport.js';
import { activitiesicon } from '../../Assets/Images/activities.js';
import { coursesicon } from '../../Assets/Images/courses.js';
import { notificationicon } from '../../Assets/Images/notification.js';
import { homeicon } from '../../Assets/Images/homeicon.js';
import Burger from './Burger/Burger';
import { useTranslation } from 'react-i18next';
import SearchModal from '../Common/SearchModal/SearchModal';

const StyledLogoBlock = styled.div`
    a span{
        margin-left: ${({ direction }) => direction === "ltr" ? "5px" : "0"};
        margin-right: ${({ direction }) => direction === "rtl" ? "5px" : "0"};
    }
`;
const StyledLinks = styled.div`
    margin-left: ${({ direction }) => direction === "ltr" ? "60px" : "0"};
    margin-right: ${({ direction }) => direction === "rtl" ? "60px" : "0"};
`;

const StyledNotifications = styled.div`
    margin-left: ${({ direction }) => direction === "rtl" ? "24px" : "0"};
    margin-right: ${({ direction }) => direction === "ltr" ? "24px" : "0"};
`;

const StyledBut = styled.button`
    margin-left: ${({ direction }) => direction === "rtl" ? "24px" : "0"};
    margin-right: ${({ direction }) => direction === "ltr" ? "24px" : "0"};
`;

const Navbar = (props) => {
    const {t, i18n} = useTranslation();

    const [notificationsCount, setNotificationsCount] = useState(1);
    
    return(
        <nav className={classes.main}>
            <div className={classes.container}>
                <div className={classes.leftSideNav}>
                    <StyledLogoBlock className={classes.logoBlock} direction={props.direction}>
                        <NavLink to="/home">
                            <div className={classes.logo}></div>
                            <span>{t("navbar.logo")}</span>
                        </NavLink>
                    </StyledLogoBlock>
                    <StyledLinks className={classes.links} direction={props.direction}>
                        <div className={classes.menuItem}>
                            <NavLink to="/home" activeClassName={classes.active}>
                                {homeicon}
                                {t("navbar.home")}
                            </NavLink>
                        </div>
                        <div className={classes.menuItem}>
                            <NavLink to="/programs" activeClassName={classes.active}>
                                {programicon}
                                {t("navbar.programs")}
                            </NavLink>
                        </div>
                        <div className={classes.menuItem}>
                            <NavLink to="/courses" activeClassName={classes.active}>
                                {coursesicon}
                                {t("navbar.courses")}
                            </NavLink>
                        </div>
                        <div className={classes.menuItem}>
                            <NavLink to="/activities" activeClassName={classes.active}>
                                {activitiesicon}
                                {t("navbar.activities")}
                            </NavLink>
                        </div>
                        <div className={classes.menuItem}>
                            <NavLink to="/report" activeClassName={classes.active}>
                                {myreporticon}
                                {t("navbar.myreport")}
                            </NavLink>
                        </div>
                    </StyledLinks>
                </div>
                <button onClick={()=>{props.changeLanguage('en')}}>EN</button>
                <button onClick={()=>{props.changeLanguage('ar')}}>AR</button>
                <div className={classes.rightSideNav}>
                    <StyledBut className={classes.searchBut + " " + (props.isOpenSearchModal && classes.activeSearch)} direction={props.direction} onClick={()=>{props.setIsOpenSearchModal(!props.isOpenSearchModal)}}>
                        <i className="fas fa-search"></i>
                        
                    </StyledBut>
                    {props.isOpenSearchModal && <SearchModal/>}
                    <StyledNotifications className={classes.notifications} direction={props.direction}>
                        <NavLink to="/notifications">
                            {notificationicon}
                            <div className={classes.notificationsCount}>
                                {notificationsCount}
                            </div>
                        </NavLink>
                    </StyledNotifications>
                    <div className={classes.userMenu}>
                        {props.user.profilePhoto ? 
                        <img src={props.user.profilePhoto}/> : 
                        <div className={classes.userDefault}></div>}
                        <span>{props.user.firstName}</span>
                    </div>
                    <div className={classes.burger}>
                        <Burger/>
                    </div>
                </div>
            </div>
            
            

        </nav>
    )
}

export default Navbar;