import axios from "axios"
const API_URL = '/api/patients/'

// Create new patient
export const  createPatient = async (patientData) => {
    const config = {
    } 
    const response = await axios.post(API_URL, patientData, config)  
    return response.data
  }

  // Get user goals
export  const  getPatients = async () => {
    const config = {
        ime:String,
        prezime:String,
        email:String,
        broj_sustava:Number,
        oib:Number,

    }
  
    const response = await axios.get(API_URL, config)
  
    return response.data
  }

  