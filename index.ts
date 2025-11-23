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

const httpsFunctions: Record<string, any> =
  firebaseFunctionsHttpsDeployment(AppModule);

module.exports = {
  ...httpsFunctions,
};
