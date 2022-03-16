import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
  const navigate = useNavigate()
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#e9f6fc',
        height: '100vh',
      }}
    >
      <div className="error" style={{ color: '#0e3b5c' }}>
        Ooops!
      </div>
      <div style={{ color: '#0e3b5c', marginBottom: 20 }}>
        404 Error Not Found
      </div>
      <div
        style={{
          width: 300,
          margin: '10px 0',
          padding: '16px 0',
          background:
            'radial-gradient(circle, rgba(85,191,230,1) 0%, rgba(36,178,179,1) 225%)',
          color: '#0e3b5c',
          textAlign: 'center',
          borderRadius: 4,
          cursor: 'pointer',
        }}
        onClick={() => navigate('/')}
      >
        Go Home
      </div>
    </div>
  )
}

export default Error
