import { Button, CircularProgress, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { sparkJobService } from "./configCommon/service-config";
import SparkJobModel from "./model/SparkJobModel";
import Chart from "./components/Chart";
import Grid from "./components/Grid";

export default function Dashboard() {
  const [logs, setLogs] = useState<SparkJobModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const sparkJobs = await sparkJobService.getAllJobs();
      if (sparkJobs && Array.isArray(sparkJobs)) {
        setLogs(sparkJobs);
      } else {
        setLogs([]);
      }
    } catch (error) {
      console.error("Failed to fetch logs:", error);
      setLogs([]); 
    } finally {
      setLoading(false); 
  }
}

  const generateRandomJob = async () => {
    const newJob: SparkJobModel = {
      jobId: `job_${Math.floor(Math.random() * 1000)}`,
      runTime: Math.floor(Math.random() * 10000) + 1000, 
      executorCount: Math.floor(Math.random() * 10) + 1,
      errors: Math.random() > 0.8 ? "Timeout Error" : "None", 
    };

   const postJobRes = await sparkJobService.postJob(newJob)
    if (postJobRes) {
      fetchLogs();
    }
  };
  

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Apache Spark Job Monitoring</Typography>

      <Button variant="contained" color="primary" onClick={generateRandomJob} sx={{ mb: 2 }}>
        Generate Random Job
      </Button>
      
      {loading ? (
        <CircularProgress />
      ) : (
        <>
        <Chart sparkLogs={logs}/>
        <Grid sparkLogs={logs}/>
        </>
      )}
    </Container>
  );
}
