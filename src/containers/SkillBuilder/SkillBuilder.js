import React, { Component } from 'react';
import Person from '../../components/Person/Person';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import styles from './SkillBuilder.css';
import Skills from '../../components/Skills/Skills';
import Aux from '../../hoc/Aux';
import Modal from '../../components/UI/Modal/Modal';
import AboutSkill from '../../components/Skills/AboutSkill/AboutSkill';
import GolangPic from '../../assets/images/golang.png'

class SkillBuilder extends Component{

    state = {
            skills: [
                {
                    name: 'GOLANG',
                    info: 'asdasd',
                },
               {
                    name: 'REACT',
                    info: 'asdasd',
                },
                {
                    name: 'BACKEND',
                    info: 'asdasd',
                },
                {
                    name: 'FRONTEND',
                    info: 'asdasd',
                },
            ],
            modalShow: false,
            currentSkill: '',
            currentInfo:''
        }
    
    clickSkillHandler = (value, key) => {
        let correctSkill = this.state.skills.map((skill) =>{
            if ( skill.name === value) {
                return skill;
            }
        });
        console.log(correctSkill[key].name);
        this.setState({
            modalShow: true,
            currentSkill: correctSkill[key].name,
            currentInfo: correctSkill[key].info
        });
    }

    closeSkillHandler = () => {
        this.setState({
            modalShow: false
        });
    }
    
    render(){
        return(
            <Aux>
                <Modal className={styles.Modal}
                    show={this.state.modalShow} 
                    modalClosed={this.closeSkillHandler}>
                        <AboutSkill 
                        name={this.state.currentSkill} 
                        text={this.state.currentInfo}
                        source={GolangPic}></AboutSkill>
                </Modal>
                <Container className={styles.Contain}>
                    <Jumbotron className={styles.SkillBuilder}>
                        <Person item="Skills"></Person>
                        <Skills allSkills={this.state.skills} clicked={this.clickSkillHandler}></Skills>
                    </Jumbotron>
                </Container>
            </Aux>
        );
    }
}

export default SkillBuilder;