import SparkJobService from "../services/SparkJobService";
import SparkJobServiceImpl from "../services/SparkJobServiceImpl";

const API_BASE_URL = process.env.REACT_APP_BASE_API_URL as string;

export const sparkJobService: SparkJobService = new SparkJobServiceImpl(API_BASE_URL);

