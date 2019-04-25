import React, { Component } from 'react';
import Arnold from './../components/arnold';
import Avengers from './../components/avengers';
import Rambo from './../components/rambo';
import Venum from './../components/venum';
import Capitain from './../components/capitain';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class List extends Component {
  
  
        state = [{
          titre: ['Arnold','Avengers','RAMBO 4','Venum','Capitain America','Avengers'],
          image: ['images/arnold.jpeg','images/avengers.jpeg','images/rambo.jpeg','images/venum.jpeg','images/avengers.jpeg']
        }]

        onchange = e =>{
          this.setState({titre: e.target.value})
        }
        result = () => {
          const {titre} = this.state;

          if(titre !== "" && titre.toLowerCase().indexOf(titre.toLowerCase() === -1)){
            return null
          }
        }
 
    render() {
      
        return (
          
          <div className="App">
                
          <input id="rechercher" className="form-control"  type="text" placeholder="Recherche"  onChange={this.onchange}/>
              
            <div className="card" onClick={()=>{
              confirmAlert({
                customUI: ({ onClose }) => {
                  return (
                    <div className='custom-ui'>
                      <Arnold/>
                    </div>
                  );
                }
              });

            }
              }>
                <img className="card-img-top" src="images/arnold.jpeg" alt="Card image"/><br/>
                   
                <div className="card-body">
                  <h4 className="card-title">{this.state.map(item =>{return (item.titre[0])})}</h4>
                </div>
            </div>
           
            <div className="card" onClick={()=>{
              confirmAlert({
                customUI: ({ onClose }) => {
                  return (
                    <div className='custom-ui'>
                      <Avengers/>
                    </div>
                  );
                }
              });
            }} id="total">
                <img className="card-img-top" src="images/avengers.jpeg" alt="Card image"/><br/>
               
                <div className="card-body">
                  <h4 className="card-title">{this.state.map(item =>{return (item.titre[1])})}</h4>
                </div>
            </div>
          
            <div className="card" onClick={()=>{
             confirmAlert({
              customUI: ({ onClose }) => {
                return (
                  <div className='custom-ui'>
                    <Rambo/>
                  </div>
                );
              }
            });
            }} >
                <img className="card-img-top" src="images/rambo.jpeg" alt="Card image"/><br/>
               
                <div className="card-body">
                  <h4 className="card-title">{this.state.map(item =>{return (item.titre[2])})}</h4>
                  
                </div>
            </div>
            <div className="card" onClick={()=>{
             confirmAlert({
              customUI: ({ onClose }) => {
                return (
                  <div className='custom-ui'>
                    <Venum/>
                  </div>
                );
              }
            });
            }} >
                <img className="card-img-top" src="images/venum.jpeg" alt="Card image"/><br/>
               
                <div className="card-body">
                  <h4 className="card-title">{this.state.map(item =>{return (item.titre[3])})}</h4>
                </div>
            </div>
            <div className="card" onClick={()=>{
             confirmAlert({
              customUI: ({ onClose }) => {
                return (
                  <div className='custom-ui'>
                    <Capitain/>
                  </div>
                );
              }
            });
            }}>
                <img className="card-img-top" src="images/capitain.jpeg" alt="Card image"/><br/>
               
                <div className="card-body">
                  <h4 className="card-title">{this.state.map(item =>{return (item.titre[4])})}</h4>
                </div>
            </div>
            <div className="card"
             >
                <img className="card-img-top" src="images/avengers.jpeg" alt="Card image"/><br/>
               
                <div className="card-body" 
                onClick={()=>{
                  confirmAlert({
                   customUI: ({ onClose }) => {
                     return (
                       <div className='custom-ui'>
                         <Avengers/>
                       </div>
                     );
                   }
                 });
                 }}>
                  <h4 className="card-title">{this.state.map(item =>{return (item.titre[1])})}</h4>
                </div>
            </div>
          </div>
        
        );
      }
}
export default List;