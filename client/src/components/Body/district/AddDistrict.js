import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import './AddDistrict.css'
import axios from 'axios';

function AddDistrict() {
    const [name,setName] = useState('')
    const [imageDistrict,setImageDistrict] = useState('')
    
  const imageUpload=(e)=>{
    console.log(e.target.files[0]);
    setImageDistrict(e.target.files[0])
  } 
    

    const changeOnclick = (e)=>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('imageDistrict',imageDistrict,imageDistrict.name)
        formData.append('name',name)

        axios.post("http://localhost:8000/admin/addDistrict",formData)
            .then(res => console.log(res.data))
            .catch(err=>{
                console.log(err);
            })
    }

    return (
        <div className='addDistrict'>
            <h2>Add district</h2>
        <form method="post" onSubmit={changeOnclick} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="dname" className="form-label">District Name</label>
          <input type="text" value={name} className="form-control" id="dname" onChange={e => setName(e.target.value)}/>
        </div>
        
        <div className="mb-3">
          <label htmlFor="dimg" className="form-label">Image</label>
          <input type="file" onChange={imageUpload}  name="imageDistrict" id='dimg' className="form-control-file"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    );
}

export default AddDistrict;
