/**
 * Diberi waktu masuk-hour format AM/PM , ubah ke waktu militer (24 jam).
 * Catatan: 
 * - 00:00:00 pada jam 12 jam adalah 00:00:00 pada jam 24 jam.
 * - 12:00:00 pada jam 12 jam adalah 12:00:00 pada jam 24 jam.
 * 
 * Contoh
 * s = '12:01:00PM'
 * Return '12:01:00'.
 * 
 * s = '12:01:00AM'
 * Return '00:01:00'
 * 
 * Deskripsi fungsi
 * Selesaikan fungsi timeConversion di editor di bawah ini. Itu harus mengembalikan string baru yang 
 * mewakili waktu input dalam format 24 jam.
 * timeConversion memiliki parameter berikut:
 * string s : waktu masuk 12 format jam
 * 
 * Returns
 * string : waktu masuk 24 format jam
 * 
 * Masukkan format
 * Sebuah string tunggal s yang mewakili waktu masuk 12-jam clock format (i.e.:hh:mm:ssAM or 
 * hh:mm:ssPM).
 * 
 * Constraints
 * Semua waktu input valid
 * 
 * Contoh Masukan 0
 * 07:05:45PM
 * 
 * Contoh Keluaran 0
 * 19:05:45
 */

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  let inputArray = s.split(':');
  let hours = parseInt(inputArray[0]);
  let minutes = inputArray[1];
  let timeFrame = inputArray[2].slice(2)
  let seconds = inputArray[2].slice(0,2);
  if((timeFrame === "PM") && (hours !== 12)){
      hours += 12;
  }
  if((timeFrame === "AM") && (hours === 12)){
      hours = "00";
  }else if(hours < 10){
      hours = "0" + hours.toString();
  }else{
      hours = hours.toString();
  }
  return ([hours,minutes,seconds].join(":"));
}
console.log(timeConversion('07:05:45PM'));