import AbstractFactory, { AbstractFactoryInterface } from './AbstractFactory'
import FactoryConstant from '~/view/constant/FactoryConstant'

export interface ServiceInterface extends AbstractFactoryInterface {}

class ServiceFactory extends AbstractFactory implements ServiceInterface {
    /**
     * get target service to use
     */
    get<T>(Object: object): T {
        return this.getObject(FactoryConstant.SERVICE, Object)
    }
}

export default new ServiceFactory()
