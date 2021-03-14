import React from 'react';

type MyProps = {
    carsList: Array<any>
}
class MainContent extends React.Component<MyProps> {
    constructor(props: MyProps) {
        super(props);
    }

    render() {
        return (
            <div className="main-content p-4">
                <div className="container-fluid">
                    <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-1">
                        {
                            this.props.carsList.map((car, index) => {
                                return (
                                    <div className="col mb-4" key={index}>
                                        <div className="card shadow h-100 car-card">
                                            <img src={process.env.PUBLIC_URL + car.src} className="card-img-top" alt="car" />
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

        );
    }
}

export default MainContent;