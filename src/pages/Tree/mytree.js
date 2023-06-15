import React, { Component } from 'react';
import FamilyTree from "./familytree.js";

export default class myTree extends Component {

    constructor(props) {
        super(props);
        this.divRef = React.createRef();
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        this.family = new FamilyTree (this.divRef.current , {
            nodes: this.props.nodes,
            mouseScrool: FamilyTree.none,
            siblingSeparation: 120,
            template: 'john',
            nodeBinding: {
                field_0: "name",
                field_1: "title",
                img_0: "img",
            }
        });
    }

    render() {
        return (
            <div id="tree" ref={this.divRef}></div>
        );
    }
}