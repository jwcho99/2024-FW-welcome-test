/* **d. 양의 정수 n을 입력 받아 1부터 n까지의 합을 출력하는 프로그램을 작성하시오.**

- 단, 양의 정수가 아닐 경우 반복하여 입력 받아야 합니다.

> 실행 결과 (아래의 결과는 연속된 결과입니다.)

```
-5 # 입력
X # 출력
0 # 입력
X # 출력
10 # 입력
55 # 출력
``` */

let n = prompt('양의 정수를 입력하세요.')
let sum = 0

while (n <= 0) {
    console.log('X')
    n = prompt('양의 정수를 입력하세요.')
}

for (let i = 1; i <= n; i++) {
    sum += i
}

console.log(sum)
