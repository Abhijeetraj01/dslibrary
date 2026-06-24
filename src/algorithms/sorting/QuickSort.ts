export function quickSort(arr: number[]): number[] {                             //TC- Worst-> O(n²), Average -> O(nlogn), Best -> O(nlogn)
    const result = [...arr];                                                     //SC - O(nlogn)

    quickSortHelper(
        result,
        0,
        result.length - 1
    );

    return result;
}

function quickSortHelper(
    arr: number[],
    low: number,
    high: number
): void {

    if (low < high) {

        const pivotIndex =
            partition(arr, low, high);

        quickSortHelper(
            arr,
            low,
            pivotIndex - 1
        );

        quickSortHelper(
            arr,
            pivotIndex + 1,
            high
        );
    }
}

function partition(
    arr: number[],
    low: number,
    high: number
): number {

    const pivot = arr[high];

    let i = low - 1;

    for (let j = low; j < high; j++) {

        if (arr[j] < pivot) {

            i++;

            [arr[i], arr[j]] =
            [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[high]] =
    [arr[high], arr[i + 1]];

    return i + 1;
}