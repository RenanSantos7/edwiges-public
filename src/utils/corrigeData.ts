export default function corrigeData(datastr:string) {
    const data = datastr.replaceAll('-', '/')
    return data
}