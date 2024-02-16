import React from 'react';
import { Navigation } from '../../components/navigation/Navigation';

export function Header(props) {


    return (
        <header className='flex items-center justify-between p-5'>
            <a href='/' className='block text-3xl no-underline mt-3 leading-normal'>
                <span className='text-customGray'>&lt;</span>
                <span className='font-agustina font-bold font-feature-normal font-common-ligatures px-3'>Teodora Odanic</span>
                <span className='text-customGray'>/&gt;</span>
            </a>
            <Navigation />
        </header>
    )
}
