import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

type MyProps = {
    filters: Array<any>
}
class Sidebar extends React.Component<MyProps> {
    constructor(props: MyProps) {
        super(props);
    }
    render() {
        return (
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
                      this.props.filters.map(company => {
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
        );
    }
}

export default Sidebar