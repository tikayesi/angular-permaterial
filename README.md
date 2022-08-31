# HandsonperMaterial

Component merupakan main building block untuk membangun aplikasi angular
kita dapat membuat component secara manual dengan cara:

- buat folder pages didalam folder app
- buat file dengan nama pages.component.ts
- panggil @Component dari angular core untuk mendefine bahwa file tersebut merupakan componen angular
- didalam component, terdapat beberapa attribut penting yang dapat digunakan yaitu selector, template dan style

``` @Component({
  // berguna sebagai naming ketika komponen dipanggil oleh file view lainnya
  selector: 'app-pages',
  // berguna sebagai view/ui dari component ini
  // jika ingin lebih dari 1 line bisa menggunakan `` backtick bukan '' petik
  template: '<html><body><h1>Hello world</h1></body></html>',
  // berguna sebagai styling view/ui
  styles:  ['h1 { font-weight: bold; }']
})
```

- jangan lupa untuk melakukan export component agar bisa dibaca oleh file lainnya
`export class PagesComponent{}`

daftarkan juga PagesComponent ke module yang akan memanggil, contohnya appModule
  declarations: [
    AppComponent,
    PagesComponent
  ],

jika ingin memisahkan ts, html dan css. Buatlah file
pages.component.html
pages.component.css
dalam folder pages

kemudian ubah settingan pada
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})

Jika ingin melakukan auto generate 1 file html dan css
`ng generate component hero-app --inline-style`
Jika ingin melakukan auto generate component lengkap dengan file html, css dan spec untuk testing:
`ng generate component hero-app`
jika ingin dimasukkan pada folder generate:
`ng generate component generate/hero-app`
