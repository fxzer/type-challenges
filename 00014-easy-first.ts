// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]


// ============= Your Code Here =============
//解法一：判断是否为空数组，如果是空数组返回 never，否则返回第一个元素
// type First<T extends any[]> = T extends [] ? never : T[0] //判断是否为空数组：T extends []

//解法二：判断数组长度是否为 0，如果是空数组返回 never，否则返回第一个元素
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0] //判断数组长度是否为 0：T['length'] extends 0

//解法三：infer P 获取第一个元素
// type First<T extends any[]> = T extends [infer P, ...rest[]] ? P : never // infer P：获取第一个元素，...rest[]：获取剩余元素
 
//解法四： T[number] 遍历数组
type First<T extends any[]> =  T[0] extends T[number] ? T[0] : never
