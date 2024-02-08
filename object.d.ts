export type SubwayStorage = {
  '호선': string
  '역명': string
  '위치정보': string
  '소형': number
  '중형': number
  '대형': number
  '제어부': number
  '열': number
  'x': string
  'y': string
}


declare global {
  const kakao: any
  interface Window {
     kakao: any
  }
}