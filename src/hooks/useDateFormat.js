
export default function DateFormat(date) {
  
    const dateStr = date;
    const dateObj = new Date(dateStr);

    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const day = dateObj.getDate().toString().padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    //2023-02-01
   
    
    return formattedDate
}
