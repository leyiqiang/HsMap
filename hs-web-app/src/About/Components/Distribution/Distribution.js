import React, {useEffect} from "react";
import "./Distribution.css";
import {gsap} from "gsap";

export const Distribution=()=>{
    useEffect(()=> {
        gsap.from('.distributeTitle', {
            opacity: 0, y: -100, duration: 1, scrollTrigger: {
                trigger: '.distributeTitle',
                start: "top 80%"
            }
        });
        gsap.from('.distributeInnerText', {
            opacity: 0, x: -100, duration: 1, scrollTrigger: {
                trigger: '.distributeInnerText',
                start: "top 80%"
            }
        });
        gsap.from('.tiltEarthImage',{opacity:0,y:100,duration:1,scrollTrigger:{
                trigger:'.tiltEarthImage',
                start: "top 80%"
            }});
        gsap.from('.distributeContent .latitudeImage',{opacity:0,x:400,duration:1,rotation: 180,scrollTrigger:{
                trigger:'.distributeContent .latitudeImage',
                start: "top 80%"
            }});
    });

    return (
        <div>
            <div className={"slidesInnerDiv"}>
                <div className={"title distributeTitle"}>Distribution of Influenza Outbreaks by Latitude Throughout The Year</div>
                <div className={"distributeContent"}>
                    <div className={"distributeText"}>
                        <div className={"distributeInnerText"}>
                            <ul>
                                <li>
                                    Hope-Simpson divided the world into four latitudinal zones
                                    <ul>
                                        <li>North Temperate Zone: Latitudes at more than 30&deg; N</li>
                                        <li>North Tropical Zone: Latitudes from the equator to 30&deg; N</li>
                                        <li>South Tropical Zone: Latitudes from the equator to 30&deg; S</li>
                                        <li>South Tropical Zone: Latitudes at more than 30&deg; S</li>
                                    </ul>
                                </li>
                                <li>For each zone of latitude, he showed the distribution (histogram) of influenza cases by month</li>
                                <li>
                                    He overlayed the “Path of Vertical Solar Radiation”
                                    <ul>
                                        <li>Due to the tilt of the earth’s axis of rotation, the path of vertical solar radiation sweeps from the most northern point (23.5&deg; N) to the most southern point (23.5&deg; S)</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img src={"/images/tiltEarth.png"} className={"tiltEarthImage"}/>
                        </div>
                    </div>
                    <img src={"/images/latitudeCategory.png"} className={"latitudeImage"}/>

                </div>
            </div>
        </div>

    )

}