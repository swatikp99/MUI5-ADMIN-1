import React from "react";

// * Page Wrapper
import PageWrapper from "../../components/Wrappers/PageWrapper";

import { styled } from '@mui/material/styles';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CardMedia from "@mui/material/CardMedia";

import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

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

const CustomButtonRoot = styled("button")(`
  background-color: #162B32;
  padding: 8px 10px;
  border-radius: 50px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow:  5px 5px 29px -13px rgba(0,0,0,1);;
  border: none;

  &:hover {
    background-color: #4e58fc;
    color: "#ffffff"
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#162B32",
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
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#162B32",
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

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

const Menu = () => {
  return (
    <PageWrapper pageName="MY MENU">
      <RestaurantIcon />
      {/*  */}

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
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">
                    <FormControlLabel
                      control={<IOSSwitch sx={{ ml: 4 }} defaultChecked />}
                      label=""
                    />
                </TableCell>
                <TableCell align="center">
                  <CustomButton variant="outlined">
                    <ChevronRightOutlinedIcon sx={{}} />
                  </CustomButton>
                </TableCell>
                <TableCell align="center">
                  <CustomButton variant="outlined">
                    <DeleteOutlineOutlinedIcon sx={{}} />
                  </CustomButton>
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
