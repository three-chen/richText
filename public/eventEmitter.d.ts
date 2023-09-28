export default class EventEmitter {
    static listeners: Map<string, Array<Function>>;
    /**
     * 监听事件
     * @param event 事件名
     * @param listener 监听函数
     */
    static on(event: string, listener: Function): void;
    /**
     * 触发事件
     * @param event 事件名
     * @param args 参数
     */
    static emit(event: string, ...args: any[]): void;
}
