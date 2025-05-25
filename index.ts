/**
 * Auto-generated file by NestFire.
 *
 * firebaseFunctionsHttpsDeployment will deploy each NestJS module
 * annotated with `@FirebaseHttps(EnumFirebaseFunctionVersion.V1, { memory: '256MB' })`
 * as a separate Firebase Function. ⚠️ Do not delete.
 *
 * To deploy, run:
 *   firebase deploy --only functions
 *
 */


import { AppModule } from 'src/app.module';
import { firebaseFunctionsHttpsDeployment } from 'nestfire';

export = firebaseFunctionsHttpsDeployment(AppModule);

/**
* 👇 If you want to deploy Firestore triggers, export them below:
* Example: export { orderTrigger } from './src/triggers/order/order.trigger';
* More examples: https://github.com/felipeosano/nestfire.git#firestore-trigger
*/
