export function px2Rem(px: number, base?: number) {
    return px / (base && !isNaN(base) && base > 0 ? base : 16) + 'rem'
}