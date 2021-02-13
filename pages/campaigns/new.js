import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Link, Router } from '../../routes';

export default function New(){
    const [minCont, setMinCont] = useState('');
    const [errMess, setErr] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErr('');
        try{
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createCampaign(minCont)
            .send({
                from: accounts[0]
            });
            Router.pushRoute('/');
        }
        catch(err){
            setErr(err.message);
        }
        setLoading(false);
    }

    return(
        <Layout>
        <h1>Create a Camapign</h1>

        <Form onSubmit={onSubmit} error={!!errMess}>
            <Form.Field>
                <label>Minimum Contribution</label>
                <Input label="wei" labelPosition="right"
                    value={minCont}
                    onChange={e => setMinCont(e.target.value)}
                />
            </Form.Field>

            <Message error header="Oops!" content={errMess} />
            <Button loading={loading} primary >Create!</Button>
        </Form>
        </Layout>
    );
}