import '../styles/Introduction.css'
import {myInformations} from '../datas/MyInformations'

function MesInformations () {

    return (
        <div>
            <h3>Introduction</h3>
            <div>
                {myInformations.map ((list) =>
                <div key={list.item} className='flexMesInformations'>
                    <div className='typeStyle'> {list.item} </div>
                    <div className='infoStyle'>{list.info} </div>
                </div>
                )}
            </div>
                
        </div>
    )
}

export default MesInformations