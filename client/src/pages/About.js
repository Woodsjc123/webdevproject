import React from "react";
import Navbar from "../components/Navbar";
import '../css/about.css'
import Background from '../images/background.jpg'
import Accordion from 'react-bootstrap/Accordion';

const About = () => {
return (
	<div className="about">
		<body>
			<img src={Background}></img>

			<br />
			<Accordion defaultActiveKey="0">
      			<Accordion.Item eventKey="0">
        			<Accordion.Header>Establishment</Accordion.Header>
        			<Accordion.Body>
         				Established in 1992, we've been serving the best sushi in town for over 30 years.
						Today, we aim to match the dedication and mastery of our founder.
        			</Accordion.Body>
      			</Accordion.Item>
      			<Accordion.Item eventKey="1">
        			<Accordion.Header>Our Policies</Accordion.Header>
        			<Accordion.Body>
          				We use only the freshest ingredients, carefully selected and ethically sourced.
						We aim to cater for everyone -- If you have any allergies or dietary requirements,
						do not hesitate to let your server know.
        			</Accordion.Body>
      			</Accordion.Item>
    		</Accordion>
		</body>
	</div>
);
};

export default About;
