
// ##### National Highway Transit Safety Administration
// https://vpic.nhtsa.dot.gov/api/
// 1. How many types of Chevrolet models are registered with the NHTSA?
const answerElement_NHTSA_1 = document.getElementById('nhtsa-1')

function getModelsRegistered(apiRes){
  let apiResJson = apiRes.body.Results
  answerElement_NHTSA_1.innerHTML = apiResJson.length
}

request
  .get('https://vpic.nhtsa.dot.gov/api//vehicles/GetModelsForMake/Chevrolet?format=json')
  .then(getModelsRegistered)

// 2. What are the vehicle types that Nissan has?
const answerElement_NHTSA_2 = document.getElementById('nhtsa-2')

function getVehicleTypes(apiRes){
  let apiResJson = apiRes.body.Results
  apiResJson.forEach((someEl)=>{
    answerElement_NHTSA_2.innerHTML +=
    `
    <div>${someEl.VehicleTypeName}</div>
    `
  })
}

request
  .get('https://vpic.nhtsa.dot.gov/api///vehicles/GetVehicleTypesForMake/Nissan?format=json')
  .then(getVehicleTypes)

// 3. What are the types of models that exist for Toyota trucks in 2017?
const answerElement_NHTSA_3 = document.getElementById('nhtsa-3')

function getTypesOfModels(apiRes){
  let apiResJson = apiRes.body.Results
  
  apiResJson.forEach((someEl)=>{
    answerElement_NHTSA_3.innerHTML +=
    `
    <div>${someEl.Model_Name}</div>
    `
  })
}

request
  .get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/Toyota/modelyear/2017/vehicleType/truck?format=json')
  .then(getTypesOfModels)
