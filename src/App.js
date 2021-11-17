import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import EmplyeeList from './components/EmplyeeList'
import { padding } from '@mui/system';

function App() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setName('')
  };
  const submitForm = () => {
    //send to s3
    setOpen(false)
    setName('')
  }
  return (
    <div>
      <h1>Employee directory app</h1>
      <button onClick={handleOpen}>Add employee</button>
      <EmplyeeList />
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor:'#fff',
          padding:'10px',
          display:'flex',
          flexDirection:'column',

          }}>
         <h1> Add employee</h1>
         <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
         <input type='file' style={{margin:'10px 0px'}}/>
         <div>
            <button onClick={submitForm} style={{width:'40px',margin:'0px 10px 0px 0px'}}>Add</button>
            <button onClick={handleClose} style={{width:'60px'}}>Cancel</button>
         </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
