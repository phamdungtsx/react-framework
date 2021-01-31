import AbstractFactory, { AbstractFactoryInterface } from './AbstractFactory'
import FactoryConstant from '~/view/constant/FactoryConstant'

export interface DataResourceInterface extends AbstractFactoryInterface {}

class DataResourceFactory extends AbstractFactory implements DataResourceInterface {
    /**
     * get target data resource to use
     */
    get<T>(Object: object): T {
        return this.getObject(FactoryConstant.DATA_RESOURCE, Object)
    }
}

export default new DataResourceFactory()
