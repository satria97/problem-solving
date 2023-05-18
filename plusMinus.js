/**
 * Diberi array bilangan bulat, hitung rasio elemen-elemennya yang positif , negatif , dan nol .
 * Cetak nilai desimal dari setiap pecahan pada baris baru dengan 6 tempat setelah desimal..
 * 
 * Note: Tantangan ini menimbulkan masalah presisi. Kasing uji diskalakan hingga enam tempat 
 * desimal, meskipun jawaban dengan kesalahan absolut hingga 10 pangkat -4 dapat diterima.
 * 
 * Contoh
 * arr = [1,1,0,-1,-1]
 * 
 * Ada n = 5 elemen, dua positif, dua negatif dan satu nol. Rasio mereka adalah 2/5 = 0.400000, 
 * 2/5 = 0.400000, dan 1/5 = 0.200000. Hasil dicetak sebagai:  
 * 0.400000
 * 0.400000
 * 0.200000
 * 
 * Deskripsi Fungsi
 * Lengkapi fungsi plusMinus pada editor di bawah ini. plusMinus memiliki parameter berikut:
 * int arr[n]: an array of integers
 * 
 * Cetak
 * Mencetak rasio nilai positif, negatif, dan nol dalam larik. Setiap nilai harus dicetak pada baris 
 * terpisah denganangka setelah desimal. Fungsi tidak boleh mengembalikan nilai.
 * 
 * Input Format
 * Baris pertama berisi bilangan bulat,, ukuran larik. Baris kedua berisibilangan bulat yang 
 * dipisahkan ruang yang menjelaskan arr[n]
 * 
 * Constraints
 * 0 <= n <= 100
 * -100 <= arr[i] <= 100
 * 
 * Output Format
 * Cetak berikut inibaris, masing-masing untuk 6 desimal:
 * proporsi nilai positif
 * proporsi nilai negatif
 * proporsi nol
 * 
 * Sample Input
 * STDIN           Function
 * -----           --------
 * 6               arr[] size n = 6
 * -4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
 * 
 * Sample Output
 * 0.500000
 * 0.333333
 * 0.166667
 * 
 * Penjelasan
 * Ada 3 angka positif, 2 bilangan negatif, dan 1 nol dalam array.
 * Proporsi kejadiannya positif: 3/6 = 0.500000, negatif: 2/6 = 0.333333 dan nol: 1/6 = 0.166667
 */


/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  let arrLength = arr.length;
  let arrPos = [];
  let arrNeg = [];
  let arrZero = [];
  for(let i=0; i<arrLength; i++){
      if(arr[i] > 0){
          arrPos.push(arr[i]);
      }else if(arr[i] <0){
          arrNeg.push(arr[i]);
      }else{
          arrZero.push(arr[i]);
      }    
  }
  console.log((arrPos.length /arrLength).toFixed(6));
  console.log((arrNeg.length /arrLength).toFixed(6));
  console.log((arrZero.length /arrLength).toFixed(6));
}
plusMinus([-4,3,-9,0,4,1]);
