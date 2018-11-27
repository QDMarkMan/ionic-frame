// interface for api data
export interface ReturnObject {
  code: number,       // api return code
  data: object,       // api object code
  succeed: boolean,   // api success or not
  message: string     // api message
}
// config
export interface Config {
  BASE_URL: string,    // API base url
  VERSION: number,     // version
  UPLOAD_URL ?: string // file upload url
}