import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={classes["backdrop"]} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes["modal"]}>
            <div className={classes["content"]}>{props.children}</div>
        </div>
    );
};

// helper constant to set-up react portals
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
    return (
        <>
            {/* Using react portals */}

            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}

            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </>
    );
};

export default Modal;
