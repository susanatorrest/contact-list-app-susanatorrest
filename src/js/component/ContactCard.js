import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export const ContactCard = (props) => {
  const [state, setState] = useState({
    //initialize state here
  });

  return (
    <li className="list-group-item">
      <div className="row w-100 d-flex justify-content-center">
        <div className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center">
          <img
            src={
              "https://raw.githubusercontent.com/breatheco-de/exercise-contact-list-context/master/src/img/m101.jpg"
            }
            alt="Mike Anamendolla"
            className="rounded-circle mx-auto d-block img-fluid"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-9 text-start text-sm-left d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start w-100">
            <label className="name lead">
              {props.contact && props.contact.full_name}
            </label>
            <div className="d-none d-sm-flex"> {}
              <button className="btn" onClick={() => props.onEdit()}>
                <i className="fas fa-pencil-alt mr-3" />
              </button>
              <button className="btn" onClick={() => props.onDelete()}>
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          </div>
          <div className="d-flex flex-column w-100">
            <div className="d-flex justify-content-start align-items-center">
              <i className="fas fa-map-marker-alt text-muted mr-3 me-3" />
              <span className="text-muted">
                {props.contact && props.contact.address}
              </span>
            </div>
            <div className="d-flex justify-content-start align-items-center">
              <i
                className="fa fa-phone fa-fw text-muted mr-3 me-3"
                data-toggle="tooltip"
                title=""
                data-original-title="(870) 288-4149"
              />
              <span className="text-muted small">
                {props.contact && props.contact.phone}
              </span>
            </div>
            <div className="d-flex justify-content-start align-items-center">
              <i
                className="fa fa-envelope fa-fw text-muted mr-3 me-3"
                data-toggle="tooltip"
                data-original-title=""
                title=""
              />
              <span className="text-muted small text-truncate">
                {props.contact && props.contact.email}
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-2 d-sm-none">
            {}
            <button className="btn" onClick={() => props.onEdit()}>
              <i className="fas fa-pencil-alt mr-3" />
            </button>
            <button className="btn" onClick={() => props.onDelete()}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

ContactCard.propTypes = {
  history: PropTypes.object,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  contact: PropTypes.object,
};

ContactCard.defaultProps = {
  onDelete: null,
  onEdit: null,
  contact: null,
};