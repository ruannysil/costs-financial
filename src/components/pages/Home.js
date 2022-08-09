import styles from './Home.module.css'
import handy from '../../img/handy-finance.gif'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
    <section className={styles.home_container}>
        <h1>
            Bem-Vindo ao <span>Costs</span>
        </h1>
        <p>Comece a gerenciar os seus projetos agora mesmo!</p>
        <LinkButton to="/newproject" text="Criar projeto" />
        <img src={handy} alt="Cost" />
    </section>
 )
}

export default Home