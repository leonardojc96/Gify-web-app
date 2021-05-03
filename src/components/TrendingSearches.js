import React, { useState, useEffect, useRef } from 'react'
import getTrendingTermsService from '../Services/getTrendingTermsService'
import Category from './Category'


export default function TrendingSearches(){
    const [trends, setTrends] = useState([])

    useEffect(function () {
        getTrendingTermsService().then(x => setTrends(x))
    }, [])

    return <Category name='Tendencias' options={trends}/>
}

