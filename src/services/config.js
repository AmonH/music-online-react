const devBaseURL = "https://music.163.com/"; //开发环境
const proBaseURL = "https://music.163.com/"; //生产环境
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;
