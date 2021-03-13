import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';

class Home extends React.Component {
  cars = [
    {
      name: "CTX-200",
      src:  "/images/1.jpg",
      description: "Neque porro quisquam est  consectetur, adipisci velit..."
    },
    {
      name: "RJ-45",
      src:  "/images/2.jpg",
      description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
      name: "Thunder v01",
      src:  "/images/3.jpg",
      description: "Neque t, consectetur, adipisci velit..."
    },
    {
      name: "Renegade 300",
      src:  "/images/4.jpg",
      description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit quia dolor sit amet, consectetur,"
    },
    {
      name: "HRD-1300",
      src:  "/images/5.jpg",
      description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    }
  ];
  companyData = [
    "Honda",
    "Suzuki",
    "Toyota"
  ];
  Home() {

  }
  render() {
    return (
      <React.Fragment>
        <div className="home-container">

          {/* Side Bar */}
          <div className="sidebar border-right">
            <div className="p-2 border-bottom">
              <h4>Filter</h4>
            </div>
             <div className="accordion" id="accordionExample">
              <div className="card p-0">
                <div className="card-header p-0" id="headingOne">
                  <h2 className="mb-0">
                    <button className="btn btn-block d-flex justify-content-between align-items-center" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      <span>Copmany</span>
                      <span className="collapse-arrow">
                        <FontAwesomeIcon icon={faChevronDown} size={"1x"}/>
                      </span>
                    </button>
                  </h2>
                </div>

                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div className="card-body">
                    {
                      this.companyData.map(company => {
                        return (
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value={company} id={company} />
                            <label className="form-check-label" htmlFor={company}>
                              {company}
                            </label>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          {/* Main Section */}
          <div className="main-content p-4">
            <div className="container-fluid">
              <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-1">
                {
                  this.cars.map((car, index) => {
                    return (
                      <div className="col mb-4" key={index}>
                        <div className="card shadow h-100">
                          <img src={process.env.PUBLIC_URL + car.src} className="card-img-top" alt="car"/>
                          <div className="card-body d-flex flex-column justify-content-between">
                            <h5 className="card-title">{car.name}</h5>
                            <p className="card-text">
                              {car.description}
                            </p>
                            <button className="btn btn-primary">Send Enquiry</button>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            </div>
          </div>
      </React.Fragment>
    );
  }
}
 
export default Home;
