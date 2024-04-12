import React from 'react'
import snail from '../../../public/snail.png'




const Hero = () => {
  return (
      <div className="container col-xxl-12 px-4 py-2 heromargin">
          
          <div className="row flex-lg-row-reverse align-items-center g-5">
              
              <div className="col-10 col-sm-9 col-lg-6">
                  <img src={snail} className="d-block mx-lg-auto img-fluid" alt="Running Snail" width="450" height="500" loading="lazy" />
                  <p className='snail'>Hurry Up...</p>
              </div>
              
              <div className="col-lg-6">
                  <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Effortlessly Shopping</h1>
                  <br/>

                  <div class="col">
                      <div class="row row-cols-1 row-cols-sm-2 g-4">
                          
                          <div class="col d-flex flex-column gap-2">
                              <div className="blueBar"></div>
                              
                              <h4 class="fw-semibold mb-0 text-body-emphasis">
                                     Free to go
                              </h4>
                              <p class="text-body-secondary">
                                  Most of the items are free to go, only some charged with a friendly price.
                              </p>
                          </div>

                          <div class="col d-flex flex-column gap-2">
                              <div className="blueBar"></div>

                              <h4 class="fw-semibold mb-0 text-body-emphasis">
                                  Early bird advantage
                              </h4>
                              <p class="text-body-secondary">Seize the opportunity / items now or lose out to others later.</p>
                          </div>

                          <div class="col d-flex flex-column gap-2">
                              <div className="blueBar"></div>

                              <h4 class="fw-semibold mb-0 text-body-emphasis">
                                  Diverse Selection
                              </h4>
                              <p class="text-body-secondary">Range from indoor kitchenware, furniture to outdoor garden tools.</p>
                          </div>

                          <div class="col d-flex flex-column gap-2">
                              <div className="blueBar"></div>

                              <h4 class="fw-semibold mb-0 text-body-emphasis">
                                  Green Living
                              </h4>
                              <p class="text-body-secondary">What you are doing is helping the world becoming a better place!</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Hero
