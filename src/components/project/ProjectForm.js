import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'



function ProjectForm({ handleSubmit, btnText, projectData }) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch(err => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }
    function handleOnChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
        
    }

    // function handleCategory(e) {
    //     setProject({ ...project,  })
       
    // }

    return (
        <form onSubmit={submit} className={styles.form}>
           <Input 
                type="text" 
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={ handleOnChange }
           />
           <Input 
                type="text" 
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={ handleOnChange }
           />
           <Input 
                type="text" 
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={ handleOnChange }
           />
            <Input type="numb"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
                handleOnChange={ handleOnChange }
                />
                <Select name="category_id" text="Selecione a categoria" options={categories} />
                <SubmitButton text={btnText}
                />
        </form>
    )
}

export default ProjectForm