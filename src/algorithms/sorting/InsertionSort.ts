export function insertionSort(                                                  //TC- Worst-> O(n²), Average -> O(n²), Best -> O(n)
    arr: number[]
): number[] {

    const result = [...arr];                                                    //SC - O(n)

    for (let i = 1; i < result.length; i++) {

        const current = result[i];

        let j = i - 1;

        while (
            j >= 0 &&
            result[j] > current
        ) {

            result[j + 1] = result[j];

            j--;
        }

        result[j + 1] = current;
    }

    return result;
}