/* **e. 입력한 달에 존재하는 날의 수를 출력하는 프로그램을 작성하시오.**

- 4, 6, 9, 11월은 30일까지, 2월은 윤년인 경우 29일, 평년인 경우 28일까지, 그 외의 달은 31일까지 존재한다.
- 년도가 4의 배수이지만 100의 배수는 아니거나, 400의 배수인 경우 윤년이다.

> 실행 결과

```
# 입력 (연도, 월 순서대로 입력)
2024
12

# 출력
31
```

```
# 입력 (연도, 월 순서대로 입력)
2000
2

# 출력
29
``` */

let year = Number(prompt('연도를 입력하세요.'))
let month = Number(prompt('월을 입력하세요.'))

if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log(30)
} else if (month === 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(29)
    } else {
        console.log(28)
    }
} else {
    console.log(31)
}
