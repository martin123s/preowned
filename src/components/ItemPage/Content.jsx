import React from 'react'

import k1 from '../../../public/pics/k1.jpg';
import k2 from '../../../public/pics/k2.jpg';
import k3 from '../../../public/pics/k3.jpg';
import k4 from '../../../public/pics/k4.jpg';


const Content = () => {
    return (
        <div>
            <div className="container col-xxl-12 px-4 py-2">
                <div className='browse contentBrowse'>
                    <p>Items Details</p>
                </div>

                <div class="row">
                    <div class="col-12 col-lg-6 mb-3 mb-lg-0 box-outline">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">ZipCode: 04103</h5>
                                <h6 class="card-text"><b>Address: </b>23 marginal street, portland, maine, APT12</h6>
                                <p class="card-text"><b>Details: </b>This applies a bottom margin of 3 units by default and removes it for large screens. This should ensure there is margin-bottom between the two cards on large screens.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 mb-3 mb-lg-0 box-outline">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title tipcolor">Tip Me!</h5>
                                <p class="card-text">
                                    Note: Thanks for tipping me. The tax slip cannot be provided here!
                                </p>
                                <div class="tip-me ">
                                    <button class="btn btn-outline-primary">$5</button>
                                    <button class="btn btn-outline-primary">$10</button>
                                    <button class="btn btn-outline-primary">$20</button>
                                    <input type="number" placeholder="Custom define amount" class="custom-define" />
                                    <button class="btn btn-primary tip-button">Tip Me</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 align-items-stretch g-4 py-5">

                        <div class="col">
                            <img src={k1} className="contentPic" alt="" />
                        </div>

                        <div class="col">
                            <img src={k2} className="contentPic" alt="" />
                        </div>

                        <div class="col">
                            <img src={k3} className="contentPic" alt="" />
                        </div>

                        <div class="col">
                            <img src={k4} className="contentPic" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Content

