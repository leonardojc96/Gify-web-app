import React from 'react'
import {Link} from 'wouter'

export default function Category({name, options = []}){
    return (
        <aside className="category ">
            <h3 className='category-title'>{name}</h3>
            <ul className='category-list p-0'>
            {options.map((singleOption) => (
                <li className="btn btn-lg mt-3 btn-block btn-dark " key={singleOption}>
                    <Link className='text-white' to={`/search/${singleOption}`}>
                        {singleOption}
                    </Link>
                </li>
            ))
            }
            </ul>
        </aside>
    );
}