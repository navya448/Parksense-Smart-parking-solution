const lineHeaderStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(180deg, rgba(30, 24, 53, 0.4) 0%, rgba(30, 24, 53, 0.4) 90.16%), url(./images/home-second-hero-img.jpg)`
  };
  
  const lineClientStyle: React.CSSProperties = {
    background: `linear-gradient(360deg, #ffffff 0%, rgba(255, 255, 255, 0) 102.23%), #f8f8f8`
  };
  
  export default function Home() {
    return (
      <main>
        <section className="py-xxl-19 pt-14 pb-10 bg-cover" style={lineHeaderStyle}   >
          <div className="container">
            <div className="row">
              <div className="col-xxl-5 col-lg-6 col-md-8 col-12">
                <div className="text-white">
                  <h1 className="text-white mb-3 display-3">Go Clean</h1>
                  <h2 className="mb-3 text-white">
                    Begin your leadership + personal mastery journey with me here
                  </h2>
                  <p className="mb-3 pe-lg-12 pe-0">
                    Maecenas molestie sagittis tellus et venenatis. In suscipit
                    tortor eget ante semper suscipit. Mauris dictum elementum diam
                    in laoreet.
                  </p>
                  <a href="#" className="btn btn-primary btn-lg">
                    Book Coach
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section className="py-xxl-14 py-lg-8 py-6 bg-dark">
          <div className="container">
            <div className="row">
              <div className="offset-xxl-2 col-xxl-8 col-md-12 col-12">
                <div className="text-center mb-12">
                  {/* title */}
                  <h2 className="text-white mb-3 h1">
                  Offset Your Carbon Footprint. <br></br>Plant the Future.
                  </h2>
                  {/* {/* <!-- para --> */}
                  <p className="lead mb-5">
                  At ClearPollution, we help individuals and businesses achieve carbon 
                  neutrality through sustainable tree planting. By utilizing unused land, such 
                  as highway corridors, we create long-term environmental benefits. Our transparent 
                  reporting and measurable results ensure you can track the positive impact 
                  you're making.
                  </p>
                  {/* <!-- button --> */}
                  <a href="#" className="btn btn-secondary btn-lg">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container mt-lg-n14 mt-n10 pb-xxl-6">
          <div className="row gy-4">
            {/* <!-- col --> */}
            <div className="col-lg-4 col-md-6 col-12">
              <div>
                {/* <!-- image --> */}
                <img
                  src="./images/ft-img-1.jpg"
                  alt="img"
                  className="img-fluid w-100 border-top border-primary border-4 rounded-top"
                ></img>
                <div className="border-top-0 border rounded-bottom bg-white">
                  <div className="p-5">
                    {/* <!-- heading --> */}
                    <h4>🌿 Breathe Better: Boost Air Quality</h4>
                    <p>
                    Cleaner air, healthier lives.<br></br> 
                    Trees are nature's air purifiers,
                     absorbing carbon dioxide and releasing oxygen. 
                     They filter out pollutants and reduce harmful greenhouse gases, 
                     making every breath a breath of fresh air.
                    </p>
                    {/* <!-- button --> */}
                    <a href="#" className="btn-primary-link">
                    Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-lg-4 col-md-6 col-12">
              <div>
                {/* <!-- image --> */}
                <img
                  src="./images/ft-img-2.jpg"
                  alt="img"
                  className="img-fluid w-100 border-top border-primary border-4 rounded-top"
                ></img>
                <div className="border-top-0 border rounded-bottom bg-white">
                  <div className="p-5">
                    {/* <!-- heading --> */}
                    <h4>🌎 Combat Climate Change</h4>
                    <p>
                    Cooling the planet, one tree at a time.<br></br>
                    Trees act as powerful carbon sinks, reducing global warming by capturing and storing 
                    carbon dioxide. Together, we can reverse the tide of climate change.
                    Let's plant the seeds for a cooler, healthier planet.
  
                    </p>
                    {/* <!-- button --> */}
                    <a href="#" className="btn-primary-link">
                      Discover the Impact
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-lg-4 col-md-6 col-12 d-md-none d-lg-block">
              <div className="mb-4 mb-lg-0">
                {/* <!-- image --> */}
                <img
                  src="./images/ft-img-3.jpg"
                  alt="img"
                  className="img-fluid w-100 border-top border-primary border-4 rounded-top"
                ></img>
                <div className="border-top-0 border rounded-bottom bg-white">
                  <div className="p-5">
                    {/* <!-- heading --> */}
                    <h4>🤝 Grow Together: Empowering Communities</h4>
                    <p>
                    Plant trees, create jobs.<br></br>
                    Tree plantation doesn’t just grow forests—it grows livelihoods. 
                    From planting to maintenance, every step generates employment and 
                    supports local communities.
                    </p>
                    
                    {/* <!-- button --> */}
                    <a href="#" className="btn-primary-link">
                      Explore How We Help
                    </a> 
  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end of course --> */}
  
        {/* <!-- start client logo  --> */}
        <section className="py-6 pb-xxl-14 py-lg-8">
          <div className="container">
            <div className="row">
              <div className="offset-xxl-2 col-xxl-8 offset-lg-1 col-lg-10 col-md-12 col-12">
                <div className="text-center mb-10">
                  {/* <!-- heading --> */}
                  <h2 className="mb-3 h1">
                    We’ve helped millions of owners create a business that works.
                  </h2>
                  {/* <!-- para --> */}
                  <p className="px-0 px-lg-8">
                    In over 40 years of coaching business owners, we’ve developed
                    a process to solve every business challenge you’re facing.
                    From people to finance and everything in between, we’ve got
                    you covered.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-4 col-6">
                {/* <!-- image --> */}
                <div className="mb-6 text-center">
                  <img
                    src="./images/logo-airbnb.svg"
                    alt="logo"
                    className="grayscale"
                  ></img>
                </div>
              </div>
  
              <div className="col-lg-2 col-md-4 col-6">
                {/* <!-- image --> */}
                <div className="mb-6 text-center">
                  <img
                    src="./images/logo-digitalocean.svg"
                    alt="logo"
                    className="grayscale"
                  ></img>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                {/* <!-- image --> */}
                <div className="mb-6 text-center">
                  <img
                    src="./images/logo-facebook.svg"
                    alt="logo"
                    className="grayscale"
                  ></img>
                </div>
              </div>
  
              <div className="col-lg-2 col-md-4 col-6">
                {/* <!-- image --> */}
                <div className="mb-6 text-center">
                  <img
                    src="./images/logo-discord.svg"
                    alt="logo"
                    className="grayscale"
                  ></img>
                </div>
              </div>
  
              <div className="col-lg-2 col-md-4 col-6">
                {/* <!-- image --> */}
                <div className="mb-6 text-center">
                  <img
                    src="./images/logo-intercom.svg"
                    alt="logo"
                    className="grayscale"
                  ></img>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                {/* <!-- image --> */}
                <div className="mb-6 text-center">
                  <img
                    src="./images/logo-twitch.svg"
                    alt="logo"
                    className="grayscale"
                  ></img>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                {/* <!-- image --> */}
                <div className="mb-6 text-center">
                  <img
                    src="./images/logo-paypal.svg"
                    alt="logo"
                    className="grayscale"
                  ></img>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                {/* <!-- image --> */}
                <div className="mb-6 text-center">
                  <img
                    src="./images/logo-netflix.svg"
                    alt="logo"
                    className="grayscale"
                  ></img>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                {/* <!-- image --> */}
                <div className="mb-6 text-center">
                  <img
                    src="./images/logo-xboxone.svg"
                    alt="logo"
                    className="grayscale"
                  ></img>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                {/* <!-- image --> */}
                <div className="mb-6 text-center">
                  <img
                    src="./images/logo-instagram.svg"
                    alt="logo"
                    className="grayscale"
                  ></img>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                {/* <!-- image --> */}
                <div className="mb-6 text-center">
                  <img
                    src="./images/logo-pinterest.svg"
                    alt="logo"
                    className="grayscale"
                  ></img>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                {/* <!-- image --> */}
                <div className="mb-6 text-center">
                  <img
                    src="./images/logo-stripe.svg"
                    alt="logo"
                    className="grayscale"
                  ></img>
                </div>
              </div>
              {/* <!-- button --> */}
              <div className="col-lg-12 col-md-12 col-12 text-center mt-5">
                <a href="#" className="btn btn-secondary">
                  See how our clients did it
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <hr></hr>
        </div>
        {/* <!-- end of client logo --> */}
  
        {/* <!-- start prgoram --> */}
        <section className="py-xxl-12 py-lg-8 py-6">
          <div className="container">
            <div className="mb-9">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                  {/* <!-- heading --> */}
                  <h2 className="h1">
                    The coaching program that change your life.
                  </h2>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                  {/* <!-- para --> */}
                  <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    urna lectus, mattis non accumsan in, tempor dictum neque. In
                    hac habitasse platea dictumst.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* <!-- thumbnail  --> */}
              <div className="col-lg-4 col-md-6 col-12">
                {/* <!-- card --> */}
                <div className="card border-0">
                  <a href="#" className="img-zoom">
                    <img
                      className="rounded img-fluid w-100"
                      src="./images/thumb-img-1.jpg"
                      alt="thumb"
                    ></img>
                  </a>
                </div>
                <div className="card border-0 mb-4 mb-lg-0">
                  {/* <!-- card body --> */}
                  <div className="card-body mt-n13 bg-white me-4 rounded-end p-5 border-top border-primary border-4">
                    {/* <!-- contet --> */}
                    <a href="#">
                      <h4 className="mb-3">Life Coach Training Courses Online</h4>
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet, conse cte turdisse in ornare
                      lectussit amet lacinia nisi.
                    </p>
                    <p className="font-13">
                      <span className="me-2">2 Weekly</span>
                      <span>40-Minute Sessions</span>
                    </p>
                    <a href="#" className="btn-primary-link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- thumbnail --> */}
              <div className="col-lg-4 col-md-6 col-12">
                {/* <!-- card --> */}
                <div className="card border-0 mt-lg-4">
                  <a href="#" className="img-zoom">
                    <img
                      className="rounded img-fluid w-100"
                      src="./images/thumb-img-2.jpg"
                      alt="thumb"
                    ></img>
                  </a>
                </div>
                <div className="card border-0 mb-4 mb-lg-0">
                  {/* <!-- card body --> */}
                  <div className="card-body mt-n13 bg-white me-4 rounded-end p-5 border-top border-primary border-4">
                    {/* <!-- content --> */}
                    <a href="#">
                      <h4 className="mb-3">
                        Good Relationships that Bond People
                      </h4>
                    </a>
                    <p>
                      Maecenas eu est purus. Morbi luctus turpis justo, sit amet
                      mollis arcu ultricies et.
                    </p>
                    <p className="font-13">
                      <span className="me-2">3 Weekly</span>
                      <span>30-Minute Sessions</span>
                    </p>
                    <a href="#" className="btn-primary-link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- thumbnail --> */}
              <div className="col-lg-4 d-lg-block d-md-none col-12">
                {/* <!-- card --> */}
                <div className="card border-0 mt-lg-8">
                  <a href="#" className="img-zoom">
                    <img
                      className="rounded img-fluid w-100"
                      src="./images/thumb-img-3.jpg"
                      alt="thumb"
                    ></img>
                  </a>
                </div>
                <div className="card border-0">
                  {/* <!-- card body --> */}
                  <div className="card-body mt-n13 bg-white me-4 rounded-end p-5 border-top border-primary border-4">
                    {/* <!-- content --> */}
                    <a href="#">
                      <h4 className="mb-3">
                        Develop Leadership Coaching Program
                      </h4>
                    </a>
                    <p>
                      Pellentesque at rhoncus metus, in condimentum felis. Donec
                      congue augue placera.
                    </p>
                    <p className="font-13">
                      <span className="me-2">2 Weekly</span>
                      <span>50-Minute Sessions</span>
                    </p>
                    <a href="#" className="btn-primary-link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end of program --> */}
  
        {/* <!-- start testimonails --> */}
        <section className="pt-xxl-18 py-lg-8 py-6 top-shape" style={lineClientStyle}>
          <div className="container">
            <div className="row d-lg-flex align-items-center">
              <div className="col-xxl-6 offset-xxl-3 offset-lg-2 col-lg-8 col-md-12 col-12">
                {/* <!-- content --> */}
                <div className="mb-8 text-center">
                  <h2 className="h1">What our client says.</h2>
                  <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    urna lectus, mattis n rem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
              {/* <!-- col --> */}
              <div className="offset-xl-1 col-xl-4 col-lg-6 col-md-6 col-12">
                <div className="mb-4 mb-lg-0">
                  <img
                    src="./images/customer-img-1.jpg"
                    alt="customer"
                    className="img-fluid rounded w-100"
                  ></img>
                </div>
              </div>
              {/* <!-- col --> */}
              <div className="offset-xl-1 col-xl-5 col-lg-6 col-md-6">
                <i className="fas fa-quote-left font-28 text-secondary mb-5"></i>
                <p className="h2 font-dm-serif font-italic fw-normal mb-3">
                  Coach brigs all the pieces together you need to really run
                  <br></br>a business.
                </p>
                <p className="font-14 mb-5">Jerome Warren, Software Company</p>
                <a href="stories.html" className="btn btn-primary">
                  View Stories
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end of testimonials --> */}
  
        {/* <!-- start features --> */}
        <section className="py-xxl-14 py-lg-8 pb-6">
          <div className="container">
            <div className="row">
              <div className="offset-lg-2 col-lg-8 col-md-12 col-12">
                <div className="mb-8 text-center">
                  {/* <!-- heading --> */}
                  <h2 className="h1">Read. Listend. Download</h2>
                  <p className="lead">
                    Get started now with insights and strategies from The Coach
                  </p>
                </div>
              </div>
            </div>
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6 col-12">
                {/* <!-- card --> */}
                <div className="card">
                  {/* <!-- card body --> */}
                  <div className="card-body p-5">
                    <div className="mb-4">
                      <i className="fas fa-newspaper text-secondary bg-light-secondary icon-shape icon-xl rounded-circle font-22"></i>
                    </div>
                    {/* <!-- content --> */}
                    <h4>Blog</h4>
                    <p>
                      Read my blog daily basis and latest article inspire you.
                    </p>
                    <a href="#" className="btn-primary-link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* <!-- card --> */}
                <div className="card">
                  {/* <!-- card body --> */}
                  <div className="card-body p-5">
                    <div className="mb-4">
                      <i className="fas fa-podcast text-info bg-light-info icon-shape icon-xl rounded-circle font-22"></i>
                    </div>
                    {/* <!-- content --> */}
                    <h4>Podcast</h4>
                    <p>
                      Listen my podcast daily basic and also, get latest podcast
                      fast.
                    </p>
                    <a href="#" className="btn-primary-link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-md-none d-lg-block">
                {/* <!-- card --> */}
                <div className="card">
                  {/* <!-- card body --> */}
                  <div className="card-body p-5">
                    <div className="mb-4">
                      <i className="fas fa-download text-danger bg-light-danger icon-shape icon-xl rounded-circle font-22"></i>
                    </div>
                    {/* <!-- content --> */}
                    <h4>Resources</h4>
                    <p>Download free resources and books for your reading,</p>
                    <a href="#" className="btn-primary-link">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end of features --> */}
      </main>
    );
  }
  