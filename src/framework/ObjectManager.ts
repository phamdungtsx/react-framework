export interface ObjectManagerInterface {
    instances: any
    get<T>(Object: object): T
}

class ObjectManager implements ObjectManagerInterface {
    instances: any = {}

    /**
     * Get singleton class
     *
     * @returns {Class}
     * @param Object
     */
    get<T>(Object: object): T {
        const Class: any = Object

        if (!Class.hasOwnProperty('name')) {
            return new Class()
        }

        const className = Class.name

        if (!this.instances[className]) {
            this.instances[className] = new Class()
        }
        return this.instances[className]
    }
}

export default new ObjectManager()
