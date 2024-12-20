import React, { useState } from 'react'
import Resultcad from './Resultcad';

const Setplan = () => {
    let [subject, setSubject] = useState('HTML');
    let [duration, setDuration] = useState(1);
    let [data, setData] = useState(JSON.parse(localStorage.getItem('payload')) || []);
    const showData = (e) => {
        e.preventDefault();
        if(subject == '' || duration == ''){
            alert('All fields are required!');
            return;
        }
        let copyData = [
            ...data,
            { 'subject': subject, 'duration': duration }
        ]
        setData(copyData);
        localStorage.setItem('payload', JSON.stringify(copyData));
        setDuration('');
        setSubject('');
    }

    let multiOperation = (payload, idx) => {
        let copyData = [...data];
        if (payload === 'del') {
            copyData.splice(idx, 1)
        } else if (payload === 'inc') {
            let copyObj = { ...data[idx], duration: Number(data[idx].duration) + 1 };
            copyData.splice(idx, 1, copyObj)
        } else {
            if (Number(data[idx].duration) > 0) {
                let copyObj = { ...data[idx], duration: Number(data[idx].duration) - 1 }
                copyData.splice(idx, 1, copyObj);
            } else {
                alert('The Duration at least 1 hour');
            }
        }
        localStorage.setItem('payload', JSON.stringify(copyData));
        setData(copyData);
    }
    return (
        <div className="container">
            <h1>This is Education planer app</h1>
            <form action="" onSubmit={showData}>
                <label htmlFor="subject">Subject:</label>
                <input
                    type="text"
                    id='subject'
                    name='subject'
                    value={subject}
                    onChange={(e) => {
                        setSubject(e.target.value)
                    }}
                />
                <label htmlFor="duration">Duration:</label>
                <input
                    type="number"
                    name="duration"
                    id="duration"
                    value={duration}
                    onChange={(e) => {
                        setDuration(e.target.value)
                    }}
                />
                <input type="submit" value="Add" />
            </form>
            <div className="result-container">
                <Resultcad data={data} multiOperation={multiOperation} />
            </div>
        </div>
    )
}

export default Setplan