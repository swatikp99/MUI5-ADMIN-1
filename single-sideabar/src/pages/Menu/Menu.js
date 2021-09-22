import React from "react";

// * Page Wrapper
import PageWrapper from "../../components/Wrappers/PageWrapper";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";

import { styled } from "@mui/system";
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
  background-color: #7C83FD;
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
    backgroundColor: "#7C83FD",
    color: "white",
    padding: "0.8rem 1rem",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

const Menu = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <PageWrapper pageName="MY MENU">
      {/*  */}

      <TableContainer component={Paper}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Dessert (100g serving)</StyledTableCell>
              <StyledTableCell align="center">Calories</StyledTableCell>
              <StyledTableCell align="center">Fat&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="center">Carbs&nbsp;(g)</StyledTableCell>
              <StyledTableCell align="center">VIEW</StyledTableCell>
              <StyledTableCell align="center">DELETE</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">
                  <CustomButton variant="outlined">
                    <ChevronRightOutlinedIcon sx={{ color: "#ffffff" }} />
                  </CustomButton>
                </TableCell>
                <TableCell align="center">
                  <CustomButton variant="outlined">
                    <DeleteOutlineOutlinedIcon sx={{ color: "#ffffff" }} />
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
