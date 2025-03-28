import SparkJobModel from "../model/SparkJobModel";
import SparkJobService from "./SparkJobService";

export default class SparkJobServiceImpl implements SparkJobService {
    url: string;
    constructor(baseApiUrl: string) {
        this.url = baseApiUrl;
    
    }
 
    async postJob(job: SparkJobModel): Promise<any> {
        try {
         const request = new Request(this.url, {
                headers: {
                  'Content-Type': 'application/json',
                },
                method: "POST",
                body: JSON.stringify(job),
              });

            const response = await fetch(request);
            return response.json();
        } catch (error: any) {
            console.error('Error post data:', error);
            throw new Error(error);
          }
        }

       async getAllJobs(): Promise<SparkJobModel[]> {
            try {
                 const response = await fetch(this.url);
                 return response.json();
               } catch (error: any) {
                   console.error('Error get data:', error);
                   throw new Error(error);
                 }
               }
        }





   

    
