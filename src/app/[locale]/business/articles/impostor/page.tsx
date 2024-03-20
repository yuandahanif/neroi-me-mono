import { type Metadata } from "next";
import { Comic_Neue } from "next/font/google";
const comic = Comic_Neue({
  weight: "400",
  style: "normal",
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anime PP as your LinkedIn profile",
  description: "",
};

const ImpostorPage = () => {
  return (
    <div className="prose prose-invert">
      <h1 className="text-justify text-3xl">
        <span className="line-through">Are you good enough?</span> Are you good
        enough to use anime PP as your LinkedIn profile?
      </h1>

      <div style={comic.style} className="text-justify">
        <p>
          There is only two way I can archive this, either i become good at what
          i curently do (Frontend) or I switch career to Art. Both require me to
          be good at something, and a lot of time and effort.
        </p>

        <p>
          The burden of responsibility of using your waifu as your profile is
          heavy. To become one with the waifu, you must first become one with
          yourself. Embrace the cringe, and let it flow through you.
        </p>

        <p>
          Separataion of work and personal life is a myth. You are your work,
          and your work is you. You can&apos;t escape from yourself, so you
          might as well embrace it. Work life balance? just let me work until i
          rot.
        </p>

        <p>
          Embrace the consumerism, buy more, spend more, work more. You are what
          you consume, and you consume what you are. give me more personalized
          ads, give me more targeted content, give me more distraction, give me
          that new shiny thing, I WANT MOREEEEEE.
        </p>

        <p>
          The only way to escape from this is to{" "}
          <span className="line-through">eat the rich</span> make the system
          better, but that is a lot of work. So i will be offgrid, and live in a
          cabin in the woods. I will become a hermit, and live off the land. I
          will be free from the shackles of society, and live a life of peace.
          Throwing the burden of responsibility to the next generation
          <span className="italic">
            *Hey you kids, good luck with that climate change thing*
          </span>
          .
        </p>

        <p>
          Oh god, this thing sure won&apos;t look good on my interview. I should
          clarify that this is a joke, and I am not an eco-anarchis or something
          like that. I just{" "}
          <span className="line-through">
            a regular guy who is trying to use anime PP as his LinkedIn profile
          </span>{" "}
          a moraly upstanding citizen that want to make the world a better place
          😊😊😊. \s
        </p>
      </div>
    </div>
  );
};

export default ImpostorPage;
