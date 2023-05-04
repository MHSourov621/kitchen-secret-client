import React from 'react';
import Pdf from './pdf';
import { PDFDownloadLink } from '@react-pdf/renderer';

const Blog = () => {
    return (
        <div>
            <PDFDownloadLink document={<Pdf></Pdf>}fileName='Question Answer'>
                <button className='text-xl font-bold text-white bg-black p-4'>Download PDF</button>
            </PDFDownloadLink>
            <Pdf></Pdf>
        </div>
    );
};

export default Blog;