import { resolvesplit, nouns, cleanNouns, actCleanNouns } from './lib';

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

const test_a_v = resolveKorean(["사과를 먹는 나무", "사과를 자르는 사람"]);
const test_b_v = resolveKorean(["바나나 알러지", "세균으로 인해 감염된 알러지"]);

console.log(test_a_v, test_b_v);
console.log((test_a_v > test_b_v) ? `a가 더 큼 ${test_a_v}` : (test_a_v < test_b_v) ? `b가 더 큼 ${test_b_v}` : "둘이 같음");