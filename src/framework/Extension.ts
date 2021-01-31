export interface ExtensionInterface {
    get<T>(type: string, Object: object): T
}

class Extension implements ExtensionInterface {
    /**
     * Get rewrite class if available or itself class
     * if class has plugin method, we call them
     */
    get<T>(type: string, Object: object): T {
        const _Object: any = Object
        return _Object
    }
}

export default new Extension()
