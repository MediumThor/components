declare class Cache {
    cache: any;
    options: {
        ttl: number;
        max: number;
    };
    constructor();
    get(key: any): any;
    set(key: any, value: any, ttl?: number): void;
    has(key: any): any;
}
export declare const cache: Cache;
export {};
