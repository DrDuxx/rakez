import {
  CREATE_EMPLOYEE_REQUEST,
  CREATE_EMPLOYEE_SUCCESS,
  CREATE_EMPLOYEE_ERROR,
  GET_EMPLOYEES_REQUEST,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_ERROR,
  RESET,
} from './employeeActions'

const initialState = {
  createEmployeeData: {},
  createEmployeeLoading: false,
  createEmployeeMessage: ['', ''],

  getAllEmployeesData: [],
  getAllEmployeesLoading: false,
  getAllEmployeesMessage: ['', ''],
}

function employee(state = initialState, action) {
  switch (action.type) {
    case CREATE_EMPLOYEE_REQUEST:
      return Object.assign({}, state, {
        createEmployeeData: [],
        createEmployeeLoading: true,
        createEmployeeMessage: ['', ''],
      })
    case CREATE_EMPLOYEE_SUCCESS:
      return Object.assign({}, state, {
        createEmployeeData: action.payload.data,
        createEmployeeLoading: false,
        createEmployeeMessage: ['', ''],
      })
    case CREATE_EMPLOYEE_ERROR:
      return Object.assign({}, state, {
        createEmployeeData: [],
        createEmployeeLoading: false,
        createEmployeeMessage: [action.payload.message, ''],
      })

    case GET_EMPLOYEES_REQUEST:
      return Object.assign({}, state, {
        getAllEmployeesData: [],
        getAllEmployeesLoading: true,
        getAllEmployeesMessage: ['', ''],
      })
    case GET_EMPLOYEES_SUCCESS:
      return Object.assign({}, state, {
        getAllEmployeesData: action.payload.data,
        getAllEmployeesLoading: false,
        getAllEmployeesMessage: ['', ''],
      })
    case GET_EMPLOYEES_ERROR:
      return Object.assign({}, state, {
        getAllEmployeesData: [],
        getAllEmployeesLoading: false,
        getAllEmployeesMessage: [action.payload.message, ''],
      })

    case RESET:
      return initialState

    default:
      return state
  }
}

export default employee
