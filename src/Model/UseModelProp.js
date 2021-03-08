import {useState,useEffect} from 'react';

/**
 * Creates a react state variable from a model's property.
 * @param {object} model The owner of the property. 
 * @param {any} prop The property to observe. 
 * @returns {any} The react state variable.
 */
function useModelProp(model, prop){
    const [propValue, setPropValue]= useState(model[prop]);
    
    useEffect(function(){ 
        return model.addObserver(()=>setPropValue(model[prop]));
    }, [model, prop]);
    
    return propValue;
}

export default useModelProp;