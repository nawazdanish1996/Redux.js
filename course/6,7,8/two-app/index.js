const redux =  require('redux');
const createStore = redux.createStore;

const CAKE_ORDERED = 'CAKE_ORDERED';

function orderCake(){
    return{
        type: CAKE_ORDERED,
        quantity: 1,
    }
}


// reduccers
// (previousState, action) => newState;
const initialState ={
    numOfCake: 10,
    // anotherProperty: 0
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCake: state.numOfCake - 1,
            }
            // break;
        default:
            return state
            // break;
    }
}


// Redux store
const store = createStore(reducer);
console.log('initialState', store.getState());
const unsubscribe = store.subscribe(()=> console.log('pdate store', store.getState()))
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();
