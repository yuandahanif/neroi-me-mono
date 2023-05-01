import { type NextPage } from "next";
import HeadSEO from "~/components/head/headSEO";
import AdminNavigation from "~/components/navigation/admin.navigation";
import { api } from "~/utils/api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import AdminLayout from "~/layouts/admin.layout";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardindexPage: NextPage = () => {
  const [chartData, setChartData] = useState<
    ChartData<"bar", number[] | undefined, string>
  >({ labels: [""], datasets: [] });

  api.blog.getBlogVisitorStatistic.useQuery(undefined, {
    onSuccess(data) {
      if (data !== null) {
        const labels = data.map((blog) => blog.slug);
        const datas = data.map((blog) => blog.visit);
        setChartData({
          labels,
          datasets: [
            {
              label: "Kunjungan Blog Teratas",
              data: datas,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(201, 203, 207, 0.2)",
                "rgba(201, 207, 204, 0.2)",
                "rgba(207, 206, 201, 0.2)",
                "rgba(207, 204, 201, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
                "rgb(201, 203, 207)",
                "rgb(201, 203, 207)",
                "rgb(201, 203, 207)",
              ],
              borderWidth: 1,
            },
          ],
        });
      }
    },
  });

  return (
    <>
      <HeadSEO />
      <AdminLayout>
        <main
          className={`flex min-h-screen grow flex-col items-center justify-start p-10`}
        >
          <h1 className="text-4xl">{"<Dashboard/>"}</h1>

          <AdminNavigation />

          <div className="mt-10 flex w-full">
            <div className="flex h-96 w-full flex-col items-center gap-y-5">
              <Bar options={{ responsive: true }} data={chartData} />
            </div>
          </div>
        </main>
      </AdminLayout>
    </>
  );
};

export default DashboardindexPage;
