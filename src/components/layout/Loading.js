import loading from '../../img/loading.svg'
import stytles from './Loading.module.css'

function Loading() {
    return (
        <div className={stytles.loader_container}>
            <img className={stytles.loader} src={loading} alt="" />
        </div>
    )
}

export default Loading