interface BoldAction {
    type: 'INCREMENT';
}
interface DecrementAction {
    type: 'DECREMENT';
}
export declare const bold: () => BoldAction;
export declare const decrement: () => DecrementAction;
export {};
