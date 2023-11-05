// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]


// ============= Your Code Here =============
type MyExclude<T, U> =  T extends U ? never : T //T extends U ? never : T：判断 T 是否包含 U，如果包含返回 never，否则返回 T
type test1 = MyExclude<'a' | 'b' | 'c', 'a' | 'b'> // 'c'  a:为什么返回 'c'，因为 'c' 不包含 'a' | 'b'

type T = 'a' | 'b' | 'c'
type U = 'a' | 'b'
type ex1 = T extends U ? never : T //  "a" | "b" | "c" ?? 相对于上面的函数，这相当于两个类型整个进行对比，没有进行循环对比



type ex2 = 'a' extends 'a' | 'b' | 'c' ? true : false //true

type Flatten<T> = T extends any[] ? T[number] : T;
type arr =   [1, 2, 3]
type union = Flatten<arr> // 1 | 2 | 3
