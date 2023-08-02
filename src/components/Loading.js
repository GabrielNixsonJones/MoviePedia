import React from 'react'
import HashLoader from "react-spinners/HashLoader";

export const Loading = () => {
    return (
        <div className='loadingContainer' style={{ position: 'relative', height: '90vh', width: '100%' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                <HashLoader

                    color={'#0E2954'}
                    loading={true}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </div>
    )
}
