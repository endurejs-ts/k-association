import { resolvesplit, nouns, cleanNouns, actCleanNouns, actArraySplit } from './lib';

function resolveKorean([stn, stn1]: [stn: string, stn1: string]): number {
    const alpha = actCleanNouns(stn);
    const beta = actCleanNouns(stn1);

    let score = 0;

    alpha.forEach(a => {
        if (beta.includes(a)) {
            score += 1;
        }
    });

    return score;
}

/*
const test_a_v = resolveKorean(["사과를 먹는 나무", "사과를 자르는 사람"]);
const test_b_v = resolveKorean(["바나나 알러지", "세균으로 인해 감염된 알러지"]);

console.log(test_a_v, test_b_v);
console.log((test_a_v > test_b_v) ? `a가 더 큼 ${test_a_v}` : (test_a_v < test_b_v) ? `b가 더 큼 ${test_b_v}` : "둘이 같음");

const recv = resolveKorean(["건강에 좋은 영양제", "사과는 건강에 좋습니다."]);
console.log("연관성 테스트: ")
console.log("수치: ", recv);
*/

// function actResolveKorean(recv: string): number {
//     const zeta = 
// }

function actResolveKorean([rec, rev]: [rec: string, rev: string]): number {
    const nema = actCleanNouns(rec);
    const zeta = actCleanNouns(rev);

    const reka = actArraySplit(nema);
    const deta = actArraySplit(zeta);

    let actScore = 0;

    reka.forEach(r => {
        if (deta.includes(r)) {
            actScore += 1;
        }
    });

    return actScore;
}

const test_k_c = actResolveKorean(["사과주스", "오렌지 주스"]);
const test_c_v = actResolveKorean(["햄버거 너무 맛있다.", "오늘은 햄버거집에 갔습니다."]);

console.log(test_k_c, test_c_v);
console.log((test_k_c > test_c_v) ? "첫번째 글의 연관성이 더 높음" : (test_k_c < test_c_v) ? "두번째 글의 연관성이 더 높음" : "두글의 연관성이 똑같음");
