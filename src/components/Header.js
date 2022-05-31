import '../styles/Header.css'

function Header() {
    const title = 'Juliette Madinier'
    const subtitle = 'Alternance développeuse Web'
    const description = 'Reconversion professionnelle, rythme 1 jour / 4 jours'
    
    
    return(
    <div className = 'sectionOrganisationHeader'>
        <div className='informationZone'>
            <img className='roundPortait' src='https://le-trois-de-coeur.com/wp-content/uploads/2019/09/JU-carré.jpg' />
            <h1>{title}</h1>
            <h2 className='headerSubtitle'>{subtitle}</h2>
            <h2 className='headerDescription'>{description}</h2>
            <div className='headerAlignButton'>
                <button className='headerButton' onClick={()=> window.open("mailto:juliette.madinier@gmail.com", "_blank")}>Me contacter</button>
                <button className='headerButton' onClick={()=> window.open("https://www.linkedin.com/in/juliettemadinier/", "_blank")}>Mon LinkedIn</button>
        </div>
        </div>
    </div>
    )
}

export default Header