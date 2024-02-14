import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export const Modal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div
      className="modal"
      tabIndex="-1"
      role="dialog"
      style={{ display: show ? "inline-block" : "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Are you sure?</h5>
            {onClose ? (
              <button
                onClick={() => onClose()}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="modal-body">
            <p>If you delete this thing the entire universe will go down!</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Oh no!
            </button>

            <button
              onClick={onConfirm}
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal">
              Do it!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
  history: PropTypes.object,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  show: PropTypes.bool
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
  show: false
};
