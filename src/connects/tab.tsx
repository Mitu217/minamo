import {connect, Dispatch} from 'react-redux';
import {select} from 'modules/tab'
import {ReduxState, ReduxAction} from 'store';

export class ActionDispatcher {
    constructor(private dispatch: (action: ReduxAction) => void) {}

    public onSelect(selectedId: number) {
        this.dispatch(select(selectedId))
    }
}

export default connect(
    (state: ReduxState) => ({values: state.tab}),
    (dispatch: Dispatch<ReduxAction>) => ({actions: new ActionDispatcher(dispatch)})
)
