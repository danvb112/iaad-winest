import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import { FiPlus, FiX, FiEdit } from 'react-icons/fi'

import PageHeader from '../../components/PageHeader'

import './styles.css'
import api from '../../server/api'


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

    // const data = [
    //     {
    //         "id": 1,
    //         "title": "Nicosia 2013 Vulkà Bianco",
    //         "points": 87,
    //         "price": 43,
    //         "country": "Italy",
    //         "province": "Sicily & Sardinia",
    //         "region1": "Etna",
    //         "region2": null,
    //         "description": "Aromas include tropical fruit, broom, brimstone and dried herb. The palate isn't overly expressive",
    //         "designation": "Vulkà Bianco",
    //         "variety": "White Blend",
    //         "winery": "Nicosia",
    //         "taster_name": "Kerin O’Keefe",
    //         "taster_twitter": "@kerinokeefe"
    //     }
    // ]
    const [qtd, setQtd] = useState<any>(0)
    const [grapesQtd, setGrapesQtd] = useState<any>([{
  
      },
      {
      }])
    const [wineList, setWineList] = useState<any>([])
    const history = useHistory()

    async function loadWines() {
        const response = await api.get('/wines');
        // console.log(response)
        const { data } = response.data
        // console.log(data);
        setWineList(data)
    }

    async function handleDeleteWine(id: number) {
        const response = await api.delete(`/wines/${id}`);
        loadWines()
        loadQtdOfWines()
        loadGrapesQtd()
    }

    async function handleEditWine(id: number) {
        history.push(`/edit-wine/${id}`)
    }

    async function loadQtdOfWines(){
        try {
            const {data} = await api.get('/qtd-wines');
            setQtd(data.data[0]['count(*)']);
        } catch (error) {  
            alert('erro')
        }

    }

    async function loadGrapesQtd(){
        try {
            const {data} = await api.get('/qtd-per-grape');
            console.log(data.data[1])
            setGrapesQtd(data.data)
        } catch (error) {  
            console.log(error)
        }

    }

    useEffect(() => {
        loadWines() 
    }, [])

    useEffect(()=>{
        loadQtdOfWines()
    }, [])

    useEffect(()=>{
        loadGrapesQtd()
    }, [])



    if (!wineList) {
        return <p>Carregando...</p>
    }

    return (
        <div id="page-dev" className="container">
            <PageHeader
                title='Wines'
                description='Here you can find more information on wines'
                backTo='/'
            />
            <div className="agg-func">

            <h1>Quantity of wines: {qtd}</h1> 
            <h1>Quantity of wines per kind of grape: </h1>

            {grapesQtd.map((value: any) => {
                return <h2>{value['variety']}: {value['quantity']}</h2>           
                        })}
            </div>

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
                                    <span>Variety: {wine.variety}</span>
                                </div>
                            </header>

                            <p>{wine.description}</p>

                            <footer>
                                <p>
                                <strong>   Price: {wine.price}</strong>
                                    <br />
                                    <strong> Points: {wine.points}</strong>
                                    <br />
                                    <strong>Price with discount: {wine['price_descount']}</strong>
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