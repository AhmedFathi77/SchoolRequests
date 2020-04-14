import * as React from 'react';
import { Switch, Route} from 'react-router-dom';
import Accepted from '../status/accepted';
import Requested from '../status/requested';
import Rejected from '../status/rejected';

const AuthenticationRoutes: React.FC = () =>{
    return(
        <Switch>
            <Route exact={true} path='/' component={Requested} />
            <Route exact={true} path='/accepted' component={Accepted} />
            <Route exact={true} path='/rejected' component={Rejected} />
        </Switch>
    )
}

export default AuthenticationRoutes;