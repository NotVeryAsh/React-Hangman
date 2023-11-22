export default function CountInfo({count, handleClick}) {
    return (
        <>
            <button onClick={handleClick}>
                Click me to increase the info count.
            </button>
            <p>Current count : {count}</p>
        </>
    )
}