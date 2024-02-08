export function toHappyBox(data: any): HappyBox {
  return {
    호선: data.호선,
    역명: data.보관함명,
    위치정보: data.상세위치,
    소형: parseInt(data.소형),
    중형: parseInt(data.중형),
    대형: parseInt(data.대형),
    제어부: parseInt(data.제어부),
    열: parseInt(data.열),
    x: data.x,
    y: data.y,
  }
}

export type HappyBox = {
  호선: string
  역명: string
  위치정보: string
  소형: number
  중형: number
  대형: number
  제어부: number
  열: number
  x: string
  y: string
}
