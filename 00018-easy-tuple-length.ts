// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>,
]


// ============= Your Code Here =============
//解法一：使用数组的 length 属性
type Length<T extends readonly any[]> =  T['length'] 
// type Length<T extends readonly unknown[]>  = T['length']
//解法二：使用元组的特性
// type Length<T extends readonly any[]> =  T extends readonly [...infer _, any] ? T['length'] : 0  //...infer _ 表示剩余元素，any 表示最后一个元素


type val1 = typeof tesla extends readonly any[] ? 1 : 0 // 作用：判断是否是元组 , 为什么需要 readonly any[] 因为元组是只读数组
type val2 = typeof tesla['length'] // 作用：获取元组长度