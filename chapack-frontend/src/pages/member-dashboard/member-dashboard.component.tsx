import React from "react";
import Card from "../../components/card/card.component";
import { DashboardPage, StatWrapper } from "./member-dashboard.styles";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip);

const data = {
  labels: ["ลงทะเบียน", "พัสดุถึงปลายทาง", "รับพัสดุแล้ว"],
  datasets: [
    {
      label: "# of Votes",
      data: [5, 6, 12],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const MemberDashboard = () => {
  return (
    <DashboardPage>
      {/* <StatWrapper>
        <Card width="300px" height="300px">
          <div style={{ width: "90%" }}>
            <Doughnut data={data} />;
          </div>
        </Card>
        <Card width="800px" height="100px">
          <h1>HELLO</h1>
        </Card>
      </StatWrapper> */}
        

    </DashboardPage>
  );
};

export default MemberDashboard;
