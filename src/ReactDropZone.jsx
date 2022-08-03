import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/ReactDropZone.css";

export class ReactDropZone extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
