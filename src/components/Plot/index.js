import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Scatter,
} from 'recharts'

import './index.css'

const Plot = props => {
  const {data} = props
  return (
    <div className="bg-container">
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{top: 20, right: 20, left: 20, bottom: 20}}
      >
        <CartesianGrid />
        <XAxis
          type="number"
          dataKey="x"
          name="x"
          unit="units"
          domain={[0, 10]}
        />
        <YAxis
          type="number"
          dataKey="y"
          name="y"
          unit="units"
          domain={[0, 10]}
        />
        <Tooltip />
        <Line type="monotone" dataKey="y" stroke="#8884d8" />
        <Scatter data={data} fill="#8884d8" />
      </LineChart>
    </div>
  )
}

export default Plot
