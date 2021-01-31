import Singleton from '~/resource-model/Singleton'
import SyncConstant from '~/view/constant/SyncConstant'
import { AbstractDBInterface } from '~/data/AbstractDBInterface'

const Config = {
    online_mode: true,
}

export interface AbstractResourceModelInterface extends AbstractDBInterface {
    resourceName: string
    dataType: string
    getResource(): AbstractDBInterface
    getResourceOnline(): any
    getResourceOffline(): any
}

export default abstract class AbstractResourceModel<S> implements AbstractResourceModelInterface {
    resourceName = 'HelloWorld'
    dataType = SyncConstant.TYPE_HELLOWORLD

    /**
     * Get resource depend on mode
     */
    getResource(): AbstractDBInterface {
        return Config.online_mode
            ? Singleton.getOnline<AbstractDBInterface>(this.resourceName)
            : Singleton.getOffline<AbstractDBInterface>(this.resourceName)
    }

    /**
     * Get online resource
     */
    getResourceOnline(): AbstractDBInterface {
        return Singleton.getOnline<AbstractDBInterface>(this.resourceName)
    }

    /**
     * Get offline resource
     */
    getResourceOffline(): AbstractDBInterface {
        return Singleton.getOffline<AbstractDBInterface>(this.resourceName)
    }

    getList(): S {
        return this.getResource().getList()
    }
}
