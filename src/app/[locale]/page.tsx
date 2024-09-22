import PersonalClientSection from "./_client";
import MainNavigation from "~/components/navigation/main.navigation";

const Home = () => {
  return (
    <div
      className={`flex min-h-screen grow flex-col items-center justify-center`}
    >
      <MainNavigation />
      <PersonalClientSection />
    </div>
  );
};

export default Home;
