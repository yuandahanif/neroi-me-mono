import { Comic_Neue } from "next/font/google";

const comic = Comic_Neue({
  weight: "400",
  style: "normal",
  preload: true,
  subsets: ["latin"],
});

const Home = () => {
  return (
    <div
      className={`flex min-h-screen grow flex-col items-center justify-center`}
    >
      <div className="prose prose-invert text-center">
        <h1 className="text-3xl">I&apos;ve no life outside work!</h1>

        <p>
          Not that i have high productivity or anything, but i do have a lot of
          fun doing it.
        </p>

        <blockquote className="mt-10 text-justify" style={comic.style}>
          &quot;I may not have been sure about what really did interest me, but
          I was absolutely sure about what didn&apos;t.&quot;
          <footer className="flex justify-end">
            <cite>- Albert Camus</cite>
          </footer>
        </blockquote>
      </div>

      <div className="mt-28">
        <p>other comming soon...</p>
      </div>
    </div>
  );
};

export default Home;
