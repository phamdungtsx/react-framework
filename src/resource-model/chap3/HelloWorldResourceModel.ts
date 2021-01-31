import AbstractResourceModel, { AbstractResourceModelInterface } from '~/resource-model/AbstractResourceModel'
import SyncConstant from '~/view/constant/SyncConstant'
import { HelloWorldInterface } from '~/data/api/HelloWorldInterface'

export interface HelloWorldResourceModelInterface extends AbstractResourceModelInterface {}

export default class HelloWorldResourceModel
    extends AbstractResourceModel<HelloWorldInterface>
    implements HelloWorldResourceModelInterface {
    resourceName = 'HelloWorld'
    dataType = SyncConstant.TYPE_HELLOWORLD
}
