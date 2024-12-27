import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MaterialReactTable } from "material-react-table";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import {
  ThemeProvider,
  createTheme,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";

function Subscription() {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      name: "House Cleaning",
      start_date: "2024-01-01",
      end_date: "2024-01-15",
      recurrence: "Weekly",
      range: "Per Day",
      best_price: "500",
      createdBy: "Admin",
      createdAt: "2024-12-15",
      updatedBy: "Admin",
      updatedAt: "2024-12-20",
    },
    {
      id: 2,
      name: "House Cleaning",
      start_date: "2024-01-16",
      end_date: "2024-01-30",
      recurrence: "Weekly",
      range: "Per Day",
      best_price: "1000",
      createdBy: "Admin",
      createdAt: "2024-12-15",
      updatedBy: "Admin",
      updatedAt: "2024-12-20",
    },
  ];

  const columns = useMemo(
    () => [
      {
        accessorFn: (row, index) => index + 1,
        header: "S.NO",
        enableSorting: true,
        enableHiding: false,
        size: 40,
        cell: ({ cell }) => (
          <span style={{ textAlign: "center" }}>{cell.getValue()}</span>
        ),
      },
      {
        accessorKey: "id",
        header: "",
        enableHiding: false,
        enableSorting: false,
        size: 20,
        Cell: ({ cell }) => (
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              setMenuAnchor(e.currentTarget);
              setSelectedId(cell.getValue());
            }}
          >
            <MoreVertIcon />
          </IconButton>
        ),
      },
      { accessorKey: "name", enableHiding: false, header: "Name" },
      {
        accessorKey: "start_date",
        enableHiding: false,
        header: "Start Date",
      },
      {
        accessorKey: "end_date",
        enableHiding: false,
        header: "End Date",
      },
      {
        accessorKey: "recurrence",
        enableHiding: false,
        header: "Recurrence",
      },
      {
        accessorKey: "range",
        enableHiding: false,
        header: "Range",
      },
      {
        accessorKey: "best_price",
        header: "Best Price",
        enableHiding: false,
        size: 40,
      },
      {
        accessorKey: "status",
        enableHiding: false,
        header: "Status",
        Cell: ({ row }) => {
          const status = row.original.status;
          return status === "Active" ? (
            <span className="badge badges-Green fw-light">Active</span>
          ) : status === "Inactive" ? (
            <span className="badge badges-orange fw-light">Inactive</span>
          ) : null;
        },
      },
      { accessorKey: "createdBy", header: "Created By" },
      {
        accessorKey: "createdAt",
        header: "Created At",
        Cell: ({ cell }) => cell.getValue()?.substring(0, 10),
      },
      {
        accessorKey: "updatedBy",
        header: "Updated By",
        Cell: ({ cell }) => cell.getValue() || "",
      },
      {
        accessorKey: "updatedAt",
        header: "Updated At",
        Cell: ({ cell }) => cell.getValue()?.substring(0, 10) || "",
      },
    ],
    []
  );

  const theme = createTheme({
    components: {
      MuiTableCell: {
        styleOverrides: {
          head: {
            color: "#535454 !important",
            backgroundColor: "#e6edf7 !important",
            fontWeight: "400 !important",
            fontSize: "13px !important",
            textAlign: "center !important",
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            "&.Mui-disabled .MuiSwitch-track": {
              backgroundColor: "#f5e1d0",
              opacity: 1,
            },
            "&.Mui-disabled .MuiSwitch-thumb": {
              color: "#eb862a",
            },
          },
          track: {
            backgroundColor: "#e0e0e0",
          },
          thumb: {
            color: "#eb862a",
          },
          switchBase: {
            "&.Mui-checked": {
              color: "#eb862a",
            },
            "&.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "#eb862a",
            },
          },
        },
      },
    },
  });

  const handleMenuClose = () => setMenuAnchor(null);

  return (
    <div className="container-fluid px-2 mb-4 center">
      <ol
        className="breadcrumb my-3"
        style={{ listStyle: "none", padding: 0, margin: 0 }}
      >
        <li>
          <Link to="/" className="custom-breadcrumb">
            Home
          </Link>
          <span className="breadcrumb-separator"> &gt; </span>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          &nbsp;Subscription
        </li>
      </ol>
      <div className="card">
        <div className="mb-3 d-flex justify-content-between align-items-center card_header p-1">
          <div className="d-flex align-items-center">
            <div className="d-flex">
              <div className="dot active"></div>
            </div>
            <span className="me-2 text-muted">
              This database shows the list of&nbsp;
              <span className="database_name">Subscription</span>
            </span>
          </div>
        </div>
        <div className="mb-3 d-flex justify-content-end">
          <Link to="/subscription/add">
            <button
              type="button"
              className="btn btn-button btn-sm me-2"
              style={{ fontWeight: "600px !important" }}
            >
              &nbsp; Add &nbsp;&nbsp; <i class="bi bi-plus-lg"></i>
            </button>
          </Link>
        </div>
          <>
            <ThemeProvider theme={theme}>
              <MaterialReactTable
                columns={columns}
                data={data}
                enableColumnActions={false}
                enableColumnFilters={false}
                enableDensityToggle={false}
                enableFullScreenToggle={false}
                initialState={{
                  columnVisibility: {
                    createdBy: false,
                    createdAt: false,
                    updatedBy: false,
                    updatedAt: false,
                  },
                }}
                muiTableBodyRowProps={({ row }) => ({
                  onClick: () => navigate(`/subscription/view`),
                  style: { cursor: "pointer" },
                })}
              />
            </ThemeProvider>
            <Menu
              id="action-menu"
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => navigate(`/subscription/edit`)}>
                Edit
              </MenuItem>
              {/* <MenuItem>
                <Delete
                  path={`/deleteCenter/${selectedId}`}
                  onOpen={handleMenuClose}
                />
              </MenuItem> */}
            </Menu>
          </>
      </div>
    </div>
  );
}

export default Subscription;