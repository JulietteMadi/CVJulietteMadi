import '../styles/MesProjetsPersoWeb.css'
import { MyProjects } from '../datas/MyProjects'
import MediaQuery, { useMediaQuery } from 'react-responsive'

function MesProjetsPerso () {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1080px)'
      })

    return(
        <div className='sectionProjetsPersoOrganisation'>
            <h2 className='titleProjetsPro'>Mes projets Web personnels</h2>
            <MediaQuery minWidth={920}>
            <div className='persoBoxSectionDesktop'> 
                       {MyProjects.map((list) =>
                            <div className='persoBoxOrganisation'>
                                {list.Picture}
                                <h3 className='projetPersoTitre'>{list.Title}</h3>
                                <div>
                                    {list.Text.map((loop) =>
                                    <div className='descriptionSettings'>
                                        <p className='outilsUtilisés'>Outils utilisés : {loop.Tech}</p>
                                        <p>{loop.Description}</p>
                                    </div>
                                    )}
                                </div>

                            </div>
                       )}
            </div>
                               
            
            </MediaQuery>
            <MediaQuery maxWidth={920}>
            <div className='persoBoxSectionPhone'> 
                       {MyProjects.map((list) =>
                            <div className='persoBoxOrganisation'>
                                {list.Picture}
                                <h3 className='projetPersoTitre'>{list.Title}</h3>
                                <div>
                                    {list.Text.map((loop) =>
                                    <div className='descriptionSettings'>
                                        <p className='outilsUtilisés'>Outils utilisés : {loop.Tech}</p>
                                        <p>{loop.Description}</p>
                                    </div>
                                    )}
                                </div>
                            </div>
                       )}
    
                    
            </div>
            </MediaQuery>
            <div style={{textAlign: "center"}}><button className='buttonProjetsWeb' onClick={() => window.open("https://github.com/JulietteMadi", "_blank")}>Voir mes projets sur Github</button></div>
            
        </div>
    )
} 

export default MesProjetsPerso