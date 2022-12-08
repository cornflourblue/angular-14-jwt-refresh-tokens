import { AuthenticationService } from '@app/_services';
import { catchError, of } from 'rxjs';

export function appInitializer(authenticationService: AuthenticationService) {
    return () => authenticationService.refreshToken()
        .pipe(
            // catch error to start app on success or failure
            catchError(() => of())
        );
}