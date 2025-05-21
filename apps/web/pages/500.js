function ServerError() {
    return ( <
        div className = "flex min-h-screen flex-col items-center justify-center" >
        <
        h2 className = "text-2xl font-bold mb-4" > Server Error < /h2> <
        p className = "mb-4" > Sorry, something went wrong on our end < /p> <
        a href = "/"
        className = "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" >
        Return Home <
        /a> < /
        div >
    );
}

export default ServerError;