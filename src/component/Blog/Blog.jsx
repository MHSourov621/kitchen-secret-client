import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-4xl text-center font-bold mb-10 mt-16'>Question Answer Page</h1>

            <h2 className='text-2xl font-semibold mb-4'>1.Tell us the differences between uncontrolled and controlled components.</h2>
            <p className='text-lg font-medium mb-8'>Ans: Controlled components are created and managed by the developer with full control over their implementation and behavior. Uncontrolled components are those that the developer has less control over, such as third-party libraries or APIs.</p>

            <h2 className='text-2xl font-semibold mb-4'>2. How to validate React props using PropTypes?</h2>
            <p className='text-lg font-medium mb-8'>Ans: To make validate React props
            <ul className="list-disc ml-8">
                <li>Import the PropTypes library</li>
                <li>Define propTypes for the component</li>
                <li>Replace ComponentName with your component's name, propName with the prop name you want to validate, and type with the appropriate validator.</li>
                <li>Use the component with defined propTypes</li>
            </ul></p>

            <h2 className='text-2xl font-semibold mb-4'>3. Tell us the difference between nodejs and express js.</h2>
            <p className='text-lg font-medium mb-8'>Ans: Node.js allows JavaScript to run on the server and provides built-in modules for building web applications. Express.js is a lightweight framework built on top of Node.js that provides middleware functions for handling common web development tasks.</p>

            <h2 className='text-2xl font-semibold mb-4'>4. What is a custom hook, and why will you create a custom hook?</h2>
            <p className='text-lg font-medium mb-8'>Ans: A custom hook is a reusable piece of logic in React that you can use across multiple components. You would create a custom hook to reduce code duplication, share functionality between different parts of your application, and make your code more reusable and maintainable.</p>
        </div>
    );
};

export default Blog;