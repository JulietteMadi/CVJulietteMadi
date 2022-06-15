import '../styles/MesProjetsPersoWeb.css'
import { MyProjects } from '../datas/MyProjects'
import MediaQuery, { useMediaQuery } from 'react-responsive'
import { useState } from 'react'

function MesProjetsPerso () {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1080px)'
      })
      const [count, setCount] = useState(0);

    return(
        <div className='sectionProjetsPersoOrganisation'>
            <h2 className='titleProjetsPro'>Mes projets Web personnels</h2>
            <MediaQuery minWidth={920}>
            <div className='persoBoxSectionDesktop'> 
                       {MyProjects.map((list) =>
                            <div className='persoBoxOrganisation'>
                                {list.Picture}
                                <h3 className='projetPersoTitre' onClick={() => {window.open(list.Website, "_blank"); setCount(count+1)}}>{list.Title}</h3>
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
                                <h3 className='projetPersoTitre' onClick={() => {window.open(list.Website, "_blank"); setCount(count+1)}}>{list.Title}</h3>
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
            <div style={{textAlign: "center", marginTop: "8%"}}>
                {count == 0 ? 
                    <div className='titleButtonProjetsWeb'> Vous n'avez pas encore vu mes projets 😔 Cliquez sur les titres pour accéder aux sites web !</div>: 
                    <div>
                        <div className='titleButtonProjetsWeb'>Vous avez vu mes projets {count} fois 🥳 Allez voir mon GitHub pour en savoir plus !</div>
                        <button className='buttonProjetsWeb' onClick={() => window.open("https://github.com/JulietteMadi", "_blank")}>Voir mes projets sur Github</button>
                    </div>}
            </div>
        </div>
    )
} 

export default MesProjetsPerso