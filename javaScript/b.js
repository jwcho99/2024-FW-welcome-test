/* **b. 사용자로부터 알파벳 문자 하나를 입력 받아서 a, e, i, o, u일 경우 O를 이 외의 문자일 경우 X를 출력하시오.**

> 실행 결과

```
# 입력
i

# 출력
O
```

```
# 입력
t

# 출력
X
``` */

let alpha = prompt('알파벳 문자 하나를 입력하세요.')

if (
    alpha === 'a' ||
    alpha === 'e' ||
    alpha === 'i' ||
    alpha === 'o' ||
    alpha === 'u'
) {
    console.log('O')
} else {
    console.log('X')
}
