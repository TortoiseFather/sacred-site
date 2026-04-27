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
          I like trains. But in a “cool and science” way. Which is strange, because when I started my PhD in 2021, I didn’t really care about them at all.<br />
          My research was supposed to be about cameras. Trains were just a convenient test case. The plan was simple: apply computer vision, demonstrate the tech, write it up.<br />
          But it just wasn't working. So I tried something else, which also didn't work. So, instead of throwing Computer Vision at a wall where it very obviously wasn't sticking, I had to stop and think.
          I spent two years thinking about why it didn't work. The numbers were there, something just wasn't falling into place, but it just didn't make sense.
        </p>

        <p>
          Then I took a trip to Germany, the University, ever dedicated to the climate, has a rule that if a journey can be reasonably made by train, it must be done so.<br />
          So, I took a train to London, a Eurostar to Paris, then the ICE train to Berlin; this some 24 hour joruney gave me time to think and time to look outside of the window.<br />
          I’d been speaking to drivers, engineers, and rail professionals for a while at that point. They all kept telling me the same thing: “you’re not thinking about trains properly.”<br />
          Some time while I was in Germany, I realised they were right. If trains could be automated simply, someone smarter than me would have done it already.<br />
          And the rest is history. I'd recount the preamble to my thesis, but you can just go and read the thing if that sort of stuff interests you.
        </p>
        
        <p>
          If you've found your way to this page you probably already know about my work to at least a tangential degree, so, a few fun facts.<br />
          I play the Saxophone to help me focus, my favorite song to play is ``Assassin" by the Fearless Flyers, but damn it's hard. My favorite songs rotate between <a href="https://open.spotify.com/playlist/72Rr5db3WRcbJqqPfJ994H?si=b84e763c96384c80" target="_blank" rel="noreferrer">
          these</a> and my favorite cocktail is a White Russian.
        </p>

        <p>
          This site is a portfolio, a companion to my thesis, and an attempt to make those ideas a bit more accessible than a 300-page document.<br />
          For what it's worth, I made this website myself, so I'm quite proud of it. This is my first time actually doing any web design work since getting 40% in my second year undergraduate Web Design class.<br />
          I suppose you could consider the website part of the overall portfolio.<br />
          If you’ve made it this far, thank you. If you have any questions, feel free to get in touch.
        </p>
      </div>
    </Layout>
  )
}