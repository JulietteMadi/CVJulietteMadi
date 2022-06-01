export const MyProjects = [
    {
        Title: 'Pokedex - Projet en cours',
        Picture: <img src='https://le-trois-de-coeur.com/wp-content/uploads/2022/05/Capture-decran-2022-05-13-000111.png' className='imageSettings' onClick={()=> window.open('https://github.com/JulietteMadi/pokedex', '-blank')}></img>,
        Text: [
            {
                Tech: '<ReactJS /> <Typescript /> <Github />',
                Description: 'Afin de confirmer mes compétences acquises en ReactJS, j’ai créé un Pokedex grâce à la ressource PokéAPI. Mes pull requests étaient soumises à validation auprès d’un coach, le projet disponible sur mon GitHub',
            }
        ],
        ID: '5mppx'
    },
    {
        Title: 'Inclubox - Projet en cours',
        Picture: <img src='https://le-trois-de-coeur.com/wp-content/uploads/2022/05/PicsInclubox.png' className='imageSettings' onClick={() => window.open('https://inclubox.fr/', '_blank')}></img>,
        Text: [
            {
                Tech: '<WordPress /> <GoogleAds /> <Google Trends />',
                Description: 'Dans le cadre de mon bénévolat au sein de l’association Tous tes possibles (pour l’inclusion dans le monde de l’entreprise), j’ai conseillé les équipes techniques lors de la création du site Inclubox, afin d’optimiser son UX et sa stratégie SEO',
            }
        ],
        ID: '5mpix'
    },
    {
        Title: 'Le Trois de Coeur',
        Picture: <img src='https://le-trois-de-coeur.com/wp-content/uploads/2022/05/Pics3deCoeur.png' className='imageSettings' onClick={()=> window.open("https://le-trois-de-coeur.com/", '_blank')} ></img>,
        Text: [
            {
                Tech: '<WordPress /> <OVH /> <Google Analytics /> <SEMRush />',
                Description: 'Lors d’un projet entrepreneurial, conception from scratch du site web : maquettage, création, administration et référencement SEO du site web Wordpress.',
            }
        ],
        ID: '5mplr'
    }



]