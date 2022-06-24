import { mySkillsList } from "../datas/MySkillsList";
import '../styles/MesSkills.css'
import ScoreScale from "./MesSkills_ScoreScale";
import MediaQuery from 'react-responsive'

function MesSkills () {

    return (
        <div className="sectionSkills">
            <h2 className="titleSkills">Mes Skills</h2>
            <div className="skillsBoxSection">
                {mySkillsList.map((list) =>
                    <div key={list.SkillID} className="underSection">
                         <h3>{list.Type}</h3>
                         <div>{list.SkillsList.map((loop) =>
                            <div key={loop.Name} className="flexSkillRate">
                                <div className="skillName">{loop.Name}</div>
                                <div className="skillRate">
                                    <ScoreScale Score={loop.Score} />
                                </div>
                            </div>                             
                            )}
                         </div>
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default MesSkills
