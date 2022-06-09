import React from "react";
import SuccessIcon from "../images/Success.svg";
import ErrorIcon from "../images/Oops.svg";

function InfoTooltip({ isOpen, onClose, status }) {
  return (
    <div className={`modal ${isOpen && "modal_is-open"}`}>
      <div className="modal__body">
        <div className="form">
          <button
            type="button"
            className="modal__close-button button"
            onClick={onClose}
          ></button>
          {status === "success" ? (
            <div>
              <img className="modal__icon" src={SuccessIcon} alt="" />
              <p className="modal__status-message">
                Success! You have been registered.
              </p>
            </div>
          ) : (
            <div>
              <img className="modal__icon" src={ErrorIcon} alt="" />
              <p className="modal__status-message">
                Oops, something went wrong! Please try again.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
