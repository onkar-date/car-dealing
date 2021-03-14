import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import MainContent from './Main-content/Main-content';

type MyProps = { };
type MyState = { 
  filters: Array<string>,
  carsList: Array<any>
};
class Home extends React.Component<MyProps, MyState> {
  constructor() {
    super({});
    this.state = {
      filters: this.companyData,
      carsList: this.cars
    }
  }
  companyData = [
    "Honda",
    "Suzuki",
    "Toyota"
  ];
  cars = [
    {
        name: "CTX-200",
        src: "/images/1.jpg",
        description: "Neque porro quisquam est  consectetur, adipisci velit..."
    },
    {
        name: "RJ-45",
        src: "/images/2.jpg",
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
        name: "Thunder v01",
        src: "/images/3.jpg",
        description: "Neque t, consectetur, adipisci velit..."
    },
    {
        name: "Renegade 300",
        src: "/images/4.jpg",
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit quia dolor sit amet, consectetur,"
    },
    {
        name: "HRD-1300",
        src: "/images/5.jpg",
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    }
  ];
  render() {
    return (
      <React.Fragment>
        <div className="home-container">

          {/* Side Bar */}
          <Sidebar filters={this.state.filters}/>

          {/* Main Section */}
          <MainContent carsList={this.state.carsList}/>
        </div>
      </React.Fragment>
    );
  }
}


export default Home;
