// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>,
]

// @ts-expect-error
type error = MyAwaited<number>

// ============= Your Code Here =============
// type MyAwaited<T> = T extends Promise<infer U>
// ? U extends Promise<any>
//   ? Awaited<U>
//   : U
// : never;
type Thenable<T> = {
  then: (onfulfilled: (arg: T) => unknown) => unknown;
}
// type MyAwaited<T extends Promise<unknown>>  = T extends Promise<infer X> ? (X extends Promise<unknown> ? MyAwaited<X> : X ): X
type MyAwaited<T extends Thenable<any> | Promise<any>> = T extends Promise<infer Inner>
? Inner extends Promise<any> ? MyAwaited<Inner> : Inner
: T extends Thenable<infer U> ? U : false
