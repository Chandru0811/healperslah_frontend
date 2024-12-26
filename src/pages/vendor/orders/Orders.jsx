import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MaterialReactTable } from "material-react-table";
import { ThemeProvider, createTheme } from "@mui/material";

function Orders() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      order_id: "ORD123",
      helper_id: "HLP456",
      assigned_at: "2024-12-25",
      start_date: "2025-01-01",
      end_date: "2025-01-15",
      status: "Pending",
      total_amount: "100.00",
      paid_amount: "50.00",
      balance_amount: "50.00",
      createdBy: "Admin",
      createdAt: "2024-12-15",
      updatedBy: "Admin",
      updatedAt: "2024-12-20",
    },
    {
      id: 2,
      order_id: "ORD124",
      helper_id: "HLP789",
      assigned_at: "2024-12-26",
      start_date: "2025-01-16",
      end_date: "2025-01-25",
      status: "Completed",
      total_amount: "150.00",
      paid_amount: "100.00",
      balance_amount: "50.00",
      createdBy: "Admin",
      createdAt: "2024-12-16",
      updatedBy: "Admin",
      updatedAt: "2024-12-21",
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
      { accessorKey: "order_id", enableHiding: false, header: "Order Id" },
      {
        accessorKey: "helper_id",
        enableHiding: false,
        header: "Helper Id",
      },
      {
        accessorKey: "assigned_at",
        header: "Assigned At",
        enableHiding: false,
        size: 40,
      },
      { accessorKey: "start_date", enableHiding: false, header: "Start Date" },
      { accessorKey: "end_date", enableHiding: false, header: "End Date" },
      {
        accessorKey: "status",
        header: "Status",
        enableHiding: false,
        size: 50,
      },
      {
        accessorKey: "total_amount",
        enableHiding: false,
        header: "Total Amount",
      },
      { accessorKey: "paid_amount", header: "Paid Amount" },
      { accessorKey: "balance_amount", header: "Balance Amount" },
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
          &nbsp;Orders
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
              <span className="database_name">Orders</span>
            </span>
          </div>
        </div>
        {loading ? (
          <div className="loader-container">
            <div className="loading">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ) : (
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
                    paid_amount: false,
                    balance_amount: false,
                    createdBy: false,
                    createdAt: false,
                    updatedBy: false,
                    updatedAt: false,
                  },
                }}
                muiTableBodyRowProps={({ row }) => ({
                  onClick: () => navigate(`/orders/view`),
                  style: { cursor: "pointer" },
                })}
              />
            </ThemeProvider>
          </>
        )}
      </div>
    </div>
  );
}

export default Orders;
