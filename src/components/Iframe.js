
import React from 'react';
const Iframe = ({ content, title }) => {

    const writeHTML = (frame) => {
        if (!frame) {
            return;
        }
        let doc = frame.contentDocument;
        doc.open();
        doc.write(content);
        doc.close();
        frame.style.width = '100%';
        frame.style.height = `${frame.contentWindow.document.body.scrollHeight}px`;
    };
    return (
        <iframe src="about:blank" scrolling="no" frameBorder="0" ref={writeHTML} title={title} />
    );
};
export default Iframe;