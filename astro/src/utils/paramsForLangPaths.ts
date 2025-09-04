export const paramsForLangPaths = () => {
    return [
        { params: { lang: undefined }}, //en_usはURLにでない
        { params: { lang: "ja_jp" }},
    ];
}