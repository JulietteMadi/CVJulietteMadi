import '../styles/Introduction.css'
import MesInformations from './Introduction_MesInformations'
import MediaQuery from 'react-responsive'

function Introduction () {

    const description = 'Après un diplôme d’école de commerce et 4 ans d’expérience en Marketing stratégique (dont 2 en startup), je me décide enfin à me reconvertir dans le web !'

    
    
    return(
        <div className='sectionOrganisationIntroduction'>
        <MediaQuery minWidth={1080}>
            <div className='shadowBoxIntroductionDesktop'>
            <div className='flexStyleShadowBoxIntroduction'>
                <h3>Qui suis-je ?</h3>
                <p>{description}</p>
            </div>
            <div className='flexStyleShadowBoxIntroduction'>
                <MesInformations />
            </div>
        </div>
        </MediaQuery>

        <MediaQuery maxWidth={1080}>
        <div className='shadowBoxintroductionPhone'>
        <div className='flexStyleShadowBoxIntroduction'>
            <h3>Qui suis-je ?</h3>
            <p>{description}</p>
        </div>
        <div className='flexStyleShadowBoxIntroduction'>
            <MesInformations />
        </div>
    </div>
    </MediaQuery>
        </div>
    )
}

export default Introduction
