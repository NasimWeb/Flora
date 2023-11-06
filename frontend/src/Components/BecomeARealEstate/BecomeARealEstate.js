import React from "react";
import "./BecomeARealEstate.css";
import Swal from "sweetalert2";

export default function BecomeARealEstate() {


  return (
    <>
      <div className="become-real-state">
       
           <div className="container">
           <div className="d-flex flex-column flex-md-row align-items-center  justify-content-around" style={{rowGap:'30px'}}>
                   <div>
                    <h2 className="text-dark">Become a Real Estate Agent</h2>
                    <p className="text-dark">We only work with the best companies around the globe</p>
                   </div>
                   <div className="d-flex  align-items-center justify-content-center">
                    <div className="col-lg-10"><input style={{height : '50px'}} placeholder="Email" className="input-form  " id='email' type='email'
                     /></div>
                    <div className="col-lg-6"><button  style={{height : '50px'}} className="btn btn-primary rounded btn-big" type="submit" onClick={() => {
                      Swal.fire({
                        title: 'please check you email :)',
                        icon: 'success',
                        timer: 2000
                      })
                    }}>Submit</button></div>
                   </div>
            </div>
           </div>
        
      </div>
    </>
  );
}
