export function getMonthYearName(input: any) {
    const monthNames = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ]
    
    const date = new Date(input)

    const monthNum = date.getMonth()
  
    return monthNames[monthNum] +" "+ date.getFullYear();
  }
  
  