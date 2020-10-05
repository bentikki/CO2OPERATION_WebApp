declare module '*.png';
declare module '*.svg';
declare type Decimal = number;

export declare type RequiredParseableDate = Date | number | string;

declare interface GlobalFetch {
  fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
}

