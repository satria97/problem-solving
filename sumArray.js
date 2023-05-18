/**
 * Diberi array bilangan bulat, temukan jumlah elemennya.
 * Misalnya, jika array,, jadi kembali.
 * 
 * Deskripsi fungsi
 * Lengkapi fungsi simpleArraySum di editor di bawah ini. Itu harus mengembalikan jumlah elemen
 * array sebagai bilangan bulat.
 * simpleArraySum memiliki parameter berikut:
 * ar : array bilangan bulat
 * 
 * Masukkan format
 * Baris pertama berisi bilangan bulat,, menunjukkan ukuran array
 * Baris kedua berisibilangan bulat yang dipisahkan ruang yang mewakili elemen array.
 * 
 * Kendala
 * 0 < n, ar[i] <=1000
 * 
 * Format output
 * Cetak jumlah elemen array sebagai bilangan bulat tunggal.
 * Contoh Masukan
 * 6
 * 1 2 3 4 10 11
 * 
 * Keluaran Sampel
 * 31
 * 
 * Penjelasan
 * Kami mencetak jumlah elemen array:
 * 1+2+3+4+10+11=31
 * */

/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
    let sumArray = 0;
    for (let i=0; i < ar.length; i++) {
        sumArray += ar[i];
    }
    return sumArray;
}
console.log(simpleArraySum([1,2,3,4,10,11]));
