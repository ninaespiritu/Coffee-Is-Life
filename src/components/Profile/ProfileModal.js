import React from "react";
import updateReview from "./Profile";

const MODAL_STYLES = {
    poistion: "fixed", 
    top: "50%",
    left: "50%",
    transform: "translate(-59%, -50%)",
    backgroundColor: "#FFF",
    padding: "50px",
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: "fixed", 
    top: 0, 
    left: 0, 
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    zIndex: 1000
}

export default function Modal ({ open, onClose, updateReview }){
    if(!open) return null
    return (
        <>
            
            <div style={MODAL_STYLES}> 
                <button onClick={onClose}> Close</button>
                {updateReview}
            </div>
        </>
    )
}