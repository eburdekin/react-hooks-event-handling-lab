// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <form>
                <input type="password" onChange={handleChange}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

function handleChange() {
    console.log('Entering password...')
}

export default Keypad;