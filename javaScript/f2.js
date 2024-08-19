/* **f2. 해달 자료구조 시험에 학생 A, B, C가 응시한다. 학생 A, B ,C는 최대한 빨리 시험이 끝나길 원한다. 
하지만 세 명 중 한 명이라도 마킹이 끝나지 않았다면, 시험을 종료할 수 없다. 제일 마지막으로 마킹을 끝낸다면 시험은 그 즉시 종료된다. 
만약 학생 모두가 시험을 종료했지만 시험이 끝나지 않을 경우 지구는 멸망한다.**

예를 들어, A가 마킹하는데 소요되는 시간은 12분이다. B는 7분이 걸린다. C는 11분이 걸린다. 그렇다면 시험이 종료되기까지 12분이 소요된다.

- 학생 A, B, C의 마킹 시간은 랜덤하게 주어진다.
- 타이머가 적용된 문제입니다.
  - 종료 시각이 지나지 않았는데 시험이 종료될 경우 오답처리 됩니다.
  - 종료 시각이 지날 경우 오답처리 됩니다.
- 1초는 1000ms입니다.

> 실행 결과

A, B, C의 마킹 시간이 띄어쓰기로 차례대로 입력됩니다.

```jsx
// 입력
12 7 11

// 출력 ("시험이 종료되었습니다." 문장이 12초뒤에 출력되어야합니다.)
B 마킹
C 마킹
A 마킹
시험이 종료되었습니다.
```

```jsx
# 입력
1 2 10

# 출력
A 마킹
B 마킹
C 마킹
시험이 종료되었습니다.
``` */

let input = prompt(
    'A, B, C의 마킹 시간을 띄어쓰기로 구분하여 입력하세요.'
).split(' ')

let times = input.map(Number)

let students = ['A', 'B', 'C']

let sortedStudents = students
    .map((name, idx) => {
        return { name: name, time: times[idx] }
    })
    .sort((a, b) => a.time - b.time)

sortedStudents.forEach((student, idx) => {
    setTimeout(() => {
        console.log(`${student.name} 마킹`)
        if (idx === sortedStudents.length - 1) {
            console.log('시험이 종료되었습니다.')
        }
    }, student.time * 1000)
})
