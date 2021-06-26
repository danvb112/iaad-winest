import React, { FormEvent, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'

import warningIcon from '../../assets/images/icons/warning.svg'

// import api from '../../server/api'

import './styles.css'
import { useHistory } from 'react-router-dom';

interface EditWineProps {
    id: number;
    title: string,
    points: number,
    price: number,
    country: string,
    province: string,
    region1: string,
    region2: string,
    description: string,
    designation: string,
    variety: string,
    winery: string,
    taster_name: string,
    taster_twitter: string,
}

const EditWine: React.FC<EditWineProps> = (pros) => {

    const history = useHistory()
    const [title, setTitle] = useState(pros.title)
    const [description, setDescription] = useState(pros.description)
    const [country, setCountry] = useState(pros.country)
    const [designation, setDesignation] = useState(pros.designation)
    const [points, setPoints] = useState(pros.points)
    const [price, setPrice] = useState(pros.price)
    const [province, setProvince] = useState(pros.province)
    const [region1, setRegion1] = useState(pros.region1)
    const [region2, setRegion2] = useState(pros.region2)
    const [variety, setVariety] = useState(pros.variety)
    const [winery, setWinery] = useState(pros.winery)
    const [tasterName, setTasterName] = useState(pros.taster_name)
    const [tasterTwitter, setTasterTwitter] = useState(pros.taster_name)

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
                    <button type='submit' onClick={handleCreateStack}>
                        Save Wine
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default EditWine;