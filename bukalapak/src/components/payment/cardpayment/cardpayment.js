import React from 'react';

const cardpayment = (props) => {
    // render() {
      return (   
        <div id="content-wrapper">

        <div class="container-fluid">        
          
          <div class="row">
            <div class="col-lg-7">
              <div class="card mb-3">
                <div class="card-header">
                  <i class="fas fa-chart-bar"></i><b>
                  {props.headcardnamea}
                  </b>
                  </div>
                <div class="card-body">
                  {props.cardbodya}
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="card mb-3">
                <div class="card-header">
                  <i class="fas fa-chart-pie"></i><b>
                  {props.headcardnameb}
                  </b>
                  </div>
                <div class="card-body">
                {props.cardbodyb}
                </div>
                <div class="card-footer small text-muted">
                  <input type="button" class="btn btn-danger btn-block" value={props.btncardb} />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-7">
              <div class="card mb-3">
                <div class="card-header">
                  <i class="fas fa-chart-bar"></i><b>
                  {props.headcardnamec}
                  </b>
                  </div>
                <div class="card-body">
                {props.cardbodyc}
                </div>
              </div>
            </div>
          </div>
  
        </div>
       
      </div> 
      );
    // }
  }
  
  export default cardpayment;