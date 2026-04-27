import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout title="About">
      <div className="about">
        <img
          src="Images\me.png"   // put your image in public/images
          alt="Photo of me"
          className="about-photo"
        />
        <p>
          Hi, I'm Josh Hunter, self-described Ferroequinologist, Father to a Horsfield Tortoise named 'Gregory House' (because he's a man with a house on his back) and Partner to a loving Wife.
        </p>

        <p>
          I like trains. But in a cool and science kind of way. It's strange. I started my PhD in 2021 and had little interest in the 'medium.'<br />
          Ultimately my PhD was on cameras and trains was just a means to an end to demonstrate the technology. But then, the first thing I tried didn't work.<br />
          So I tried something else, which also didn't work. So, instead of throwing Computer Vision at a wall where it very obviously wasn't sticking, I had a think.
          I spent two years thinking about why it didn't work. The numbers were there, something just wasn't falling into place, but it just didn't make sense.<br />
        </p>

        <p>
          Then I took a trip to Germany, the University, ever dedicated to the climate, has a rule that if a journey can be reasonably made by train, it must be done so.<br />
          So, I took a train to London, a Eurostar to Paris, then the ICE train to Berlin; this some 24 hour joruney gave me time to think and time to look outside of the window.<br />
          I wish I could pretend that the penny dropped on that moment, but it was just another item on a pile. Through my research I had spoken with drivers, railway engineers, railfans
          and all sorts of colourful people who had constantly been telling me 'trains are important, you're not thinking about them properly.' I think the York to Berlin trip was just the moment
          it all clicked, I was writing a paper on my interaction with the drivers at the time and I just realised that they're right.<br />
        </p>
        
        <p>
          Common wisdom suggests that an about page on a portfolio should be a bit more human. <br /> If you've found your way to this page you probably already know about my work to at least a tangential degree, to that end
          a few fun facts. I play the Saxophone to help me focus, my favorite song to play is ``Assassin" by the Fearless Flyers, but damn it's hard. I originally got into Computer Science by reading Steins;Gate at age 14
          which is way more embarassing than it sounds. <br /> My favorite songs rotate between <a href="https://open.spotify.com/playlist/72Rr5db3WRcbJqqPfJ994H?si=b84e763c96384c80" target="_blank" rel="noreferrer">
          these</a> and my favorite cocktail is a White Russian.
        </p>

        <p>
          Now that we're best friends. This site exists as a portfolio, a companion to my thesis and also as a way to make 
          the ideas a bit more accessible than a 300-page document. Thank you for reading this far, if you have any questions at all, please feel free to reach out to me.
        </p>
      </div>
    </Layout>
  )
}