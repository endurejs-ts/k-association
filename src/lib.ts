export function resolvesplit(word: string): string[] {
    const CHOSUNG = [
        'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 
        'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 
        'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
    ];

    const JUNGSUNG = [
        'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 
        'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 
        'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
    ];

    const JONGSUNG = [
        '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 
        'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 
        'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 
        'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
    ];

    let res = [];

    for (let i = 0; i < word.length; i++) {
        const c = word.charCodeAt(i) - 0xAC00;
        if (c < 0 || c > 11171) {
            res.push(word[i]);
            continue;
        }

        const J_index = c % 28;
        const JU_index = ((c - J_index) / 28) % 21;
        const C_index = (((c - J_index) / 28) - JU_index) / 21;

        res.push(CHOSUNG[C_index], JUNGSUNG[JU_index], JONGSUNG[J_index]);
    }

    return res.filter(v => v);
}

export function nouns(resv: string): string[] {
    const pcl = /(은|는|이|가|를|만)$/;
    const words = resv.split(/\s+/);

    const nouns = words.map(word => word.replace(pcl, '')).filter(word => word.trim() !== '');

    return nouns;
}

export function cleanNouns(resv: string): string[] {
    const ptn = /은|는|이|가|를|만/g;
    let words = resv.split(/\s+/);

    words = words.map(w => w.replace(ptn, "").replace(/[.,]/g, ''));
    return words.filter(w => w.trim() !== "");
}

export function actCleanNouns(recv: string): string[] {
    const ptp = /은|는|이|가|를|만/g;
    const putp = /[.,!?;:]/g;

    let clstn = recv.replace(ptp, "");
    clstn = clstn.replace(putp, "");

    const NS = clstn.split(/\s+/).filter(w => w.trim() !== "");
    return NS;
}