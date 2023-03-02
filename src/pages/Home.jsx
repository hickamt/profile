const Home = () => {
  return (
    <>
      {/* <h1 className="text-center my-3">Todd Hickam</h1> */}
      <span class="introduction">
      <h1 className="text-center my-3">Todd Hickam</h1>
        <img
          class="profile-image"
          src="todd_hickam.jpg"
          alt="headshot of Todd Hickam width 300 by height of 300"
        />
        <article>
          <h2 class="introduction" id="todd-hickam-psu-cs-undergraduate">
            Portland State University Undergraduate
          </h2>
          <p class="introduction">
            - PCC: Associate Business Finance 2020
            {/* College at 40 is a strange place to find oneself. Earning a degree
            in computer science is just as difficult to wrap my head around as
            my background is automotive management and several years in the
            mortgage industry. */}
          </p>
          <p className="introduction">
            - PSU: Bachelor Degree in Computer Science 2024
          </p>
          <h2 class="introduction" id="seattle washington">
            Seattle, WA
          </h2>
          <p class="introduction-body">
            At the age of 23 I opened my first business in North Seattle near
            the city of Lynwood, WA. This small automotive shop was off HWY99
            that traversed North and South through Seattle, WA. For several
            years I developed local relationships with car dealers and small
            businesses while promoting retail sales through small adds and word
            of mouth. Realizing the automotive saturation in the Seattle area
            would make it difficult to expand my little company, I negotiated a
            sale and moved back to Portland, OR.
          </p>
          <h2 class="introduction" id="portland oregon">
            Portland, OR
          </h2>
          <p class="introduction-body">
            Back in Portland Oregon I rekindled my relationships and found an
            opportunity with a mortgage company. This was my first experience
            with mortgage and it was both exciting and frightening. My position
            was home mortgage refinance, and it was at the tail end of the pre
            2008 crash; something none of us saw coming. After gaining
            experience in mortgage and feeling that the company I worked for was
            taking advantage of people, I decided to go out on my own.
          </p>
        </article>
      </span>
    </>
  );
};

export default Home;
