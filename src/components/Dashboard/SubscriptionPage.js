import React, { useState } from 'react';
import './subscribe.css'; // Link to the custom CSS

function SubscriptionPage() {
  const [packageDetails] = useState({
    name: 'Pro Package',
    price: '$120',
    description:
      'This package includes all course materials, one-on-one support, and full access to premium content.',
    duration: '3 Months',
    icon: '🎓', // Emoji icon for visual enhancement
  });

  const handlePayment = () => {
    // Placeholder for payment gateway integration
    alert('Redirecting to payment gateway...');
  };

  return (
    <div className="subscription-page">
      <div className="container">
        <h2 className="text-center mb-5">Subscribe to Our Course</h2>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            {/* Subscription Package Card */}
            <div className="package-card shadow-lg p-4 rounded text-center">
              <div className="package-icon mb-4">
                <h1>{packageDetails.icon}</h1>
              </div>
              <h3>{packageDetails.name}</h3>
              <p className="lead text-muted">{packageDetails.description}</p>
              <p className="font-weight-bold">Duration: {packageDetails.duration}</p>
              <p className="price h4 text-success">{packageDetails.price}</p>

              {/* Payment Details Section */}
              <div className="payment-details mt-4">
                <h5>Payment Details & Guidelines</h5>
                <ul className="list-unstyled">
                  <li>Secure payment via our trusted payment gateway.</li>
                  <li>Instant access to all course materials upon payment.</li>
                  <li>No refunds once the course begins, so please choose carefully.</li>
                </ul>
              </div>

              {/* Pay Now Button */}
              <button className="btn btn-primary mt-4" onClick={handlePayment}>
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionPage;
