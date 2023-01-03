import React,{useState,useEffect}from "react";
import { useDispatch,useSelector} from "react-redux"
import {getAllCountries, createActivity} from "../../redux/actions/index"
import style from "./Form.module.css"
import validate from "../../helpers/Validate";

export default function Form () {
    const dispatch = useDispatch();
    const countries = useSelector( state => state.countries);
    useEffect(()=>{
        dispatch(getAllCountries())
    },[dispatch])
    
    const [state, setState] = useState({
        name: '',
        dificulty: '',
        duration: '',
        season: '',
        countries: []
    })
    const [errors, setErrors] = useState({}); 
    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });

        setErrors(validate({                 
            ...state,                        
            [e.target.name] : e.target.value
        }));
    }
    function handleSelect(e) {
            if (state.countries.find(name => name === e.target.value)) {
                return alert("The country is already selected")
            }
            setState({
                ...state,
                countries: [...state.countries, e.target.value]
            });
            setErrors(validate({                 
                ...state,
                countries: [...state.countries, e.target.value]
            }));
    }
    function filtercountries(e) {
        setState({
            ...state,
            countries: state.countries.filter(el => el !== e.target.name)
        });
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (    errors.name !== undefined 
                || errors.dificulty !== undefined 
                || errors.duration !== undefined 
                || errors.season !== undefined 
                || errors.countries !== undefined 
        )  {
            return alert("Sorry, all fields are required");
        } else if (state.name === "" 
            || state.dificulty === "" 
            || state.duration === "" 
            || state.season === ""
            || state.countries?.length === 0
             ) {
                console.log("2")
            return alert("Sorry, all fields are required");
        } else {
  
            
            dispatch(createActivity(state))          
            
            setState({
                name: '',
                dificulty: '',
                duration: '',
                season: '',
                countries: []
            })
            alert("Excellent, your new countries has been created successfully!!")
        }
    }
    return (
        <>  
            <div className={style['parent-box-form']}>
                <div className={style.boxForm}>
                    <form onSubmit={(e)=>handleSubmit(e)}  action="">
                        <div>
                            <label htmlFor="">Name</label>
                            <input 
                                type="text" 
                                name="name"  
                                value={state.name} 
                                onChange={ e => handleChange(e)}
                            />
                            {errors.name && (    
                                <p>{errors.name}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="">Dificulty</label>
                            <input 
                                type="number"  
                                name="dificulty"  
                                value={state.dificulty} 
                                onChange={ e => handleChange(e)}  
                            />
                            {errors.dificulty && (    
                                <p>{errors.dificulty}</p>
                            )}
                        </div>
                        <div>
                        <label htmlFor="">Duration</label>
                            <input 
                                type="number"  
                                name="duration"  
                                value={state.duration}
                                onChange={ e => handleChange(e)}  
                            />
                            {errors.duration && (    
                                <p>{errors.duration}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="">Season</label>
                            <select onChange={ e => handleChange(e)} name="season">
                                <option value="Verano">Verano</option>
                                <option value="Otoño">Otoño</option>
                                <option value="Invierno">invierno</option>
                                <option value="Primavera">Primavera</option>
                            </select>
                            {errors.season && (    
                                <p>{errors.season}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="">Select countries</label>
                            <select onChange={(e)=>handleSelect(e)}>
                                {
                                    countries.map( e => {
                                        return (
                                            <option key={e.name} value={`${e.name}`}>{e.name}</option>
                                        )
                                    })
                                }
                            </select>
                            {errors.countries && (    
                                <p>{errors.countries}</p>
                            )}
                        </div>
                        <div>
                            <input className={style.btnPrimary} type="submit" value="Send"/>
                        </div>
                    </form>
                </div>
                <div className={style.boxcountriesFather}>
                    <h3>Countries</h3>
                    <div className={style.boxcountries}>
                        {
                            state.countries?.map( (e) => {
                                return (
                                    
                                    <div key={e}>
                                        <div  className={style.countries}>
                                            <li>{e}</li>
                                            <button name={`${e}`} onClick={(e)=>{filtercountries(e)}}>X</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}