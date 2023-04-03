import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {

    const marksArray = [
        {
            id: 1,
            name: "Alice",
            math: 85,
            physics: 90,
            chemistry: 92
        },
        {
            id: 2,
            name: "Bob",
            math: 70,
            physics: 80,
            chemistry: 85
        },
        {
            id: 3,
            name: "Charlie",
            math: 95,
            physics: 88,
            chemistry: 90
        },
        {
            id: 4,
            name: "David",
            math: 60,
            physics: 75,
            chemistry: 80
        },
        {
            id: 5,
            name: "Eve",
            math: 90,
            physics: 95,
            chemistry: 98
        },
        {
            id: 6,
            name: "Frank",
            math: 85,
            physics: 70,
            chemistry: 65
        },
        {
            id: 7,
            name: "Grace",
            math: 75,
            physics: 85,
            chemistry: 90
        },
        {
            id: 8,
            name: "Harry",
            math: 65,
            physics: 75,
            chemistry: 80
        },
        {
            id: 9,
            name: "Isaac",
            math: 90,
            physics: 85,
            chemistry: 80
        },
        {
            id: 10,
            name: "Jack",
            math: 80,
            physics: 90,
            chemistry: 95
        },
        {
            id: 11,
            name: "Kate",
            math: 85,
            physics: 90,
            chemistry: 92
        },
        {
            id: 12,
            name: "Liam",
            math: 75,
            physics: 80,
            chemistry: 85
        }
    ];




    return (
        <div>
            <LineChart

                width={1000}
                height={300}
                data={marksArray}


            >
                <Line dataKey="physics"></Line>
                <Line stroke="#8884d8" dataKey="math"></Line>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip></Tooltip>


            </LineChart>
        </div>
    );
};

export default Dashboard;