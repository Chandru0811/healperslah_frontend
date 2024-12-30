import { useEffect, useMemo, useState } from "react";
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
import api from "../../../config/URL";

function Order() {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // const data = [
  //   {
  //     id: 1,
  //     order_number: "OR-100",
  //     customer_id: 1,
  //     total_amount: "10000",
  //     paid_amount: "5000",
  //     balance_amount: "5000",
  //     start_date: "2024-12-13",
  //     end_date: "2024-12-13",
  //     duration: "2 hrs",
  //     booking_type: "Service Group",
  //     payment_status: 1,
  //     createdBy: "Admin",
  //     createdAt: "2024-12-15",
  //     updatedBy: "Admin",
  //     updatedAt: "2024-12-20",
  //   },
  //   {
  //     id: 2,
  //     order_number: "OR-101",
  //     customer_id: 2,
  //     total_amount: "10000",
  //     paid_amount: "6000",
  //     balance_amount: "4000",
  //     start_date: "2024-12-13",
  //     end_date: "2024-12-13",
  //     duration: "2 hrs",
  //     booking_type: "Service Group",
  //     payment_status: 0,
  //     createdBy: "Admin",
  //     createdAt: "2024-12-15",
  //     updatedBy: "Admin",
  //     updatedAt: "2024-12-20",
  //   },
  // ];

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
      { accessorKey: "order_number", enableHiding: false, header: "Order Number" },
      {
        accessorKey: "customer_id",
        enableHiding: false,
        header: "Customer Id",
      },
      {
        accessorKey: "total_amount",
        enableHiding: false,
        header: "Total Amount",
      },
      {
        accessorKey: "paid_amount",
        header: "Paid Amount",
        enableHiding: false,
        size: 40,
      },
      {
        accessorKey: "balance_amount",
        enableHiding: false,
        header: "Balance Amount",
      },
      {
        accessorKey: "booking_type",
        header: "Booking Type",
      },
      {
        accessorKey: "start_date",
        header: "Start Date",
      },
      {
        accessorKey: "end_date",
        header: "End Date",
      },
      {
        accessorKey: "duration",
        header: "Duration",
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

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await api.get(`admin/orders`);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


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
          &nbsp;Order
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
              <span className="database_name">Order</span>
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
                    booking_type: false,
                    start_date: false,
                    end_date: false,
                    duration: false,
                    createdBy: false,
                    createdAt: false,
                    updatedBy: false,
                    updatedAt: false,
                  },
                }}
                muiTableBodyRowProps={({ row }) => ({
                  onClick: () => navigate(`/order/view/${row.original.id}`),
                  style: { cursor: "pointer" },
                })}
              />
            </ThemeProvider>
          </>
      </div>
    </div>
  );
}

export default Order;
