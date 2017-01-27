import React from 'react';

export default class TodoDetailsSelectRow extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Touchable style={styles.Container}>
                <Image
                    style={styles.Icon}
                    source={require('../../../../assets/images/document_icon.png')} />
                <Text style={styles.Hint}>Project</Text>
                <Text style={styles.Text}>{this.todo.label}</Text>
                <Text style={styles.Arrow}>{'>'}</Text>
            </Touchable>
        )
    }
}