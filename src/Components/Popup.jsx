// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';

// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal className='w-[375px] h-[319px] ml-[30%] mt-[10%]' show={show} onHide={handleClose}>
//         <Modal.Header className='bg-gray-300 h-12 text-[10px] w-full' closeButton>
//           <Modal.Title className='text-sm '>Choose your Location</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                 <h6 className='text-[13px]'>Select a delivery location to see product availability and delivery options</h6>
               
//                  <button className='bg-[#f0c14b] text-[13px] mt-1 w-[294px] pr-[6px] pl-[6px] h-[31px] rounded shadow-xl'>sign in to see your address</button>
//               <Form.Label>enter pincode</Form.Label>
//                <div className='flex'>
//               <Form.Control
//               className='h-6 w-[90%]'
//               type="email"
              
//               autoFocus
//               />
//               <button className='w-12 bg-transparent shadow-xl p-2 -mt-2 rounded-sm'>Apply</button>
//               </div>
//               <p className='text-[15px] p-3 text-center bg-gray-400 h-4 pt-2 rounded'>Deliver Outside India</p>
//             </Form.Group>
           
//           </Form>
//         </Modal.Body>
       
//       </Modal>
//     </>
//   );
// }


// export default Example