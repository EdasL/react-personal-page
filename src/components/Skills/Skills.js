import React from 'react';
import Skill from './Skill/Skill';
import { Container, Row, Col } from 'react-grid-system';

const skills = (props) => {
    let currentSkills = props.allSkills.map((skill, i) =>{
        return{...(
        <Col lg={3} sm={6}> 
            <Skill 
                name={skill.name}
                key={skill.name} 
                index={i}
                clicked={props.clicked}></Skill>
        </Col>
        )}
    });
    return(
            <Container>
                <Row>
                   {currentSkills}
                </Row>
            </Container>
    );
}

export default skills;