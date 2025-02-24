import React from 'react'
import ServiceCard from "./serviceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const serviceData = [
    {
        imgUrl: weatherImg,
        title: "Calcilate Weather",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ad.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ad.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ad.",
    },
]

const ServiceList = () => {
    return (
        <>
            {serviceData.map((item, index) => (
                <Col lg='3' key={index}>
                    <ServiceCard item={item} />
                </Col>
            ))}
        </>
    );
};

export default ServiceList