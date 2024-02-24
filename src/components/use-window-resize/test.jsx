import useWindowResize from "./index";

const UseWindowResizeTest = () => {
    const { width, height } = useWindowResize();
    return (
        <div>
            <h1>Use Window Resize Hook</h1>
            <div>
                <p>Width: {width}</p>
                <p>Height: {height}</p>
            </div>
        </div>
    );
};

export default UseWindowResizeTest;
