import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { FiPlus, FiX, FiEdit } from 'react-icons/fi'

import PageHeader from '../../components/PageHeader'

import './styles.css'


interface DevParams {
    id: string
}

// interface Wine {
//     id: number;
//     name: string;
//     description: string;
//     country: string;
//     designation: string;
//     points: string;
//     price: Number;
//     province: String;
//     region: String;
//     region2: String;
//     variety: String;
//     winery: String;
//     taster_name: String;
//     taster_twitter: String;
// }

function ListWines() {

    const data = [
        {
            "id": 0,
            "title": "Nicosia 2013 Vulkà Bianco",
            "points": 87,
            "price": 43,
            "country": "Italy",
            "province": "Sicily & Sardinia",
            "region1": "Etna",
            "region2": null,
            "description": "Aromas include tropical fruit, broom, brimstone and dried herb. The palate isn't overly expressive",
            "designation": "Vulkà Bianco",
            "variety": "White Blend",
            "winery": "Nicosia",
            "taster_name": "Kerin O’Keefe",
            "taster_twitter": "@kerinokeefe"
        }
    ]

    //const [wineList, setWineList] = useState<any>([])

    const wineList = data;

    console.log(wineList);


    //const [devTips, setDevTips] = useState<DevTip[]>([])



    async function loadWines() {
        // const response = await api.get(`/devs/${params.id}`)
        // setDevTips(response.data)
        // return response
    }

    async function handleDeleteWine(id: number) {

    }

    async function handleEditWine(id: number) {

    }


    // useEffect(() => {
    //     loadTips()
    // }, [wineList])



    if (!wineList) {
        return <p>Carregando...</p>
    }

    console.log(wineList)

    return (
        <div id="page-dev" className="container">
            <PageHeader
                title='Wines'
                description='Here you can find more information on wines'
                backTo='/'
            />

            <main>
                {wineList.map((wine: any) => {
                    return (
                        <article className='Dev-tip' key={wine.id}>
                            <header>
                                {/* <img src={wine.avatar}></img> */}
                                <div>
                                    <strong>{wine.title}</strong>
                                    <span>Winery: {wine.winery}</span>
                                    <span>Designation: {wine.designation}</span>
                                </div>
                            </header>

                            <p>{wine.description}</p>

                            <footer>
                                <p>
                                    Price: <strong>{wine.price}</strong>
                                    <br />
                                    Points: <strong>{wine.points}</strong>
                                </p>
                                <p>
                                </p>
                                <p>
                                    <strong>Country: {wine.country}</strong>
                                    <br />
                                    <strong>Province: {wine.province}</strong>
                                    <br />
                                    <strong>Region: {wine.region1}</strong>
                                    <br />
                                    <strong>Region2: {wine.region2}</strong>

                                </p>
                                <p>
                                    <strong>Taster: {wine.taster_name}</strong>
                                    <br />
                                    <strong>Taster Twitter: {wine.taster_twitter}</strong>
                                </p>
                                <button type='submit' onClick={() => handleDeleteWine(wine.id)}>
                                    <FiX size="32" color="#ff1744" />
                                </button>
                                <button type='submit' onClick={() => handleEditWine(wine.id)}>
                                    <FiEdit size="32" color="#FFFFFF" />
                                </button>
                            </footer>
                        </article>
                    )
                })}

                {/* <Link to='/dev-form'>
                    <FiPlus size={32} color='#04D361' />
                </Link> */}
            </main>
        </div>
    )
}

export default ListWines;