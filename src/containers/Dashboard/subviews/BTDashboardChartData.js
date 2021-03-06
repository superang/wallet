/*
  Copyright 2017~2022 The Bottos Authors
  This file is part of the Bottos Data Exchange Client
  Created by Developers Team of Bottos.

  This program is free software: you can distribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with Bottos. If not, see <http://www.gnu.org/licenses/>.
*/
import React,{PureComponent} from 'react'
import { LineChart, Line,SimpleLineChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend } from 'recharts';


const data = [
    {name: '1-17', data: 2400, amt: 2400},
    {name: '1-18', data: 5798, amt: 2210},
    {name: '1-19', data: 7800, amt: 2290},
    {name: '1-20', data: 3908, amt: 2000},
    {name: '1-21', data: 4400, amt: 2181},
    {name: '1-22', data: 1400, amt: 2500},
    {name: '1-23', data: 8700, amt: 2100},
];


export default class BTDashboardChartData extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <LineChart width={730} height={250} data={data}
                           margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="data" stroke="#8884d8" />
                </LineChart>
            </div>
        )
    }
}