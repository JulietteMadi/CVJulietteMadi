import '../styles/Footer.css'
import { listContact } from '../datas/ListeContact'
import MediaQuery from 'react-responsive'

function Footer () {

return(
    <div className='footer'>
        <div className='footerText'>
        <h2 className='titre'>contactez-moi !</h2>
            {listContact.map ((list) =>
                <div key={list.id} className='flexFooter'>
                    <div className='flexItemFooter'> {list.item} </div>
                    <div className='flexInfoFooter'>{list.info} </div>
                </div>
                )}
        </div>
    </div>
)

}

export default Footer