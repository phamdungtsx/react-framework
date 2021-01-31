import HelloWorldResourceModel from '~/resource-model/chap3/HelloWorldResourceModel'
import CoreService, { CoreServiceInterface } from '~/service/CoreService'
import ServiceFactory from '~/framework/factory/ServiceFactory'
import { HelloWorldInterface } from '~/data/api/HelloWorldInterface'

export interface HelloWorldServiceInterface extends CoreServiceInterface {
    print(): string
}

class HelloWorldService extends CoreService<HelloWorldInterface> implements HelloWorldServiceInterface {
    resourceModel = HelloWorldResourceModel

    print(): string {
        return "HelloWorld";
    }
}

export default ServiceFactory.get<HelloWorldServiceInterface>(HelloWorldService)
