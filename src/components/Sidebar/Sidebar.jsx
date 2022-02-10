import React, { useState } from 'react';
import "./sidebar.css"
import { FaChartBar } from "react-icons/fa"
import Applogo from "../../assets/images/LogoHeureka.svg";
import Hide_menu from "../../assets/images/hide_menu.svg"
import Reports from "../../assets/images/reports.svg"
import Ticketing from "../../assets/images/ticketing_system.svg"
import Seting from "../../assets/images/setting.svg"
import Framework from "../../assets/images/framework.svg"
import ShiftBook from "../../assets/images/shift_book.svg"
import Maintenance from "../../assets/images/maintenance.svg"
import Controls from "../../assets/images/controls.svg"
import Momeymining from "../../assets/images/money_mining.svg"
import Blub from "../../assets/images/blub.svg"

const Aside = () => {
    const [showSidebar, setShowSidebar] = useState(true)

    const handelSidebar = () => {
        setShowSidebar(!showSidebar)
    }
    return (
        <>
            <div className='dashboard_body'>
                {showSidebar ? <div className='aside_section'>
                    <div className='heading'><img className='app_logo' src={Applogo} alt="app_logo" ></img></div>
                    <div style={{width:'100%'}}>

                        <div className='home_div'>
                            <div className='icon'><img className='reports_img' src={Reports} alt="reports_img"></img></div>
                            <div className='desc'>Reports</div>
                        </div>
                        <div className='home_div'>
                            <div className='icon'><img className='ticket_img' src={Ticketing} alt="ticket_img"></img></div>
                            <div className='desc'>Ticketing System</div>
                        </div>
                        <div className='home_div'>
                            <div className='icon'><img className='setting_img' src={Seting} alt="setting_img"></img></div>
                            <div className='desc'>Settings</div>
                        </div>
                        <div className='home_div'>
                            <div className='icon'><img className='frame_img' src={Framework} alt="frame_img"></img></div>
                            <div className='desc'>Framework</div>
                        </div>
                        <div className='home_div'>
                            <div className='icon'><img className='book_img' src={ShiftBook} alt="book_img"></img></div>
                            <div className='desc'>Shift Book</div>
                        </div>
                        <div className='home_div'>
                            <div className='icon'><img className='maintenance_img' src={Maintenance} alt="maintenance_img"></img></div>
                            <div className='desc'>Maintenance</div>
                        </div>
                        <div className='home_div'>
                            <div className='icon'><img className='controls_img' src={Controls} alt="controls_img"></img></div>
                            <div className='desc'>LOS Control</div>
                        </div>
                        <div className='home_div'>
                            <div className='icon'><img className='money_img' src={Momeymining} alt="money_img"></img></div>
                            <div className='desc'>LOS Money Mining</div>
                        </div>
                    </div>
                    <div className='los_tactics'>
                        <div className='los_box'>
                            <div className='blub_div'>
                                <div><img className='blub_img' src={Blub} alt="blub_img"></img></div>
                                <div className='box_desc'>LOS Tactics</div>
                            </div>
                            <div className='box_headings'>
                                <div className='heading1'>Storability check</div>
                                <div className='heading1'>Technology Calculation</div>
                                <div className='heading1'>Data Quality</div>
                                <div className='heading1'>AKL</div>
                            </div>
                        </div>
                    </div>
                    <div onClick={handelSidebar} className="side_toggle"><img className='hide_menu' src={Hide_menu} alt="hide_menu"></img></div>
                </div> : <button onClick={handelSidebar} className="open_button">open</button>}
            </div>
        </>
    );
};

export default Aside;
