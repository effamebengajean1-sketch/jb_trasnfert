
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Utilisateur
 * 
 */
export type Utilisateur = $Result.DefaultSelection<Prisma.$UtilisateurPayload>
/**
 * Model Galerie
 * 
 */
export type Galerie = $Result.DefaultSelection<Prisma.$GaleriePayload>
/**
 * Model Photo
 * 
 */
export type Photo = $Result.DefaultSelection<Prisma.$PhotoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Utilisateurs
 * const utilisateurs = await prisma.utilisateur.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Utilisateurs
   * const utilisateurs = await prisma.utilisateur.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.utilisateur`: Exposes CRUD operations for the **Utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateur.findMany()
    * ```
    */
  get utilisateur(): Prisma.UtilisateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galerie`: Exposes CRUD operations for the **Galerie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Galeries
    * const galeries = await prisma.galerie.findMany()
    * ```
    */
  get galerie(): Prisma.GalerieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Utilisateur: 'Utilisateur',
    Galerie: 'Galerie',
    Photo: 'Photo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "utilisateur" | "galerie" | "photo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Utilisateur: {
        payload: Prisma.$UtilisateurPayload<ExtArgs>
        fields: Prisma.UtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findFirst: {
            args: Prisma.UtilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findMany: {
            args: Prisma.UtilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          create: {
            args: Prisma.UtilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          createMany: {
            args: Prisma.UtilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UtilisateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          delete: {
            args: Prisma.UtilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          update: {
            args: Prisma.UtilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UtilisateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          upsert: {
            args: Prisma.UtilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          aggregate: {
            args: Prisma.UtilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateur>
          }
          groupBy: {
            args: Prisma.UtilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurCountAggregateOutputType> | number
          }
        }
      }
      Galerie: {
        payload: Prisma.$GaleriePayload<ExtArgs>
        fields: Prisma.GalerieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalerieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalerieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          findFirst: {
            args: Prisma.GalerieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalerieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          findMany: {
            args: Prisma.GalerieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>[]
          }
          create: {
            args: Prisma.GalerieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          createMany: {
            args: Prisma.GalerieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalerieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>[]
          }
          delete: {
            args: Prisma.GalerieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          update: {
            args: Prisma.GalerieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          deleteMany: {
            args: Prisma.GalerieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalerieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalerieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>[]
          }
          upsert: {
            args: Prisma.GalerieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          aggregate: {
            args: Prisma.GalerieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalerie>
          }
          groupBy: {
            args: Prisma.GalerieGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalerieGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalerieCountArgs<ExtArgs>
            result: $Utils.Optional<GalerieCountAggregateOutputType> | number
          }
        }
      }
      Photo: {
        payload: Prisma.$PhotoPayload<ExtArgs>
        fields: Prisma.PhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findFirst: {
            args: Prisma.PhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findMany: {
            args: Prisma.PhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          create: {
            args: Prisma.PhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          createMany: {
            args: Prisma.PhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          delete: {
            args: Prisma.PhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          update: {
            args: Prisma.PhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          upsert: {
            args: Prisma.PhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.PhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    utilisateur?: UtilisateurOmit
    galerie?: GalerieOmit
    photo?: PhotoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UtilisateurCountOutputType
   */

  export type UtilisateurCountOutputType = {
    galeries: number
  }

  export type UtilisateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    galeries?: boolean | UtilisateurCountOutputTypeCountGaleriesArgs
  }

  // Custom InputTypes
  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisateurCountOutputType
     */
    select?: UtilisateurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountGaleriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalerieWhereInput
  }


  /**
   * Count Type GalerieCountOutputType
   */

  export type GalerieCountOutputType = {
    photos: number
  }

  export type GalerieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | GalerieCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes
  /**
   * GalerieCountOutputType without action
   */
  export type GalerieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalerieCountOutputType
     */
    select?: GalerieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GalerieCountOutputType without action
   */
  export type GalerieCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Utilisateur
   */

  export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  export type UtilisateurMinAggregateOutputType = {
    id: string | null
    email: string | null
    motDePasseHash: string | null
    nom: string | null
    role: $Enums.Role | null
    dateCreation: Date | null
  }

  export type UtilisateurMaxAggregateOutputType = {
    id: string | null
    email: string | null
    motDePasseHash: string | null
    nom: string | null
    role: $Enums.Role | null
    dateCreation: Date | null
  }

  export type UtilisateurCountAggregateOutputType = {
    id: number
    email: number
    motDePasseHash: number
    nom: number
    role: number
    dateCreation: number
    _all: number
  }


  export type UtilisateurMinAggregateInputType = {
    id?: true
    email?: true
    motDePasseHash?: true
    nom?: true
    role?: true
    dateCreation?: true
  }

  export type UtilisateurMaxAggregateInputType = {
    id?: true
    email?: true
    motDePasseHash?: true
    nom?: true
    role?: true
    dateCreation?: true
  }

  export type UtilisateurCountAggregateInputType = {
    id?: true
    email?: true
    motDePasseHash?: true
    nom?: true
    role?: true
    dateCreation?: true
    _all?: true
  }

  export type UtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateur to aggregate.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilisateurs
    **/
    _count?: true | UtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateurMaxAggregateInputType
  }

  export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur[P]>
      : GetScalarType<T[P], AggregateUtilisateur[P]>
  }




  export type UtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithAggregationInput | UtilisateurOrderByWithAggregationInput[]
    by: UtilisateurScalarFieldEnum[] | UtilisateurScalarFieldEnum
    having?: UtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateurCountAggregateInputType | true
    _min?: UtilisateurMinAggregateInputType
    _max?: UtilisateurMaxAggregateInputType
  }

  export type UtilisateurGroupByOutputType = {
    id: string
    email: string
    motDePasseHash: string
    nom: string
    role: $Enums.Role
    dateCreation: Date
    _count: UtilisateurCountAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  type GetUtilisateurGroupByPayload<T extends UtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type UtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    motDePasseHash?: boolean
    nom?: boolean
    role?: boolean
    dateCreation?: boolean
    galeries?: boolean | Utilisateur$galeriesArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    motDePasseHash?: boolean
    nom?: boolean
    role?: boolean
    dateCreation?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    motDePasseHash?: boolean
    nom?: boolean
    role?: boolean
    dateCreation?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectScalar = {
    id?: boolean
    email?: boolean
    motDePasseHash?: boolean
    nom?: boolean
    role?: boolean
    dateCreation?: boolean
  }

  export type UtilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "motDePasseHash" | "nom" | "role" | "dateCreation", ExtArgs["result"]["utilisateur"]>
  export type UtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    galeries?: boolean | Utilisateur$galeriesArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UtilisateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UtilisateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utilisateur"
    objects: {
      galeries: Prisma.$GaleriePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      motDePasseHash: string
      nom: string
      role: $Enums.Role
      dateCreation: Date
    }, ExtArgs["result"]["utilisateur"]>
    composites: {}
  }

  type UtilisateurGetPayload<S extends boolean | null | undefined | UtilisateurDefaultArgs> = $Result.GetResult<Prisma.$UtilisateurPayload, S>

  type UtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateurCountAggregateInputType | true
    }

  export interface UtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utilisateur'], meta: { name: 'Utilisateur' } }
    /**
     * Find zero or one Utilisateur that matches the filter.
     * @param {UtilisateurFindUniqueArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilisateurFindUniqueArgs>(args: SelectSubset<T, UtilisateurFindUniqueArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilisateurFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilisateurFindFirstArgs>(args?: SelectSubset<T, UtilisateurFindFirstArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilisateurFindManyArgs>(args?: SelectSubset<T, UtilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateur.
     * @param {UtilisateurCreateArgs} args - Arguments to create a Utilisateur.
     * @example
     * // Create one Utilisateur
     * const Utilisateur = await prisma.utilisateur.create({
     *   data: {
     *     // ... data to create a Utilisateur
     *   }
     * })
     * 
     */
    create<T extends UtilisateurCreateArgs>(args: SelectSubset<T, UtilisateurCreateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {UtilisateurCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilisateurCreateManyArgs>(args?: SelectSubset<T, UtilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Utilisateurs and returns the data saved in the database.
     * @param {UtilisateurCreateManyAndReturnArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UtilisateurCreateManyAndReturnArgs>(args?: SelectSubset<T, UtilisateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Utilisateur.
     * @param {UtilisateurDeleteArgs} args - Arguments to delete one Utilisateur.
     * @example
     * // Delete one Utilisateur
     * const Utilisateur = await prisma.utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur
     *   }
     * })
     * 
     */
    delete<T extends UtilisateurDeleteArgs>(args: SelectSubset<T, UtilisateurDeleteArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateur.
     * @param {UtilisateurUpdateArgs} args - Arguments to update one Utilisateur.
     * @example
     * // Update one Utilisateur
     * const utilisateur = await prisma.utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilisateurUpdateArgs>(args: SelectSubset<T, UtilisateurUpdateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {UtilisateurDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilisateurDeleteManyArgs>(args?: SelectSubset<T, UtilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilisateurUpdateManyArgs>(args: SelectSubset<T, UtilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs and returns the data updated in the database.
     * @param {UtilisateurUpdateManyAndReturnArgs} args - Arguments to update many Utilisateurs.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UtilisateurUpdateManyAndReturnArgs>(args: SelectSubset<T, UtilisateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Utilisateur.
     * @param {UtilisateurUpsertArgs} args - Arguments to update or create a Utilisateur.
     * @example
     * // Update or create a Utilisateur
     * const utilisateur = await prisma.utilisateur.upsert({
     *   create: {
     *     // ... data to create a Utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur we want to update
     *   }
     * })
     */
    upsert<T extends UtilisateurUpsertArgs>(args: SelectSubset<T, UtilisateurUpsertArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateur.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends UtilisateurCountArgs>(
      args?: Subset<T, UtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UtilisateurAggregateArgs>(args: Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>

    /**
     * Group by Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: UtilisateurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utilisateur model
   */
  readonly fields: UtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    galeries<T extends Utilisateur$galeriesArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$galeriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Utilisateur model
   */
  interface UtilisateurFieldRefs {
    readonly id: FieldRef<"Utilisateur", 'String'>
    readonly email: FieldRef<"Utilisateur", 'String'>
    readonly motDePasseHash: FieldRef<"Utilisateur", 'String'>
    readonly nom: FieldRef<"Utilisateur", 'String'>
    readonly role: FieldRef<"Utilisateur", 'Role'>
    readonly dateCreation: FieldRef<"Utilisateur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Utilisateur findUnique
   */
  export type UtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findUniqueOrThrow
   */
  export type UtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findFirst
   */
  export type UtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findFirstOrThrow
   */
  export type UtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findMany
   */
  export type UtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur create
   */
  export type UtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Utilisateur.
     */
    data: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
  }

  /**
   * Utilisateur createMany
   */
  export type UtilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateur createManyAndReturn
   */
  export type UtilisateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateur update
   */
  export type UtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Utilisateur.
     */
    data: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
    /**
     * Choose, which Utilisateur to update.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur updateMany
   */
  export type UtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur updateManyAndReturn
   */
  export type UtilisateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur upsert
   */
  export type UtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Utilisateur to update in case it exists.
     */
    where: UtilisateurWhereUniqueInput
    /**
     * In case the Utilisateur found by the `where` argument doesn't exist, create a new Utilisateur with this data.
     */
    create: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
    /**
     * In case the Utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
  }

  /**
   * Utilisateur delete
   */
  export type UtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter which Utilisateur to delete.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur deleteMany
   */
  export type UtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to delete
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * Utilisateur.galeries
   */
  export type Utilisateur$galeriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    where?: GalerieWhereInput
    orderBy?: GalerieOrderByWithRelationInput | GalerieOrderByWithRelationInput[]
    cursor?: GalerieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GalerieScalarFieldEnum | GalerieScalarFieldEnum[]
  }

  /**
   * Utilisateur without action
   */
  export type UtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
  }


  /**
   * Model Galerie
   */

  export type AggregateGalerie = {
    _count: GalerieCountAggregateOutputType | null
    _min: GalerieMinAggregateOutputType | null
    _max: GalerieMaxAggregateOutputType | null
  }

  export type GalerieMinAggregateOutputType = {
    id: string | null
    titre: string | null
    slug: string | null
    dateCreation: Date | null
    utilisateurId: string | null
  }

  export type GalerieMaxAggregateOutputType = {
    id: string | null
    titre: string | null
    slug: string | null
    dateCreation: Date | null
    utilisateurId: string | null
  }

  export type GalerieCountAggregateOutputType = {
    id: number
    titre: number
    slug: number
    dateCreation: number
    utilisateurId: number
    _all: number
  }


  export type GalerieMinAggregateInputType = {
    id?: true
    titre?: true
    slug?: true
    dateCreation?: true
    utilisateurId?: true
  }

  export type GalerieMaxAggregateInputType = {
    id?: true
    titre?: true
    slug?: true
    dateCreation?: true
    utilisateurId?: true
  }

  export type GalerieCountAggregateInputType = {
    id?: true
    titre?: true
    slug?: true
    dateCreation?: true
    utilisateurId?: true
    _all?: true
  }

  export type GalerieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galerie to aggregate.
     */
    where?: GalerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeries to fetch.
     */
    orderBy?: GalerieOrderByWithRelationInput | GalerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Galeries
    **/
    _count?: true | GalerieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalerieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalerieMaxAggregateInputType
  }

  export type GetGalerieAggregateType<T extends GalerieAggregateArgs> = {
        [P in keyof T & keyof AggregateGalerie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalerie[P]>
      : GetScalarType<T[P], AggregateGalerie[P]>
  }




  export type GalerieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalerieWhereInput
    orderBy?: GalerieOrderByWithAggregationInput | GalerieOrderByWithAggregationInput[]
    by: GalerieScalarFieldEnum[] | GalerieScalarFieldEnum
    having?: GalerieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalerieCountAggregateInputType | true
    _min?: GalerieMinAggregateInputType
    _max?: GalerieMaxAggregateInputType
  }

  export type GalerieGroupByOutputType = {
    id: string
    titre: string
    slug: string
    dateCreation: Date
    utilisateurId: string
    _count: GalerieCountAggregateOutputType | null
    _min: GalerieMinAggregateOutputType | null
    _max: GalerieMaxAggregateOutputType | null
  }

  type GetGalerieGroupByPayload<T extends GalerieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalerieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalerieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalerieGroupByOutputType[P]>
            : GetScalarType<T[P], GalerieGroupByOutputType[P]>
        }
      >
    >


  export type GalerieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    slug?: boolean
    dateCreation?: boolean
    utilisateurId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    photos?: boolean | Galerie$photosArgs<ExtArgs>
    _count?: boolean | GalerieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galerie"]>

  export type GalerieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    slug?: boolean
    dateCreation?: boolean
    utilisateurId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galerie"]>

  export type GalerieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    slug?: boolean
    dateCreation?: boolean
    utilisateurId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galerie"]>

  export type GalerieSelectScalar = {
    id?: boolean
    titre?: boolean
    slug?: boolean
    dateCreation?: boolean
    utilisateurId?: boolean
  }

  export type GalerieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "slug" | "dateCreation" | "utilisateurId", ExtArgs["result"]["galerie"]>
  export type GalerieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    photos?: boolean | Galerie$photosArgs<ExtArgs>
    _count?: boolean | GalerieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GalerieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type GalerieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $GaleriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Galerie"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      photos: Prisma.$PhotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titre: string
      slug: string
      dateCreation: Date
      utilisateurId: string
    }, ExtArgs["result"]["galerie"]>
    composites: {}
  }

  type GalerieGetPayload<S extends boolean | null | undefined | GalerieDefaultArgs> = $Result.GetResult<Prisma.$GaleriePayload, S>

  type GalerieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalerieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalerieCountAggregateInputType | true
    }

  export interface GalerieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Galerie'], meta: { name: 'Galerie' } }
    /**
     * Find zero or one Galerie that matches the filter.
     * @param {GalerieFindUniqueArgs} args - Arguments to find a Galerie
     * @example
     * // Get one Galerie
     * const galerie = await prisma.galerie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalerieFindUniqueArgs>(args: SelectSubset<T, GalerieFindUniqueArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Galerie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalerieFindUniqueOrThrowArgs} args - Arguments to find a Galerie
     * @example
     * // Get one Galerie
     * const galerie = await prisma.galerie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalerieFindUniqueOrThrowArgs>(args: SelectSubset<T, GalerieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Galerie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieFindFirstArgs} args - Arguments to find a Galerie
     * @example
     * // Get one Galerie
     * const galerie = await prisma.galerie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalerieFindFirstArgs>(args?: SelectSubset<T, GalerieFindFirstArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Galerie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieFindFirstOrThrowArgs} args - Arguments to find a Galerie
     * @example
     * // Get one Galerie
     * const galerie = await prisma.galerie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalerieFindFirstOrThrowArgs>(args?: SelectSubset<T, GalerieFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Galeries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Galeries
     * const galeries = await prisma.galerie.findMany()
     * 
     * // Get first 10 Galeries
     * const galeries = await prisma.galerie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galerieWithIdOnly = await prisma.galerie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalerieFindManyArgs>(args?: SelectSubset<T, GalerieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Galerie.
     * @param {GalerieCreateArgs} args - Arguments to create a Galerie.
     * @example
     * // Create one Galerie
     * const Galerie = await prisma.galerie.create({
     *   data: {
     *     // ... data to create a Galerie
     *   }
     * })
     * 
     */
    create<T extends GalerieCreateArgs>(args: SelectSubset<T, GalerieCreateArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Galeries.
     * @param {GalerieCreateManyArgs} args - Arguments to create many Galeries.
     * @example
     * // Create many Galeries
     * const galerie = await prisma.galerie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalerieCreateManyArgs>(args?: SelectSubset<T, GalerieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Galeries and returns the data saved in the database.
     * @param {GalerieCreateManyAndReturnArgs} args - Arguments to create many Galeries.
     * @example
     * // Create many Galeries
     * const galerie = await prisma.galerie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Galeries and only return the `id`
     * const galerieWithIdOnly = await prisma.galerie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalerieCreateManyAndReturnArgs>(args?: SelectSubset<T, GalerieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Galerie.
     * @param {GalerieDeleteArgs} args - Arguments to delete one Galerie.
     * @example
     * // Delete one Galerie
     * const Galerie = await prisma.galerie.delete({
     *   where: {
     *     // ... filter to delete one Galerie
     *   }
     * })
     * 
     */
    delete<T extends GalerieDeleteArgs>(args: SelectSubset<T, GalerieDeleteArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Galerie.
     * @param {GalerieUpdateArgs} args - Arguments to update one Galerie.
     * @example
     * // Update one Galerie
     * const galerie = await prisma.galerie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalerieUpdateArgs>(args: SelectSubset<T, GalerieUpdateArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Galeries.
     * @param {GalerieDeleteManyArgs} args - Arguments to filter Galeries to delete.
     * @example
     * // Delete a few Galeries
     * const { count } = await prisma.galerie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalerieDeleteManyArgs>(args?: SelectSubset<T, GalerieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Galeries
     * const galerie = await prisma.galerie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalerieUpdateManyArgs>(args: SelectSubset<T, GalerieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galeries and returns the data updated in the database.
     * @param {GalerieUpdateManyAndReturnArgs} args - Arguments to update many Galeries.
     * @example
     * // Update many Galeries
     * const galerie = await prisma.galerie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Galeries and only return the `id`
     * const galerieWithIdOnly = await prisma.galerie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GalerieUpdateManyAndReturnArgs>(args: SelectSubset<T, GalerieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Galerie.
     * @param {GalerieUpsertArgs} args - Arguments to update or create a Galerie.
     * @example
     * // Update or create a Galerie
     * const galerie = await prisma.galerie.upsert({
     *   create: {
     *     // ... data to create a Galerie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Galerie we want to update
     *   }
     * })
     */
    upsert<T extends GalerieUpsertArgs>(args: SelectSubset<T, GalerieUpsertArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Galeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieCountArgs} args - Arguments to filter Galeries to count.
     * @example
     * // Count the number of Galeries
     * const count = await prisma.galerie.count({
     *   where: {
     *     // ... the filter for the Galeries we want to count
     *   }
     * })
    **/
    count<T extends GalerieCountArgs>(
      args?: Subset<T, GalerieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalerieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Galerie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GalerieAggregateArgs>(args: Subset<T, GalerieAggregateArgs>): Prisma.PrismaPromise<GetGalerieAggregateType<T>>

    /**
     * Group by Galerie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GalerieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalerieGroupByArgs['orderBy'] }
        : { orderBy?: GalerieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GalerieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalerieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Galerie model
   */
  readonly fields: GalerieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Galerie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalerieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    photos<T extends Galerie$photosArgs<ExtArgs> = {}>(args?: Subset<T, Galerie$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Galerie model
   */
  interface GalerieFieldRefs {
    readonly id: FieldRef<"Galerie", 'String'>
    readonly titre: FieldRef<"Galerie", 'String'>
    readonly slug: FieldRef<"Galerie", 'String'>
    readonly dateCreation: FieldRef<"Galerie", 'DateTime'>
    readonly utilisateurId: FieldRef<"Galerie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Galerie findUnique
   */
  export type GalerieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter, which Galerie to fetch.
     */
    where: GalerieWhereUniqueInput
  }

  /**
   * Galerie findUniqueOrThrow
   */
  export type GalerieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter, which Galerie to fetch.
     */
    where: GalerieWhereUniqueInput
  }

  /**
   * Galerie findFirst
   */
  export type GalerieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter, which Galerie to fetch.
     */
    where?: GalerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeries to fetch.
     */
    orderBy?: GalerieOrderByWithRelationInput | GalerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galeries.
     */
    cursor?: GalerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galeries.
     */
    distinct?: GalerieScalarFieldEnum | GalerieScalarFieldEnum[]
  }

  /**
   * Galerie findFirstOrThrow
   */
  export type GalerieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter, which Galerie to fetch.
     */
    where?: GalerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeries to fetch.
     */
    orderBy?: GalerieOrderByWithRelationInput | GalerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galeries.
     */
    cursor?: GalerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galeries.
     */
    distinct?: GalerieScalarFieldEnum | GalerieScalarFieldEnum[]
  }

  /**
   * Galerie findMany
   */
  export type GalerieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter, which Galeries to fetch.
     */
    where?: GalerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeries to fetch.
     */
    orderBy?: GalerieOrderByWithRelationInput | GalerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Galeries.
     */
    cursor?: GalerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galeries.
     */
    distinct?: GalerieScalarFieldEnum | GalerieScalarFieldEnum[]
  }

  /**
   * Galerie create
   */
  export type GalerieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * The data needed to create a Galerie.
     */
    data: XOR<GalerieCreateInput, GalerieUncheckedCreateInput>
  }

  /**
   * Galerie createMany
   */
  export type GalerieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Galeries.
     */
    data: GalerieCreateManyInput | GalerieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Galerie createManyAndReturn
   */
  export type GalerieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * The data used to create many Galeries.
     */
    data: GalerieCreateManyInput | GalerieCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Galerie update
   */
  export type GalerieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * The data needed to update a Galerie.
     */
    data: XOR<GalerieUpdateInput, GalerieUncheckedUpdateInput>
    /**
     * Choose, which Galerie to update.
     */
    where: GalerieWhereUniqueInput
  }

  /**
   * Galerie updateMany
   */
  export type GalerieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Galeries.
     */
    data: XOR<GalerieUpdateManyMutationInput, GalerieUncheckedUpdateManyInput>
    /**
     * Filter which Galeries to update
     */
    where?: GalerieWhereInput
    /**
     * Limit how many Galeries to update.
     */
    limit?: number
  }

  /**
   * Galerie updateManyAndReturn
   */
  export type GalerieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * The data used to update Galeries.
     */
    data: XOR<GalerieUpdateManyMutationInput, GalerieUncheckedUpdateManyInput>
    /**
     * Filter which Galeries to update
     */
    where?: GalerieWhereInput
    /**
     * Limit how many Galeries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Galerie upsert
   */
  export type GalerieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * The filter to search for the Galerie to update in case it exists.
     */
    where: GalerieWhereUniqueInput
    /**
     * In case the Galerie found by the `where` argument doesn't exist, create a new Galerie with this data.
     */
    create: XOR<GalerieCreateInput, GalerieUncheckedCreateInput>
    /**
     * In case the Galerie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalerieUpdateInput, GalerieUncheckedUpdateInput>
  }

  /**
   * Galerie delete
   */
  export type GalerieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter which Galerie to delete.
     */
    where: GalerieWhereUniqueInput
  }

  /**
   * Galerie deleteMany
   */
  export type GalerieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galeries to delete
     */
    where?: GalerieWhereInput
    /**
     * Limit how many Galeries to delete.
     */
    limit?: number
  }

  /**
   * Galerie.photos
   */
  export type Galerie$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Galerie without action
   */
  export type GalerieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
  }


  /**
   * Model Photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoAvgAggregateOutputType = {
    tailleOctets: number | null
  }

  export type PhotoSumAggregateOutputType = {
    tailleOctets: number | null
  }

  export type PhotoMinAggregateOutputType = {
    id: string | null
    nomFichier: string | null
    cheminFichier: string | null
    tailleOctets: number | null
    formatMime: string | null
    dateUpload: Date | null
    galerieId: string | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: string | null
    nomFichier: string | null
    cheminFichier: string | null
    tailleOctets: number | null
    formatMime: string | null
    dateUpload: Date | null
    galerieId: string | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    nomFichier: number
    cheminFichier: number
    tailleOctets: number
    formatMime: number
    dateUpload: number
    galerieId: number
    _all: number
  }


  export type PhotoAvgAggregateInputType = {
    tailleOctets?: true
  }

  export type PhotoSumAggregateInputType = {
    tailleOctets?: true
  }

  export type PhotoMinAggregateInputType = {
    id?: true
    nomFichier?: true
    cheminFichier?: true
    tailleOctets?: true
    formatMime?: true
    dateUpload?: true
    galerieId?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    nomFichier?: true
    cheminFichier?: true
    tailleOctets?: true
    formatMime?: true
    dateUpload?: true
    galerieId?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    nomFichier?: true
    cheminFichier?: true
    tailleOctets?: true
    formatMime?: true
    dateUpload?: true
    galerieId?: true
    _all?: true
  }

  export type PhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo to aggregate.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithAggregationInput | PhotoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _avg?: PhotoAvgAggregateInputType
    _sum?: PhotoSumAggregateInputType
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    id: string
    nomFichier: string
    cheminFichier: string
    tailleOctets: number
    formatMime: string
    dateUpload: Date
    galerieId: string
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomFichier?: boolean
    cheminFichier?: boolean
    tailleOctets?: boolean
    formatMime?: boolean
    dateUpload?: boolean
    galerieId?: boolean
    galerie?: boolean | GalerieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomFichier?: boolean
    cheminFichier?: boolean
    tailleOctets?: boolean
    formatMime?: boolean
    dateUpload?: boolean
    galerieId?: boolean
    galerie?: boolean | GalerieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomFichier?: boolean
    cheminFichier?: boolean
    tailleOctets?: boolean
    formatMime?: boolean
    dateUpload?: boolean
    galerieId?: boolean
    galerie?: boolean | GalerieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectScalar = {
    id?: boolean
    nomFichier?: boolean
    cheminFichier?: boolean
    tailleOctets?: boolean
    formatMime?: boolean
    dateUpload?: boolean
    galerieId?: boolean
  }

  export type PhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomFichier" | "cheminFichier" | "tailleOctets" | "formatMime" | "dateUpload" | "galerieId", ExtArgs["result"]["photo"]>
  export type PhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    galerie?: boolean | GalerieDefaultArgs<ExtArgs>
  }
  export type PhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    galerie?: boolean | GalerieDefaultArgs<ExtArgs>
  }
  export type PhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    galerie?: boolean | GalerieDefaultArgs<ExtArgs>
  }

  export type $PhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photo"
    objects: {
      galerie: Prisma.$GaleriePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomFichier: string
      cheminFichier: string
      tailleOctets: number
      formatMime: string
      dateUpload: Date
      galerieId: string
    }, ExtArgs["result"]["photo"]>
    composites: {}
  }

  type PhotoGetPayload<S extends boolean | null | undefined | PhotoDefaultArgs> = $Result.GetResult<Prisma.$PhotoPayload, S>

  type PhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoCountAggregateInputType | true
    }

  export interface PhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photo'], meta: { name: 'Photo' } }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoFindUniqueArgs>(args: SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Photo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoFindFirstArgs>(args?: SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoFindManyArgs>(args?: SelectSubset<T, PhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
     */
    create<T extends PhotoCreateArgs>(args: SelectSubset<T, PhotoCreateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Photos.
     * @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoCreateManyArgs>(args?: SelectSubset<T, PhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Photos and returns the data saved in the database.
     * @param {PhotoCreateManyAndReturnArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, PhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
     */
    delete<T extends PhotoDeleteArgs>(args: SelectSubset<T, PhotoDeleteArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoUpdateArgs>(args: SelectSubset<T, PhotoUpdateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoDeleteManyArgs>(args?: SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoUpdateManyArgs>(args: SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos and returns the data updated in the database.
     * @param {PhotoUpdateManyAndReturnArgs} args - Arguments to update many Photos.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, PhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
     */
    upsert<T extends PhotoUpsertArgs>(args: SelectSubset<T, PhotoUpsertArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photo model
   */
  readonly fields: PhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    galerie<T extends GalerieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GalerieDefaultArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Photo model
   */
  interface PhotoFieldRefs {
    readonly id: FieldRef<"Photo", 'String'>
    readonly nomFichier: FieldRef<"Photo", 'String'>
    readonly cheminFichier: FieldRef<"Photo", 'String'>
    readonly tailleOctets: FieldRef<"Photo", 'Int'>
    readonly formatMime: FieldRef<"Photo", 'String'>
    readonly dateUpload: FieldRef<"Photo", 'DateTime'>
    readonly galerieId: FieldRef<"Photo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo create
   */
  export type PhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Photo.
     */
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }

  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Photo createManyAndReturn
   */
  export type PhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo update
   */
  export type PhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Photo.
     */
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
  }

  /**
   * Photo updateManyAndReturn
   */
  export type PhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Photo to update in case it exists.
     */
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     */
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }

  /**
   * Photo delete
   */
  export type PhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter which Photo to delete.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to delete.
     */
    limit?: number
  }

  /**
   * Photo without action
   */
  export type PhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UtilisateurScalarFieldEnum: {
    id: 'id',
    email: 'email',
    motDePasseHash: 'motDePasseHash',
    nom: 'nom',
    role: 'role',
    dateCreation: 'dateCreation'
  };

  export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum]


  export const GalerieScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    slug: 'slug',
    dateCreation: 'dateCreation',
    utilisateurId: 'utilisateurId'
  };

  export type GalerieScalarFieldEnum = (typeof GalerieScalarFieldEnum)[keyof typeof GalerieScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    nomFichier: 'nomFichier',
    cheminFichier: 'cheminFichier',
    tailleOctets: 'tailleOctets',
    formatMime: 'formatMime',
    dateUpload: 'dateUpload',
    galerieId: 'galerieId'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UtilisateurWhereInput = {
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    id?: StringFilter<"Utilisateur"> | string
    email?: StringFilter<"Utilisateur"> | string
    motDePasseHash?: StringFilter<"Utilisateur"> | string
    nom?: StringFilter<"Utilisateur"> | string
    role?: EnumRoleFilter<"Utilisateur"> | $Enums.Role
    dateCreation?: DateTimeFilter<"Utilisateur"> | Date | string
    galeries?: GalerieListRelationFilter
  }

  export type UtilisateurOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasseHash?: SortOrder
    nom?: SortOrder
    role?: SortOrder
    dateCreation?: SortOrder
    galeries?: GalerieOrderByRelationAggregateInput
  }

  export type UtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    motDePasseHash?: StringFilter<"Utilisateur"> | string
    nom?: StringFilter<"Utilisateur"> | string
    role?: EnumRoleFilter<"Utilisateur"> | $Enums.Role
    dateCreation?: DateTimeFilter<"Utilisateur"> | Date | string
    galeries?: GalerieListRelationFilter
  }, "id" | "email">

  export type UtilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasseHash?: SortOrder
    nom?: SortOrder
    role?: SortOrder
    dateCreation?: SortOrder
    _count?: UtilisateurCountOrderByAggregateInput
    _max?: UtilisateurMaxOrderByAggregateInput
    _min?: UtilisateurMinOrderByAggregateInput
  }

  export type UtilisateurScalarWhereWithAggregatesInput = {
    AND?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    OR?: UtilisateurScalarWhereWithAggregatesInput[]
    NOT?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Utilisateur"> | string
    email?: StringWithAggregatesFilter<"Utilisateur"> | string
    motDePasseHash?: StringWithAggregatesFilter<"Utilisateur"> | string
    nom?: StringWithAggregatesFilter<"Utilisateur"> | string
    role?: EnumRoleWithAggregatesFilter<"Utilisateur"> | $Enums.Role
    dateCreation?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
  }

  export type GalerieWhereInput = {
    AND?: GalerieWhereInput | GalerieWhereInput[]
    OR?: GalerieWhereInput[]
    NOT?: GalerieWhereInput | GalerieWhereInput[]
    id?: StringFilter<"Galerie"> | string
    titre?: StringFilter<"Galerie"> | string
    slug?: StringFilter<"Galerie"> | string
    dateCreation?: DateTimeFilter<"Galerie"> | Date | string
    utilisateurId?: StringFilter<"Galerie"> | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    photos?: PhotoListRelationFilter
  }

  export type GalerieOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    slug?: SortOrder
    dateCreation?: SortOrder
    utilisateurId?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    photos?: PhotoOrderByRelationAggregateInput
  }

  export type GalerieWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: GalerieWhereInput | GalerieWhereInput[]
    OR?: GalerieWhereInput[]
    NOT?: GalerieWhereInput | GalerieWhereInput[]
    titre?: StringFilter<"Galerie"> | string
    dateCreation?: DateTimeFilter<"Galerie"> | Date | string
    utilisateurId?: StringFilter<"Galerie"> | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    photos?: PhotoListRelationFilter
  }, "id" | "slug">

  export type GalerieOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    slug?: SortOrder
    dateCreation?: SortOrder
    utilisateurId?: SortOrder
    _count?: GalerieCountOrderByAggregateInput
    _max?: GalerieMaxOrderByAggregateInput
    _min?: GalerieMinOrderByAggregateInput
  }

  export type GalerieScalarWhereWithAggregatesInput = {
    AND?: GalerieScalarWhereWithAggregatesInput | GalerieScalarWhereWithAggregatesInput[]
    OR?: GalerieScalarWhereWithAggregatesInput[]
    NOT?: GalerieScalarWhereWithAggregatesInput | GalerieScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Galerie"> | string
    titre?: StringWithAggregatesFilter<"Galerie"> | string
    slug?: StringWithAggregatesFilter<"Galerie"> | string
    dateCreation?: DateTimeWithAggregatesFilter<"Galerie"> | Date | string
    utilisateurId?: StringWithAggregatesFilter<"Galerie"> | string
  }

  export type PhotoWhereInput = {
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    id?: StringFilter<"Photo"> | string
    nomFichier?: StringFilter<"Photo"> | string
    cheminFichier?: StringFilter<"Photo"> | string
    tailleOctets?: IntFilter<"Photo"> | number
    formatMime?: StringFilter<"Photo"> | string
    dateUpload?: DateTimeFilter<"Photo"> | Date | string
    galerieId?: StringFilter<"Photo"> | string
    galerie?: XOR<GalerieScalarRelationFilter, GalerieWhereInput>
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    nomFichier?: SortOrder
    cheminFichier?: SortOrder
    tailleOctets?: SortOrder
    formatMime?: SortOrder
    dateUpload?: SortOrder
    galerieId?: SortOrder
    galerie?: GalerieOrderByWithRelationInput
  }

  export type PhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    nomFichier?: StringFilter<"Photo"> | string
    cheminFichier?: StringFilter<"Photo"> | string
    tailleOctets?: IntFilter<"Photo"> | number
    formatMime?: StringFilter<"Photo"> | string
    dateUpload?: DateTimeFilter<"Photo"> | Date | string
    galerieId?: StringFilter<"Photo"> | string
    galerie?: XOR<GalerieScalarRelationFilter, GalerieWhereInput>
  }, "id">

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    nomFichier?: SortOrder
    cheminFichier?: SortOrder
    tailleOctets?: SortOrder
    formatMime?: SortOrder
    dateUpload?: SortOrder
    galerieId?: SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _avg?: PhotoAvgOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
    _sum?: PhotoSumOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    OR?: PhotoScalarWhereWithAggregatesInput[]
    NOT?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Photo"> | string
    nomFichier?: StringWithAggregatesFilter<"Photo"> | string
    cheminFichier?: StringWithAggregatesFilter<"Photo"> | string
    tailleOctets?: IntWithAggregatesFilter<"Photo"> | number
    formatMime?: StringWithAggregatesFilter<"Photo"> | string
    dateUpload?: DateTimeWithAggregatesFilter<"Photo"> | Date | string
    galerieId?: StringWithAggregatesFilter<"Photo"> | string
  }

  export type UtilisateurCreateInput = {
    id?: string
    email: string
    motDePasseHash: string
    nom: string
    role?: $Enums.Role
    dateCreation?: Date | string
    galeries?: GalerieCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateInput = {
    id?: string
    email: string
    motDePasseHash: string
    nom: string
    role?: $Enums.Role
    dateCreation?: Date | string
    galeries?: GalerieUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHash?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    galeries?: GalerieUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHash?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    galeries?: GalerieUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurCreateManyInput = {
    id?: string
    email: string
    motDePasseHash: string
    nom: string
    role?: $Enums.Role
    dateCreation?: Date | string
  }

  export type UtilisateurUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHash?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHash?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalerieCreateInput = {
    id?: string
    titre: string
    slug: string
    dateCreation?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutGaleriesInput
    photos?: PhotoCreateNestedManyWithoutGalerieInput
  }

  export type GalerieUncheckedCreateInput = {
    id?: string
    titre: string
    slug: string
    dateCreation?: Date | string
    utilisateurId: string
    photos?: PhotoUncheckedCreateNestedManyWithoutGalerieInput
  }

  export type GalerieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutGaleriesNestedInput
    photos?: PhotoUpdateManyWithoutGalerieNestedInput
  }

  export type GalerieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
    photos?: PhotoUncheckedUpdateManyWithoutGalerieNestedInput
  }

  export type GalerieCreateManyInput = {
    id?: string
    titre: string
    slug: string
    dateCreation?: Date | string
    utilisateurId: string
  }

  export type GalerieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalerieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoCreateInput = {
    id?: string
    nomFichier: string
    cheminFichier: string
    tailleOctets: number
    formatMime: string
    dateUpload?: Date | string
    galerie: GalerieCreateNestedOneWithoutPhotosInput
  }

  export type PhotoUncheckedCreateInput = {
    id?: string
    nomFichier: string
    cheminFichier: string
    tailleOctets: number
    formatMime: string
    dateUpload?: Date | string
    galerieId: string
  }

  export type PhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomFichier?: StringFieldUpdateOperationsInput | string
    cheminFichier?: StringFieldUpdateOperationsInput | string
    tailleOctets?: IntFieldUpdateOperationsInput | number
    formatMime?: StringFieldUpdateOperationsInput | string
    dateUpload?: DateTimeFieldUpdateOperationsInput | Date | string
    galerie?: GalerieUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomFichier?: StringFieldUpdateOperationsInput | string
    cheminFichier?: StringFieldUpdateOperationsInput | string
    tailleOctets?: IntFieldUpdateOperationsInput | number
    formatMime?: StringFieldUpdateOperationsInput | string
    dateUpload?: DateTimeFieldUpdateOperationsInput | Date | string
    galerieId?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoCreateManyInput = {
    id?: string
    nomFichier: string
    cheminFichier: string
    tailleOctets: number
    formatMime: string
    dateUpload?: Date | string
    galerieId: string
  }

  export type PhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomFichier?: StringFieldUpdateOperationsInput | string
    cheminFichier?: StringFieldUpdateOperationsInput | string
    tailleOctets?: IntFieldUpdateOperationsInput | number
    formatMime?: StringFieldUpdateOperationsInput | string
    dateUpload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomFichier?: StringFieldUpdateOperationsInput | string
    cheminFichier?: StringFieldUpdateOperationsInput | string
    tailleOctets?: IntFieldUpdateOperationsInput | number
    formatMime?: StringFieldUpdateOperationsInput | string
    dateUpload?: DateTimeFieldUpdateOperationsInput | Date | string
    galerieId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GalerieListRelationFilter = {
    every?: GalerieWhereInput
    some?: GalerieWhereInput
    none?: GalerieWhereInput
  }

  export type GalerieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasseHash?: SortOrder
    nom?: SortOrder
    role?: SortOrder
    dateCreation?: SortOrder
  }

  export type UtilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasseHash?: SortOrder
    nom?: SortOrder
    role?: SortOrder
    dateCreation?: SortOrder
  }

  export type UtilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasseHash?: SortOrder
    nom?: SortOrder
    role?: SortOrder
    dateCreation?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UtilisateurScalarRelationFilter = {
    is?: UtilisateurWhereInput
    isNot?: UtilisateurWhereInput
  }

  export type PhotoListRelationFilter = {
    every?: PhotoWhereInput
    some?: PhotoWhereInput
    none?: PhotoWhereInput
  }

  export type PhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GalerieCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    slug?: SortOrder
    dateCreation?: SortOrder
    utilisateurId?: SortOrder
  }

  export type GalerieMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    slug?: SortOrder
    dateCreation?: SortOrder
    utilisateurId?: SortOrder
  }

  export type GalerieMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    slug?: SortOrder
    dateCreation?: SortOrder
    utilisateurId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type GalerieScalarRelationFilter = {
    is?: GalerieWhereInput
    isNot?: GalerieWhereInput
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    nomFichier?: SortOrder
    cheminFichier?: SortOrder
    tailleOctets?: SortOrder
    formatMime?: SortOrder
    dateUpload?: SortOrder
    galerieId?: SortOrder
  }

  export type PhotoAvgOrderByAggregateInput = {
    tailleOctets?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    nomFichier?: SortOrder
    cheminFichier?: SortOrder
    tailleOctets?: SortOrder
    formatMime?: SortOrder
    dateUpload?: SortOrder
    galerieId?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    nomFichier?: SortOrder
    cheminFichier?: SortOrder
    tailleOctets?: SortOrder
    formatMime?: SortOrder
    dateUpload?: SortOrder
    galerieId?: SortOrder
  }

  export type PhotoSumOrderByAggregateInput = {
    tailleOctets?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type GalerieCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<GalerieCreateWithoutUtilisateurInput, GalerieUncheckedCreateWithoutUtilisateurInput> | GalerieCreateWithoutUtilisateurInput[] | GalerieUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: GalerieCreateOrConnectWithoutUtilisateurInput | GalerieCreateOrConnectWithoutUtilisateurInput[]
    createMany?: GalerieCreateManyUtilisateurInputEnvelope
    connect?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
  }

  export type GalerieUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<GalerieCreateWithoutUtilisateurInput, GalerieUncheckedCreateWithoutUtilisateurInput> | GalerieCreateWithoutUtilisateurInput[] | GalerieUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: GalerieCreateOrConnectWithoutUtilisateurInput | GalerieCreateOrConnectWithoutUtilisateurInput[]
    createMany?: GalerieCreateManyUtilisateurInputEnvelope
    connect?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GalerieUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<GalerieCreateWithoutUtilisateurInput, GalerieUncheckedCreateWithoutUtilisateurInput> | GalerieCreateWithoutUtilisateurInput[] | GalerieUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: GalerieCreateOrConnectWithoutUtilisateurInput | GalerieCreateOrConnectWithoutUtilisateurInput[]
    upsert?: GalerieUpsertWithWhereUniqueWithoutUtilisateurInput | GalerieUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: GalerieCreateManyUtilisateurInputEnvelope
    set?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    disconnect?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    delete?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    connect?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    update?: GalerieUpdateWithWhereUniqueWithoutUtilisateurInput | GalerieUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: GalerieUpdateManyWithWhereWithoutUtilisateurInput | GalerieUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: GalerieScalarWhereInput | GalerieScalarWhereInput[]
  }

  export type GalerieUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<GalerieCreateWithoutUtilisateurInput, GalerieUncheckedCreateWithoutUtilisateurInput> | GalerieCreateWithoutUtilisateurInput[] | GalerieUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: GalerieCreateOrConnectWithoutUtilisateurInput | GalerieCreateOrConnectWithoutUtilisateurInput[]
    upsert?: GalerieUpsertWithWhereUniqueWithoutUtilisateurInput | GalerieUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: GalerieCreateManyUtilisateurInputEnvelope
    set?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    disconnect?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    delete?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    connect?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    update?: GalerieUpdateWithWhereUniqueWithoutUtilisateurInput | GalerieUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: GalerieUpdateManyWithWhereWithoutUtilisateurInput | GalerieUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: GalerieScalarWhereInput | GalerieScalarWhereInput[]
  }

  export type UtilisateurCreateNestedOneWithoutGaleriesInput = {
    create?: XOR<UtilisateurCreateWithoutGaleriesInput, UtilisateurUncheckedCreateWithoutGaleriesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutGaleriesInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type PhotoCreateNestedManyWithoutGalerieInput = {
    create?: XOR<PhotoCreateWithoutGalerieInput, PhotoUncheckedCreateWithoutGalerieInput> | PhotoCreateWithoutGalerieInput[] | PhotoUncheckedCreateWithoutGalerieInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutGalerieInput | PhotoCreateOrConnectWithoutGalerieInput[]
    createMany?: PhotoCreateManyGalerieInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type PhotoUncheckedCreateNestedManyWithoutGalerieInput = {
    create?: XOR<PhotoCreateWithoutGalerieInput, PhotoUncheckedCreateWithoutGalerieInput> | PhotoCreateWithoutGalerieInput[] | PhotoUncheckedCreateWithoutGalerieInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutGalerieInput | PhotoCreateOrConnectWithoutGalerieInput[]
    createMany?: PhotoCreateManyGalerieInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type UtilisateurUpdateOneRequiredWithoutGaleriesNestedInput = {
    create?: XOR<UtilisateurCreateWithoutGaleriesInput, UtilisateurUncheckedCreateWithoutGaleriesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutGaleriesInput
    upsert?: UtilisateurUpsertWithoutGaleriesInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutGaleriesInput, UtilisateurUpdateWithoutGaleriesInput>, UtilisateurUncheckedUpdateWithoutGaleriesInput>
  }

  export type PhotoUpdateManyWithoutGalerieNestedInput = {
    create?: XOR<PhotoCreateWithoutGalerieInput, PhotoUncheckedCreateWithoutGalerieInput> | PhotoCreateWithoutGalerieInput[] | PhotoUncheckedCreateWithoutGalerieInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutGalerieInput | PhotoCreateOrConnectWithoutGalerieInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutGalerieInput | PhotoUpsertWithWhereUniqueWithoutGalerieInput[]
    createMany?: PhotoCreateManyGalerieInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutGalerieInput | PhotoUpdateWithWhereUniqueWithoutGalerieInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutGalerieInput | PhotoUpdateManyWithWhereWithoutGalerieInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type PhotoUncheckedUpdateManyWithoutGalerieNestedInput = {
    create?: XOR<PhotoCreateWithoutGalerieInput, PhotoUncheckedCreateWithoutGalerieInput> | PhotoCreateWithoutGalerieInput[] | PhotoUncheckedCreateWithoutGalerieInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutGalerieInput | PhotoCreateOrConnectWithoutGalerieInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutGalerieInput | PhotoUpsertWithWhereUniqueWithoutGalerieInput[]
    createMany?: PhotoCreateManyGalerieInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutGalerieInput | PhotoUpdateWithWhereUniqueWithoutGalerieInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutGalerieInput | PhotoUpdateManyWithWhereWithoutGalerieInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type GalerieCreateNestedOneWithoutPhotosInput = {
    create?: XOR<GalerieCreateWithoutPhotosInput, GalerieUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: GalerieCreateOrConnectWithoutPhotosInput
    connect?: GalerieWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GalerieUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<GalerieCreateWithoutPhotosInput, GalerieUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: GalerieCreateOrConnectWithoutPhotosInput
    upsert?: GalerieUpsertWithoutPhotosInput
    connect?: GalerieWhereUniqueInput
    update?: XOR<XOR<GalerieUpdateToOneWithWhereWithoutPhotosInput, GalerieUpdateWithoutPhotosInput>, GalerieUncheckedUpdateWithoutPhotosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GalerieCreateWithoutUtilisateurInput = {
    id?: string
    titre: string
    slug: string
    dateCreation?: Date | string
    photos?: PhotoCreateNestedManyWithoutGalerieInput
  }

  export type GalerieUncheckedCreateWithoutUtilisateurInput = {
    id?: string
    titre: string
    slug: string
    dateCreation?: Date | string
    photos?: PhotoUncheckedCreateNestedManyWithoutGalerieInput
  }

  export type GalerieCreateOrConnectWithoutUtilisateurInput = {
    where: GalerieWhereUniqueInput
    create: XOR<GalerieCreateWithoutUtilisateurInput, GalerieUncheckedCreateWithoutUtilisateurInput>
  }

  export type GalerieCreateManyUtilisateurInputEnvelope = {
    data: GalerieCreateManyUtilisateurInput | GalerieCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type GalerieUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: GalerieWhereUniqueInput
    update: XOR<GalerieUpdateWithoutUtilisateurInput, GalerieUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<GalerieCreateWithoutUtilisateurInput, GalerieUncheckedCreateWithoutUtilisateurInput>
  }

  export type GalerieUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: GalerieWhereUniqueInput
    data: XOR<GalerieUpdateWithoutUtilisateurInput, GalerieUncheckedUpdateWithoutUtilisateurInput>
  }

  export type GalerieUpdateManyWithWhereWithoutUtilisateurInput = {
    where: GalerieScalarWhereInput
    data: XOR<GalerieUpdateManyMutationInput, GalerieUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type GalerieScalarWhereInput = {
    AND?: GalerieScalarWhereInput | GalerieScalarWhereInput[]
    OR?: GalerieScalarWhereInput[]
    NOT?: GalerieScalarWhereInput | GalerieScalarWhereInput[]
    id?: StringFilter<"Galerie"> | string
    titre?: StringFilter<"Galerie"> | string
    slug?: StringFilter<"Galerie"> | string
    dateCreation?: DateTimeFilter<"Galerie"> | Date | string
    utilisateurId?: StringFilter<"Galerie"> | string
  }

  export type UtilisateurCreateWithoutGaleriesInput = {
    id?: string
    email: string
    motDePasseHash: string
    nom: string
    role?: $Enums.Role
    dateCreation?: Date | string
  }

  export type UtilisateurUncheckedCreateWithoutGaleriesInput = {
    id?: string
    email: string
    motDePasseHash: string
    nom: string
    role?: $Enums.Role
    dateCreation?: Date | string
  }

  export type UtilisateurCreateOrConnectWithoutGaleriesInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutGaleriesInput, UtilisateurUncheckedCreateWithoutGaleriesInput>
  }

  export type PhotoCreateWithoutGalerieInput = {
    id?: string
    nomFichier: string
    cheminFichier: string
    tailleOctets: number
    formatMime: string
    dateUpload?: Date | string
  }

  export type PhotoUncheckedCreateWithoutGalerieInput = {
    id?: string
    nomFichier: string
    cheminFichier: string
    tailleOctets: number
    formatMime: string
    dateUpload?: Date | string
  }

  export type PhotoCreateOrConnectWithoutGalerieInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutGalerieInput, PhotoUncheckedCreateWithoutGalerieInput>
  }

  export type PhotoCreateManyGalerieInputEnvelope = {
    data: PhotoCreateManyGalerieInput | PhotoCreateManyGalerieInput[]
    skipDuplicates?: boolean
  }

  export type UtilisateurUpsertWithoutGaleriesInput = {
    update: XOR<UtilisateurUpdateWithoutGaleriesInput, UtilisateurUncheckedUpdateWithoutGaleriesInput>
    create: XOR<UtilisateurCreateWithoutGaleriesInput, UtilisateurUncheckedCreateWithoutGaleriesInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutGaleriesInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutGaleriesInput, UtilisateurUncheckedUpdateWithoutGaleriesInput>
  }

  export type UtilisateurUpdateWithoutGaleriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHash?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurUncheckedUpdateWithoutGaleriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasseHash?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUpsertWithWhereUniqueWithoutGalerieInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutGalerieInput, PhotoUncheckedUpdateWithoutGalerieInput>
    create: XOR<PhotoCreateWithoutGalerieInput, PhotoUncheckedCreateWithoutGalerieInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutGalerieInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutGalerieInput, PhotoUncheckedUpdateWithoutGalerieInput>
  }

  export type PhotoUpdateManyWithWhereWithoutGalerieInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutGalerieInput>
  }

  export type PhotoScalarWhereInput = {
    AND?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    OR?: PhotoScalarWhereInput[]
    NOT?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    id?: StringFilter<"Photo"> | string
    nomFichier?: StringFilter<"Photo"> | string
    cheminFichier?: StringFilter<"Photo"> | string
    tailleOctets?: IntFilter<"Photo"> | number
    formatMime?: StringFilter<"Photo"> | string
    dateUpload?: DateTimeFilter<"Photo"> | Date | string
    galerieId?: StringFilter<"Photo"> | string
  }

  export type GalerieCreateWithoutPhotosInput = {
    id?: string
    titre: string
    slug: string
    dateCreation?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutGaleriesInput
  }

  export type GalerieUncheckedCreateWithoutPhotosInput = {
    id?: string
    titre: string
    slug: string
    dateCreation?: Date | string
    utilisateurId: string
  }

  export type GalerieCreateOrConnectWithoutPhotosInput = {
    where: GalerieWhereUniqueInput
    create: XOR<GalerieCreateWithoutPhotosInput, GalerieUncheckedCreateWithoutPhotosInput>
  }

  export type GalerieUpsertWithoutPhotosInput = {
    update: XOR<GalerieUpdateWithoutPhotosInput, GalerieUncheckedUpdateWithoutPhotosInput>
    create: XOR<GalerieCreateWithoutPhotosInput, GalerieUncheckedCreateWithoutPhotosInput>
    where?: GalerieWhereInput
  }

  export type GalerieUpdateToOneWithWhereWithoutPhotosInput = {
    where?: GalerieWhereInput
    data: XOR<GalerieUpdateWithoutPhotosInput, GalerieUncheckedUpdateWithoutPhotosInput>
  }

  export type GalerieUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutGaleriesNestedInput
  }

  export type GalerieUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
  }

  export type GalerieCreateManyUtilisateurInput = {
    id?: string
    titre: string
    slug: string
    dateCreation?: Date | string
  }

  export type GalerieUpdateWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: PhotoUpdateManyWithoutGalerieNestedInput
  }

  export type GalerieUncheckedUpdateWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: PhotoUncheckedUpdateManyWithoutGalerieNestedInput
  }

  export type GalerieUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCreateManyGalerieInput = {
    id?: string
    nomFichier: string
    cheminFichier: string
    tailleOctets: number
    formatMime: string
    dateUpload?: Date | string
  }

  export type PhotoUpdateWithoutGalerieInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomFichier?: StringFieldUpdateOperationsInput | string
    cheminFichier?: StringFieldUpdateOperationsInput | string
    tailleOctets?: IntFieldUpdateOperationsInput | number
    formatMime?: StringFieldUpdateOperationsInput | string
    dateUpload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateWithoutGalerieInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomFichier?: StringFieldUpdateOperationsInput | string
    cheminFichier?: StringFieldUpdateOperationsInput | string
    tailleOctets?: IntFieldUpdateOperationsInput | number
    formatMime?: StringFieldUpdateOperationsInput | string
    dateUpload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateManyWithoutGalerieInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomFichier?: StringFieldUpdateOperationsInput | string
    cheminFichier?: StringFieldUpdateOperationsInput | string
    tailleOctets?: IntFieldUpdateOperationsInput | number
    formatMime?: StringFieldUpdateOperationsInput | string
    dateUpload?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}