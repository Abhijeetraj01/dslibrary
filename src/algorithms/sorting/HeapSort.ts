function heapify(
    arr: number[],
    size: number,
    root: number
): void {

    let largest = root;

    const left =
        2 * root + 1;

    const right =
        2 * root + 2;

    if (
        left < size &&
        arr[left] > arr[largest]
    ) {
        largest = left;
    }

    if (
        right < size &&
        arr[right] > arr[largest]
    ) {
        largest = right;
    }

    if (largest !== root) {

        [arr[root], arr[largest]] =
        [arr[largest], arr[root]];

        heapify(
            arr,
            size,
            largest
        );
    }
}

export function heapSort(                                                   //TC - O(nlogn)
    arr: number[]                                                           //SC - O(n)
): number[] {

    const result = [...arr];

    const n = result.length;

    // Build Max Heap
    for (
        let i = Math.floor(n / 2) - 1;
        i >= 0;
        i--
    ) {
        heapify(result, n, i);
    }

    // Extract elements
    for (
        let i = n - 1;
        i > 0;
        i--
    ) {

        [result[0], result[i]] =
        [result[i], result[0]];

        heapify(result, i, 0);
    }

    return result;

}