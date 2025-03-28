import SparkJobModel from "../model/SparkJobModel";

export default interface SparkJobService {
    postJob (job: SparkJobModel): Promise<any>;
    getAllJobs(): Promise<SparkJobModel[]>
}