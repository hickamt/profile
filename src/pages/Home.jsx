const Home = () => {
  return (
    <>
      <span class="introduction">
        <div className="container profile-body justify-content-center">
          <article className="introduction">
            <h1 className="">Todd Hickam</h1>
            <img
              class="profile-image my-2"
              src="todd_hickam.jpg"
              alt="headshot of Todd Hickam width 300 by height of 300"
            />

            <h2 class="introduction mt-2" id="todd-hickam-psu-cs-undergraduate">
              Portland State University Undergraduate
            </h2>
            <p class="introduction">- PCC: Associate Business Finance 2020</p>
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
              businesses while promoting retail sales through small adds and
              word of mouth. Realizing the automotive saturation in the Seattle
              area would make it difficult to expand my little company, I
              negotiated a sale and moved back to Portland, OR.
            </p>
          </article>
        </div>
      </span>
    </>
  );
};

export default Home;
