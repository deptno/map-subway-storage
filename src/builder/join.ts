import * as R from 'ramda'

function join<T = any>(fk: string, dataList: (T[])[]) {
  const lengthList = dataList.map<number>(R.length)
  const longest = Math.max(...lengthList)
  const longIndex = lengthList.findIndex(R.equals(longest))
  const driver = dataList[longIndex]
  const others = dataList
    .slice(0, longIndex)
    .concat(dataList.slice(longIndex + 1, dataList.length))
  const joined = driver.map((d: any) =>
    others.map(
      R.compose(
        R.merge(d),
        R.find(R.propEq(fk, d[fk]))
      )
    )
  )

  return R.o(
    R.filter(R.prop('호선')),
    R.flatten,
    joined
  )
}

export const joiner = R.curryN(2, join)
