import * as React from 'react';
import connect, {ActionDispatcher} from 'connects/tab'
import {State} from 'modules/tab'

interface Props {
    values: State;
    actions: ActionDispatcher;
}

export class Tab extends React.Component<Props, {}> {
    render() {
        return (
            <div>
                <p>{this.props.values.selectedId}</p>
            </div>
        )
    }
}

export default connect(Tab)