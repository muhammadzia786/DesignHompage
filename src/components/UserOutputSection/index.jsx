import React, { useState } from "react";
import "./useroutput.css";
import { DataArray1 } from "../UserInputSection/DataArray";
import LeftArrow from "../../assets/images/leftArrow.png";
import I from "../../assets/images/i.png";

const UserOutputSection = () => {
    const [DataArray, setDataArray] = useState(DataArray1);


    return (
        <div>
            <div className="main_user_inputs_container_wrapper">
                <div className="scrol_views_control">
                    <div className="user_input_wrapper">
                        <div className="header_div_main">
                            <div className="inputs_header">
                                <div className="inputs_header_div1">Units</div>
                                <div className="inputs_header_div">Scenario 1</div>
                                <div className="inputs_header_div">Scenario 1</div>
                                <div className="inputs_header_div">Scenario 1</div>
                                <div className="inputs_header_div">Scenario 1</div>
                            </div>
                            <div className="question_mark_div">
                                <img src={I} />
                            </div>
                        </div>
                    </div>

                    <div className="body_section_main">
                        <div className="category_box">Technics</div>
                        {DataArray.map((items, index) => {

                            return (
                                <>

                                    {index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5 ? <div className="user_inputs_container">
                                        <div className="user_inputs_action_btn">{items.btn}</div>
                                        <div className="user_inputs_box">
                                            <div className="users_inputs_content">{items.unit}</div>
                                            {Object.keys(items.obj).map((button, key) => {

                                                return (
                                                    <>
                                                        <div>
                                                            {index === 1 || index === 17 ? (
                                                                <div className="users_inputs_content">
                                                                    {" "}
                                                                    {items.placeholder[button]}select
                                                                </div>
                                                            ) : (
                                                                <div className="users_inputs_content">
                                                                    {items.placeholder[button]}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </>
                                                );
                                            })}
                                        </div>
                                    </div> : ""}
                                </>
                            );
                        })}
                        <div className="category_box">Performance</div>
                        {DataArray.map((items, index) => {

                            return (
                                <>

                                    {index === 6 || index === 7 || index === 8 || index === 9 || index === 10 ? <div className="user_inputs_container">
                                        <div className="user_inputs_action_btn">{items.btn}</div>
                                        <div className="user_inputs_box">
                                            <div className="users_inputs_content">{items.unit}</div>
                                            {Object.keys(items.obj).map((button, key) => {

                                                return (
                                                    <>
                                                        <div>
                                                            {index === 1 || index === 17 ? (
                                                                <div className="users_inputs_content">
                                                                    {" "}
                                                                    {items.placeholder[button]}select
                                                                </div>
                                                            ) : (
                                                                <div className="users_inputs_content">
                                                                    {items.placeholder[button]}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </>
                                                );
                                            })}
                                        </div>
                                    </div> : ""}
                                </>
                            );
                        })}
                        <div className="category_box">Employee</div>
                        {DataArray.map((items, index) => {

                            return (
                                <>

                                    {index === 11 || index === 12 || index === 13 || index === 14 ? <div className="user_inputs_container">
                                        <div className="user_inputs_action_btn">{items.btn}</div>
                                        <div className="user_inputs_box">
                                            <div className="users_inputs_content">{items.unit}</div>
                                            {Object.keys(items.obj).map((button, key) => {

                                                return (
                                                    <>
                                                        <div>
                                                            {index === 1 || index === 17 ? (
                                                                <div className="users_inputs_content">
                                                                    {" "}
                                                                    {items.placeholder[button]}select
                                                                </div>
                                                            ) : (
                                                                <div className="users_inputs_content">
                                                                    {items.placeholder[button]}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </>
                                                );
                                            })}
                                        </div>
                                    </div> : ""}
                                </>
                            );
                        })}
                        <div className="category_box">Investments</div>
                        {DataArray.map((items, index) => {

                            return (
                                <>

                                    {index === 15 || index === 16 || index === 17 || index === 18 || index === 19 || index === 20 || index === 21 || index === 22 ? <div className="user_inputs_container">
                                        <div className="user_inputs_action_btn">{items.btn}</div>
                                        <div className="user_inputs_box">
                                            <div className="users_inputs_content">{items.unit}</div>
                                            {Object.keys(items.obj).map((button, key) => {

                                                return (
                                                    <>
                                                        <div>
                                                            {index === 1 || index === 17 ? (
                                                                <div className="users_inputs_content">
                                                                    {" "}
                                                                    {items.placeholder[button]}select
                                                                </div>
                                                            ) : (
                                                                <div className="users_inputs_content">
                                                                    {items.placeholder[button]}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </>
                                                );
                                            })}
                                        </div>
                                    </div> : ""}
                                </>
                            );
                        })}
                        {/* <div className="category_box">running costs p.a.</div> */}
                    </div>
                </div>
                <div className="user_input_right_sideBAr">
                    <div className="right_side_bar_btn_wrappper">
                        <div className="bottom_left_arrow">
                            <img src={LeftArrow} />
                        </div>
                        {/* <div className='bottom_start_calculation'>Start calculation</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserOutputSection;
