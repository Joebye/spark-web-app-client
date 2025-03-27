import { CircularProgress, Container, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


const API_URL = "http://localhost:3001/logs";

export default function Dashboard() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setLogs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  console.log(logs);
  

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Apache Spark Job Monitoring</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={logs} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="jobId" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="runTime" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Job ID</TableCell>
                <TableCell>Run Time (ms)</TableCell>
                <TableCell>Executors</TableCell>
                <TableCell>Errors</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {logs.map((log:any) => (
                <TableRow key={log.jobId}>
                  <TableCell>{log.jobId}</TableCell>
                  <TableCell>{log.runTime}</TableCell>
                  <TableCell>{log.executorCount}</TableCell>
                  <TableCell>{log.errors || "None"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </Container>
  );
}
