import React from 'react'
const Resultcad = ({data , multiOperation}) => {
    return (
        <> 
            {
                data.map((ele, idx) => {
                    return (
                        <div key={`id_${idx}`} className="card">
                            <h3 className="subject">{ele.subject}</h3>
                            <div className="right">
                                <h2 className='duration'>{ele.duration}</h2>
                                <button className='del' onClick={()=>{multiOperation('del', idx)}}>x</button>
                                <button className='inc' onClick={()=>{multiOperation('inc', idx)}}>+</button>
                                <button className='dec' onClick={()=>{multiOperation('dec',idx)}}>-</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Resultcad