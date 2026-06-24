export function selectionSort(                                            //TC- Worst-> O(n²), Average -> O(n²), Best -> O(n)
    arr: number[]
): number[] {

    const result = [...arr];                                             //SC - O(n)

    for (let i = 0; i < result.length - 1; i++) {

        let minIndex = i;

        for (
            let j = i + 1;
            j < result.length;
            j++
        ) {

            if (
                result[j] < result[minIndex]
            ) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {

            [result[i], result[minIndex]] =
            [result[minIndex], result[i]];
        }
    }

    return result;
}