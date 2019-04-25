import React, { Component } from 'react';
import icons from 'glyphicons';
class AVengers extends Component {
      
    render() {
        
      return (
        <div id="avengers">
        <div className="card">
              <img className="card-img-top" src="images/avengers.jpeg" alt="Card image"/><br/>
            <span>{icons.heart}</span>
            <div className="card-body">
            <h4 className="card-title">Avengers</h4>
            <h5>Titre: Nouveau monde</h5>
            <p className="card-text">Le reducers vous permet de gérer la mise à jour des données. Le reducers et les actions sont complémentaires. Les traitements comme les requêtes sont réalisées dans le fichier
            actions.js et le reducers s’occupent de mettre à jour les données du store (state global).</p>
            </div>
        </div>
        </div>
      );
    }
  }
  
  export default AVengers;