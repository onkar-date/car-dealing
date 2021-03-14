import React from 'react';
import 'bs-stepper/dist/css/bs-stepper.min.css';

type MyProps = {};
type SellCarState = {
  valid: boolean,
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
      valid: false,
      company: 'Tesla',
      model: 'Hybrid',
      price: 2500000,
      insuranceValidity: 2025,
      purchaseDate: new Date(),
      totalRunning: 120000,
      color: 'black',
      registrationNo: 314159,
      image: null
    }
  }

  setSellCarState = async (event: any) => {
    const value = event.target.value;
    const field = event.target.name;
    await this.setState<never>({ [field]: value });
    await this.validateForm();
  }

  fileSelectedHandler = async (event: any) => {
    await this.setState({
      image: URL.createObjectURL(event.target.files[0])
    })
    await this.validateForm();
  }

  uploadDataHandler = async () => {
    await this.validateForm();
  }

  validateForm = async () => {
    let valid = true;
    Object.entries(this.state).map(([key, value]) => {
      if(key !== 'valid' && !value) {
        valid = false;
      }
    });
    await this.setState({
      valid: valid
    });
  }

  render() {
    const uploadImagePlaceholder = (
      <img src={process.env.PUBLIC_URL + "/images/carImgUploadPlaceholder.png"} className="img-fluid" alt="car_upload" />
    )

    const uploadedImage = (
      <img src={this.state.image} className="img-fluid img-thumbnail car-image shadow" alt="car_upload" />
    )
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 p-5">
              <div>
                <h3>Car Details</h3>
              </div>
              <hr/>
              <form>
                <div className="form-row">
                  <div className="form-group mb-4 col-md-6">
                    <label htmlFor="company">
                      <span className="required">Company</span>
                    </label>
                    <select id="company" name="company" value={this.state.company} className="form-control" onChange={this.setSellCarState}>
                      <option selected>Choose...</option>
                      <option value="Honda">Honda</option>
                      <option value="Suzuki">Suzuki</option>
                      <option value="Tesla">Tesla</option>
                    </select>
                  </div>
                  <div className="form-group mb-4 col-md-6">
                    <label htmlFor="model">
                      <span className="required">Model</span>
                    </label>
                    <select id="model" name="model" value={this.state.model} className="form-control" onChange={this.setSellCarState}>
                      <option selected>Choose...</option>
                      <option value="CtX-200">CtX-200</option>
                      <option value="Dzire">Dzire</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                  <div className="form-group mb-4 col-md-6">
                    <label htmlFor="price">
                      <span className="required">Price</span>
                    </label>
                    <input type="number" name="price" value={this.state.price} className="form-control" id="price" onChange={this.setSellCarState} />
                  </div>
                  <div className="form-group mb-4 col-md-6">
                    <label htmlFor="insuranceValidity">
                      <span className="required">Insurance Validity</span>
                    </label>
                    <input type="number" name="insuranceValidity" value={this.state.insuranceValidity} className="form-control" id="insurance" onChange={this.setSellCarState} />
                  </div>
                  <div className="form-group mb-4 col-md-6">
                    <label htmlFor="totalRunning">
                      <span className="required">Total Running</span>
                    </label>
                    <input type="number" name="totalRunning" value={this.state.totalRunning} className="form-control" id="totalRunning" onChange={this.setSellCarState} />
                  </div>
                  <div className="form-group mb-4 col-md-6">
                    <label htmlFor="purchaseDate">
                      <span className="required">Purchase Date</span>
                    </label>
                    <input type="Date" name="purchaseDate" value={this.state.purchaseDate} className="form-control" id="purchaseDate" onChange={this.setSellCarState} />
                  </div>
                  <div className="form-group mb-4 col-md-6">
                    <label htmlFor="color">
                      <span className="required">Color</span>
                    </label>
                    <input type="string" name="color" value={this.state.color} className="form-control" id="color" onChange={this.setSellCarState} />
                  </div>
                  <div className="form-group mb-4 col-md-6">
                    <label htmlFor="registrationNo">
                      <span className="required">Registration Number</span>
                    </label>
                    <input type="number" name="registrationNo" value={this.state.registrationNo} className="form-control" id="registrationNo" onChange={this.setSellCarState} />
                  </div>
                </div>
              </form>
            </div>

            {/* Image */}
            <div className="col-4 p-5">
              <div className="mb-3">
                <h3>Car Image</h3>
              </div>
              <input type="file" id="carImage" className="d-none" onChange={this.fileSelectedHandler}
                accept="image/*" />
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
          </div>

          <div className="row">
            <div className="col-12 px-5 d-flex justify-content-around">
              <button className="btn btn-success sc-submit-btn" disabled={!this.state.valid} onClick={this.uploadDataHandler}>Submit</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SellCar;
