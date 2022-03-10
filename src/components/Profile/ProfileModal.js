import React from "react";
import "./Profile.css";
import updateReview from "./Profile"



export default function ProfileModal ({ showmodal, setshowmodal}){
    return (
        <> {showmodal ? (
            <div className="modalbackground">
                <div className="modalwrapper" showmodal={showmodal}>
                    <div className="modalcontent">
                        <h1> </h1>
                    </div>
                    <div className="closeModalButton" aria-label="Close modal" onClick={() => setshowmodal
                    (prev => !prev)} />
                </div>
            </div>
        ) : null}
        </>
    )
}