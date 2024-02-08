import * as R from 'ramda'
const RR: any = R

function join<T = any>(fk: string, dataList: (T[])[]) {
  const lengthList = dataList.map<number>(RR.length)
  const longest = Math.max(...lengthList)
  const longIndex = lengthList.findIndex(RR.equals(longest))
  const driver = dataList[longIndex]
  const others = dataList
    .slice(0, longIndex)
    .concat(dataList.slice(longIndex + 1, dataList.length))
  const joined = driver.map((d: any) =>
    others.map(
      RR.compose(
        RR.merge(d),
        RR.find(RR.propEq(fk, d[fk]))
      )
    )
  )

  return RR.o(
    RR.filter(RR.prop('호선')),
    RR.flatten,
    joined
  )
}

export const joiner = RR.curryN(2, join)