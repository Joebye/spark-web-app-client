import SparkJobModel from "../model/SparkJobModel";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type ChartProops = {
    sparkLogs: SparkJobModel[];
}


const Chart: React.FC<ChartProops> = (props) => {

return <ResponsiveContainer width="100%" height={300}>
<AreaChart data={props.sparkLogs} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="jobId" />
    <YAxis />
    <Tooltip />
    <Area type="monotone" dataKey="runTime" stroke="#8884d8" fill="#8884d8" />
  </AreaChart>
</ResponsiveContainer>

 }

export default Chart;