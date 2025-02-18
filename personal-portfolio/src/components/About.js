import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CPlusPlusImage from '../pictures/cplusplus.jpg';
import MySQLImage from '../pictures/mysql.jpg';
import MSSQLImage from '../pictures/mssql.jpg';
import JavaImage from '../pictures/java.jpg';
import FlutterImage from '../pictures/flutter.png';
import JavascriptImage from '../pictures/javascript.jpg';
import KotlinImage from '../pictures/kotlin.jpg';

const About = () => { 
    return (
     <Container className="py-4">
       <Row className="justify-content-center">
         <Col xs={12} md={10} lg={8}>
           <Card className="about-card shadow">
             <Card.Body className="p-3 p-md-4">
               <Card.Title className="mb-3 h2 text-center">About Me</Card.Title>
               <Card.Text className="text-justify text-md-start">
                 A computer science student specializing in Mobile and App Development. 
                 I started developing a simple console application with C++ and then databases, 
                 and moved on to different programming languages and frameworks like Java, Flutter, JS, and Kotlin.
               </Card.Text>
               
               <div className="skills-grid mt-4">
                 <img src={CPlusPlusImage} alt="C++" className="skill-icon" />
                 <img src={MySQLImage} alt="MySQL" className="skill-icon" />
                 <img src={MSSQLImage} alt="MSSQL" className="skill-icon" />
                 <img src={JavaImage} alt="Java" className="skill-icon" />
                 <img src={FlutterImage} alt="Flutter" className="skill-icon" />
                 <img src={JavascriptImage} alt="JavaScript" className="skill-icon" />
                 <img src={KotlinImage} alt="Kotlin" className="skill-icon" />
               </div>
             </Card.Body>
           </Card>
         </Col>
       </Row>
     </Container>
    );
 };
 
 export default About;