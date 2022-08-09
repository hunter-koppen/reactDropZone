import { Component, createElement } from "react";
import Dropzone from "react-dropzone";

import { createObject } from "../utils/CreateObject";

export class DropZoneContainer extends Component {
    componentDidMount() {
        console.log(this.props);
    }

    componentDidUpdate() {
        console.log(this.props);
    }

    onDrop = async (acceptedFiles, rejectedFiles) => {
        console.log(acceptedFiles);
        for (let i = 0; i < acceptedFiles.length; i++) {
            const obj = await createObject("MyFirstModule.ImageObject");
            console.log(obj);
            const guid = obj.getGuid();
            mx.data.saveDocument(
                guid,
                "Bunnies.jpg",
                null,
                acceptedFiles[i],
                function () {
                    // success
                },
                function (e) {
                    console.error(e);
                }
            );
            mx.data.commit({
                mxobj: obj,
                callback: function () {
                    console.log("Object committed");
                },
                error: function (e) {
                    console.error("Could not commit object:", e);
                }
            });
        }
    };

    render() {
        return (
            <Dropzone onDrop={this.onDrop}>
                {({ getRootProps, getInputProps }) => (
                    <section className="dropzone">
                        <div {...getRootProps({ className: "dropzone-container" })}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone>
        );
    }
}
