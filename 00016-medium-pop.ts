// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
]


// ============= Your Code Here =============
type Pop<T extends any[]> =  T extends [...infer U, infer _] ? U : []  
type Shift<T extends any[]> = T extends [infer _, ...infer U] ? U : []
type Unshift<T extends any[], U> = [U, ...T]
type Push<T extends any[], U> = [...T, U]
