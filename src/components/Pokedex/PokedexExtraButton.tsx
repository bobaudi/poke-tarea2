import React, { FC } from 'react';


type ExtraButtonParams = {
    setSumNumber: React.Dispatch<React.SetStateAction<number>>;
    sumNumber: number;
}

const ExtraButton: FC<ExtraButtonParams> = ({
    setSumNumber,
    sumNumber
}) => {
    return <div>
        <button onClick={() => setSumNumber(sumNumber + 1)}>Tambien yo sumo</button>
    </div>
}

export default ExtraButton