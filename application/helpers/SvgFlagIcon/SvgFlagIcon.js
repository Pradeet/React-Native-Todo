import React from 'react';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

export default class SvgFlagIcon extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            color: this.props.color,
            size: this.props.size || '60',
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.hasOwnProperty('color') && newProps.color !== this.state.color) {
            this.setState({ color: newProps.color });
        }
    }

    render() {
        return (
            <Svg
                height={this.state.size}
                width={this.state.size}
                x="0"
                y="0"
                viewBox="0 0 60 60">

                <Rect x="16.5" y="31" fill={this.state.color} width="10" height="6"/>
                <Path fill={this.state.color} d="M3.5,0c-0.552,0-1,0.447-1,1v3v55c0,0.553,0.448,1,1,1s1-0.447,1-1V4V1C4.5,0.447,4.052,0,3.5,0z"/>
                <Rect x="4.5" y="4" fill={this.state.color} width="22" height="29"/>
                <Path fill={this.state.color} d="M26.5,9v24h-6c-2.209,0-4,1.791-4,4c0,2.209,1.791,4,4,4h4h33l-11-16l11-16H26.5z"/>
                <Path fill={this.state.color} d="M16.5,37c0,2.209,1.791,4,4,4h4h2v-8h-6C18.291,33,16.5,34.791,16.5,37z"/>
            </Svg>
        );
    }
}