// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const
type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>


// ============= Your Code Here =============
// type TupleToObject<T extends readonly (number | string | symbol)[]> =  {
//   [K in T[number]]: K // T[number] 取出元组的值
// }
type TupleToObject<T extends readonly (keyof any)[]> =  {
  [K in T[number]]: K // T[number] 取出元组的值
}

type tupleValue = typeof tuple[number]  // "tesla" | "model 3" | "model X" | "model Y"
type KAny =  keyof any // string | number | symbol