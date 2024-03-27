import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const PagesToRead = () => {

    
        const x = document.getElementById('footer');
        x.classList.add('fixed', 'bottom-0', 'hidden');

        const a = document.getElementById('hide-me');
        a.classList.add('hidden');
        const b = document.getElementById('hide-me-too');
        b.classList.add('hidden');

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <PieChart
                    series={[
                        {
                        data: [
                            { id: 0, value: 10, label: 'series A' },
                            { id: 1, value: 15, label: 'series B' },
                            { id: 2, value: 20, label: 'series C' },
                        ],
                        },
                    ]}
                    width={500}
                    height={300}
                />
        </div>
    );
};

export default PagesToRead;