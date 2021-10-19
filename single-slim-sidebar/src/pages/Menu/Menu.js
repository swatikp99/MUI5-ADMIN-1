import React, { useState } from "react";

import { Link } from "react-router-dom";

// * Page Wrapper
import PageWrapper from "../../components/Wrappers/PageWrapper";

import { styled } from "@mui/material/styles";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

// * Import Modal Component
import ModalSm from "../../components/Misc/Modal/ModalSm";

// * SVG ICONS
import CrossSvg from "../../routes/icons/cross.svg";
import RightArrowSvg from "../../routes/icons/rightArrow.svg";
import MenuSvg from "../../routes/icons/menu.svg";

import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#de6262",
    color: "#F7F7F7",
    padding: "0.8rem 1rem",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 24,
  },
}));

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "200ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#34ED11",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const CustomButtonRoot = styled("span")(`
  background-color: #de6262;
  padding: 10px 40px;
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

  &:hover {
    background-color: #de6262;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #004386;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`);

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

const Menu = () => {
  // * Modal States
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <PageWrapper pageName="MY MENU">
      <img src={MenuSvg} loading="lazy" width="40" />
      {/*  */}

      <Link to="/menu/add">
        <CustomButton>ADD</CustomButton>
      </Link>

      <TableContainer component={Paper}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
                <b>ITEM</b>
              </StyledTableCell>
              <StyledTableCell align="center">
                <b>NAME</b>
              </StyledTableCell>
              <StyledTableCell align="center">
                <b>CATEGORY</b>
              </StyledTableCell>
              <StyledTableCell align="center">
                <b>PRICE</b>
              </StyledTableCell>
              <StyledTableCell align="center">
                <b>STATUS</b>
              </StyledTableCell>
              <StyledTableCell align="center">
                <b>VIEW</b>
              </StyledTableCell>
              <StyledTableCell align="center">
                <b>DELETE</b>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <CardMedia
                    component="img"
                    height="100"
                    image="https://dummyimage.com/400x400/000/fff"
                    alt="Paella dish"
                  />
                </TableCell>
                <TableCell align="center">
                  <b>{row.name}</b>
                </TableCell>
                <TableCell align="center">
                  <b>{row.calories}</b>
                </TableCell>
                <TableCell align="center">
                  <b>{row.fat}</b>
                </TableCell>
                <TableCell align="center">
                  <FormControlLabel
                    control={<IOSSwitch sx={{ ml: 4 }} defaultChecked />}
                    label=""
                  />
                </TableCell>
                <TableCell align="center">
                  {/* <CustomButton variant="outlined">
                    <ChevronRightOutlinedIcon sx={{}} />
                  </CustomButton> */}
                  {/* LINK TO SINGLE MENU */}
                  <Link to="/menu/single">
                    <IconButton variant="text">
                      {/* <DeleteOutlineOutlinedIcon sx={{}} /> */}
                      <img
                        style={{
                          // boxShadow: "5px 5px 29px -13px rgba(0,0,0,1)",
                          filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2))",
                        }}
                        src={RightArrowSvg}
                        loading="lazy"
                        width="40"
                      />
                      {/* </CustomButton> */}
                    </IconButton>
                  </Link>
                  {/* LINK TO SINGLE MENU */}
                </TableCell>
                <TableCell align="center">
                  {/* LINK TO SINGLE MENU */}
                  <Button onClick={handleOpen}>
                    <IconButton variant="text">
                      {/* <DeleteOutlineOutlinedIcon sx={{}} /> */}
                      <img
                        style={{
                          // boxShadow: "5px 5px 29px -13px rgba(0,0,0,1)",
                          filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2))",
                        }}
                        src={CrossSvg}
                        loading="lazy"
                        width="40"
                      />
                      {/* </CustomButton> */}
                    </IconButton>
                  </Button>
                  {/* MODAL POPUP */}

                  <ModalSm open={open} onClose={handleClose} value={"Item"} />

                  {/* /////////// */}
                  {/* LINK TO SINGLE MENU */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/*  */}
    </PageWrapper>
  );
};

export default Menu;
