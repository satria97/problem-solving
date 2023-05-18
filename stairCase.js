/**
 * Detil tangga
 * Ini adalah tangga ukuran m = 4:
 *    #
 *   ##
 *  ###
 * ####
 * Alas dan tingginya keduanya sama m. Itu digambar menggunakan # simbol dan spasi. Baris terakhir 
 * tidak didahului spasi.
 * 
 * Tulis program yang mencetak tangga ukuran m.
 * Deskripsi fungsi
 * Lengkapi fungsi tangga pada editor di bawah ini.
 * tangga memiliki parameter berikut:
 * int n : bilangan bulat
 * Mencetak
 * Cetak tangga seperti dijelaskan di atas.
 * Masukkan format
 * Satu bilangan bulat m, yang menunjukkan ukuran tangga.
 * 
 * Constraint
 * 0 < n <= 100.
 * 
 * Format output
 * Cetak tangga ukuran m menggunakan # simbol dan spasi.
 * 
 * Catatan : Baris terakhir harus ada () ruang di dalamnya.
 * 
 * Contoh Masukan
 * 6 
 * 
 * Keluaran Sampel
 *      #
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 * 
 * Penjelasan
 * Tangganya rata kanan, terdiri dari #simbol dan spasi, serta memiliki tinggi dan lebar m = 6.
 */

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */


function stairCaseOne(m) {
  let string = '';
  for(let i=1; i<=m; i++) {
    for(let j=m-1; j>=i; j--) {
      string += ' ';
    }
    for(let k=1; k<=i; k++) {
      string += '#';
    }
    string += '\n';
  }
  return console.log(string);
}
stairCaseOne(6);

function stairCaseTwo(n) {
  let string = '';
  for(let i=1; i<=n; i++) {
    for(let j=1; j<=n-1; j++) {
      string += ' ';
    }
    for(let k=1; k<=i; k++) {
      string += '#';
    }
    string += '\n';
  }
  return console.log(string);
}
stairCaseTwo(6);