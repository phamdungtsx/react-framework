import AbstractFactory, { AbstractFactoryInterface } from './AbstractFactory'
import FactoryConstant from '~/view/constant/FactoryConstant'

export interface ResourceModelFactoryInterface extends AbstractFactoryInterface {}

class ResourceModelFactory extends AbstractFactory implements ResourceModelFactoryInterface {
    /**
     * get target resource model to use
     */
    get<T>(Object: object): T {
        return this.getObject(FactoryConstant.RESOURCE_MODEL, Object)
    }
}

export default new ResourceModelFactory()
