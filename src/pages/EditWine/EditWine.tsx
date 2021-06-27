import React, { FormEvent, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'

import warningIcon from '../../assets/images/icons/warning.svg'

// import api from '../../server/api'

import './styles.css'
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import api from '../../server/api';

interface EditWineParams {
    id: string;
}

function EditWine() {

    const params = useParams<EditWineParams>()
    const history = useHistory()

    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [country, setCountry] = useState('')
    const [designation, setDesignation] = useState('')
    const [points, setPoints] = useState(0)
    const [price, setPrice] = useState(0)
    const [province, setProvince] = useState('')
    const [region1, setRegion1] = useState('')
    const [region2, setRegion2] = useState('')
    const [variety, setVariety] = useState('')
    const [winery, setWinery] = useState('')
    const [tasterName, setTasterName] = useState('')
    const [tasterTwitter, setTasterTwitter] = useState('')


    const data = [
        {
            "id": 1,
            "title": "Nicosia 2013 Vulkà Bianco",
            "points": 87,
            "price": 43,
            "country": "Italy",
            "province": "Sicily & Sardinia",
            "region1": "Etna",
            "region2": "null",
            "description": "Aromas include tropical fruit, broom, brimstone and dried herb. The palate isn't overly expressive",
            "designation": "Vulkà Bianco",
            "variety": "White Blend",
            "winery": "Nicosia",
            "taster_name": "Kerin O’Keefe",
            "taster_twitter": "@kerinokeefe"
        }
    ]


    function getWine() {
        console.log(params)
        setId(params.id)
        setTitle(data[0]['title'])
        setPoints(data[0]['points'])
        setPrice(data[0]['price'])
        setDescription(data[0]['description'])
        setCountry(data[0]['country'])
        setProvince(data[0]['province'])
        setRegion1(data[0]['region1'])
        setRegion2(data[0]['region2'])
        setDesignation(data[0]['designation'])
        setVariety(data[0]['variety'])
        setWinery(data[0]['winery'])
        setTasterName(data[0]['taster_name'])
        setTasterTwitter(data[0]['taster_twitter'])
    }

    async function handleEditStack(id: string) {
        const response = await api.put(`/wines/:${id}`, {
            id,
            title,
            description,
            country,
            designation,
            points,
            price,
            province,
            region1,
            region2,
            variety,
            winery,
            "taster_name": tasterName,
            "taster_twitter": tasterTwitter
        })
        if (response.status == 200) {
            history.push('/list-wine')
        } else {
            alert("Error!");
            console.error();
        }

    }

    useEffect(() => {
        getWine()
    }, [params])

    return (
        <div id="page-dev-form" className="container">
            <PageHeader
                title='How nice you want to Edit a wine'
                description='First and unic step is to fill out this form.'
                backTo='/'
            />
            <main>
                <fieldset>
                    <legend>Wine wine dice</legend>

                    <Input
                        label='Wine Name'
                        name='name'
                        type='text'
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />

                    <TextArea
                        label='Description'
                        name='description'
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />

                    <Input
                        label='Country'
                        name='country'
                        type='text'
                        value={country}
                        onChange={(e) => { setCountry(e.target.value) }}
                    />

                    <Input
                        label='Designation'
                        name='designation'
                        type='text'
                        value={designation}
                        onChange={(e) => { setDesignation(e.target.value) }}
                    />

                    <Input
                        label='Points'
                        name='points'
                        type='text'
                        value={points}
                        onChange={(e) => { setPoints(parseInt(e.target.value)) }}
                    />

                    <Input
                        label='Price'
                        name='price'
                        type='text'
                        value={price}
                        onChange={(e) => { setPrice(parseInt(e.target.value)) }}
                    />

                    <Input
                        label='Province'
                        name='province'
                        type='text'
                        value={province}
                        onChange={(e) => { setProvince(e.target.value) }}
                    />

                    <Input
                        label='Region'
                        name='region'
                        type='text'
                        value={region1}
                        onChange={(e) => { setRegion1(e.target.value) }}
                    />

                    <Input
                        label='Region 2'
                        name='region2'
                        type='text'
                        value={region2}
                        onChange={(e) => { setRegion2(e.target.value) }}
                    />

                    <Input
                        label='Variety'
                        name='variety'
                        type='text'
                        value={variety}
                        onChange={(e) => { setVariety(e.target.value) }}
                    />

                    <Input
                        label='Winery'
                        name='winery'
                        type='text'
                        value={winery}
                        onChange={(e) => { setWinery(e.target.value) }}
                    />

                    <Input
                        label='Taster Name'
                        name='taster_name'
                        type='text'
                        value={tasterName}
                        onChange={(e) => { setTasterName(e.target.value) }}
                    />

                    <Input
                        label='Taster Twitter'
                        name='taster_twitter'
                        type='text'
                        value={tasterTwitter}
                        onChange={(e) => { setTasterTwitter(e.target.value) }}
                    />

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante" />
                        Important! <br />
                        Fill in all data
                    </p>
                    <button type='submit' onClick={() => handleEditStack(params.id)}>
                        Save Wine
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default EditWine;