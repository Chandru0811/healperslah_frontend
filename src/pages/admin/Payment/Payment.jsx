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

function Payment() {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      order_id: 1,
      helper_id: 1,
      company_id: 1,
      booking_type: "Service Group",
      amount_paid: "150.5",
      balance_amount: "0",
      total_amount: "150.5",
      payment_status: 1,
      createdBy: "Admin",
      createdAt: "2024-12-15",
      updatedBy: "Admin",
      updatedAt: "2024-12-20",
    },
    {
      id: 2,
      order_id: 2,
      helper_id: 1,
      company_id: 1,
      booking_type: "Service Group",
      amount_paid: "200",
      balance_amount: "0",
      total_amount: "200",
      payment_status: 0,
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
          const status = row.original.payment_status;
          return status === 1 ? (
            <div className="d-flex align-items-center">
              <div className="active_dot"></div>
              <span>Active</span>
            </div>
          ) : status === 0 ? (
            <div className="d-flex align-items-center">
              <div className="inactive_dot"></div>
              <span>Inactive</span>
            </div>
          ) : null;
        },
      },
      { accessorKey: "order_id", enableHiding: false, header: "Order Id" },
      {
        accessorKey: "helper_id",
        enableHiding: false,
        header: "Helper Id",
      },
      {
        accessorKey: "company_id",
        enableHiding: false,
        header: "Company Id",
      },
      {
        accessorKey: "booking_type",
        enableHiding: false,
        header: "Booking Type",
      },
      {
        accessorKey: "amount_paid",
        enableHiding: false,
        header: "Amount Paid",
      },
      {
        accessorKey: "balance_amount",
        header: "Balance Amount",
        enableHiding: false,
        size: 40,
      },
      {
        accessorKey: "total_amount",
        header: "Total Amount",
        enableHiding: false,
        size: 40,
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
    <div className="container-fluid px-0 mb-4 center">
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
          &nbsp;Payment
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
              <span className="database_name">Payment</span>
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
                    createdBy: false,
                    createdAt: false,
                    updatedBy: false,
                    updatedAt: false,
                  },
                }}
                muiTableBodyRowProps={({ row }) => ({
                  onClick: () => navigate(`/payment/view`),
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
              <MenuItem onClick={() => navigate(`/payment/edit`)}>
                Edit
              </MenuItem>
            </Menu>
          </>
      </div>
    </div>
  );
}

export default Payment;
