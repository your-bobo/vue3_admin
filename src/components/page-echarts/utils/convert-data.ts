import { coordinateData } from './coordinate-data'
interface DataItem {
  name: string
  value: number
}

export function convertData(data: DataItem[]) {
  var res: any = []
  for (var i = 0; i < data.length; i++) {
    var geoCoord = coordinateData[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}
