import PersonalClientSection from "./_client";
import MainNavigation from "~/components/navigation/main.navigation";

const Home = () => {
  return (
    <main
      className={`flex min-h-screen grow flex-col items-center justify-center`}
    >
      <MainNavigation />
      <PersonalClientSection />
    </main>
  );
};

export default Home;
