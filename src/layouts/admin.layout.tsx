import { useEffect, type ReactNode } from "react";
import { Source_Code_Pro } from "next/font/google";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
const source_Code_Pro = Source_Code_Pro({ subsets: ["latin", "cyrillic"] });

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
}

const AdminLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const { status, data: session } = useSession({ required: true });

  useEffect(() => {
    if (status == "authenticated") {
      if (session.user.email != "kirishima699@admin.com") {
        void router.replace("/not-admin");
      }
    }
  }, [router, session, status]);

  if (status == "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`w-full overflow-hidden bg-main-600 ${source_Code_Pro.className}`}
    >
      <div className="mx-auto min-h-screen max-w-screen-2xl bg-main-600 text-white">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
