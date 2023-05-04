// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
  Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>,
]


// ============= Your Code Here =============
//1.
// type Includes<T extends readonly any[], U> = {  [P in T[number]]: true }[U] extends true ? true : false;


// 2. 
// type Includes<T extends readonly any[], U> = {
//   [P in T[number]]: true
// }[U] extends true ? true : false;
// export type IsEqual<X, Y> =
//     (<T>() => T extends X ? 1 : 2) extends
//     (<T>() => T extends Y ? 1 : 2) ? true : false;


// type Includes<Value extends any[], Item> =
// 	IsEqual<Value[0], Item> extends true
// 		? true
// 		: Value extends [Value[0], ...infer rest]
// 			? Includes<rest, Item>
// 			: false;

/* 递归判断每一个 */
type Includes<T extends readonly unknown[], U> =
  T extends [infer First, ...infer Rest]
    ? Equal<First, U> extends true ? true : Includes<Rest, U>
    : false;


// type nn = [true, 2, 3, 5, 6, 7]
type nn = ['Kars', 'Esidisi', 'Wamuu', 'Santana']
type nnn = nn[number] // "Kars" | "Esidisi" | "Wamuu" | "Santana"
type nn1 = keyof nnn