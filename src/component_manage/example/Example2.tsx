import React from 'react'
import './Example2.css';

// 2개의 컴포넌트로 만드는 방법-----------------------------------------------------------------
function TableHeader () {

    return (
    <div className='th'>
        <div className='td'>사번</div>
        <div className='td'>이름</div>
        <div className='td'>출근상태</div>
    </div>
    );
}

interface TableRowProps {
    employeeNumber: string;
    employeeName: string;
    workState: boolean;
}

function TableRow ({ employeeNumber, employeeName, workState }: TableRowProps) {

    const color = workState ? 'blue' : 'red';

    return(
        <div className='tr'>
        <div className='td'>{employeeNumber}</div>
        <div className='td'>{employeeName}</div>
        <div className='td' style={{ color }}>●</div> {/* 속성명과 변수명이 같으면 생략 가능 */}
    </div>
    );
}
// --------------------------------------------------------------------------------------------

// 1개의 컴포넌트로 만드는 방법
interface TableDateTrProps {
    type: 'tr';
    employeeNumber: string;
    employeeName: string;
    workState: boolean;
}

interface TableDateThProps {
    type: 'th';
}

function TableData(props: TableDateTrProps | TableDateThProps) {

    const { type } = props;
    if (type === 'th') {
        return (
            <div className='th'>
                <div className='td'>사번</div>
                <div className='td'>이름</div>
                <div className='td'>출근상태</div>
            </div>
        )
    }

    const { employeeNumber, employeeName, workState } = props;
    const color = workState ? 'blue' : 'red';
    return (

        <div className='tr'>
            <div className='td'>{employeeNumber}</div>
            <div className='td'>{employeeName}</div>
            <div className='td' style={{ color }}>●</div>
        </div>
    );
}
// --------------------------------------------------------------------------------------------

export default function Example2() {

    const Employee1 = {
        employeeNumber: '202401',
        employeeName: '홍길동',
        workState: false
    }

    const Employee2 = {
        employeeNumber: '202402',
        employeeName: '이영희',
        workState: true
    }

    const Employee3 = {
        employeeNumber: '202403',
        employeeName: '김철수',
        workState: true
    }

    return (
        <div className='table'>
            
            {/* 컴포넌트가 2개인 경우
            <TableHeader />
            <TableRow {...Employee1} />
            <TableRow {...Employee2} />
            <TableRow {...Employee3} /> */}

            {/* 컴포넌트가 1개인 경우 
            <TableData type='th' />
            <TableData type='tr' {...Employee1}/>
            <TableData type='tr' {...Employee2}/>
            <TableData type='tr' {...Employee3}/> */}

            {/* <TableHeader />
            <TableRow {...Employees[0]} />
            <TableRow {...Employees[1]} />
            <TableRow {...Employees[2]} /> */}

            <TableHeader />
            {Employees.map((employee, index) => <TableRow key={index} {...employee} />)}
        </div>
    )
}

const Employees = [
    {
        employeeNumber: '202401',
        employeeName: '홍길동',
        workState: false
    },
    {
        employeeNumber: '202402',
        employeeName: '이영희',
        workState: true
    },
    {
        employeeNumber: '202403',
        employeeName: '김철수',
        workState: true
    }
];
