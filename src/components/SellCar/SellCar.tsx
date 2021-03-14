import React from 'react';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper';

type MyProps = {};
type SellCarState = {
  company: any,
  model: any,
  price: any,
  insuranceValidity: any,
  purchaseDate: any,
  totalRunning: any,
  color: any,
  registrationNo: any,
  image: any
};

class SellCar extends React.Component<MyProps, SellCarState> {
  stepper: any;
  constructor(props: MyProps) {
    super(props);
    this.state = {
      company: null,
      model: null,
      price: null,
      insuranceValidity: null,
      purchaseDate: null,
      totalRunning: null,
      color: null,
      registrationNo: null,
      image: null
    }
  }

  componentDidMount = () => {
    this.stepper = new Stepper(document.querySelector('#stepper1')!, {
      linear: false,
      animation: true
    })
  }

  setSellCarState = (event:any) => {
    const value = event.target.value;
    const field =  event.target.name;
    this.setState<never>({[field]:value})
  } 

  fileSelectedHandler = (event: any) => {
    console.log(event);
    this.setState({
      image: URL.createObjectURL(event.target.files[0])
    })
    console.log(this.state);
    
  }

  uploadDataHandler = () => {
    console.log(this.state);
    
  }

  render() {
    const uploadImagePlaceholder = (
      <img src={process.env.PUBLIC_URL + "/images/carImgUploadPlaceholder.png"} className="img-fluid" alt="car_upload"/>
    )

    const uploadedImage = (
      <img src={this.state.image} className="img-fluid car-image shadow" alt="car_upload"/>
    )
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row p-2">
            <div className="col-12">
              <div id="stepper1" className="bs-stepper">
                <div className="bs-stepper-header">
                  <div className="step" data-target="#select-car">
                    <button className="step-trigger">
                      <span className="bs-stepper-circle">1</span>
                      <span className="bs-stepper-label">Select Car</span>
                    </button>
                  </div>
                  <div className="line"></div>
                  <div className="step" data-target="#car-details">
                    <button className="step-trigger">
                      <span className="bs-stepper-circle">2</span>
                      <span className="bs-stepper-label">Car Details</span>
                    </button>
                  </div>
                  <div className="line"></div>
                  <div className="step" data-target="#upload-image">
                    <button className="step-trigger">
                      <span className="bs-stepper-circle">3</span>
                      <span className="bs-stepper-label">Upload Image</span>
                    </button>
                  </div>
                </div>
                <div className="bs-stepper-content p-5">
                  <form>
                    {/* Select Car */}
                    <div id="select-car" className="content">
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="company">Company</label>
                          <select id="company" name="company" value = {this.state.company} className="form-control" onChange={this.setSellCarState}>
                            <option selected>Choose...</option>
                            <option value="Honda">Honda</option>
                            <option value="Suzuki">Suzuki</option>
                            <option value="Tesla">Tesla</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="model">Model</label>
                          <select id="model" name="model" value = {this.state.model} className="form-control" onChange={this.setSellCarState}>
                            <option selected>Choose...</option>
                            <option value="CtX-200">CtX-200</option>
                            <option value="Dzire">Dzire</option>
                            <option value="Hybrid">Hybrid</option>
                          </select>
                        </div>
                      </div>
                      <button className="btn btn-primary" type="button" onClick={() => this.stepper.next()}>Next</button>
                    </div>
                    
                    {/* Enter Car Details */}
                    <div id="car-details" className="content">
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="price">Price</label>
                          <input type="number" name="price" value = {this.state.price} className="form-control" id="price" onChange={this.setSellCarState} />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="insuranceValidity">Insurance Validity</label>
                          <input type="number" name="insuranceValidity" value = {this.state.insuranceValidity} className="form-control" id="insurance" onChange={this.setSellCarState} />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="totalRunning">Total Running</label>
                          <input type="number" name="totalRunning" value = {this.state.totalRunning} className="form-control" id="totalRunning" onChange={this.setSellCarState} />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="purchaseDate">Purchase Date</label>
                          <input type="Date" name="purchaseDate" value = {this.state.purchaseDate} className="form-control" id="purchaseDate" onChange={this.setSellCarState} />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="color">Color</label>
                          <input type="string" name="color" value = {this.state.color} className="form-control" id="color" onChange={this.setSellCarState} />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="registrationNo">Registration Number</label>
                          <input type="number" name="registrationNo" value = {this.state.registrationNo} className="form-control" id="registrationNo" onChange={this.setSellCarState} />
                        </div>
                      </div>
                      <button className="btn btn-primary" type="button" onClick={() => this.stepper.next()}>Next</button>
                    </div>
                    
                    {/* Upload Image */}
                    <div id="upload-image" className="content text-center">
                      <input type="file" id="carImage" className="d-none" onChange={this.fileSelectedHandler}
                      accept="image/*"/>
                      <div>
                        <label htmlFor="carImage">
                          <div className={`uploadImageDiv ${!this.state.image ? "border-dash" : ""}`} role="button">
                            {this.state.image ? uploadedImage : uploadImagePlaceholder}
                          </div>
                        </label>
                      </div>
                      <button type="button" className="btn btn-primary upload-btn" disabled={!this.state.image} onClick={this.uploadDataHandler}>
                        Upload
                      </button>
                      <div>
                        <span className={`text-black-50 ${this.state.image ? "" : "d-none"}`} >
                          Click on image to select different image.
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SellCar;
