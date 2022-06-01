import { mesXP } from "../datas/MesXP";
import '../styles/MesExpériences.css'
import MediaQuery from "react-responsive";

    

function MesExperiencesPro () {
    
    

    return(
        <div className="sectionOrganisationXP">
            <h2 className="titleXPPro">Mes expériences professionnelles</h2>
            <MediaQuery minWidth={920}>
                <div className="xpBoxSection">
                {mesXP.filter (entité => entité.XPType === "Entreprise").map((list) =>
                    <div key = {list.id} className="boxOrganisationDesktop">
                        <div className="entity"  onClick={()=> window.open(list.url, "_blank")}>                    
                            <h3 className="subtitle">{list.NomEntite}</h3>
                            <p className="year">{list.DatesXP}</p>
                            <p>{list.DescriptionEntite}</p>
                        </div>
                        <div className= "experience">
                            <h3 className="subtitle">{list.TitreXP}</h3>
                            <ul>{list.DescriptionXP.map((loop) =>
                                <li><span className="subtitleXP">{loop.titre}</span> : {loop.description}</li>
                            )
                            }</ul>
                        </div>
                    </div>
                   
                )
                }
                </div>
            </MediaQuery>

            <MediaQuery maxWidth={920}>
            <div className="xpBoxSection">
                {mesXP.filter (entité => entité.XPType === "Entreprise").map((list) =>
                    <div key = {list.id} className="boxOrganisationPhone">
                        <div className="entity"  onClick={()=> window.open(list.url, "_blank")}>                    
                            <h3 className="subtitle">{list.NomEntite}</h3>
                            <p className="year">{list.DatesXP}</p>
                            <p>{list.DescriptionEntite}</p>
                        </div>
                        <div className= "experience">
                            <h3 className="subtitle">{list.TitreXP}</h3>
                            <ul>{list.DescriptionXP.map((loop) =>
                                <li><span className="subtitleXP">{loop.titre}</span> : {loop.description}</li>
                            )
                            }</ul>
                        </div>
                    </div>
                   
                )
                }
                
                
            </div>
            </MediaQuery>
        </div>

    )
}

export default MesExperiencesPro