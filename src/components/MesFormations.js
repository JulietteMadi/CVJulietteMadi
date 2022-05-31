import { mesXP } from "../datas/MesXP";
import '../styles/MesExpériences.css'
import MediaQuery from 'react-responsive'

function MesFormations () {

    return(
        <div className="sectionOrganisationXP">
            <h2 className="titleXPPro">Mes Formations</h2>
            <MediaQuery minWidth={1080}>
            <div className="xpBoxSection">
                {mesXP.filter (entité => entité.XPType === "Formation").map((list) =>
                
                    <div key = {list.id} className="boxOrganisationDesktop">
                        <div className="entity" onClick={() => window.open(list.url, "_blank")}>                    
                            <h3 className="subtitle">{list.NomEntite}</h3>
                            <p className="year">{list.DatesXP}</p>
                            <p>{list.DescriptionEntite}</p>
                        </div>
                        <div className= "experience">
                            <h3 className="subtitle">{list.TitreXP}</h3>
                            <div>{list.DescriptionXP.map((loop) =>
                                <p><span className="subtitleXP">{loop.titre}</span>{loop.description}</p>
                            )
                            }</div>
                        </div>
                    </div>
                    
                )
                }
                
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={1080}>
            <div className="xpBoxSection">
                {mesXP.filter (entité => entité.XPType === "Formation").map((list) =>
                
                    <div key = {list.id} className="boxOrganisationPhone">
                        <div className="entity">                    
                            <h3 className="subtitle">{list.NomEntite}</h3>
                            <p className="year">{list.DatesXP}</p>
                            <p>{list.DescriptionEntite}</p>
                        </div>
                        <div className= "experience">
                            <h3 className="subtitle">{list.TitreXP}</h3>
                            <div>{list.DescriptionXP.map((loop) =>
                                <p><span className="subtitleXP">{loop.titre}</span>{loop.description}</p>
                            )
                            }</div>
                        </div>
                    </div>
                    
                )
                }
                
            </div>
            </MediaQuery>
            </div> 

    )
}

export default MesFormations