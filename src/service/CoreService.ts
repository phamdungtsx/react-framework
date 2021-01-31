import ResourceModelFactory from '~/framework/factory/ResourceModelFactory'
import AbstractResourceModel, { AbstractResourceModelInterface } from '~/resource-model/AbstractResourceModel'
import { AbstractDBInterface } from '~/data/AbstractDBInterface'

export interface CoreServiceInterface extends AbstractDBInterface {
    compiledResourceModel?: any
    resourceModel: object
    getResourceModel<T>(resourceModel?: object): T
}

export default class CoreService<S> implements CoreServiceInterface {
    compiledResourceModel?: any
    resourceModel: object = AbstractResourceModel

    /**
     * get target Resource Model
     */
    getResourceModel<T>(resourceModel?: object): T {
        if (!resourceModel) {
            if (!this.compiledResourceModel) {
                this.compiledResourceModel = ResourceModelFactory.get<T>(this.resourceModel)
            }
            return this.compiledResourceModel
        }
        return ResourceModelFactory.get<T>(resourceModel)
    }

    getList(): S {
        return this.getResourceModel<AbstractResourceModelInterface>().getList()
    }
}
