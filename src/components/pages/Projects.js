import { useLocation } from "react-router-dom"

import { useState, useEffect } from "react"
import Message from "../layout/Message"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../project/ProjectCard"

import styles from './Projects.module.css'

function Projects() {

    const [projects, setProject] = useState([])
    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.Message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then(resp =>  resp.json())
        .then((data) => {
            setProject(data)
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projtos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message type="success" msg={message} />}
            <Container>
                {projects.length > 0 &&
                    projects.map((project) => <ProjectCard
                    id={project.id}
                    name={project.name}
                    bugget={project.budget}
                    category={project.category.name}
                    key={project.id}
                    />)}
            </Container>
        </div>
    )
}

export default Projects;