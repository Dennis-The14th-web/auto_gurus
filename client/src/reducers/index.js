import { integrateReducers } from  'redux';

import posts from './posts';
import auth from './auth';

export const reducers = integrateReducers({ posts, auth });