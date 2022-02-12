import React, { useState } from 'react'
import "./userinputsection.css"
import axios from "axios";
import { DataArray1 } from "./DataArray"
import LeftArrow from "../../assets/images/leftArrow.png"
import I from "../../assets/images/i.png"
const UserInputSection = () => {
    const [DataArray, setDataArray] = useState(DataArray1)
    const changeInput = (e, index) => {
        console.log("eeeeeeeeeeeee and v", e.target.value, e.target.name, index)
        let arr = [...DataArray]
        arr[index].obj[e.target.name] = Math.abs(e.target.value)
        setDataArray(arr)
    }

    const handelSubmit = async () => {
        const obj = {};
        let keyArray = [
            "NeededBinAmount",
            "BinType",
            "BinPerStack",
            "BinSharing",
            "PerformancePerRobot",
            "PerformancePerPortInIncommingGoods",
            "PerformancePerPortInCommissioning",
            "PerformancePerPortInOthers",
            "OrderlinesPerHourInIncommingGoods",
            "OrderlinesPerHourInCommissioning",
            "OrderlinesPerHourInOthers",
            "TotalOrderlinesPerHour",
            "AdditionalPortsInIncommingGoods",
            "AdditionalPortsInCommissioning",
            "AdditionalPortsInOthers",
            "AdditionalQuantityOfRobots",
            "CoveredCommissioningPorts",
            "QuantityOfPortsAsCarouselPorts",
            "PickByLightInCommissioningPorts",
            "UseableStorageArea",
            "PersonnelCostsPerYearPerEmployee",
            "YearlyWageIncrease",
            "InterestRatePerYear",
            'CreditPeriod',
            "DepreciationDuration",
            'OrderlinesPerHourFromRentedRobots',
            "QuantityOfRentedRobots",
            "RentDuration",
        ]
        console.log("arraylength", DataArray.length, keyArray.length)
        for (let i = 0; i < DataArray.length; i++) {
            console.log(i)
            obj[keyArray[i]] = DataArray[i].obj;
        }
        // console.log("output object", obj)

        try {
            let response = await axios.post("https://localhost:4000/api/save", obj)
            console.log("response", response.data)
        } catch (error) {
            console.log("error", error)
        }

    }

    return (
        <div className='main_user_inputs_container_wrapper'>
            <div className='scrol_views_control'>
                <div className='user_input_wrapper'>
                    <div className='header_div_main'>
                        <div className='inputs_header'>
                            <div className='inputs_header_div1'>Units</div>
                            <div className='inputs_header_div'>Scenario 1</div>
                            <div className='inputs_header_div'>Scenario 1</div>
                            <div className='inputs_header_div'>Scenario 1</div>
                            <div className='inputs_header_div'>Scenario 1</div>
                        </div>
                        <div className='question_mark_div'><img src={I} /></div>
                    </div>
                </div>
                <div className='body_section_main'>
                    {DataArray.map((items, index) => {
                        return (
                            <>
                                <div className='user_inputs_container'>
                                    <div className='user_inputs_action_btn'>{items.btn}</div>
                                    <div className='user_inputs_box'>
                                        <div className='users_inputs_content'>{items.unit}</div>
                                        {Object.keys(items.obj).map((button, key) => {
                                            return (
                                                <>
                                                    <div>
                                                        {
                                                            index === 1 || index === 17 ? <div className='users_inputs_content'> <select name={button} value={items.obj[button]} onChange={(e) => changeInput(e, index)} className='user_ip_select' >
                                                                <option >{index === 17 ? "Yes" : "high bins"}</option>
                                                                <option >{index === 17 ? "no" : "low bins"}</option>
                                                            </select></div> : <div className='users_inputs_content'><input min={0} type="number" name={button} value={items.obj[button]} placeholder={items.placeholder[button]} onChange={(e) => changeInput(e, index)} className='user_ip' required /></div>
                                                        }
                                                    </div>
                                                </>
                                            )
                                        })}

                                    </div>
                                </div>

                            </>
                        )
                    })
                    }
                </div>
            </div>
            <div className='user_input_right_sideBAr'>
                <div className='right_side_bar_btn_wrappper'>
                    <div className='bottom_left_arrow'><img src={LeftArrow} /></div>
                    <div className='bottom_start_calculation' onClick={() => handelSubmit()}>Start calculation</div>
                </div>
            </div>
        </div>
    )
}
export default UserInputSection