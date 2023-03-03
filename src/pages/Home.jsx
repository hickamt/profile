const Home = () => {
  return (
    <>
    <article>
      <div className="container profile-body justify-content-center">
        <h1 className="">Todd Hickam</h1>
        <img
          className="profile-image my-2"
          src="todd_hickam.jpg"
          alt="headshot of Todd Hickam width 300 by height of 300"
        />

        <h2 className="introduction text-start mt-2" id="todd-hickam-psu-cs-undergraduate">
          PSU Undergraduate
        </h2>
        <ul className="text-start">
          <li className="">PSU: Bachelor Computer Science 2024</li>
          <li className="">PCC: Associate Business Finance 2020</li>
        </ul>
        <h2 className="introduction text-start" id="seattle washington">
          Seattle, WA
        </h2>
        <p className="introduction-body text-start">
          At the age of 23 I opened my first business in North Seattle near the
          city of Lynwood, WA. This small automotive shop was off HWY99 that
          traversed North and South through Seattle, WA. For several years I
          developed local relationships with car dealers and small businesses
          while promoting retail sales through small adds and word of mouth.
          Realizing the automotive saturation in the Seattle area would make it
          difficult to expand my little company, I negotiated a sale and moved
          back to Portland, OR.
        </p>
      </div>
        </article>
    </>
  );
};

export default Home;
