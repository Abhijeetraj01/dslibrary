export function bubbleSort(                                                 //TC- Worst-> O(n²), Average -> O(n²), Best -> O(n)
    arr: number[]
): number[] {                      
    const result = [...arr];                                               //SC - O(n)

    for (let i = 0; i < result.length - 1; i++) {

        let swapped = false;

        for (let j = 0; j < result.length - 1 - i; j++) {

            if (result[j] > result[j + 1]) {

                [result[j], result[j + 1]] =
                [result[j + 1], result[j]];

                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }

    return result;
}