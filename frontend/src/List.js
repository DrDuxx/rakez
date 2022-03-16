import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import employeeActions from './redux/employeeActions'
import { CircularProgress } from '@mui/material'
import moment from 'moment'

export const List = ({
  getAllEmployees,
  getAllEmployeesData,
  getAllEmployeesLoading,
  getAllEmployeesMessage,
}) => {
  useEffect(() => {
    getAllEmployees()
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
      {getAllEmployeesLoading ? (
        <CircularProgress />
      ) : getAllEmployeesMessage[0] ? (
        <div>{getAllEmployeesMessage[0]}</div>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getAllEmployeesData.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.department}</TableCell>
                  <TableCell>
                    {moment(row.createdAt).format('DD/MM/YYYY HH:mm:ss')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  getAllEmployeesData: state.employee.getAllEmployeesData,
  getAllEmployeesLoading: state.employee.getAllEmployeesLoading,
  getAllEmployeesMessage: state.employee.getAllEmployeesMessage,
})

const mapDispatchToProps = (dispatch) => ({
  getAllEmployees: () => {
    dispatch(employeeActions.getAllEmployees())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
