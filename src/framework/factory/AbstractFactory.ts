import Extension from '~/framework/Extension'
import ObjectManager from '~/framework/ObjectManager'

export interface AbstractFactoryInterface {
    get<T>(Object: object): T
    getObject<T>(type: string, ClassObject: object): T
}

abstract class AbstractFactory implements AbstractFactoryInterface {
    /**
     * get target to use
     */
    abstract get<T>(Object: object): T

    /**
     * get target class to use
     */
    getObject<T>(type: string, ClassObject: object): T {
        return ObjectManager.get<T>(Extension.get(type.toLowerCase(), ClassObject))
    }
}

export default AbstractFactory
