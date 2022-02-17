import React, { useState, useCallback } from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import Imark from "../../assets/images/i.png";
import "./technologysection.css";
import { InputComponent } from "../../assets/UiElement/Input/index";
import ButtonOpen from "../../assets/UiElement/ButtonOpen/index";
import ButtonDelete from "../../assets/UiElement/ButtonDelete/index";

const TechnologySection = () => {
  const [ojectArrayValue, setOjectArrayValue] = useState([
    {
      id:1,
      values: "",
      placeholder: "placeholder",
    },
    {
      id:2,
      values: "",
      placeholder: "placeholder2",
    },
    {
      id:3,
      values: "",
      placeholder: "placeholder3",
    },
    {
      id:4,
      values: "",
      placeholder: "placeholder4",
    },
    {
      id:5,
      values: "",
      placeholder: "placeholder5",
    },
    {
      id:6,
      values: "",
      placeholder: "placeholder6",
    },
  ]);

  const handleInput = (e,id) => {
    // console.log("eeeee = >",e.target.name)
    console.log("placeholder",e.target.name);
    console.log("e.target.value",e.target.value);


    
    const name=e.target.name;
    const value=e.target.value;
    const updatedData= ojectArrayValue.map((elem) => elem.id === id?{...elem,values:value}:elem)
    setOjectArrayValue(updatedData);
    
    // setOjectArrayValue([...ojectArrayValue ,[name]:value]);
    
    
    // setOjectArrayValue({...ojectArrayValue,[values]:val,[placeholder]:place});
    
    // let temp = [];
    // ojectArrayValue.map((val, i) => {
    //   if (val.placeholder === e?.target?.name) {
    //     temp = [
    //       ...temp,
    //       {
    //        values: e?.target?.value,
    //         placeholder: val?.placeholder,
    //       },
    //     ];
    //   } 
    //   else {
    //     temp = [
    //       ...temp,
    //       {
    //         values: val?.values,
    //         placeholder: val?.placeholder,
    //       },
    //     ];      }
    // });
    // setOjectArrayValue(temp);
  };
  const DeleteItem= (id) =>{
  const data =  ojectArrayValue.filter((val)=>{
    return val.id !==id
  })

  
    setOjectArrayValue(data)
   
    
    
    // setOjectArrayValue([...ojectArrayValue,data])
  }
    
    
    

  

      // const data =ojectArrayValue.filter( i => i.placeholder !== ojectArrayValue.id) 
      // setOjectArrayValue({data})

      
      
    


  console.log("ojectArrayValue",ojectArrayValue)
  return (
    <>
      <Grid container>
        <Box className="box_maintecth">
          <Grid item md={12} sm={12}>
            <Box className="box_MainTypo1">
              <Typography className="typo_techCalculation typo_LossTech">
                Technology Calculation
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={12} sm={12}>
            <Box className="btn_three">
              <Button className="typo_LossTech property_shadowRadius">
                What is a Technology
              </Button>
              <Button className="btn_advantDisadvant typo_LossTech property_shadowRadius">
                Advantages / Disadvantages
              </Button>
              <Button className="btn_vedio typo_LossTech property_shadowRadius">
                {" "}
                Video
              </Button>
            </Box>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12}>
            <Box className="box_mainNewCalulation">
              <Box className="box_typo_NewCalcultation">
                <Typography className="typo_NewCalcultation typo_LossTech">
                  New Calculation
                </Typography>
              </Box>
              <Box className="box_btnIconMark">
                <Box className="box_btnIcon">
                  <InputComponent />
                  <Button className="btn_StartCalculations typo_LossTech property_shadowRadius">
                    {" "}
                    Start Calculations
                  </Button>
                </Box>
                <Box className="box_ImarkIcon">
                  <img src={Imark} className="ImarkIcon" alt="ImarkIcon"></img>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={12} xl={12} md={12} sm={12}>
            <Box className="box_history">
              <Box className="box_typohistoryIcons">
                <Box>
                  <Typography className="typo_history typo_LossTech">
                    History
                  </Typography>
                </Box>
              </Box>
              <Box className="box_MainInputsMark ">
                <Box className="box_MainImarkIcon">
                  <Box className="box_ImarkIcon">
                    <img
                      src={Imark}
                      className="ImarkIcon"
                      alt="ImarkIcon"
                    ></img>
                  </Box>
                </Box>
                <Box className="box_MainInputsComponent">
                  {ojectArrayValue.map((option) => (
                    <Box className="box_inputComponent">
                      <InputComponent
                        name={option.placeholder}
                        placeholder={option.placeholder}
                        value={option.values}
                        onChange={(e)=>handleInput(e,option.id)}
                      />
                      <ButtonOpen  />
                      <ButtonDelete Deletedata={()=>DeleteItem(option.id)}  />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default TechnologySection;
