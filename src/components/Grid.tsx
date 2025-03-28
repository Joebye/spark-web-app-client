import { TableHead, TableRow, TableCell, TableBody, Table } from "@mui/material";
import SparkJobModel from "../model/SparkJobModel";

type GridProps = {
    sparkLogs: SparkJobModel[];
}

const Grid: React.FC<GridProps> = (props) => {

return <Table>
<TableHead>
  <TableRow>
    <TableCell>Job ID</TableCell>
    <TableCell>Run Time (ms)</TableCell>
    <TableCell>Executors</TableCell>
    <TableCell>Errors</TableCell>
  </TableRow>
</TableHead>
<TableBody>
  {props.sparkLogs.map((log:any) => (
    <TableRow key={log.jobId}>
      <TableCell>{log.jobId}</TableCell>
      <TableCell>{log.runTime}</TableCell>
      <TableCell>{log.executorCount}</TableCell>
      <TableCell>{log.errors || "None"}</TableCell>
    </TableRow>
  ))}
</TableBody>
</Table>

}


export default Grid;