import { Ref } from "vue";

export const toPartialRefs = <T extends object, K extends keyof T>(obj: T, keys: K[]): { [K in keyof T]: Ref } => {
    return keys.reduce((acc, key) => {
        acc[key] = ref(obj[key])
        return acc
    }
        , {} as { [K in keyof T]: Ref })

}


//keys.map(key =>({key:toRef(obj, key)}))