import { createEmployee, getAllEmployees } from './config'

export const CREATE_EMPLOYEE_REQUEST = 'CREATE_EMPLOYEE_REQUEST'
export const CREATE_EMPLOYEE_SUCCESS = 'CREATE_EMPLOYEE_SUCCESS'
export const CREATE_EMPLOYEE_ERROR = 'CREATE_EMPLOYEE_ERROR'

export const GET_EMPLOYEES_REQUEST = 'GET_EMPLOYEES_REQUEST'
export const GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS'
export const GET_EMPLOYEES_ERROR = 'GET_EMPLOYEES_ERROR'

export const RESET = 'RESET'

const actions = {
  getAllEmployees: () => async (dispatch) => {
    dispatch({
      type: GET_EMPLOYEES_REQUEST,
    })
    await getAllEmployees().then((res) => {
      if (res?.status === 200) {
        dispatch({
          type: GET_EMPLOYEES_SUCCESS,
          payload: {
            data: res?.data?.data,
          },
        })
      } else {
        dispatch({
          type: GET_EMPLOYEES_ERROR,
          payload: {
            message: res?.data?.message || 'ERROR',
          },
        })
      }
    })
  },
  createEmployee: (data, setResult) => async (dispatch) => {
    dispatch({
      type: CREATE_EMPLOYEE_REQUEST,
    })
    await createEmployee(data).then((res) => {
      if (res?.status === 200) {
        dispatch({
          type: CREATE_EMPLOYEE_SUCCESS,
          payload: {
            data: res?.data?.data,
          },
        })
        setResult({
          isVisible: true,
          value: {
            name: res?.data?.data?.name,
            department: res?.data?.data?.department,
          },
        })
      } else {
        dispatch({
          type: CREATE_EMPLOYEE_ERROR,
          payload: {
            message: res?.data?.message || 'Error',
          },
        })
      }
    })
  },
  clearMessage: () => (dispatch) => {
    dispatch({
      type: RESET,
    })
  },
}

export default actions
