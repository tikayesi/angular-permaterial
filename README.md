# HandsonperMaterial

## Data Binding

Jelaskan bahwa salah satu keunikan angular adalah, dapat melakukan two way data binding.
Apa itu data binding? Data binding merupakan salah satu dari support library/framework yang kita gunakan untuk mengikat/menghubungkan component UI dengan sumber  suatu data

### String interpolation

Kita dapat menggunakan string interpolation {{}} untuk membaca data yang ada pada component ts ke view html
contohnya: pada app.component,ts terdapat sebuah attribute title
kita dapat memanggil title pada app.component.html menggunakan `{{title}}`
String interpolation ini bisa menerima type data apapun baik, string, number, boolean, array ataupun object

```export class AppComponent {
  title = 'Learn Angular';
  arr = [1,2,3]
  data = 0;
  bool = true;
  obj = {traineeName:"Tika", gender: 'Female'}
} ```

Pada html
```<h1 class="text-center">{{title}}</h1>
```<p>{{arr}}</p>
```<p>{{data}}</p>
```<p>{{obj.traineeName}}</p>
```<p>{{bool}}</p>

### Property Binding

Kita dapat membuat sebuah button terdisable kemudian enable dengan memanfaatkan data dari component.ts

app.component.ts:
  ngOnInit() {
    setTimeout(() => {
       this.isDisabled = !this.isDisabled;
    }, 2000);
}

app.component.html:
``` <button type="button" class="btn btn-primary" [disabled]="!isDisabled">Get Started</button>


### event binding
Kita dapat menampilkan data kepada view ketika melakukan sebuah event
contohnya, pada ts terdapat attribute
``` showMessage = ''
kemudian terdapat sebuah function

``` onButtonClick(){
  this.showMessage = 'This message is showed by click event'
}

pada button yang sudah dibuat sebelumnya, kita dapat menambahkan event click untuk memanggil function onButtonClick yang sudah dibuat sebelumnya

``` <button type="button" class="btn btn-primary"
[disabled]="!isDisabled" (click)="onButtonClick()">Get Started</button>

data yang berubah juga dapat ditampilkan langsung menggunakan string interpolation
``` {{showMessage}}

### Two Way data Binding

#### Send data from parent to child

Kita dapat mengirimkan data dari parent ke child menggunakan @Input @Output decorator
Pada kesempatan ini, kita akan mencoba menggunakan component app dan component pages

Buat variable numberCount dan function untuk melakukan increment pada app.component.ts

``` numberCount : number = 0;

``` incrementNumber(){
```  this.numberCount++;
``` }

kemudian coba panggil terlebih dahulu {{numberCount}} pada app.component.html dan button untuk memanggil function incrementNumber() untuk memastikan increment berjalan sebagaimana mestinya

Jika sudah, panggil component pages
<app-pages [parentData]="numberCount"></app-pages>
<> parentData adalah attribute dari child yang kita gunakan sebagai target yang berfungsi untuk menangkap data dari parent
<> numberCount adalah data yang akan dikirim ke child

Selanjutnya pada pages.component.ts yang berperan sebagai child
gunakan decorator @Input dan buat nama variable sesuai dengan target yang dikirim  oleh parent component
``` @Input() parentData: number = 0;

Pada html, lanjutkan dengan memanggil property parentData tersebut {{parentData}}

Jika code dijalankan, kemudian button increment dijalankan maka data numberCount yang ada di parent component dan parentData yang ada di child component akan berubah bersamaan

Contoh lainnya, pada app component kita memiliki property name untuk menampung string dari inputan form, kita akan mencoba mengirim value property tersebut ke child component
buatlah variable baru dengan nama
``` dataParentName = '';

kemudian tambahkan function untuk melakukan re-asign dataParentName dengan data name
``` addDataName(){
``` this.dataParentName = this.name;
``` }

pada app html yang sebelumnya, tambahkan target nameFromParent dengan data dataParentName yang akan dikirim ke child component
<app-pages [parentData]="numberCount" [nameFromParent]="dataParentName"></app-pages>

sehingga pada child component, kita akan menggunakan decorator @Input lagi untuk menampung data yang dikirim dari parent
```   @Input() nameFromParent: string = '';
untuk selanjutnya dapat dipanggil pada file html menggunakan {{nameFromParent}}


#### send data from child to parent

Selanjutnya kita akan membuat function decrement untuk mengurangi nilai dari child ke parent kita dapat menggunakan decorator @Output yang dituliskan pada child component

```   @Output() newItemEvent = new EventEmitter<number>();
<> event emmiter berguna untuk melakukan emit/memancarkan custom even yang didapatkan baik dalam bentuk synchronous ataupun asynchronous dan mendaftarkan handler untuk event-event tersebut dengan melakukan subscribing instancenya

selanjutnya, buat function untuk memanggil event
```  decrementFromChild(){
```    this.newItemEvent.emit(this.numberChild = this.numberChild - 1)
```  }

kemudian buat button pada pages html yang memanggil function tersebut
  <button (click)="decrementFromChild()">from child data</button>

Pada app component, kita dapat melakukan reasign number count
addDataFromChild(val: number){
this.numberCount = val
}

untuk kemudian ditampilkan kembali ke html, jangan lupa tangkap output pada saat memanggil child

``` <app-pages [parentData]="numberCount" [nameFromParent]="dataParentName" (newItemEvent)="addDataFromChild($event)"></app-pages>

dengan memanggil newItemEvent yang didapat dari decorator @Output pada child
