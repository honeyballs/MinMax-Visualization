import { createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducer';
import ReduxSlideMonitor from '../components/ReduxSlideMonitor'

export default createStore(reducer, composeWithDevTools());
export * from './actions'
