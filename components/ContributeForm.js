import React, { useState } from 'react';
import { Button, Form, Input, Message, } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

export default function ContributeForm({address}){
    const [errMess, setErr] = useState('');
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');
    const onSubmit = async (e) => {
        e.preventDefault();
        const campaign = await new Campaign(address);
        setErr('');
        setLoading(true);
        try{
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(value, 'ether')
            });
            Router.replaceRoute(`/campaigns/${address}`);
        }
        catch(err){
            setErr(err.message);
        }
        setLoading(false);
        setValue('');

    }

    return(
        <Form onSubmit={onSubmit} error={!!errMess}>
            <Form.Field>
                <label>Amount to Contribute</label>
                <Input 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    label="ether"
                    labelPosition="right"
                />
            </Form.Field>
            <Message error header="Oops!" content={errMess} />
            <Button primary loading={loading}>Contribute!</Button>
        </Form>
    );
}