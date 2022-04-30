import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import './District.css'


function District({ districts }) {
    
    return (
        <Row >
            <h2 style={{ marginTop: '100px' }}>Districts</h2>
            {
                districts.map((d, key) => {
                    return <div key={key} className="col-sm mt-4">
                        <div className="card cdt">
                            <img src={`http://localhost:8000/img/${d.imageDistrict}`} alt='aaaa' />
                            <div className="card-body">
                                <h5 className="card-title">{d.name}</h5>
                            </div>
                        </div>
                    </div>
                })
            }





        </Row>

    );
}

export default District;
