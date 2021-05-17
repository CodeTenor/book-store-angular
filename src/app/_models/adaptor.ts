export interface Adaptor<T> {
  adapt(item: any,  jsonRouting? : string ): T;
}
