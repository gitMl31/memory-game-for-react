export  function parseMockDataToString (data) {
    let strData = data.split(/\r?\n/).join('-')
    strData = strData.replaceAll(' ', '')
    strData = strData.replaceAll('|', '')
    while (strData[strData.length - 1] === '-') {
      strData = strData.slice(0, -1)
    }
    return strData
}

export function validateMockData(mockData) {
    let isValidData
    if (mockData === undefined) {
        isValidData = false
    } else {
        if (mockData.includes('-')) {
            isValidData = validateMockDataRows(mockData.split('-'))
        } else {
            isValidData = validateMockDataRow(mockData)
        }
    }
    return isValidData
}

function validateMockDataRows(dataRows) {
    const currentLenght = dataRows[0].length
    let isValidData
    for (let i = 0; i < dataRows.length; i += 1) {
        if (dataRows[i].length !== currentLenght) {
            isValidData = false
            break
        }
        isValidData = validateMockDataRow(dataRows[i])
    }
    return isValidData
}

function validateMockDataRow(data) {
    const newLocal = '^[ab]*$'
    const regex = new RegExp(newLocal)
    return regex.test(data)
}