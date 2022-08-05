import { Component, createElement } from "react";
import Dropzone from "react-dropzone";

export class DropZoneContainer extends Component {
    render() {
        return (
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
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
