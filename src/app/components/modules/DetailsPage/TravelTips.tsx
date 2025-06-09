import { Manrope } from "next/font/google";

const manrope400 = Manrope({
  subsets: ["latin"],
  weight: "400"
});

const TravelTips = () => {
  return (
    <section className="travel-tips">
      <div className="container">
        <div id="travel-tips" className="section travel-tips__inner">
          <h2>Travel Tips</h2>
            <div className="section-wrapper">
              <div className="row row-1">
                <h3>Buy a small backpack/suitcase</h3>
                <p className={`${manrope400.className}`}>
                    By purchasing a small backpack &#40;I like something around 35/40
                    liters&#41; , you will be forced you to pack light and avoid carrying
                    too much stuff. Humans have a natural tendency to want to fill
                    space so if you pack light but have lots of extra room in your
                    bag, you’ll end up going “well, I guess I can take more” and
                    then regret it.
                </p>
              </div>
              <hr />
              <div className="row row-2">
                <h3>But take extra socks</h3>
                <p className={`${manrope400.className}`}>
                    You’ll lose a bunch to laundry gremlins, wear and tear, and
                    hiking so packing extra will come in handy. I only take a few
                    more than I need. Nothing beats a fresh pair of socks!
                </p>
              </div>
              <hr />
              <div className="row row-3">
                <h3>Take an extra bank card and credit card with you</h3>
                <p className={`${manrope400.className}`}>
                    Disasters happen. It’s always good to have a backup in case you
                    get robbed or lose a card. You don’t want to be stuck somewhere
                    new without access to your funds. I once had a card duplicated
                    and a freeze put on it. I couldn’t use it for the rest of my
                    trip. I was very happy I had an extra and not like my friend,
                    who didn’t and was forced to borrow money from me all the time!
                </p>
              </div>
              <hr />
              <div className="row row-4">
                <h3>Travel by yourself at least once</h3>
                <p className={`${manrope400.className}`}>
                    By purchasing a small backpack &#40;I like something around 35/40
                    liters&#41; , you will be forced you to pack light and avoid carrying
                    too much stuff. Humans have a natural tendency to want to fill
                    space so if you pack light but have lots of extra room in your
                    bag, you’ll end up going “well, I guess I can take more” and
                    then regret it.
                </p>
              </div>
            </div>
        </div>
      </div>
      </section>
  )
}

export default TravelTips