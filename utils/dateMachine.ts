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

  export const formatDateToYM = (dateString:string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to month as it is zero-based
    return `${year}-${month}`;
  };
  
  