function validate(input) {
    let expresion = /^(?![ .]+$)[a-zA-Z .]*$/gm;
    let errors = {};   
    if (!input.name) {                          
        errors.name = "Name is missing";       
    } else if (expresion.test(input.name) === false) {
        errors.name = "Name invalid";
    }else if (!input.dificulty) {
        errors.dificulty = "dificulty is missing";
    } else if (input.dificulty <= 0) {
        errors.dificulty = "dificulty cannot be negative or zero";
    } else if (input.dificulty <= 0 || input.dificulty >= 6) {
        errors.dificulty = "The range must be between 1 and 5";
    } else if (!input.duration) {
        errors.duration = "duration is missing";
    } else if (input.duration <= 0) {
        errors.duration = "duration cannot be negative or zero";
    } else if (!input.season) {
        errors.season = "season is missing";
    // } else if (input.season !== Otoño  || Primavera || Invierno || Verano ) {
    //     errors.season = "select a season";
    } else if (input.activity?.length === 0) {
        errors.activity = "activity is missing"
    }
    return errors;
};

export default validate