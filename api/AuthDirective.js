import { AuthenticationError, SchemaDirectiveVisitor } from 'apollo-server';
import { defaultFieldResolver } from 'graphql';

class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const requiredRole = this.args.requires;
    const originalResolve = field.resolve || defaultFieldResolver;

    field.resolve = function(...args) {
      const context = args[2];
      const user = context.user || {};
      const isUnauthorized = user.role !== requiredRole;

      if (isUnauthorized) {
        throw new AuthenticationError(`You need following role: ${requiredRole}`);
      }

      return originalResolve.apply(this, args);
    }
  }
}

export default AuthDirective;
