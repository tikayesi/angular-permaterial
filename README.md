# HandsonperMaterial

## Pipes

Menggunakan template pipes
DatePipe -> Formats a date value according to locale rules.
UpperCasePipe -> Transforms text to all upper case.
LowerCasePipe -> Transforms text to all lower case.
CurrencyPipe -> Transforms a number to a currency string, formatted according to locale rules.
DecimalPipe -> Transforms a number into a string with a decimal point, formatted according to locale rules.
PercentPipe -> Transforms a number to a percentage string, formatted according to locale rules.

### Create custom pipes

Dapat membuat manual pipe dengan melakukan implement pipe transform atau bisa juga melakukan generate dengan perintah
ng generate p [nama pipe]

penggunaan pipe ditandai dengan: | pada halaman html

kita juga dapat memberikan argument pipe dengan `{{3 | exponent: 3 }}`


