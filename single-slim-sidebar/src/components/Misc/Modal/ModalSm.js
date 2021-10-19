import React from "react";

// * Mui
import { Modal, Box, Typography, styled } from "@mui/material";
import ModalUnstyled from "@mui/core/ModalUnstyled";
import ButtonUnstyled from "@mui/core/ButtonUnstyled";

// * Styled

const CustomButtonRootYes = styled("span")(`
  background-color: #2ECA45;
  padding: 10px 75px;
  margin-bottom: 0px ;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;
  float: right;
`);

const CustomButtonRootNo = styled("span")(`
  background-color: #C10019;
  padding: 10px 75px;
  margin-bottom: 0px ;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;
  float: left;
`);

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  background: "white",
  px: 2,
  pb: 2,
  boxShadow: "17px 17px 40px -37px rgba(0,0,0,0.25)",
  textAlign: "center",
};

function CustomButtonYes(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRootYes} />;
}

function CustomButtonNo(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRootNo} />;
}

const ModalSm = (props) => {
  return (
    <StyledModal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      {...props}
      BackdropComponent={Backdrop}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.08)" }}
    >
      <Box sx={style}>
        <h4 id="unstyled-modal-title">
          Are you sure you want to delete this {props.value} ?
        </h4>
        <CustomButtonYes>Yes</CustomButtonYes>
        <CustomButtonNo>No</CustomButtonNo>
      </Box>
    </StyledModal>
  );
};

export default ModalSm;
