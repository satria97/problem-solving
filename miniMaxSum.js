/**
 * Diberi lima bilangan bulat positif, temukan nilai minimum dan maksimum yang dapat dihitung dengan 
 * menjumlahkan tepat empat dari lima bilangan bulat. Kemudian cetak nilai minimum dan maksimum 
 * masing-masing sebagai satu baris dari dua bilangan bulat panjang yang dipisahkan spasi.
 * 
 * Contoh
 * arr = [1,3,5,7,9]
 * Jumlah minimalnya adalah 1+3+5+7=16, dan jumlah maksimumnya adalah 3+5+7+9=24. Fungsi mencetak
 * 16 24
 * 
 * Deskripsi fungsi
 * Lengkapi fungsi miniMaxSum pada editor di bawah ini.
 * miniMaxSum memiliki parameter berikut:
 * arr : array dari 5 bilangan bulat
 * Mencetak
 * Cetak dua bilangan bulat yang dipisahkan spasi pada satu baris: jumlah minimum dan jumlah 
 * maksimum 4 dari 5 elemen.
 * 
 * Masukkan format
 * Satu baris dari lima bilangan bulat yang dipisahkan ruang.
 * 
 * Constraint
 * 1 <= arr[i] <= 10 pangkat 9
 * 
 * Format output
 * Cetak dua bilangan bulat panjang yang dipisahkan spasi yang menunjukkan nilai minimum dan 
 * maksimum masing-masing yang dapat dihitung dengan menjumlahkan tepat empat dari lima bilangan 
 * bulat. (Output bisa lebih besar dari bilangan bulat 32 bit.)
 * 
 * Contoh Masukan
 * 1 2 3 4 5
 * 
 * Keluaran Sampel
 * 10 14
 * 
 * Penjelasan
 * Angka-angkanya adalah 1,2,3,4 Dan 5. Hitung jumlah berikut menggunakan empat dari lima bilangan 
 * bulat:
 * Jumlahkan semuanya kecuali 1, jumlahnya adalah 2+3+4+5=14.
 * Jumlahkan semuanya kecuali 2, jumlahnya adalah 1+3+4+5=13.
 * Jumlahkan semuanya kecuali 3, jumlahnya adalah 1+2+4+5=12.
 * Jumlahkan semuanya kecuali 4, jumlahnya adalah 1+2+3+5=11.
 * Jumlahkan semuanya kecuali 5, jumlahnya adalah 1+2+3+4=10.
 * 
 * Petunjuk: Waspadalah terhadap integer overflow! Gunakan Bilangan Bulat 64-bit.
 */

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  let sum = arr.reduce((a, b) => { // Use reduce and add all elements to the array
      return a + b;
  });
  const min = sum - Math.max(...arr); // Calculate the minimum value by subtracting the maximum value from the total sum
  const max = sum - Math.min(...arr); // Calculate the maximum value by subtracting the minimum value from the total sum
  console.log(min + " " + max);
}
miniMaxSum([1,2,3,4,5]);