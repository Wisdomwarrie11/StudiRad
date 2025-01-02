const Packages = () => 
{
    return(
        <div className="container text-center">
<h2 className="fw-bold">Our Packages</h2>
<div className="row mt-4">
  <div className="col-md-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title fw-bold">Basic Plan</h5>
        <p>$50 / month</p>
        <p>Access to recorded tutorials.</p>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title fw-bold">Pro Plan</h5>
        <p>$100 / month</p>
        <p>Access to live and recorded tutorials.</p>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title fw-bold">Premium Plan</h5>
        <p>$150 / month</p>
        <p>All features + personalized mentorship.</p>
      </div>
    </div>
  </div>
</div>
</div>
    )
}
export default Packages;