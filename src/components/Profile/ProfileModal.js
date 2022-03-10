import React from "react";
import "./Profile.css";



export default function ProfileModal ({ showmodal, setshowmodal, updateReview }){
    return (
        <> {showmodal ? (
            <div className="modalbackground">
                <div className="modalwrapper" showmodal={showmodal}>
                    <div className="modalcontent">
                        <table>
                            <thead>
                            <tr>
                                <td> text </td>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                {updateReview.map(user => 
                                    <td>{user.user.text}</td>
                                    )}
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                    <div className="closeModalButton" aria-label="Close modal" onClick={() => setshowmodal
                    (prev => !prev)} />
                </div>
            </div>
        ) : null}
        </>
    )
}