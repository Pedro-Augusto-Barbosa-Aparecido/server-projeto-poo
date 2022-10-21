export type IBaseFormatter<T> = {
  [K in keyof T]?: T;
}
