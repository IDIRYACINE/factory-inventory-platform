

type Index = number

type BinarySearchProps<E, T> = { 
    list: E[], target: T, 
    similarity: (target: T, element: E) => Index,
    bigger : (target: T, element: E) => boolean
}

export default function binarySearch<E, T>({ list, target, similarity,bigger }: BinarySearchProps<E, T>) {
    let low = 0
    let high = list.length - 1

    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const loawerHalf = bigger(target, list[mid])

        const similiarityIndex = similarity(target, list[mid]) 

        if (loawerHalf) {
            low = mid + 1
        } else  {
            high = mid - 1
        } 

        return mid
        
    }

    return -1

}