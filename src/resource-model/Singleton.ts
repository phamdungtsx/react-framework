import DataResourceFactory from '~/framework/factory/DataResourceFactory'

const resources: any = {}

export interface SingletonInterface {
    getOnline<T>(name: string): T
    getOffline<T>(name: string): T
    get<T>(prefix: string, name: string): T
}

class Singleton implements SingletonInterface {

    /**
     * get online resource by name
     */
    getOnline<T>(name: string): T {
        return this.get<T>('Omc', name)
    }

    /**
     * get offline resource by name
     */
    getOffline<T>(name: string): T {
        return this.get<T>('IndexDB', name)
    }

    /**
     * get object form name and prefix
     */
    get<T>(prefix: string, name: string): T {
        return DataResourceFactory.get<T>(resources[prefix + name])
    }
}

export default new Singleton()
