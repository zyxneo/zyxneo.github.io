export * from "./generateAIMessage"
import newId from "./newid"

const randChoice = function <T> (arr: Array<T>): T {
    return arr[Math.floor(Math.random() * arr.length)]
}
export {
    newId,
    randChoice
}

