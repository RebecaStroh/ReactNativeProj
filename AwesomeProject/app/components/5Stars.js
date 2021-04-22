import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

export default class Stars extends React.Component {
    constructor (props) {
        super(props);
        this.state = {nota: props.val};
    }

    componentDidUpdate = (prevProps) => {
        // Uso típico, (não esqueça de comparar as props):
        if (this.props.val !== prevProps.val) {
            this.setState({nota: this.props.val});
        }
    }

    handlePress = (i) => {
        this.setState({nota: i})
        this.props.onChange(i);
    }

    render() {
        let list = [];
        let i;
        if (this.props.changeable == 'true') {
            for (i=1; i<=this.state.nota; i++)
                list.push(<Icon.Button color='black' key={i} name="star" style={this.props.style} 
                                        backgroundColor='#ffffff' onPress={this.handlePress.bind(this, i)}/>);
            for (; i<=5; i++)
                list.push(<Icon.Button color='black' key={i} name="star-outlined" style={this.props.style} 
                                        backgroundColor='#ffffff' onPress={this.handlePress.bind(this, i)}/>);
        } else {
            for (i=1; i<=this.state.nota; i++)
                list.push(<Icon.Button backgroundColor='#ffffff' color='black' key={i} name="star" style={this.props.style}/>);
            for (; i<=5; i++)
                list.push(<Icon.Button color='black' backgroundColor='#ffffff' key={i} name="star-outlined" style={this.props.style}/>);
        }

        return list;
    }
}