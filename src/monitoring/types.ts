export interface IUserTraits {
  [propName: string]: string | number | boolean;
}

export interface ICaptureOptions {
  tags?: {
    [tagName: string]: string | number | boolean;
  };
  extra?: {
    [tagName: string]: string | number | boolean;
  };
}

export type ICaptureProperties = {
  [key: string]:
    | string
    | number
    | boolean
    | string[]
    | number[]
    | boolean[]
    | undefined;
};
