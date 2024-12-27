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

function CustomPackage() {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      service_id: [1, 2],
      name: "Home Cleaning",
      description: "Test",
      start_date: "2025-01-01",
      end_date: "2025-01-16",
      status: 1,
      recurrence: "Weekly",
      property_type: "Raw land",
      property_size: "100sqm",
      cleaning_hours: 2,
      range: "Per Hour",
      price: "150",
      offer_id: 1,
      createdBy: "Admin",
      createdAt: "2024-12-15",
      updatedBy: "Admin",
      updatedAt: "2024-12-20",
    },
    {
      id: 2,
      service_id: [1, 2],
      name: "Home Cleaning",
      description: "Test 1",
      start_date: "2025-01-16",
      end_date: "2025-01-30",
      status: 2,
      recurrence: "Weekly",
      property_type: "Raw land",
      property_size: "100sqm",
      cleaning_hours: 3,
      range: "Per Day",
      price: "200",
      offer_id: 2,
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
      {
        accessorKey: "status",
        enableHiding: false,
        header: "Status",
        Cell: ({ row }) => {
          const status = row.original.status;
          return status === 1 ? (
            <span className="badge badges-Green fw-light">Active</span>
          ) : status === 0 ? (
            <span className="badge badges-orange fw-light">Inactive</span>
          ) : null;
        },
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
        accessorKey: "price",
        header: "Price",
        enableHiding: false,
        size: 40,
      },
      { accessorKey: "property_type", header: "Property Type" },
      { accessorKey: "property_size", header: "Property Size" },
      { accessorKey: "cleaning_hours", header: "Cleaning Hours" },
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
          &nbsp;Custom Packages
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
              <span className="database_name">Custom Packages</span>
            </span>
          </div>
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
                    property_type: false,
                    property_size: false,
                    cleaning_hours: false,
                    createdBy: false,
                    createdAt: false,
                    updatedBy: false,
                    updatedAt: false,
                  },
                }}
                muiTableBodyRowProps={({ row }) => ({
                  onClick: () => navigate(`/custompackage/view`),
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
              <MenuItem onClick={() => navigate(`/custompackage/edit`)}>
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

export default CustomPackage;
