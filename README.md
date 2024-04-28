# k-correlation
글과 문장 속에 연관성과 상관관계를 찾고 분석해주는 라이브러리입니다. ✌

## 사용상황
글이나 문장 관에 연관성을 비교해보고 싶을때 쓰면 좋습니다.

## 문법

resolveKorean() 함수
```typescript
const test = resolveKorean(["문장1", "문장2"]);
...
```

더 정밀하게 비교해보고 싶을때
actResolveKorean() 함수
```typescript
const test = actResolveKorean(["문장1", "문장2"]);
...
```

여기서 act는 행동하다의 뜻이 아닌 accurate 의 약어로 사용했습니다.

그리고 단어 분해기를 만들기도 했는데 아직 사용상황을 만들진 못했습니다.

## 문법 2

resolveSplit() 함수
```typescript
const broken_word = resolvesplit("언"); // ["ㅇ", "ㅓ", "ㄴ"]
...
```