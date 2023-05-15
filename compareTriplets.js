/**
 * Alice dan Bob masing-masing membuat satu masalah untuk HackerRank. Peninjau menilai dua
 * tantangan, memberikan poin pada skala dari 1 hingga 100 untuk tiga kategori: 
 * kejelasan masalah orisinalitas , dan kesulitan .
 * 
 * Peringkat untuk tantangan Alice adalah triplet a = (a[0], a[1], a[2]) , dan 
 * peringkat untuk tantangan Bob adalah triplet b = (b[0], b[1], b [2]) .
 * 
 * Tugasnya adalah menemukan poin perbandingan mereka dengan membandingkan a[0] dengan b[0] , 
 * a[1] dengan b[1] , dan a[2] dengan b[2] .
 * 
 * Jika a[i] > b[i] , maka Alice diberikan 1 poin.
 * Jika a[i] < b[i] , maka Bob diberikan 1 poin.
 * Jika a[i] = b[i] , maka tidak ada orang yang menerima poin.
 * 
 * Poin perbandingan adalah total poin yang diperoleh seseorang.
 * Diberikan a dan b , tentukan titik perbandingannya masing-masing.
 * 
 * Contoh
 * a = [1, 2, 3]
 * b = [3, 2, 1]
 * 
 * Untuk elemen *0*, Bob diberikan poin karena a[0] .
 * Untuk elemen yang sama a[1] dan b[1] , tidak ada poin yang diperoleh.
 * Terakhir, untuk elemen 2 , a[2] > b[2] sehingga Alice menerima satu poin.
 * Array yang dikembalikan adalah [1, 1] dengan skor Alice pertama dan Bob kedua.
 * 
 * Deskripsi fungsi
 * Selesaikan fungsi compareTriplets pada editor di bawah ini.
 * 
 * compareTriplets memiliki parameter berikut:
 * int a[3] : Peringkat tantangan Alice
 * int b[3] : Peringkat tantangan Bob
 * 
 * Return
 * int[2] : Skor Alice di posisi pertama, dan skor Bob di posisi kedua.
 * 
 * Masukkan format
 * Baris pertama berisi 3 bilangan bulat yang dipisahkan spasi, a[0] , a[1] , dan a[2] 
 * masing-masing nilai dalam triplet a .
 * Baris kedua berisi 3 bilangan bulat yang dipisahkan spasi, b[0] , b[1] , dan b[2] , masing-masing
 * nilai dalam triplet b .
 * 
 * Kendala
 * 1 ≤ a[i] ≤ 100
 * 1 ≤ b[i] ≤ 100
 * 
 * Contoh Masukan 0
 * int[2] : Skor Alice di posisi pertama, dan skor Bob di posisi kedua.
 * 
 * Masukkan format
 * Baris pertama berisi 3 bilangan bulat yang dipisahkan spasi, a[0] , a[1] , dan a[2] 
 * masing-masing nilai dalam triplet a . Baris kedua berisi 3 bilangan bulat yang dipisahkan spasi, 
 * b[0] , b[1] , dan b[2] , masing-masing nilai dalam triplet b .
 * 
 * Constraints
 * 1 ≤ a[i] ≤ 100
 * 1 ≤ b[i] ≤ 100
 * 
 * Contoh Masukan 0
 * 5 6 7
 * 3 6 10
 * 
 * Sample Output 0
 * 1 1
 * 
 * Explanation 0
 * In this example:
 * a=(a[0], a[1], a[2]) = (5,6,7)
 * b=(b[0], b[1], b[2]) = (3,6,10)
 * 
 * Now, let's compare each individual score:
 * a[0] > b[0], so Alice receives 1 point.
 * a[1] = b[1], so nobody receives a point.
 * a[2] < b[2], so Bob receives 1 point.
 * 
 * Alice's comparison score is , and Bob's comparison score is . Thus, we return the array .
 * 
 * Sample Input 1
 * 17 28 30
 * 99 16 8
 * 
 * Sample Output 1
 * 2 1
 * 
 * Explanation 1
 * Comparing the 0th elements, 17 < 99 so Bob receives a point.
 * Comparing the 1st and 2nd elements, 28 > 16 and 30 > 8 so Alice receives two points.
 * The return array is [2,1].
 */


/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  for(let i=0; i<a.length; i++){
      if(a[i] > b[i]){
          alice += 1;
      } else if(a[i] < b[i]){
          bob += 1;
      }
  }
  return [alice, bob];
}
console.log(compareTriplets([5,6,7],[3,6,10]));