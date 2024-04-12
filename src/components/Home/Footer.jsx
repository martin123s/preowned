import React from 'react'

const Footer = () => {
  return (
      <div class="container">
          <footer class="py-1">
              <div class="row">
                  <div class="col-6 col-md-2 mb-3">
                      <h5>About Us</h5>
                      <ul class="nav flex-column">
                          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Contribution</a></li>
                          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Connection</a></li>
                          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Relation</a></li>
                      </ul>
                  </div>

                  <div class="col-6 col-md-2 mb-3">
                      <h5>Membership</h5>
                      <ul class="nav flex-column">
                          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Join Now</a></li>
                          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Member Privileges</a></li>
                          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Sign In or Register</a></li>
                      </ul>
                  </div>

                  <div class="col-6 col-md-2 mb-3">
                      <h5>Customer Service</h5>
                      <ul class="nav flex-column">
                          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Orders</a></li>
                          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Returns</a></li>
                          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Recalls</a></li>
                      </ul>
                  </div>

                  <div class="col-md-5 offset-md-1 mb-3">
                      <form>
                          <h5>Subscribe to update our latest items</h5>
                          <p>Free to go and Early bird advantage </p>
                          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                              <label for="newsletter1" class="visually-hidden">Email address</label>
                              <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
                                  <button class="btn btn-primary" type="button">Subscribe</button>
                          </div>
                      </form>
                  </div>
              </div>

              <div class="d-flex flex-column flex-sm-row justify-content-between py-3 my-4 border-top">
                  <p>© 2024 Company, Inc. All rights reserved.</p>

              </div>
          </footer>
      </div>
  )
}

export default Footer
