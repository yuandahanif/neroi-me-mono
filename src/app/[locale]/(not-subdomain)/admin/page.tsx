import type { Metadata } from "next";
import AdminNavigation from "~/components/navigation/admin.navigation";

export const metadata: Metadata = {
  title: "Admin",
  description: "-",
};

const AdminIndexPages: React.FC = () => {
  return (
    <main
      className={`flex min-h-screen grow flex-col items-center justify-start p-10`}
    >
      <h1 className="text-4xl">{"<Dashboard/>"}</h1>

      <AdminNavigation />

      <div className="mt-10 flex w-full">
        <div className="flex h-96 w-full flex-col items-center gap-y-5">
          <h1>PLACEHOLDER FOR CHART HERE</h1>
        </div>
      </div>
    </main>
  );
};

export default AdminIndexPages;
