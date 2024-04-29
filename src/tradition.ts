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