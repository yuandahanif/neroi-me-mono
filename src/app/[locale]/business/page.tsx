import { Comic_Neue } from "next/font/google";
import Link from "next/link";

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
      <div className="max-w-prose">
        <blockquote className="mt-10 text-justify" style={comic.style}>
          &quot;I may not have been sure about what really did interest me, but
          I was absolutely sure about what didn&apos;t.&quot;
          <footer className="flex justify-end">
            <cite>- Albert Camus</cite>
          </footer>
        </blockquote>
      </div>

      <div className="mt-28  text-center">
        <h2 className="text-lg font-semibold">Some of my <span className="line-through">thoughts</span> joke:</h2>

        <ul className="mt-5">
          <li>
            <Link href="articles/impostor" className="hover:underline">
              /on impostor syndrome/
            </Link>
          </li>

          <li>
            <span className="text-muted-foreground line-through">
              /on AI and Developer/
            </span>
          </li>

          <li>
            <span className="text-muted-foreground line-through">
              /on social media/
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-10 text-xs">
        <p>other are comming soon...</p>
      </div>
    </div>
  );
};

export default Home;
