import React, { FormEvent, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'

import warningIcon from '../../assets/images/icons/warning.svg'

// import api from '../../server/api'

import './styles.css'
import { useHistory } from 'react-router-dom';

function WineForm() {

    const history = useHistory()
    const [wineName, setWineName] = useState('')
    const [description, setDescription] = useState('')
    const [country, setCountry] = useState('')
    const [designation, setDesignation] = useState('')
    const [points, setPoints] = useState('')
    const [price, setPrice] = useState('')
    const [province, setProvince] = useState('')
    const [region, setRegion] = useState('')
    const [region2, setRegion2] = useState('')
    const [variety, setVariety] = useState('')
    const [winery, setWinery] = useState('')
    const [tasterName, setTasterNamen] = useState('')

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);


    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function handleCreateStack() { }


    function setScheduleItemValue(position: number, field: string, value: string) {
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem;
        })

        setScheduleItems(updateScheduleItems);

    }


    return (
        <div id="page-dev-form" className="container">
            <PageHeader
                title='How nice you want to add a wine'
                description='First step is to fill out this form.'
                backTo='/'
            />

            <main>
                <fieldset>
                    <legend>Wine wine dice</legend>

                    <Input
                        label='Wine Name'
                        name='name'
                        type='text'
                        value={wineName}
                        onChange={(e) => { setWineName(e.target.value) }}

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
                        onChange={(e) => { setPoints(e.target.value) }}
                    />

                    <Input
                        label='Price'
                        name='price'
                        type='text'
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }}
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
                        value={region}
                        onChange={(e) => { setRegion(e.target.value) }}
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
                        onChange={(e) => { setTasterNamen(e.target.value) }}
                    />

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante" />
                        Important! <br />
                        Fill in all data
                    </p>
                    <button type='submit' onClick={handleCreateStack}>
                        Save Wine
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default WineForm;