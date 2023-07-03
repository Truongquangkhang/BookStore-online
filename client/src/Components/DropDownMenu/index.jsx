import React, { useEffect, useRef, useState } from 'react';
import edit from '../../Public/img/edit.png';
import inbox from '../../Public/img/envelope.png';
import logout from '../../Public/img/log-out.png';
import help from '../../Public/img/question.png';
import settings from '../../Public/img/settings.png';
import user from '../../Public/img/user.png';
import DropDownItem from '../DropDownItem';
import './styles.scss';


function DropDownMenu(props) {
    const [open, setOpen] = useState(false);


    let menuRef = useRef();

    const handlerClickLogout = ()=>{
        props.handlerLogout()
    }

    useEffect(() => {

        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
                console.log(menuRef.current);
            }
        };

        document.addEventListener("mousedown", handler);


        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });




    return (
        <div className='menu-container' ref={menuRef}>
            <div className='menu-trigger' onClick={() => { setOpen(!open) }}>
                <img src={props.User.image} alt='user'></img>
            </div>

            <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
                <h3>{props.User.name}<br /><span>{props.User.role}</span></h3>
                <ul>
                    <DropDownItem img={user} text={"My Profile"} />
                    <DropDownItem img={edit} text={"Edit Profile"} />
                    <DropDownItem img={inbox} text={"Inbox"} />
                    <DropDownItem img={settings} text={"Settings"} />
                    <DropDownItem img={help} text={"Helps"} />
                    <DropDownItem img={logout} text={"Logout"} handlerLogout={handlerClickLogout}/>
                </ul>
            </div>
        </div>
    );
}

export default DropDownMenu;