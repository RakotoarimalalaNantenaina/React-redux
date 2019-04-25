import { createStore } from 'redux';
import myApp from './reducers';

let store = createStore(myApp);
function render() {
  ReactDOM.render(
    <div className="container">
      <App store={store}/><hr/>
      <Results store={store}/>
    </div>
  );
}
store.subscribe(render);
render();

const initialState = {
    react: 0
  }
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'VOTE_REACT':
        console.log("Your choice is React!")
        return Object.assign({}, state, {
          react: state.react + 1
        })
     
      default:
        return state
    } 
  }
  
 