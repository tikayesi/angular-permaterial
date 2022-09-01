# HandsonperMaterial

## Styling menggunakan bootstrap

 `npm install bootstrap`

Tambahkan code berikut pada angular.json bagian style dan script:

* Hati-hati, tambahkan style dan script jangan dibagian test (bawah) karena tidak akan terload

 "styles": [
              "src/styles.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css" //tambahkan ini
            ],
            "scripts": [
              "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" //tambahkan ini
            ]

### Styling

Selanjutnya kita akan menggunakan styling pada angular, untuk melakukan test apakah bootstrap sudah berjalan atau belum dapat mengcopykan code yang ada pada navbar.
Dan untuk melakukan script jsnya sudah terload belum, pastikan dropdownnya berjalan jika tampilan responsive.


