import React from 'react';
import {Link} from 'react-router-dom';

function Result() {
    return (
        <div>
            <div>Поздравляю с успешным выполнением теста!</div>
            <Link to="/test">
                <button>Попробовать снова</button>
            </Link>
        </div>
    )
}

export default Result
