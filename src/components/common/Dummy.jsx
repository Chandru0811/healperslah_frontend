import React, { useState } from "react";
import ApexCharts from "react-apexcharts";

function AdminDashboard() {
  const [loading, setLoading] = useState(false);

  const data = [
    {
      status: "success",
      message: "All reports fetched successfully",
      productionSalesComparisonReport: {
        progressValues: [
          {
            centerId: 654,
            centerName: "2025 - Centre",
            value: 86
          },
          {
            centerId: 639,
            centerName: "ArtyLearning@BACKEND",
            value: 100
          },
          {
            centerId: 7,
            centerName: "Arty Learning",
            value: 0
          }
        ]
      },
      revenueOverTimeReport: {
        lineChartData: {
          categories: ["29 Dec", "30 Dec", "31 Dec", "01 Jan", "02 Jan", "03 Jan", "04 Jan"],
          series: [
            {
              name: "Total Lead",
              data: [1, 2, 2, 0, 4, 2, 0]
            },
            {
              name: "Total Enrollment",
              data: [6, 7, 6, 1, 14, 4, 1]
            },
            {
              name: "Total Invoice",
              data: [6, 5, 7, 1, 12, 4, 1]
            }
          ]
        }
      },
      registeredUsersReport: {
        gaugeChartData: {
          value: 3
        }
      },
      revenueGrowthByDay: {
        categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        series: [
          {
            name: "Registration Fee",
            data: [45830, 411940, 211520, 116105, 102765, 1700, 0]
          },
          {
            name: "Deposit Fee",
            data: [5160, 6548, 14173, 9445, 64813, 300, 0]
          },
          {
            name: "Course Fee",
            data: [1200, 0, 2332, 2200, 1200, 0, 0]
          }
        ]
      },
      revenueGrowthByMonth: [
        {
          title: "Lead Count",
          current: 6,
          percentageChange: -79.31,
          comparison: "Compared to last month"
        },
        {
          title: "Student Count",
          current: 20,
          percentageChange: -71.43,
          comparison: "Compared to last month"
        },
        {
          title: "Teacher Count",
          current: 5,
          percentageChange: -91.94,
          comparison: "Compared to last month"
        },
        {
          title: "Revenue",
          current: 1020,
          percentageChange: 100,
          comparison: "Compared to last month"
        }
      ]
    }
  ];

  const datas = data[0];

  const fontFamily =
    "'Outfit', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

  const lineChartOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: { enabled: false }
    },
    dataLabels: { enabled: false },
    stroke: { width: 5, curve: "straight" },
    xaxis: {
      categories: datas.revenueOverTimeReport.lineChartData.categories
    },
    colors: ["#ABBDD3", "#287F71", "#EB862A"]
  };

  const lineChartSeries = datas.revenueOverTimeReport.lineChartData.series;

  return (
    <div className="container mt-4">
      <div className="row mt-3">
        {datas.revenueGrowthByMonth.map((data, index) => (
          <div key={index} className="col-md-3 mb-3">
            <div className="card shadow-sm border-0" style={{ borderRadius: "10px" }}>
              <div className="card-body">
                <h6 className="card-title text-secondary">{data.title}</h6>
                <h5 className="card-text fw-bold text-dark">
                  {index === datas.revenueGrowthByMonth.length - 1 ? `$ ${data.current}` : data.current}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-md-8 mb-4">
          <ApexCharts options={lineChartOptions} series={lineChartSeries} type="line" height={350} />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;