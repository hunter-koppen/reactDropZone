import { Component, createElement } from "react";

import { DropZoneContainer } from "./components/DropZoneContainer";
import "./ui/ReactDropZone.css";

export class ReactDropZone extends Component {
    render() {
        return (
            <DropZoneContainer
                sampleText={this.props.sampleText}
                datasource={this.props.dataEntity}
                fileContent={this.props.fileContent}
                nameAttribute={this.props.nameAttribute}
            />
        );
    }
}
