import React from 'react'
import './Example2.css';

interface Props {
    num: number;
    name: string;
    status: boolean;
}

function Employee ({num, name, status}: Props){
    return (
        <div className='tr'>
        <div className='td'>{num}</div>
        <div className='td'>{name}</div>
        <div className='td' style={{ color: (status == true) ? 'red' : 'blue' }}>●</div>
    </div>
    )
}

const Employee1 = {
    num: 202401,
    name: '홍길동',
    status: true
}

const Employee2 = {
    num: 202402,
    name: '이영희',
    status: false
}

const Employee3 = {
    num: 202403,
    name: '김철수',
    status: false
}


export default function Example2copy() {
    return (
        <div className='table'>
            <div className='th'>
                <div className='td'>사번</div>
                <div className='td'>이름</div>
                <div className='td'>출근상태</div>
            </div>

            <Employee {...Employee1} />
            <Employee {...Employee2} />
            <Employee {...Employee3} />

        </div>
    )
}
