import {action , payload} from 'ts-action';
import { acceptRequestedSchoolsAction } from '.';
import { ISchoolRequest } from '../../components/status/singleItem';

export const acceptRequestedSchools = action(acceptRequestedSchoolsAction.requested , payload<{id:number , data:ISchoolRequest}>());
export const acceptRequestedSchoolsSucceeded = action(acceptRequestedSchoolsAction.fulfilled , payload<ISchoolRequest>());
export const acceptRequestedSchoolsFailed = action(acceptRequestedSchoolsAction.rejected, payload<Error>());