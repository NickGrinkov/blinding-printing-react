import React from 'react'

function UserInput({textarea, onChange, clearTimer, startTimer}) {
    return (
        <>
            <textarea
                value={textarea} 
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => startTimer()}>
            </textarea>
        </>
    )
}

export default UserInput
