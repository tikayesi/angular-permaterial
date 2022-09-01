# HandsonperMaterial

<https://angular.io/guide/lifecycle-hooks>

* constructor
dipanggil pertama kali ketika component dibuat

* ngOnInit
akan terpanggil 1 kali ketika component pertama kali dijalankan
contohnya pake setInterval time

* ngOnchange
akan terpanggil ketika sebuah component menerima perubahan data dari component lain dan dipanggil sebelum on init
contohnya counter yang dikirim dari app component dan diterima oleh pages component

* ngOnDestroy
akan terpanggil ketika component berganti dengan component lainnya
contohnya destroy setInterval time berhenti ketika melakukan pengkodisian menggunakan
if pada html yang tadinya menampilkan pages component berganti menjadi hero component

* ngOnCheck
terpanggil setiap kali terdeteksi adanya perubahan

* ngAfterContentInit
terpanggil setelah content ditampilkan di view

* ngAfterContentChecked
terpanggil setiap kali content sudah di check

* ngAfterViewInit
terpanggil setelah component beserta child component (jika ada) ditampilkan dan selesai di initial

* ngAfterViewChecked
terpanggil setiap kali view dan childviewnya (jika ada) sudah di check
