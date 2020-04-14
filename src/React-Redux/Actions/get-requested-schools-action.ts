import {action , payload} from 'ts-action';
import { getRequestedSchoolsAction } from '.';
import { ISchoolRequest } from '../../components/status/singleItem';

export const getRequestedSchools = action(getRequestedSchoolsAction.requested);
export const getRequestedSchoolsSucceeded = action(getRequestedSchoolsAction.fulfilled , payload<ISchoolRequest[]>());
export const getRequestedSchoolsFailed = action(getRequestedSchoolsAction.rejected, payload<Error>());