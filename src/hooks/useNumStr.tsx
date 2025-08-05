export default function useNumStr(arg: string | number): string {
    return typeof arg === 'number' ? `${arg} px` : arg
};
