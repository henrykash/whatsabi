import { ABI } from "./abi";
import { OpCode } from "./opcodes";
export declare class BytecodeIter {
    bytecode: Uint8Array;
    nextStep: number;
    nextPos: number;
    posBuffer: number[];
    posBufferSize: number;
    constructor(bytecode: string, config?: {
        bufferSize?: number;
    });
    hasMore(): boolean;
    next(): OpCode;
    step(): number;
    pos(): number;
    asPos(posOrRelativeStep: number): number;
    at(posOrRelativeStep: number): OpCode;
    value(): Uint8Array;
    valueAt(posOrRelativeStep: number): Uint8Array;
}
export declare class Function {
    byteOffset: number;
    opTags: Set<OpCode>;
    start: number;
    jumps: Array<number>;
    end?: number;
    constructor(byteOffset?: number, start?: number);
}
export declare class Program {
    dests: {
        [key: number]: Function;
    };
    selectors: {
        [key: string]: number;
    };
    notPayable: {
        [key: number]: number;
    };
    eventCandidates: Array<string>;
    init?: Program;
    constructor(init?: Program);
}
export declare function abiFromBytecode(bytecode: string): ABI;
export declare function disasm(bytecode: string): Program;
