import React, { useState, useEffect, useRef } from 'react';

//GLOBAL ID
let globalID = 0;

function generateID() {
   globalID++;
}

//TO DO FORM
function ToDoForm(props) {
   const [input, setInput] = useState(props.edit ? props.edit.value : '');

   const inputRef = useRef(null);

   useEffect(() => {
      inputRef.current.focus();
   });

   const handleChange = (e) => {
      setInput(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      generateID();
      props.onSubmit({
         id: globalID,
         text: input,
      });
      setInput('');
   };

   return (
      <form onSubmit={handleSubmit} className='ToDo-form'>
         {props.edit ? (
            <>
               <input
                  placeholder='Update your item'
                  value={input}
                  onChange={handleChange}
                  name='text'
                  ref={inputRef}
                  className='ToDo-input edit'
               />
               <button onClick={handleSubmit} className='ToDo-button edit'>
                  Update
               </button>
            </>
         ) : (
            <>
               <input
                  placeholder='To do...'
                  value={input}
                  onChange={handleChange}
                  name='text'
                  className='ToDo-input'
                  ref={inputRef}
               />
               <button onClick={handleSubmit} className='ToDo-button'>
                  <p className='add-icon'>+</p>
               </button>
            </>
         )}
      </form>
   );
}

export default ToDoForm;
