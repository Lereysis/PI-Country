const { Country, Activity } = require("../db")


const getCountryById = async (id) => {
   try {
    const country = await Country.findOne({
      where: {
         id
      },
      include: Activity
    });
    if (country === null) {
        throw new Error("No se encontro")
    } else {
       return country
    }
   }  catch (error) {
    throw new Error(error.message)
   }

}

module.exports = getCountryById ;