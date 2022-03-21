import './App.css'
import RakezLogo from './assets/img/RAKEZ Logo - Arabic - Standard (Web) Large.png'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import employeeActions from './redux/employeeActions'
import { Alert, CircularProgress } from '@mui/material'

const InputField = styled(TextField)({
  '& .MuiOutlinedInput-input': {
    color: '#0e3b5c',
  },
  '& label.Mui-focused': {
    color: '#55bfe6',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#55bfe655',
    },
    '&:hover fieldset': {
      borderColor: '#55bfe655',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#55bfe6',
      fontWeight: 'bold',
    },
  },
})

function Home({ createEmployee, loading, message, clear }) {
  const [values, setValues] = useState({ name: '', department: '' })
  const [result, setResult] = useState({
    isVisible: false,
    value: { name: '', department: '' },
  })
  useEffect(() => {
    clear()
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#e9f6fc',
        height: '100vh',
      }}
    >
      <div style={{ maxWidth: '130px', margin: '80px 0' }}>
        <img src={RakezLogo} alt="" width={'100%'} />
      </div>
      {!result.isVisible ? (
        <>
          {message[0] && <Alert severity="error">{message[0]}</Alert>}
          <div
            style={{
              margin: '10px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              maxWidth: 300,
              width: '100%',
            }}
          >
            <div style={{ width: '100%' }}>
              <InputField
                fullWidth
                label="Full Name"
                variant="outlined"
                onChange={(e) => {
                  setValues({ ...values, name: e.target.value })
                }}
                value={values.name}
              />
            </div>
          </div>
          <div
            style={{
              margin: '10px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              maxWidth: 300,
              width: '100%',
            }}
          >
            <div style={{ width: '100%' }}>
              <InputField
                fullWidth
                label="Department"
                variant="outlined"
                onChange={(e) => {
                  setValues({ ...values, department: e.target.value })
                }}
                value={values.department}
              />
            </div>
          </div>
          <div
            style={{
              width: '100%',
              maxWidth: 300,
              margin: '10px 0',
              padding: '16px 0',
              background:
                !(values.name && values.department) || loading
                  ? 'grey'
                  : 'radial-gradient(circle, rgba(85,191,230,1) 0%, rgba(36,178,179,1) 225%)',
              color: !(values.name && values.department) ? 'white' : '#0e3b5c',
              textAlign: 'center',
              borderRadius: 4,
              cursor: 'pointer',
            }}
            onClick={() => {
              if (!values.name || !values.department || loading) {
                return
              }
              createEmployee(values, setResult)
            }}
          >
            {loading ? <CircularProgress size={16} /> : 'Submit'}
          </div>
        </>
      ) : (
        <>
          <div className="successful">Succesfully added</div>
          <div
            style={{
              display: 'flex',
              marginTop: 40,
              columnGap: 40,
            }}
          >
            <div>
              <div style={{ marginBottom: 10 }}>full name</div>
              <div className="successul-value">{result.value.name}</div>
            </div>
            <div
              style={{ height: '100%', backgroundColor: '#24b2b3', width: 2 }}
            ></div>
            <div>
              <div style={{ marginBottom: 10 }}>department</div>
              <div className="successul-value">{result.value.department}</div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.employee.createEmployeeLoading,
  message: state.employee.createEmployeeMessage,
})

const mapDispatchToProps = (dispatch) => ({
  createEmployee: (data, setResult) => {
    dispatch(employeeActions.createEmployee(data, setResult))
  },
  clear: () => {
    dispatch(employeeActions.clearMessage())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
