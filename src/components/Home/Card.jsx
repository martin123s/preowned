
import React from 'react'
import k1 from '../../../public/pics/k1.jpg';



const Card = () => {
  return (
    <div className="card cardFull">
      <img src={k1} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Item Name</h5>
          <div className="card-text">
            ZipCode: 04103
          </div>
          <div className="card-text cardmargin">
            Address: 32 marginal avenue, portland, maine
          </div>
        <a href="" className="btn btn-primary">More Details</a>
        </div>
    </div>
  )
}

// {`items/${list.id}`}

export default Card

