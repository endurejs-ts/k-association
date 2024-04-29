function resolveSplit(word: string): string[] {
    // 한글 초성 배열
    const CHOSUNG = [
        'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 
        'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 
        'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
    ];
    // 한글 중성 배열
    const JUNGSUNG = [
        'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 
        'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 
        'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
    ];
    // 한글 종성 배열
    const JONGSUNG = [
        '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 
        'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 
        'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 
        'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
    ];

    // 결과를 저장할 배열
    let result = [];

    for (let i = 0; i < word.length; i++) {
        const code = word.charCodeAt(i) - 0xAC00;
        if (code < 0 || code > 11171) {
            // 한글이 아니면 원래 문자를 그대로 추가
            result.push(word[i]);
            continue;
        }
        const jongIndex = code % 28; // 종성 인덱스
        const jungIndex = ((code - jongIndex) / 28) % 21; // 중성 인덱스
        const choIndex = (((code - jongIndex) / 28) - jungIndex) / 21; // 초성 인덱스

        result.push(CHOSUNG[choIndex], JUNGSUNG[jungIndex], JONGSUNG[jongIndex]);
    }

    return result.filter(v => v); // 빈 문자열 제거
}

/*
console.log("(어쩔 아님) 어절단어분해기 결과: ")
console.log(splitHangul("발")); // ["ㅂ", "ㅏ", "ㄹ"]
console.log(splitHangul("닭")); // ["ㄷ", "ㅏ", "ㄺ"]

/* 조사들 : 은는이가를 1차 테스트 */

function extractNouns(sentence: string): string[] {
    // 조사 패턴 정의
    const particlePattern = /(은|는|이|가|를|만)$/;

    // 문장을 공백 기준으로 나누기
    const words = sentence.split(/\s+/);

    // 조사 제거 및 결과 반환
    const nouns = words.map(word => word.replace(particlePattern, '')).filter(word => word.trim() !== '');
    console.log(words, nouns);

    return nouns;
}

/* // 테스트 문장
const sentence = "사람은 사과, 바나나를 먹는다.";

console.log("\n은는이가를 1차 테스트 결과: ");
console.log(extractNouns(sentence)); // 출력: ["사람", "사과,", "바나나"] */

function extractNounsAndClean(sentence: string): string[] {
    // 조사를 제거하기 위한 정규 표현식 패턴
    const pattern = /은|는|이|가|를|만/g;
    
    // 문장을 공백을 기준으로 분리
    let words = sentence.split(/\s+/);

    // 조사와 구두점을 제거
    words = words.map(word => word.replace(pattern, '').replace(/[.,]/g, ''));

    // 빈 문자열을 제거하고 결과 반환
    return words.filter(word => word.trim() !== '');
}

// 예시 문장
const sentence1 = "사람은 사과, 바나나를 먹는다.";

/*
// 결과 출력
console.log("\n2차 결과: ");
console.log(extractNounsAndClean(sentence1)); // ["사람", "사과", "바나나"] */

function extractNounsAndClean1(sentence: string): string[] {
    // 조사와 일반적인 구두점을 제거하는 패턴 정의
    const particlePattern = /은|는|이|가|을|를|만/g;
    const punctuationPattern = /[.,!?;:]/g;
    
    // 조사 제거
    let cleanedSentence = sentence.replace(particlePattern, '');
    // 구두점 제거
    cleanedSentence = cleanedSentence.replace(punctuationPattern, '');
    
    // 공백을 기준으로 분할 후, 빈 문자열이 아닌 요소만 필터링
    const nouns = cleanedSentence.split(/\s+/).filter(word => word.trim() !== '');

    return nouns;
}

/*
// 예시 문장
const sentence2 = "사람은 사과, 바나나를 먹는다.";

// 명사 추출 및 출력
const nouns = extractNounsAndClean1(sentence2);

console.log("\n3차 결과: ");
console.log(nouns); // ["사람", "사과", "바나나"]
*/