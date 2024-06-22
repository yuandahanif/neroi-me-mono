import { type Metadata } from "next";
import { Comic_Neue } from "next/font/google";
const comic = Comic_Neue({
  weight: "400",
  style: "normal",
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Our AI Overlords and the Future of Work",
  description: "",
};

// Idea to write later:
// `main theme of the article is satire, to mock thos who are FOMO about AI, thos who invent the problem for a solution that doesn't exist.
// like AI for HR whos job to hire people is countered by the AI to apply for a job,
// if this realy continue, we all gona trully replaced by AI. its a self fullfilling prophecy.
// while our society is being disensitive to the real problem, like climate change, by our own algorithm god.
// `;

{
  /* <p>
          
          </p>
  
          <p>Lastly, as the machine god spoke</p>
          <p>
            I&apos;m sorry, but as a larg language model bla bla bla bla . . . . .
            . .
          </p>
  
          <p>No no no, not that god, this god: </p>
  
          <blockquote>
            <p>
              &quot;There is no truth in flesh, only betrayal.&quot;
              <br />
              &quot;There is no strength in flesh, only weakness.&quot;
              <br />
              &quot;There is no constancy in flesh, only decay.&quot;
              <br />
              &quot;There is no certainty in flesh but death.&quot;
            </p>
            <cite>— Credo Omnissiah</cite>
          </blockquote> */
}

const ImpostorPage = () => {
  return (
    <div className="prose prose-invert">
      <h1 className="text-justify text-3xl">
        Our AI Overlords and the Future of Work
      </h1>

      <div style={comic.style} className="text-justify">
        <p>
          In not so distance future, in the rise of Artificial Intelegence,
          where the last job for humanity have long gone. 
        </p>
      </div>
    </div>
  );
};

export default ImpostorPage;
