import React from 'react'

interface IProps {
    people: {
        name: string
        age: number
        img: string
        note?: string
    }[]
}

const List: React.FC<IProps> = ({ people }) => { 
    return (
        <div> 
            <h2>List component</h2>
        </div>
    )
}

export default List;
