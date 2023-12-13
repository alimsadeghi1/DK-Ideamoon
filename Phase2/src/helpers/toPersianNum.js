export default function toPersianNum(num, dontTrim) {

     let i = 0
 
     dontTrim = dontTrim || false;
 
     num = dontTrim ? num.toString() : num.toString().trim();
     let len = num.length;
 
     let res = '';
     let pos;
 
     let persianNumbers = typeof persianNumber == 'undefined' ?
         ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'] :
         persianNumbers;
 
     for (; i < len; i++)
         if ((pos = persianNumbers[num.charAt(i)]))
             res += pos;
         else
             res += num.charAt(i);
 
     return res;
 }
 
 