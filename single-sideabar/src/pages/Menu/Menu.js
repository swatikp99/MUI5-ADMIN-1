import React from "react";

// * Page Wrapper
import PageWrapper from "../../components/Wrappers/PageWrapper";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

const rows = [
  { name: "India", code: "IN", code1: "IN", code2: "IN" },
  { name: "China", code: "CN", code1: "IN", code2: "IN" },
  { name: "Italy", code: "IT", code1: "IN", code2: "IN" },
  { name: "UnitedStates", code: "US", code1: "IN", code2: "IN" },
  { name: "Canada", code: "CA", code1: "IN", code2: "IN" },
  { name: "Austral", code: "ia", code1: "IN", code2: "IN" },
  { name: "Germany", code: "DE", code1: "IN", code2: "IN" },
  { name: "Ireland", code: "IE", code1: "IN", code2: "IN" },
  { name: "Mexico", code: "MX", code1: "IN", code2: "IN" },
  { name: "Japan", code: "JP", code1: "IN", code2: "IN" },
  { name: "France", code: "FR", code1: "IN", code2: "IN" },
  { name: "United Kingdom", code: "GB", code1: "IN", code2: "IN" },
  { name: "Russia", code: "RU", code1: "IN", code2: "IN" },
  { name: "Nigeria", code: "NG", code1: "IN", code2: "IN" },
  { name: "Brazil", code: "BR", code1: "IN", code2: "IN" },
];

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
    <PageWrapper pageName="Menu">
      {/*  */}

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {/*  */}
    </PageWrapper>
  );
};

export default Menu;
