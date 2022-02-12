import React, { useState } from 'react'
import "./userinputsection.css"
// import axios from "axios";
import { DataArray1 } from "./DataArray"
import LeftArrow from "../../assets/images/leftArrow.png"
import I from "../../assets/images/i.png"
const UserInputSection = () => {
    const [DataArray, setDataArray] = useState(DataArray1)
    const [isValidate, setIsValidate] = useState("")
    const changeInput = (e, index) => {
        console.log("eeeeeeeeeeeee and v", !isNaN(e.target.value.toString()))
        let arr = [...DataArray]
        arr[index].obj[e.target.name] = !isNaN(e.target.value.toString()) ? Math.abs(e.target.value) : e.target.value
        setDataArray(arr)
    }
    const isValidateAll = () => {
        let flag = true;
        DataArray.map((items, index) => {
            if (index === 1 || index === 18) {
                console.log("1,18", index)
            } else {
                Object.keys(items.obj).map((button, key) =>
                    items.obj[button] === "" ? flag = false : null
                );
            }
            //   if (index !== 1) {
            //     Object.keys(items.obj).map((button, key) =>
            //       items.obj[button] === "" ? (flag = false) : (flag = true)
            //     );
            //   } else {
            //     console.log("====================================");
            //     console.log();
            //     console.log("====================================");
            //   }
        });

        return flag;
    };
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
        if (isValidateAll()) {
            for (let i = 0; i < DataArray.length; i++) {
                obj[keyArray[i]] = DataArray[i].obj;
            }
            // console.log("output object", obj)

            // try {
            //     let response = await axios.post("https://localhost:4000/api/save", obj)
            //     console.log("response", response.data)
            // } catch (error) {
            //     console.log("error", error)
            // }
        } else {
            window.alert("error occured")
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
                                                            index === 1 || index === 18 ? <div className='users_inputs_content'> <select name={button} value={items.obj[button]} onChange={(e) => changeInput(e, index)} className='user_ip_select' >
                                                                <option >{index === 18 ? "Yes" : "high bins"}</option>
                                                                <option >{index === 18 ? "no" : "low bins"}</option>
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