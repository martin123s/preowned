import React from 'react'
import Card from './Card'


const Cards = () => {
    return (
        <div>
            <div className='browse browseItem' >Browse Items</div>
            <div className="container col-xxl-12 px-4">
                <div class="col">
                    <div class="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 align-items-stretch g-4 py-4">

                        <div class="col singlecard">
                            <Card />
                        </div>

                        <div class="col">
                            <Card />
                        </div>

                        <div class="col">
                            <Card />
                        </div>

                        <div class="col">
                            <Card />
                        </div>

                    </div>

                    <div class="viewall">
                        <a href="/Items" >View All Items . . .</a>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default Cards



// import React from 'react'
// import Card from './Card'

// const Cards = () => {
//     return (
      
//         <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-stretch g-4 py-5">
          
//             <div class="col">
//                 <Card/>
//             </div>
            
//             <div class="col">
//                 <Card />
//             </div>
            
//             <div class="col">
//                 <Card />
//             </div>
            
//             <div class="col">
//                 <Card />
//             </div>
            
//     </div>
//   )
// }

// export default Cards

