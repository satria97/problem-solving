/**
 * Dalam tantangan ini, Anda diminta untuk menghitung dan mencetak jumlah elemen dalam array, dengan 
 * mengingat bahwa beberapa bilangan bulat tersebut mungkin cukup besar.
 * 
 * Deskripsi fungsi
 * Selesaikan fungsi aVeryBigSum di editor di bawah ini. Itu harus mengembalikan jumlah semua elemen
 * array.
 * 
 * aVeryBigSum memiliki parameter berikut:
 * int ar[n] : array bilangan bulat .
 * 
 * Return
 * long : jumlah semua elemen array
 * 
 * Masukkan format
 * Baris pertama input terdiri dari bilangan bulat.
 * Baris berikutnya berisibilangan bulat yang dipisahkan ruang yang terkandung dalam array.
 * 
 * Format output
 * Mengembalikan jumlah bilangan bulat dari elemen dalam array.
 * 
 * Constraints
 * 1 <= n <= 10
 * 0 <= ar[1] <= 10 pangkat 10
 * 
 * Contoh Masukan
 * 5
 * 1000000001 1000000002 1000000003 1000000004 1000000005
 * 
 * Keluaran
 * 5000000015
 * 
 * Catatan:
 * Kisaran bilangan bulat 32-bit adalah.
 * (-2 pangkat 31) to (2 pangkat 31 - 1) or [-2147483648, 2147483647]
 * Saat kami menambahkan beberapa nilai bilangan bulat, jumlah yang dihasilkan mungkin melebihi
 * rentang di atas. Anda mungkin perlu menggunakan long int C/C++/Java untuk menyimpan jumlah
 * tersebut.
 */

/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
  // Write your code here
  let sum = 0;
  for (let i=0; i < ar.length; i++) {
      sum += ar[i];
  }
  return sum;
}
console.log(aVeryBigSum([5]));
console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));