/* **a. 세 자리 정수를 입력 받아 역순으로 출력하는 프로그램을 작성하시오.**

> 실행 결과

```
# 입력
492

# 출력
294
``` */

let num = prompt('세 자리 정수를 입력하세요.')
let reverseNum = num.split('').reverse().join('')

console.log(reverseNum)
