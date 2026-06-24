 function merge(
        left: number[],
        right: number[]
    ): number[] {

        const result: number[] = [];

        let i = 0;
        let j = 0;

        while (
            i < left.length &&
            j < right.length
        ) {

            if (left[i] <= right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }

        while (i < left.length) {
            result.push(left[i]);
            i++;
        }

        while (j < right.length) {
            result.push(right[j]);
            j++;
        }

        return result;
    }

export function mergeSort(                                              //TC- Worst-> O(nlogn), Average -> O(nlogn), Best -> O(nlogn)
    arr: number[]
): number[] {

    if (arr.length <= 1) {
        return [...arr];                                                //SC - O(n)
    }

    const mid =
        Math.floor(arr.length / 2);

    const left =
        mergeSort(arr.slice(0, mid));

    const right =
        mergeSort(arr.slice(mid));

    return merge(left, right);

}