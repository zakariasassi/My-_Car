import React from 'react'
import './fixcar.css'

import fix1 from '../../assets/fix1.jpg'
import fix2 from '../../assets/fix2.jpg'
import fix3 from '../../assets/fix3.jpeg'
import fix4 from '../../assets/fix4.jpg'



function fixcar() {
  return (
    <>
    <div className="container">






      <div className= "row"   >
       <div className="col">

       <img className="card-img-top" src={fix1} alt="Card image cap" />    
       <div className="card-body">

             <h1> أعطال الصالة</h1>
             <a href="#" className="btn btn-primary">218 92 56565656</a>
      </div>
       </div>


       <div className="col">
       <img className="card-img-top" src={fix3} alt="Card image cap" />
       <div className="card-body">

       <h1> أعطال المحركات</h1>
       <a href="#" className="btn btn-primary">218 92 56565656</a>
</div>
       </div>
       

       <div className="col">
       <img className="card-img-top" src={fix2} alt="Card image cap" />
       <div className="card-body">

       <h1> الأعطال الكهربائية</h1>
       <a href="#" className="btn btn-primary">218 92 56565656</a>
</div>
       </div>
       

       <div className="col">
       <img className="card-img-top" src={fix4} alt="Card image cap" />
       <div className="card-body">
       <h1>خدمة نقل السيارات</h1>
       <a href="#" className="btn btn-primary">218 92 56565656</a>

       </div>
       </div>
      </div>

      </div>


    </>
  )
}

export default fixcar