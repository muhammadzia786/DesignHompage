import React, { useState } from "react";
import { Typography, Box, Grid, Button, Input, SvgIcon } from "@mui/material";
import Imark from "../../assets/images/i.png";
import "./technologysection.css";
import { InputComponent } from "../../assets/UiElement/Input/index";
import ButtonOpen from "../../assets/UiElement/ButtonOpen/index";
import ButtonDelete from "../../assets/UiElement/ButtonDelete/index";

const TechnologySection = () => {

  const ojectArrayValue = [1, 2, 3, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <Grid container>
        <Box className="box_maintecth">
          {/* <Grid item xl={12} lg={12} sm={12} > */}

          <Grid item md={12} sm={12}>
            <Box className="box_MainTypo1">
              <Typography className="typo_losTactics typo_LossTech">
                {/* LOS Tactics */}
              </Typography>
              <Typography className="typo_techCalculation typo_LossTech">
                Technology Calculation
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={12} sm={12}>
            <Box className="btn_three">
              <div className="btn_tech typo_LossTech property_shadowRadius">
                What is a Technology
              </div>
              <div className="btn_advantDisadvant typo_LossTech property_shadowRadius">
                Advantages / Disadvantages
              </div>
              <div className="btn_vedio typo_LossTech property_shadowRadius">
                {" "}
                Video
              </div>
            </Box>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12}>
            <Box className="box_mainNewCalulation">
              <Box className="box_typo_NewCalcultation">
                <Typography className="typo_NewCalcultation typo_LossTech">
                  New Calculation
                </Typography>
              </Box>
              <Box
                className="box_btnIconMark"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Box className="box_btnIcon">
                  <InputComponent />
                  <div className="btn_StartCalculations typo_LossTech property_shadowRadius">
                    {" "}
                    Start Calculations
                  </div>
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
                <Box className="box_ImarkIcon">
                  <img src={Imark} className="ImarkIcon" alt="ImarkIcon"></img>
                </Box>
              </Box>
              <Box className="box_MainInputsMark ">
                <Box className="box_MainInputsComponent">
                  {ojectArrayValue.map((optiona) => (

                    <Box className="box_inputComponent">
                      <InputComponent placholder="calc" />
                      <ButtonOpen />
                      <ButtonDelete />


                    </Box>

                  ))}


                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Grid>

      {/* </Grid> */}
    </>
  );
};

export default TechnologySection;
