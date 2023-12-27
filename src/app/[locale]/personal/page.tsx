import PersonalClientSection from "./_client";
import Logo from "~/components/logo/logo";
import MainNavigation from "~/components/navigation/main.navigation";

const Home = () => {
  return (
    <main
      className={`flex min-h-screen grow flex-col items-center justify-center`}
    >
      <div className="">
        <Logo />
      </div>

      <MainNavigation />

      <PersonalClientSection />
    </main>
  );
};

export default Home;
