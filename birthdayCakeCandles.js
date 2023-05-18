/**
 * Anda bertanggung jawab atas kue untuk ulang tahun anak. Anda telah memutuskan bahwa kue tersebut 
 * akan memiliki satu lilin untuk setiap tahun dari total umurnya. Mereka hanya bisa meniup lilin 
 * yang paling tinggi. Hitung berapa lilin yang paling tinggi.
 * 
 * Contoh:
 * candles = [4,4,1,3]
 * Lilin ketinggian maksimum adalah 4 satuan tinggi. Ada 2 dari mereka, jadi kembalilah 2.
 * 
 * Deskripsi fungsi
 * Selesaikan fungsi birthdayCakeCandles di editor di bawah ini.
 * birthdayCakeCandles memiliki parameter berikut:
 * int candles[n] : ketinggian candle
 * 
 * Return
 * int : jumlah candle yang paling tinggi
 * 
 * Masukkan format
 * Baris pertama berisi bilangan bulat tunggal n, ukuran dari candles[].
 * Baris kedua berisi n bilangan bulat yang dipisahkan ruang, di mana setiap bilangan
 * bulat i menggambarkan ketinggian candles[i].
 * 
 * Constraint
 * 1 <= n <= 10 pangkat 5
 * 1 <= candles[i] <= 10 pangkat 7
 * 
 * Contoh Masukan 0
 * 4 
 * 3 2 1 3
 * 
 * Contoh Keluaran 0
 * 2
 * 
 * Penjelasan 0
 * Ketinggian lilin adalah [3,2,1,3]. Lilin tertinggi adalah 3 unit, dan ada 2 dari mereka.
 */

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  let maxHeight = Math.max(...candles);
  let maxHeightCount = 0;
  for(let i=0; i<candles.length; i++) {
    if(candles[i] == maxHeight) {
      maxHeightCount += 1;
    }
  }
  console.log(maxHeightCount);
  return maxHeightCount;
}
birthdayCakeCandles([3,2,1,3]);