import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import patientService from './patientService'

const initialState = {
    patients: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  }
  
  // Create new goal
  export const createPatient =(
    async (patientData) => {
      try {
        return await patientService.createPatient(goalData)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
      }
    }
  )
  
  // Get user goals
  export const getPatients = createAsyncThunk(
    'http://localhost:8500/api/patients',
    async () => {
      try {
        return await patientService.getPatients()
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
      }
    }
  )
  