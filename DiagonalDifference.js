/**
 * Diberi matriks persegi, hitung selisih absolut antara jumlah diagonalnya.
 * Misalnya, matriks persegiditunjukkan di bawah ini:
 * 1 2 3
 * 4 5 6
 * 9 8 9  
 * 
 * Diagonal kiri ke kanan = 1 + 5 + 9 = 15. 
 * Diagonal kanan ke kiri = 3 + 5 + 9 = 17. 
 * Perbedaan mutlak mereka adalah|15 - 17| = 2
 * 
 * Deskripsi fungsi
 * Menyelesaikan diagonalDifference fungsi di editor di bawah ini.
 * diagonalDifference mengambil parameter berikut:
 * int arr[n][m] : array bilangan bulat
 * 
 * Return
 * int : perbedaan diagonal absolut
 * 
 * Masukkan format
 * Baris pertama berisi bilangan bulat tunggal n, jumlah baris dan kolom dalam matriks persegi arr.
 * Masing-masing berikutnya n baris menggambarkan baris arr[i], dan terdiri dari n bilangan bulat
 * yang dipisahkan ruang arr[i][j].
 * 
 * Constraint
 * -100 <= arr[i][j] <= 100
 * 
 * Format output
 * Mengembalikan perbedaan absolut antara jumlah dari dua diagonal matriks sebagai satu bilangan
 * bulat.
 * 
 * Contoh Masukan
 * 3
 * 11 2 4
 * 4 5 6
 * 10 8 -12
 * 
 * Keluaran Sampel
 * 15
 * 
 * Penjelasan
 * Diagonal utamanya adalah:
 * 11
 *    5
 *      -12
 * Jumlahkan diagonal utama: 11 + 5 - 12 = 4
 * 
 * Diagonal sekundernya adalah:
 *      4
 *    5
 * 10
 * Jumlahkan diagonal sekunder: 4 + 5 + 10 = 19
 * Selisih: |4 - 19| = 15
 * 
 * Catatan: |x| adalah nilai mutlak dari x
 */

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let leftToRightDiag = 0;
    let rightToLeftDiag = 0;
    for(let i =0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i === j){
                leftToRightDiag += arr[i][j];
            }
            if(i + j === arr.length - 1){
                rightToLeftDiag += arr[i][j];
            }
        }
    }
    return Math.abs(leftToRightDiag - rightToLeftDiag);

}