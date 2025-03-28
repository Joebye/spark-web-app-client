interface SparkJobModel {
    jobId: string,
    runTime: number, 
    executorCount: number,
    errors: string, 
  };


  export default SparkJobModel;