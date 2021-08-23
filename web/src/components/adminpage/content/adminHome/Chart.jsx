import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({ data, title, dataKey, grid }) {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray={grid} />
                    <XAxis dataKey={dataKey} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Doanh thu" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Số giao dịch" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
