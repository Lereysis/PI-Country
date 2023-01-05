const {Country, Activity} = require("../db")

const createActivity = async (data)=>{
    try {
        const {name, dificulty, duration,season, countries} = data

        const activity = await Activity.findOne({ where: { name } });

        let createdActivity = null

        if (!(activity instanceof Activity)) {
            createdActivity = await Activity.create({
                 name,
                 dificulty,
                 duration,
                 season
              });
        } 
        
         
         let foundCountry = countries.map(async element => {

            return await Country.findOne({
                where:{
                    name:element
                }
            })
         });

         foundCountry.forEach(async element => {
            if(activity instanceof Activity){
                activity.addCountries(await element);
            } else {
                createdActivity.addCountries(await element);
            }
         });

         return createdActivity
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = createActivity; 