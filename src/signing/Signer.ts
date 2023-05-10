import { DataItem } from '../DataItem';

export abstract class Signer {
  readonly signer?: any;
  readonly publicKey: Buffer;
  readonly signatureType: number;
  readonly signatureLength: number;
  readonly ownerLength: number;
  readonly pem?: string | Buffer;

  abstract sign(message: Uint8Array, _opts?: any): Promise<Uint8Array> | Uint8Array;
  abstract signDataItem?(
    dataItem: string | Buffer | Uint8Array,
    tags: { name: string; value: string }[]
  ): Promise<DataItem>;
  static verify(_pk: string | Buffer, _message: Uint8Array, _signature: Uint8Array, _opts?: any): boolean {
    throw new Error('You must implement verify method on child');
  }
}
