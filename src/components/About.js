import React from 'react'
// import { useState } from 'react';

export default function About(props) {

    // const [myStyle, setStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })

    const bgColor = {
        "#002D62": "#000000",
        "#8B0000": "#FFA500",
        "#FF4500": "#dc3545",
        "#4B5320": "#198754"
    }

    // const [dmbText, setDmbText] = useState("Enable light Mode");
    // const [mode, setMode] = useState("light");
    // const[btnn, setBtnn] = useState("btn btn-primary my-3");

    // const changeMode = () => {
    //     if (mode==="light"){
    //         setStyle({color: "white", backgroundColor: "black"})
    //         setDmbText("Enable light Mode");
    //         setMode("light");
    //         setBtnn("btn btn-light my-3")
    //     }else{
    //         setStyle({color: "black", backgroundColor: "white"})
    //         setDmbText("Enable light Mode");
    //         setMode("light");
    //         setBtnn("btn btn-primary my-3");
    //     }
    // }



    // const changeMode = () => {
    //     if (props.mode==="light"){
    //         setStyle({color: "black",backgroundColor: "white"});
    //     }else{
    //         setStyle({color: "white",backgroundColor: "black"});
    //     }
    //     return myStyle;
    // }
// style={props.mode==="light"?{color: "black",backgroundColor: "white"}:{color: "white",backgroundColor: "black"}}
    return (
        <div className="container" style={props.mode==="light"?{color: "black",backgroundColor: "white"}:{color: "white",backgroundColor: bgColor[props.bg]}}>
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button style={props.mode==="light"?{color: "black",backgroundColor: "white"}:{color: "white",backgroundColor: bgColor[props.bg]}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={props.mode==="light"?{color: "black",backgroundColor: "white"}:{color: "white",backgroundColor: bgColor[props.bg]}}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button style={props.mode==="light"?{color: "black",backgroundColor: "white"}:{color: "white",backgroundColor: bgColor[props.bg]}}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={props.mode==="light"?{color: "black",backgroundColor: "white"}:{color: "white",backgroundColor: bgColor[props.bg]}} >
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button style={props.mode==="light"?{color: "black",backgroundColor: "white"}:{color: "white",backgroundColor: bgColor[props.bg]}}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={props.mode==="light"?{color: "black",backgroundColor: "white"}:{color: "white",backgroundColor: bgColor[props.bg]}} >
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div><br/>
            {/* <button className={btnn} onClick={changeMode}>{dmbText}</button> */}
        </div>
    )
}
