import React, { Component } from 'react';
import '../styles/Footer.css'

class Formulaire extends Component{
    state = {
        name: null,
        mail: null,
        tel: null
    };

    change = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    submit = e => {
        e.preventDefault();
        console.log(this.state);
    }


    render () {
        return (
            <diV>
                <form onSubmit={this.submit} className = 'formulaire'>
                    <label htmlFor='name' className='textFormulaire'>Nom </label><br></br>
                    <input type="text" id="name" onChange={this.change} className='ansFormulaire'/>
                    <br></br>
                    <label htmlFor='mail' className='textFormulaire'>Mail </label><br></br>
                    <input type="text" id="mail" onChange={this.change} className='ansFormulaire'/>
                    <br></br>
                    <label htmlFor='tel' className='textFormulaire'>Téléphone </label><br></br>
                    <input type="tel" id="tel" onChange={this.change} className='ansFormulaire'/>
                    <br></br>
                    <button className='button'>Envoyer</button>
                </form>
                </diV>
                )
    }
}

export default Formulaire