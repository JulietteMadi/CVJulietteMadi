import '../styles/Introduction.css'
import MesInformations from './Introduction_MesInformations'
import MediaQuery from 'react-responsive'

function Introduction () {

    const description = 'J’ai découvert le monde de la tech et du web lors de ma première expérience professionnelle, qui était dans une ESN dédiée à Salesforce. Je m’intéresse depuis de plus en plus à ce domaine, attirée par l’étendue des possibilités qu’il offre. Je cherche aujourd’hui à me former sur le développement web au travers dune alternance, pour être capable de proposer des solutions web complètes et sur-mesure.'

    
    
    return(
        <div className='sectionOrganisationIntroduction'>
                <div className='shadowBoxIntroduction'>
                    <div className='flexStyleShadowBoxIntroduction'>
                        <h3>Qui suis-je ?</h3>
                        <p>{description}</p>
                    </div>
                    <div className='flexStyleShadowBoxIntroduction'>
                        <MesInformations />
                    </div>
                </div>
        </div>
    )
}

export default Introduction
