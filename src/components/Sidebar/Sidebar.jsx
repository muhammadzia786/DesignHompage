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
import DownArrow from "../../assets/images/downArrow.png"
import ArrowUp from "../../assets/images/upArrow.png"

const Aside = () => {
    const [showSidebar, setShowSidebar] = useState(true)
    const [isSelectActive, setIsSelectActive] = useState(true)
    const [isClick, setIsClick] = useState("2")

    const handelSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    return (
        <>

            {showSidebar ? <div className='aside_section'>
                <div className='app_logo'><img src={Applogo} alt="app_logo" ></img></div>
                <div className='sider_bar_content_wrapper'>

                    <div className='side_bar_content_box'>
                        <div className='icon'><img className='reports_img' src={Reports} alt="reports_img"></img></div>
                        <div className='side_bar_content_text'>Reports</div>
                    </div>

                    <div className='side_bar_content_box'>
                        <div className='icon'><img className='ticket_img' src={Ticketing} alt="ticket_img"></img></div>
                        <div className='side_bar_content_text'>Ticketing System</div>
                    </div>

                    <div className='side_bar_content_box'>
                        <div className='icon'><img className='setting_img' src={Seting} alt="setting_img"></img></div>
                        <div className='side_bar_content_text'>Settings</div>
                    </div>

                    <div className='side_bar_content_box_select'>
                        <div className='side_bar_select_div'>
                            <div className='icon'><img className='frame_img' src={Framework} alt="frame_img"></img></div>
                            <div className='side_bar_content_text'>Framework</div>
                        </div>
                        <div className='select_arrow'><img src={DownArrow} /></div>
                    </div>

                    <div className='side_bar_content_box'>
                        <div className='icon'><img className='book_img' src={ShiftBook} alt="book_img"></img></div>
                        <div className='side_bar_content_text'>Shift Book</div>
                    </div>

                    <div className='side_bar_content_box'>
                        <div className='icon'><img className='maintenance_img' src={Maintenance} alt="maintenance_img"></img></div>
                        <div className='side_bar_content_text'>Maintenance</div>
                    </div>


                    <div className='side_bar_content_box_select'>
                        <div className='side_bar_select_div'>
                            <div className='icon'><img className='controls_img' src={Controls} alt="controls_img"></img></div>
                            <div className='side_bar_content_text'>LOS Control</div>
                        </div>
                        <div className='select_arrow'><img src={DownArrow} /></div>
                    </div>

                    <div className='side_bar_content_box'>
                        <div className='icon'><img className='money_img' src={Momeymining} alt="money_img"></img></div>
                        <div className='side_bar_content_text'>LOS Money Mining</div>
                    </div>
                </div>

                <div className='side_bar_card'>
                    <div className='side_bar_card_select'>
                        <div className='s_card_select_inner'>
                            <div><img className='' src={Blub} alt="blub_img"></img></div>
                            <div className='card_inner_select_text'>LOS Tactics</div>
                        </div>
                        <div className='arrow_up' onClick={() => setIsSelectActive(!isSelectActive)}><img src={ArrowUp} /></div>
                    </div>
                    {isSelectActive && <div className='box_headings'>
                        <div onClick={() => setIsClick("1")} className={isClick == "1" ? 'side_card_select_content_bg' : 'side_card_select_content'}>Storability check</div>
                        <div onClick={() => setIsClick("2")} className={isClick == "2" ? 'side_card_select_content_bg' : 'side_card_select_content'}>Technology Calculation</div>
                        <div onClick={() => setIsClick("3")} className={isClick == "3" ? 'side_card_select_content_bg' : 'side_card_select_content'}>Data Quality</div>
                        <div onClick={() => setIsClick("4")} className={isClick == "4" ? 'side_card_select_content_bg' : 'side_card_select_content'}>AKL</div>
                    </div>}
                </div>

                <div onClick={handelSidebar} className="side_toggle"><img className='hide_menu' src={Hide_menu} alt="hide_menu"></img></div>
            </div> : <button onClick={handelSidebar} className="open_button">open</button>}

        </>
    );
};

export default Aside;
