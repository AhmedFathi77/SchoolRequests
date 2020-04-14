import {action , payload} from 'ts-action';
import { rejectRequestedSchoolsAction } from '.';
import { ISchoolRequest } from '../../components/status/singleItem';

export const rejectRequestedSchools = action(rejectRequestedSchoolsAction.requested , payload<{id:number, data:ISchoolRequest}>());
export const rejectRequestedSchoolsSucceeded = action(rejectRequestedSchoolsAction.fulfilled , payload<ISchoolRequest>());
export const rejectRequestedSchoolsFailed = action(rejectRequestedSchoolsAction.rejected, payload<Error>());