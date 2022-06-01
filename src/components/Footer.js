import '../styles/Footer.css'
import { listContact } from '../datas/ListeContact'
import MediaQuery from 'react-responsive'

function Footer () {

return(
    <div className='footer'>
        <MediaQuery minWidth={920}>
        <div className='footerTextDesktop'>
        <h2 className='titre'>contactez-moi !</h2>
            {listContact.map ((list) =>
                <div key={list.id} className='flexFooter'>
                    <div className='flexItemFooter'> {list.item} </div>
                    <div className='flexInfoFooter'>{list.info} </div>
                </div>
                )}
        </div>
        </MediaQuery>
        <MediaQuery maxWidth={920}>
        <div className='footerTextPhone'>
        <h2 className='titre'>contactez-moi !</h2>
            {listContact.map ((list) =>
                <div key={list.id} className='flexFooter'>
                    <div className='flexItemFooter'> {list.item} </div>
                    <div className='flexInfoFooter'>{list.info} </div>
                </div>
                )}
        </div>
        </MediaQuery>
    </div>
)

}

export default Footer